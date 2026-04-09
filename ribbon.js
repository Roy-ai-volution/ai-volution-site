/* === Ribbon Animations (Visueel origineel, 30fps + visibility pause) === */

/**
 * initRibbon — Bundled Mesh Style
 * Visueel identiek aan origineel, maar met 30fps cap en off-screen pause.
 */
function initRibbon(canvasId, bundles) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, time = 0;
  let isVisible = true;
  let lastFrame = 0;
  const FPS_INTERVAL = 1000 / 45;

  const visObs = new IntersectionObserver(entries => {
    isVisible = entries[0].isIntersecting;
  }, { threshold: 0 });
  visObs.observe(canvas);
  document.addEventListener('visibilitychange', () => { isVisible = !document.hidden; });

  function resize() {
    const wrapper = canvas.parentElement;
    w = canvas.width = wrapper.offsetWidth;
    h = canvas.height = wrapper.offsetHeight;
  }

  function drawBundle(b, t) {
    const baseY = h * b.baseY;
    for (let i = 0; i < b.lines; i++) {
      const lineOffset = (i - b.lines / 2) * (b.spread / b.lines);
      const twistPhase = i * 0.3;
      const distFromCenter = Math.abs(i - b.lines / 2) / (b.lines / 2);
      const lineOpacity = b.opacity * (1 - distFromCenter * 0.6);
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(' + b.r + ',' + b.g + ',' + b.b + ',' + lineOpacity + ')';
      ctx.lineWidth = b.lineWidth;
      for (let x = -50; x <= w + 50; x += 3) {
        const wave1 = Math.sin(x * b.freq + t * b.speed) * b.amp;
        const wave2 = Math.sin(x * b.freq * 1.7 + t * b.speed * 0.6 + twistPhase) * (b.amp * 0.35);
        const wave3 = Math.cos(x * b.freq * 0.6 + t * b.speed * 1.2) * (b.amp * 0.2);
        const twist = Math.sin(x * (b.twist || 0.005) + t * b.speed * 0.4) * lineOffset * 2.5;
        const y = baseY + wave1 + wave2 + wave3 + lineOffset + twist;
        if (x === -50) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }

  function animate(now) {
    requestAnimationFrame(animate);
    if (!isVisible) return;
    if (now - lastFrame < FPS_INTERVAL) return;
    lastFrame = now;
    ctx.clearRect(0, 0, w, h);
    time += 0.014;
    bundles.forEach(function(b) { drawBundle(b, time); });
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(animate);
}

/**
 * initRibbon2 — Aurora Flow Animation
 * Originele visuele kwaliteit, 30fps cap + visibility pause.
 */
function initRibbon2(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, time = 0;
  let isVisible = true;
  let lastFrame = 0;
  const FPS_INTERVAL = 1000 / 45;

  const visObs = new IntersectionObserver(entries => {
    isVisible = entries[0].isIntersecting;
  }, { threshold: 0 });
  visObs.observe(canvas);
  document.addEventListener('visibilitychange', () => { isVisible = !document.hidden; });

  function noise(x, y) {
    const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return n - Math.floor(n);
  }

  function smoothNoise(x, y) {
    const ix = Math.floor(x), iy = Math.floor(y);
    const fx = x - ix, fy = y - iy;
    const sx = fx * fx * (3 - 2 * fx);
    const sy = fy * fy * (3 - 2 * fy);
    return noise(ix, iy) * (1 - sx) * (1 - sy) +
           noise(ix + 1, iy) * sx * (1 - sy) +
           noise(ix, iy + 1) * (1 - sx) * sy +
           noise(ix + 1, iy + 1) * sx * sy;
  }

  function fbm(x, y) {
    let val = 0, amp = 0.5;
    for (let i = 0; i < 3; i++) {
      val += smoothNoise(x, y) * amp;
      x *= 2.0; y *= 2.0; amp *= 0.5;
    }
    return val;
  }

  const ribbons = [
    { baseY: 0.20, speed: 0.08, width: 40, r: 51, g: 166, b: 255, opacity: 0.04, seed: 0 },
    { baseY: 0.40, speed: 0.06, width: 55, r: 139, g: 92, b: 246, opacity: 0.045, seed: 100 },
    { baseY: 0.60, speed: 0.07, width: 35, r: 236, g: 72, b: 153, opacity: 0.03, seed: 200 },
    { baseY: 0.75, speed: 0.05, width: 45, r: 51, g: 166, b: 255, opacity: 0.04, seed: 300 },
    { baseY: 0.35, speed: 0.04, width: 50, r: 139, g: 92, b: 246, opacity: 0.035, seed: 400 },
  ];

  function resize() {
    const wrapper = canvas.parentElement;
    w = canvas.width = wrapper.offsetWidth;
    h = canvas.height = wrapper.offsetHeight;
  }

  function getY(ribbon, x, t) {
    const nx = x / w * 3;
    const nt = t * ribbon.speed;
    const base = h * ribbon.baseY;
    const drift = (fbm(nx + nt + ribbon.seed, nt * 0.3) - 0.5) * 120;
    const wave = Math.sin(x / w * Math.PI * 1.2 + t * ribbon.speed * 0.5) * 30;
    return base + drift + wave;
  }

  function drawRibbon(ribbon, t) {
    const segments = Math.ceil(w / 4);
    const points = [];
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * (w + 100) - 50;
      points.push({ x: x, y: getY(ribbon, x, t) });
    }
    const layers = 6;
    for (let layer = 0; layer < layers; layer++) {
      const layerRatio = layer / (layers - 1);
      const offset = (layerRatio - 0.5) * ribbon.width;
      const distFromCenter = Math.abs(layerRatio - 0.5) * 2;
      const layerOpacity = ribbon.opacity * (1 - distFromCenter * distFromCenter);
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(' + ribbon.r + ',' + ribbon.g + ',' + ribbon.b + ',' + layerOpacity + ')';
      ctx.lineWidth = ribbon.width / layers * 1.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      if (points.length < 2) continue;
      ctx.moveTo(points[0].x, points[0].y + offset);
      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y + offset, xc, yc + offset);
      }
      const last = points[points.length - 1];
      ctx.lineTo(last.x, last.y + offset);
      ctx.stroke();
    }
  }

  function animate(now) {
    requestAnimationFrame(animate);
    if (!isVisible) return;
    if (now - lastFrame < FPS_INTERVAL) return;
    lastFrame = now;
    ctx.clearRect(0, 0, w, h);
    time += 0.006;
    ribbons.forEach(function(r) { drawRibbon(r, time); });
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(animate);
}
