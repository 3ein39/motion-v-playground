<script setup lang="ts">
import { motion } from 'motion-v'
</script>

<template>
  <main>
    <div class="hero">
      <h1>Basic Animations</h1>
      <p>Explore basic animation patterns with motion-v</p>
    </div>

    <div class="playground">
      <!-- Entry animations -->
      <section class="animation-section">
        <h2>Entry Animations</h2>
        <div class="cards-grid">
          <motion.div :initial="{ opacity: 0, scale: 0.8 }" :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.5 }" class="demo-card">
            <h3>Fade & Scale In</h3>
            <p>Appears with fade and scale</p>
          </motion.div>

          <motion.div :initial="{ opacity: 0, x: -100 }" :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.5, delay: 0.2 }" class="demo-card">
            <h3>Slide from Left</h3>
            <p>Slides in from the left</p>
          </motion.div>

          <motion.div :initial="{ opacity: 0, y: 50 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.4 }" class="demo-card">
            <h3>Slide from Bottom</h3>
            <p>Slides in from below</p>
          </motion.div>
        </div>
      </section>

      <!-- Hover animations -->
      <section class="animation-section">
        <h2>Hover Animations</h2>
        <div class="cards-grid">
          <motion.div :while-hover="{ scale: 1.05 }" :while-tap="{ scale: 0.95 }"
            :transition="{ type: 'spring', stiffness: 400 }" class="demo-card">
            <h3>Scale on Hover</h3>
            <p>Hover to scale up</p>
          </motion.div>

          <motion.div :while-hover="{ rotate: 5 }" :transition="{ type: 'spring', stiffness: 300 }" class="demo-card">
            <h3>Rotate on Hover</h3>
            <p>Hover to rotate</p>
          </motion.div>

          <motion.div :while-hover="{ y: -10 }" :transition="{ type: 'spring', stiffness: 400 }" class="demo-card">
            <h3>Lift on Hover</h3>
            <p>Hover to lift up</p>
          </motion.div>
        </div>
      </section>
      <!-- Animated buttons -->
      <section class="animation-section">
        <h2>Interactive Buttons</h2>
        <div class="buttons-grid">
          <motion.button :while-hover="{ scale: 1.1 }" :while-tap="{ scale: 0.9 }"
            :transition="{ type: 'spring', stiffness: 400 }" class="animated-button primary">
            Spring Button
          </motion.button>

          <motion.button :while-hover="{ rotate: [0, -5, 5, -5, 0] }" :transition="{ duration: 0.5 }"
            class="animated-button secondary">
            Wiggle Button
          </motion.button>

          <motion.button :while-hover="{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }"
            :transition="{ duration: 0.3 }" class="animated-button glow">
            Glow Button
          </motion.button>
        </div>
      </section>

      <!-- Loading animations -->
      <section class="animation-section">
        <h2>Loading Animations</h2>
        <div class="loaders-grid">
          <motion.div :animate="{ rotate: 360 }" :transition="{ duration: 2, repeat: Infinity, ease: 'linear' }"
            class="loader spinner">
            ⚡
          </motion.div>

          <motion.div :animate="{ scale: [1, 1.2, 1] }" :transition="{ duration: 1.5, repeat: Infinity }"
            class="loader pulse">
            ❤️
          </motion.div>

          <motion.div :animate="{ y: [0, -20, 0] }" :transition="{ duration: 1, repeat: Infinity }"
            class="loader bounce">
            🚀
          </motion.div>
        </div>
      </section>
    </div>
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

.playground {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.animation-section {
  margin-bottom: 4rem;
}

.animation-section h2 {
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 2rem;
  text-align: center;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.demo-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-card);
  opacity: 0.1;
  z-index: 0;
  transition: opacity 0.3s ease;
}

.demo-card:hover::before {
  opacity: 0.2;
}

.demo-card>* {
  position: relative;
  z-index: 1;
}

.demo-card h3 {
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.demo-card p {
  color: var(--color-text);
  margin: 0;
}

.buttons-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.animated-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.animated-button.primary {
  background: var(--gradient-primary);
  color: white;
}

.animated-button.secondary {
  background: var(--gradient-success);
  color: white;
}

.animated-button.glow {
  background: var(--gradient-warning);
  color: white;
}

.loaders-grid {
  display: flex;
  justify-content: center;
  gap: 3rem;
  align-items: center;
}

.loader {
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .playground {
    padding: 1rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }

  .buttons-grid {
    flex-direction: column;
    align-items: center;
  }

  .loaders-grid {
    gap: 2rem;
  }
}
</style>
