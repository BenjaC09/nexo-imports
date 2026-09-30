<template>
  <div
    class="device-showcase"
    role="img"
    aria-label="Fotografía real de smartphones de distintas marcas (Xiaomi, Samsung, Apple, POCO, Motorola), ilustrando la oferta multimarca de Nexo Imports"
  >
    <img
      class="showcase-photo"
      src="/images/brand/hero-multibrand.jpg"
      alt=""
      aria-hidden="true"
      loading="eager"
      width="1420"
      height="1108"
    >
    <span class="showcase-topline">APPLE · SAMSUNG · XIAOMI · Y MÁS</span>
    <div class="showcase-bottom">
      <span>
        Tecnología de las
        <br>
        principales marcas.
      </span>
      <span class="showcase-badge">
        MAYORISTA DE TECNOLOGÍA
        <span aria-hidden="true">↗</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.device-showcase {
  position: relative;
  height: 480px;
  border-radius: 16px;
  overflow: hidden;
  isolation: isolate;
  background: #edf0f6;
}
.showcase-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: settle 1s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}
.device-showcase::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(0deg, #17252399 0%, #1725230d 32%, transparent 46%),
    linear-gradient(180deg, #17252375 0%, transparent 22%);
  pointer-events: none;
}
.showcase-topline {
  position: absolute;
  z-index: 1;
  top: 30px;
  left: 30px;
  font-size: 9px;
  letter-spacing: 0.18em;
  color: #fff;
}
.showcase-bottom {
  position: absolute;
  z-index: 1;
  bottom: 28px;
  left: 28px;
  right: 28px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
  color: #f3f5f1;
  font-size: 14px;
  line-height: 1.6;
}
.showcase-badge {
  font-size: 8px;
  letter-spacing: 0.1em;
  color: #fff;
}
.showcase-badge span {
  margin-left: 12px;
  font-size: 22px;
}
@keyframes settle {
  from {
    opacity: 0;
    transform: scale(1.04);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@media (max-width: 1100px) {
  .device-showcase {
    height: 430px;
  }
}
@media (max-width: 600px) {
  .device-showcase {
    height: 300px;
  }
  .showcase-topline {
    font-size: 8px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .showcase-photo {
    animation: none;
  }
}
</style>
