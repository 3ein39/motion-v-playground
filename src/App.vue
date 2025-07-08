<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { motion, useScroll } from 'motion-v'

const { scrollYProgress } = useScroll()
</script>

<template>
  <div class="app-container">
    <!-- Scroll Progress Bar -->
    <motion.div :style="{ scaleX: scrollYProgress }" class="scroll-progress" />

    <header>
      <motion.nav :while-hover="{ scale: 1.02 }" class="navigation">
        <RouterLink to="/">Scroll Animations</RouterLink>
        <RouterLink to="/basic">Basic Animations</RouterLink>
      </motion.nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform-origin: 0%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
}

.app-container {
  font-family: 'Inter', sans-serif;
  color: var(--color-text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
}

header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.navigation {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.navigation a {
  display: inline-block;
  padding: 1rem 2rem;
  border: 2px solid transparent;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.navigation a:hover {
  color: white !important;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.navigation a.router-link-exact-active {
  color: white !important;
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  header {
    padding: 1.5rem 1rem;
  }

  .navigation {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .navigation a {
    width: 250px;
    text-align: center;
  }
}
</style>
