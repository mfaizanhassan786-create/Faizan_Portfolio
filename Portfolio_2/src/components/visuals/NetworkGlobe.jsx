import { useEffect, useRef } from 'react';

function createNodes(count) {
  const nodes = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let index = 0; index < count; index += 1) {
    const y = 1 - (index / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const angle = goldenAngle * index;
    nodes.push({
      x: Math.cos(angle) * radius,
      y,
      z: Math.sin(angle) * radius,
      phase: (index * 2.399) % (Math.PI * 2),
      size: index % 13 === 0 ? 2.1 : 1.15,
    });
  }

  return nodes;
}

export default function NetworkGlobe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: true });
    if (!canvas || !context) return undefined;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let nodes = createNodes(112);
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0, active: false };
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let frame = 0;
    let animationId = 0;
    let lastFrame = 0;
    let visible = !document.hidden;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const nodeCount = width < 320 ? 52 : width < 480 ? 72 : width < 760 ? 92 : 112;
      if (nodes.length !== nodeCount) nodes = createNodes(nodeCount);
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      draw();
    };

    const draw = () => {
      if (!width || !height) return;

      context.clearRect(0, 0, width, height);
      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const sphereRadius = Math.min(width * 0.39, height * 0.41, 190);
      pointer.x += ((pointer.active ? pointer.targetX : centerX) - pointer.x) * 0.085;
      pointer.y += ((pointer.active ? pointer.targetY : centerY) - pointer.y) * 0.085;
      const pointerX = pointer.active ? (pointer.x - centerX) / sphereRadius : 0;
      const pointerY = pointer.active ? (pointer.y - centerY) / sphereRadius : 0;
      const rotationY = frame * 0.00024 + pointerX * 0.16;
      const rotationX = Math.sin(frame * 0.00055) * 0.12 - pointerY * 0.14;
      const cosineY = Math.cos(rotationY);
      const sineY = Math.sin(rotationY);
      const cosineX = Math.cos(rotationX);
      const sineX = Math.sin(rotationX);
      const breathe = 1 + Math.sin(frame * 0.0014) * 0.018;
      const focalLength = sphereRadius * 3.2;
      const projected = nodes.map((node) => {
        const turnedX = node.x * cosineY - node.z * sineY;
        const turnedZ = node.x * sineY + node.z * cosineY;
        const turnedY = node.y * cosineX - turnedZ * sineX;
        const depth = node.y * sineX + turnedZ * cosineX;
        const perspective = focalLength / (focalLength - depth * sphereRadius * breathe);
        let x = centerX + turnedX * sphereRadius * breathe * perspective;
        let y = centerY + turnedY * sphereRadius * breathe * perspective;
        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = pointer.active ? Math.max(0, 1 - distance / (sphereRadius * 0.48)) : 0;

        if (influence > 0) {
          x += (centerX - x) * influence * 0.055;
          y += (centerY - y) * influence * 0.055;
        }

        return { x, y, depth, influence, size: node.size * perspective };
      });

      const glow = context.createRadialGradient(
        centerX,
        centerY,
        sphereRadius * 0.05,
        centerX,
        centerY,
        sphereRadius * 1.1,
      );
      glow.addColorStop(0, 'rgba(164, 131, 245, 0.12)');
      glow.addColorStop(0.65, 'rgba(164, 131, 245, 0.045)');
      glow.addColorStop(1, 'rgba(164, 131, 245, 0)');
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      const linkDistance = sphereRadius * 0.27;
      const linkDistanceSquared = linkDistance * linkDistance;
      let linkIndex = 0;

      for (let from = 0; from < projected.length; from += 1) {
        const first = projected[from];

        for (let to = from + 1; to < projected.length; to += 1) {
          const second = projected[to];
          const dx = first.x - second.x;
          const dy = first.y - second.y;
          if (dx * dx + dy * dy > linkDistanceSquared) continue;

          const depthOpacity = Math.max(0.12, (first.depth + second.depth + 2) / 4);
          const pointerBoost = Math.max(first.influence, second.influence) * 0.65;
          const highlight = linkIndex % 29 === 0;
          context.beginPath();
          context.moveTo(first.x, first.y);
          context.lineTo(second.x, second.y);
          context.strokeStyle = highlight
            ? `rgba(217, 175, 61, ${Math.min(0.7, depthOpacity * 0.34 + pointerBoost)})`
            : `rgba(108, 59, 219, ${Math.min(0.5, 0.08 + depthOpacity * 0.3 + pointerBoost)})`;
          context.lineWidth = highlight ? 0.8 : 0.58;
          context.stroke();
          linkIndex += 1;
        }
      }

      projected.forEach((point, index) => {
        const node = nodes[index];
        const depthOpacity = Math.max(0.26, (point.depth + 1.2) / 2.2);
        const pulse = 0.5 + 0.5 * Math.sin(frame * 0.002 + node.phase);
        const gold = index % 29 === 0;
        const radius = point.size * (1 + point.influence * 0.8 + (gold ? pulse * 0.3 : 0));

        context.beginPath();
        context.arc(point.x, point.y, radius * (gold ? 3.5 : 2.8), 0, Math.PI * 2);
        context.fillStyle = gold
          ? `rgba(232, 189, 83, ${depthOpacity * 0.12})`
          : `rgba(164, 131, 245, ${depthOpacity * 0.11})`;
        context.fill();

        context.beginPath();
        context.arc(point.x, point.y, radius, 0, Math.PI * 2);
        context.fillStyle = gold
          ? `rgba(217, 175, 61, ${depthOpacity * (0.62 + pulse * 0.35)})`
          : `rgba(142, 103, 232, ${depthOpacity * (0.56 + point.influence * 0.42)})`;
        context.fill();
      });

      for (let index = 0; index < 19; index += 1) {
        const angle = index * 2.4 + frame * (index % 2 ? 0.00012 : -0.00009);
        const orbit = sphereRadius * (1.13 + (index % 4) * 0.08);
        const x = centerX + Math.cos(angle) * orbit;
        const y = centerY + Math.sin(angle * 1.17) * orbit * 0.72;
        const alpha = 0.22 + (0.5 + 0.5 * Math.sin(frame * 0.002 + index)) * 0.34;
        context.beginPath();
        context.arc(x, y, index % 5 === 0 ? 1.35 : 0.8, 0, Math.PI * 2);
        context.fillStyle = `rgba(145, 108, 231, ${alpha})`;
        context.fill();
      }
    };

    const animate = (timestamp) => {
      if (!visible || motionPreference.matches) return;
      if (timestamp - lastFrame >= 1000 / 60) {
        frame = timestamp;
        lastFrame = timestamp;
        draw();
      }
      animationId = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      window.cancelAnimationFrame(animationId);
      if (visible && !motionPreference.matches) {
        animationId = window.requestAnimationFrame(animate);
      } else {
        draw();
      }
    };

    const onPointerMove = (event) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.targetX = event.clientX - bounds.left;
      pointer.targetY = event.clientY - bounds.top;
      pointer.active = true;
      if (motionPreference.matches) draw();
    };

    const onPointerLeave = () => {
      pointer.active = false;
      if (motionPreference.matches) draw();
    };

    const onVisibilityChange = () => {
      visible = !document.hidden;
      startAnimation();
    };

    const onMotionPreferenceChange = () => startAnimation();
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(resize);
    observer?.observe(canvas);
    window.addEventListener('resize', resize);
    canvas.addEventListener('pointermove', onPointerMove, { passive: true });
    canvas.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', onVisibilityChange);
    motionPreference.addEventListener('change', onMotionPreferenceChange);

    resize();
    startAnimation();

    return () => {
      window.cancelAnimationFrame(animationId);
      observer?.disconnect();
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      motionPreference.removeEventListener('change', onMotionPreferenceChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full touch-pan-y"
      role="img"
      aria-label="Interactive three-dimensional neural network sphere"
    >
      Interactive neural network visualization.
    </canvas>
  );
}
