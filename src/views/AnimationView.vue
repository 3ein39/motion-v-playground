<script setup lang="ts">
import ScrollAnimation from '../components/ScrollAnimation.vue'
</script>

<template>
  <main>
    <div class="hero">
      <h1>Scroll-Triggered Animations</h1>
      <p>Explore different scroll-triggered animation patterns using motion-v</p>
    </div>
    <ScrollAnimation />
  </main>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-hero);
  opacity: 0.3;
  z-index: 0;
}

.hero>* {
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 3rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  color: var(--color-text);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }
}
</style>
