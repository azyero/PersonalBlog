<template>
  <figure class="desk-card surface relative min-h-[340px] overflow-hidden rounded-[2rem] sm:min-h-[430px]">
    <!-- 首页主视觉：同一张书桌插画会随明暗主题变化。 -->
    <svg class="desk-illustration" viewBox="0 0 860 560" preserveAspectRatio="xMidYMid slice" role="img" aria-labelledby="desk-title desk-desc">
      <title id="desk-title">植物书房书桌插画</title>
      <desc id="desk-desc">浅色模式是白天的植物书桌，深色模式是同一个空间的夜晚书桌，台灯亮起但没有人物。</desc>

      <!-- 渐变与阴影定义，供后续图层复用。 -->
      <defs>
        <radialGradient id="paperGlow" cx="45%" cy="24%" r="72%">
          <stop offset="0%" stop-color="var(--glow-a)" />
          <stop offset="58%" stop-color="var(--glow-b)" />
          <stop offset="100%" stop-color="var(--glow-c)" />
        </radialGradient>
        <linearGradient id="wallWash" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="var(--wall-a)" />
          <stop offset="100%" stop-color="var(--wall-b)" />
        </linearGradient>
        <linearGradient id="deskWood" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="var(--wood-a)" />
          <stop offset="54%" stop-color="var(--wood-b)" />
          <stop offset="100%" stop-color="var(--wood-c)" />
        </linearGradient>
        <filter id="softBlur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <filter id="paperShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="12" flood-color="var(--shadow)" flood-opacity="0.28" />
        </filter>
      </defs>

      <!-- 房间背景、环境光与纸张纹理。 -->
      <rect width="860" height="560" rx="34" fill="url(#wallWash)" />
      <ellipse class="day-light opacity-100 dark:opacity-75" cx="314" cy="165" rx="270" ry="190" fill="url(#paperGlow)" />
      <ellipse class="lamp-light opacity-0 dark:opacity-55" cx="542" cy="315" rx="210" ry="160" fill="#d98a3d" filter="url(#softBlur)" />

      <g class="paper-grain" opacity="0.23">
        <circle v-for="dot in grainDots" :key="dot.id" :cx="dot.x" :cy="dot.y" :r="dot.r" fill="var(--grain)" />
      </g>

      <!-- 窗户、窗帘与墙面装饰。 -->
      <g class="window">
        <path d="M173 72h238v230H173z" fill="var(--window-bg)" stroke="var(--frame)" stroke-width="7" />
        <path d="M292 75v224M176 186h232" stroke="var(--frame)" stroke-width="7" />
        <path class="day-only opacity-30 dark:opacity-0" d="M197 166c38-48 86-64 143-36 24 12 48 11 63-4v176H197z" fill="#d6cf82" />
        <g class="night-only opacity-0 dark:opacity-100">
          <circle cx="219" cy="117" r="2.2" fill="#d8a151" />
          <circle cx="327" cy="145" r="1.8" fill="#d8a151" />
          <circle cx="374" cy="111" r="2" fill="#d8a151" />
          <circle cx="256" cy="222" r="1.5" fill="#d8a151" />
        </g>
      </g>

      <g class="curtains" stroke="var(--curtain)" stroke-width="6" opacity="0.75">
        <path d="M130 55v270M144 55v270M158 55v270" />
        <path d="M430 55v270M444 55v270M458 55v270" />
      </g>

      <g class="shelf">
        <path d="M578 135h192" stroke="var(--wood-c)" stroke-width="9" stroke-linecap="round" />
        <path d="M518 149h87" stroke="var(--wood-c)" stroke-width="4" opacity="0.55" />
        <rect x="679" y="82" width="15" height="65" rx="2" fill="#8b5a30" />
        <rect x="699" y="68" width="16" height="79" rx="2" fill="#a46d36" />
        <rect x="721" y="59" width="17" height="88" rx="2" fill="#657443" />
        <rect x="744" y="78" width="15" height="69" rx="2" fill="#8d6438" />
        <rect x="765" y="64" width="16" height="83" rx="2" fill="#765030" />
      </g>

      <g class="wall-art">
        <rect x="603" y="182" width="88" height="116" fill="var(--paper)" stroke="var(--frame)" stroke-width="6" />
        <path d="M647 271c-7-39-4-58 13-78" stroke="#6f7a42" stroke-width="2" fill="none" opacity="0.55" />
        <ellipse cx="657" cy="220" rx="12" ry="6" fill="#6f7a42" opacity="0.2" transform="rotate(36 657 220)" />
        <rect x="520" y="184" width="2.4" height="132" rx="2" fill="#6f7a42" opacity="0.75" />
      </g>

      <!-- 桌面主体与两侧植物。 -->
      <g class="desk" filter="url(#paperShadow)">
        <path d="M72 380c120-21 283-22 728-39 26-1 44 17 42 41l-14 95c-2 18-17 31-35 31H88c-25 0-44-22-39-47l13-52c4-16 5-27 10-29z" fill="url(#deskWood)" />
        <path d="M73 413c226-25 474-39 741-45M66 448c238-24 496-38 752-48M61 482c236-22 485-32 740-42" stroke="#7b431f" stroke-width="8" opacity="0.35" stroke-linecap="round" />
      </g>

      <g class="left-plant">
        <rect x="92" y="332" width="50" height="54" rx="4" fill="#b5824d" stroke="var(--ink-line)" stroke-width="2" />
        <path d="M119 333V223" stroke="#657443" stroke-width="4" stroke-linecap="round" />
        <ellipse cx="101" cy="270" rx="26" ry="11" fill="#6f7a42" transform="rotate(-43 101 270)" />
        <ellipse cx="139" cy="248" rx="24" ry="10" fill="#78874b" transform="rotate(38 139 248)" />
        <ellipse cx="105" cy="226" rx="21" ry="9" fill="#63743f" transform="rotate(-32 105 226)" />
      </g>

      <g class="right-plant">
        <rect x="735" y="329" width="48" height="52" rx="4" fill="#b5824d" stroke="var(--ink-line)" stroke-width="2" />
        <path d="M760 329V237" stroke="#657443" stroke-width="3.5" stroke-linecap="round" />
        <path d="M760 273c-28-17-42-42-36-69 28 12 43 34 36 69zM762 292c28-16 43-40 37-69-28 12-43 35-37 69z" fill="#6f7a42" opacity="0.8" />
      </g>

      <!-- 桌面物件。 -->
      <g class="book-stack">
        <rect x="185" y="330" width="168" height="24" rx="5" fill="#a06b34" transform="rotate(2 185 330)" />
        <rect x="183" y="354" width="176" height="24" rx="5" fill="#714728" transform="rotate(-1 183 354)" />
        <rect x="185" y="379" width="160" height="24" rx="5" fill="#657443" transform="rotate(-4 185 379)" />
      </g>

      <g class="open-book" filter="url(#paperShadow)">
        <path d="M398 354c58-18 116-10 174 4l-20 92c-58-13-107-19-168-3z" fill="#e9dac0" />
        <path d="M572 358c58-12 112-7 164 8l-17 91c-48-15-101-21-167-7z" fill="#e1cfaf" />
        <path d="M572 359l-20 91" stroke="#b39c7e" stroke-width="5" opacity="0.55" />
        <path d="M444 383h70M438 405h92M617 391h72M611 414h70" stroke="#9a8469" stroke-width="2" opacity="0.35" />
        <path d="M474 428c-5-32 3-52 23-66M645 429c8-33 22-55 44-72" stroke="#6f7a42" stroke-width="2" opacity="0.55" />
      </g>

      <g class="cup">
        <path d="M612 373h52v52c0 17-13 31-30 31s-30-14-30-31v-44c0-4 3-8 8-8z" fill="var(--cup)" stroke="var(--ink-line)" stroke-width="3" />
        <path d="M661 396c22-3 34 6 32 20-2 16-17 23-32 18" fill="none" stroke="var(--ink-line)" stroke-width="4" />
      </g>

      <!-- 深色模式下额外叠加的夜色与灯光效果。 -->
      <rect class="night-shade opacity-0 dark:opacity-10" width="860" height="560" rx="34" fill="#020302" />
      <ellipse class="lamp-spot opacity-0 dark:opacity-30" cx="610" cy="342" rx="178" ry="124" fill="#d98a3d" filter="url(#softBlur)" />

      <g class="lamp">
        <path d="M541 360l48-155" stroke="var(--lamp-metal)" stroke-width="5" stroke-linecap="round" />
        <path class="lamp-glow" d="M590 206c22-36 63-38 78-4l9 22c-33 21-71 20-100-1z" fill="var(--lamp-shade)" stroke="var(--ink-line)" stroke-width="3" />
        <path d="M539 360h99" stroke="var(--lamp-metal)" stroke-width="8" stroke-linecap="round" />
      </g>
    </svg>
  </figure>
</template>

<script setup lang="ts">
// 少量颗粒点让插画背景看起来更有纸张质感。
const grainDots = [
  { id: 1, x: 72, y: 80, r: 1.6 },
  { id: 2, x: 160, y: 126, r: 1.2 },
  { id: 3, x: 250, y: 64, r: 1.4 },
  { id: 4, x: 342, y: 120, r: 1.1 },
  { id: 5, x: 492, y: 86, r: 1.5 },
  { id: 6, x: 620, y: 118, r: 1.2 },
  { id: 7, x: 758, y: 90, r: 1.4 },
  { id: 8, x: 812, y: 212, r: 1.1 },
  { id: 9, x: 124, y: 300, r: 1.2 },
  { id: 10, x: 360, y: 285, r: 1.5 },
  { id: 11, x: 514, y: 262, r: 1.1 },
  { id: 12, x: 704, y: 304, r: 1.3 },
];
</script>

<style>
/* 浅色主题下的插画底色。 */
.desk-card {
  background: #f3e7d1;
}

/* 插画主体的默认调色板与尺寸。 */
.desk-illustration {
  --wall-a: #f6ead4;
  --wall-b: #ead7b7;
  --glow-a: rgba(255, 252, 228, 0.95);
  --glow-b: rgba(243, 216, 157, 0.35);
  --glow-c: rgba(243, 216, 157, 0);
  --window-bg: #eed99e;
  --frame: rgba(126, 83, 42, 0.43);
  --curtain: rgba(151, 111, 69, 0.45);
  --wood-a: #b9854a;
  --wood-b: #9a5f31;
  --wood-c: #7d461f;
  --paper: #ead9bd;
  --cup: #d2b78f;
  --lamp-metal: #8b6034;
  --lamp-shade: #b9824b;
  --ink-line: rgba(72, 43, 20, 0.3);
  --grain: rgba(102, 72, 39, 0.4);
  --shadow: #4b3019;
  display: block;
  height: 100%;
  inset: 0;
  min-height: 340px;
  position: absolute;
  width: 100%;
}

/* 深色主题下重设书房的主要颜色。 */
.dark .desk-card {
  background: #020302 !important;
  border-color: rgba(197, 139, 77, 0.14);
}

.dark .desk-illustration {
  --wall-a: #3c3526;
  --wall-b: #111211;
  --glow-a: rgba(214, 132, 54, 0.06);
  --glow-b: rgba(214, 132, 54, 0.018);
  --glow-c: rgba(214, 132, 54, 0);
  --window-bg: #07101a;
  --frame: rgba(95, 59, 34, 0.78);
  --curtain: rgba(49, 31, 21, 0.86);
  --wood-a: #5b321c;
  --wood-b: #472615;
  --wood-c: #2f1a10;
  --paper: #9f8b6d;
  --cup: #75512f;
  --lamp-metal: #b56d34;
  --lamp-shade: #e09342;
  --ink-line: rgba(25, 16, 10, 0.5);
  --grain: rgba(221, 157, 85, 0.35);
  --shadow: #000000;
}

/* 夜晚模式下让台灯更有发光感。 */
.dark .desk-illustration .lamp-glow {
  filter: drop-shadow(0 0 18px rgba(224, 137, 60, 0.65)) drop-shadow(0 0 58px rgba(224, 137, 60, 0.38));
}

/* 小屏幕上略微收紧插画高度。 */
@media (max-width: 640px) {
  .desk-illustration {
    min-height: 300px;
  }
}
</style>
