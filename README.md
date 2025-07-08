# Motion-V Playground

A personal playground for exploring Vue animations with motion-v library.

## Features

- **Scroll-triggered animations** - Animations that trigger when elements enter the viewport
- **Basic animations** - Hover effects, entry animations, interactive buttons, and loading animations
- **Modern Vue 3 setup** - Built with Vite, TypeScript, and Vue 3 Composition API

## Animation Examples

### Scroll-Triggered Animations

- Fade in from different directions
- Scale animations with spring physics
- Rotation effects
- Staggered list animations
- Complex combined animations

### Basic Animations

- Hover effects (scale, rotate, lift)
- Entry animations (fade, slide, scale)
- Interactive buttons with spring physics
- Loading animations (spinner, pulse, bounce)

## Tech Stack

- Vue 3 with Composition API
- TypeScript
- motion-v (Vue animation library)
- Vite
- Vue Router

## Getting Started

### Install dependencies

```sh
pnpm install
```

### Run development server

```sh
pnpm dev
```

### Build for production

```sh
pnpm build
```

### Lint code

```sh
pnpm lint
```

## Project Structure

```
src/
├── components/
│   └── ScrollAnimation.vue    # Scroll-triggered animation examples
├── views/
│   ├── AnimationView.vue      # Scroll animations page
│   └── BasicAnimations.vue    # Basic animations page
├── router/
│   └── index.ts              # Vue Router configuration
├── App.vue                   # Main app component
└── main.ts                   # App entry point
```

## Usage

Navigate between the two main sections:

- **Scroll Animations**: Demonstrates various scroll-triggered animations
- **Basic Animations**: Shows hover effects, entry animations, and interactive elements

Perfect for experimenting with motion-v and learning Vue animation patterns!
