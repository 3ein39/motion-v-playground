<template>
  <div class="scroll-container">
    <div class="spacer">
      <h2>Scroll down to see animations</h2>
    </div>

    <!-- Fade in from bottom -->
    <motion.div :initial="{ opacity: 0, y: 50 }" :while-in-view="{ opacity: 1, y: 0 }" :transition="{ duration: 0.8 }"
      class="animation-card fade-up">
      <h3>Fade in from bottom</h3>
      <p>This element fades in and slides up when it enters the viewport.</p>
    </motion.div>

    <!-- Fade in from left -->
    <motion.div :initial="{ opacity: 0, x: -100 }" :while-in-view="{ opacity: 1, x: 0 }"
      :transition="{ duration: 0.8, delay: 0.2 }" class="animation-card fade-left">
      <h3>Fade in from left</h3>
      <p>This element slides in from the left with a slight delay.</p>
    </motion.div>

    <!-- Fade in from right -->
    <motion.div :initial="{ opacity: 0, x: 100 }" :while-in-view="{ opacity: 1, x: 0 }"
      :transition="{ duration: 0.8, delay: 0.4 }" class="animation-card fade-right">
      <h3>Fade in from right</h3>
      <p>This element slides in from the right with more delay.</p>
    </motion.div>

    <!-- Scale animation -->
    <motion.div :initial="{ opacity: 0, scale: 0.8 }" :while-in-view="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 0.6, type: 'spring', stiffness: 100 }" class="animation-card scale-in">
      <h3>Scale animation</h3>
      <p>This element scales up with a spring animation.</p>
    </motion.div>

    <!-- Stagger animation for list items -->
    <div class="stagger-container">
      <h3>Staggered list animation</h3>
      <motion.ul :initial="{ opacity: 0 }" :while-in-view="{ opacity: 1 }" :transition="{ duration: 0.5 }">
        <motion.li v-for="(item, index) in listItems" :key="index" :initial="{ opacity: 0, x: -50 }"
          :while-in-view="{ opacity: 1, x: 0 }" :transition="{ duration: 0.5, delay: index * 0.1 }" class="list-item">
          {{ item }}
        </motion.li>
      </motion.ul>
    </div>

    <!-- Rotation animation -->
    <motion.div :initial="{ opacity: 0, rotate: -180 }" :while-in-view="{ opacity: 1, rotate: 0 }"
      :transition="{ duration: 1, type: 'spring' }" class="animation-card rotate-in">
      <h3>Rotation animation</h3>
      <p>This element rotates as it fades in.</p>
    </motion.div>

    <!-- Complex combined animation -->
    <motion.div :initial="{ opacity: 0, y: 100, scale: 0.5, rotate: 45 }"
      :while-in-view="{ opacity: 1, y: 0, scale: 1, rotate: 0 }"
      :transition="{ duration: 1.2, type: 'spring', stiffness: 60 }" class="animation-card complex">
      <h3>Complex animation</h3>
      <p>This combines multiple properties: position, scale, rotation, and opacity.</p>
    </motion.div>

    <div class="spacer">
      <h2>End of animations</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

const listItems = [
  'First item appears',
  'Second item follows',
  'Third item continues',
  'Fourth item completes',
  'Fifth item finishes the sequence',
]
</script>

<style scoped>
.scroll-container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.spacer {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.spacer h2 {
  font-size: 2rem;
  color: var(--color-text);
  opacity: 0.7;
}

.animation-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin: 4rem 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.animation-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-card);
  opacity: 0.1;
  z-index: 0;
}

.animation-card>* {
  position: relative;
  z-index: 1;
}

.animation-card.fade-up::before {
  background: var(--gradient-primary);
}

.animation-card.fade-left::before {
  background: var(--gradient-secondary);
}

.animation-card.fade-right::before {
  background: var(--gradient-accent);
}

.animation-card.scale-in::before {
  background: var(--gradient-success);
}

.animation-card.rotate-in::before {
  background: var(--gradient-warning);
}

.animation-card.complex::before {
  background: var(--gradient-primary);
  opacity: 0.2;
}

.animation-card h3 {
  color: var(--color-heading);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.animation-card p {
  color: var(--color-text);
  line-height: 1.6;
  margin: 0;
}

.stagger-container {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin: 4rem 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.stagger-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-accent);
  opacity: 0.1;
  z-index: 0;
}

.stagger-container>* {
  position: relative;
  z-index: 1;
}

.stagger-container h3 {
  color: var(--color-heading);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.stagger-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  padding: 1rem 1.5rem;
  margin: 0.5rem 0;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  color: var(--color-text);
  border-left: 4px solid var(--color-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.list-item:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateX(8px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.complex {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.rotate-in {
  text-align: center;
}

@media (max-width: 768px) {
  .scroll-container {
    padding: 1rem;
  }

  .animation-card {
    padding: 1.5rem;
    margin: 2rem 0;
  }

  .spacer {
    height: 60vh;
  }

  .spacer h2 {
    font-size: 1.5rem;
  }
}
</style>
