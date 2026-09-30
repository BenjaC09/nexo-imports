<script setup lang="ts">
const brands = [
  'Apple',
  'Samsung',
  'Xiaomi',
  'POCO',
  'Motorola',
  'JBL',
  'AirPods',
  'MacBook',
  'iPad',
  'Apple Watch'
]
</script>

<template>
  <div class="brand-marquee" aria-hidden="true">
    <div class="brand-marquee-track">
      <span v-for="set in 3" :key="set" class="brand-marquee-set">
        <template v-for="brand in brands" :key="`${set}-${brand}`">
          <span class="brand-marquee-item">{{ brand }}</span>
          <span class="brand-marquee-dot" />
        </template>
      </span>
    </div>
  </div>
</template>

<style scoped>
.brand-marquee {
  width: 100%;
  overflow: hidden;
  background: #000;
  height: 38px;
  display: flex;
  align-items: center;
}
.brand-marquee-track {
  display: flex;
  width: max-content;
  animation: brand-marquee-scroll 22s linear infinite;
  will-change: transform;
  backface-visibility: hidden;
}
.brand-marquee-set {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.brand-marquee-item {
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2em;
  white-space: nowrap;
  padding: 0 20px;
}
.brand-marquee-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #ffffff80;
  flex-shrink: 0;
}
@keyframes brand-marquee-scroll {
  from {
    transform: translate3d(-33.3334%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@media (max-width: 600px) {
  .brand-marquee {
    height: 32px;
  }
  .brand-marquee-item {
    font-size: 11px;
    letter-spacing: 0.14em;
    padding: 0 13px;
  }
  .brand-marquee-track {
    animation-duration: 15s;
  }
}
@media (prefers-reduced-motion: reduce) {
  .brand-marquee-track {
    animation: none;
  }
}
</style>
