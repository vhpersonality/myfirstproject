<template>
  <section class="hero" id="hero">
    <div class="hero__bg" />
    <div class="container hero__container">
      <div class="hero__left">
        <div class="badge fade-up" data-delay="0">Digital product studio</div>
        <h1 class="hero__title fade-up" data-delay="100">
          We design and build immersive digital experiences that fuel category-defining brands.
        </h1>
        <p class="hero__subtitle fade-up" data-delay="200">
          Redot Studio merges strategy, storytelling, and cutting-edge technology into products that resonate with millions of users worldwide.
        </p>
        <div class="hero__actions fade-up" data-delay="300">
          <button class="btn-primary">
            <span>Discover our work</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5L19 5L19 16" stroke="currentColor" stroke-width="1.6" />
              <path d="M19 5L5 19" stroke="currentColor" stroke-width="1.6" />
            </svg>
          </button>
          <NuxtLink to="#cases" class="hero__secondary">See case studies</NuxtLink>
        </div>
        <div class="hero__stats">
          <div class="hero__stat fade-up" v-for="stat in stats" :key="stat.label" :data-delay="stat.delay">
            <h3>{{ stat.value }}</h3>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>
      <div class="hero__right">
        <div class="hero__media fade-up" data-delay="200">
          <video autoplay loop muted playsinline>
            <source src="https://cdn.jsdelivr.net/gh/RedotStudio/assets@main/hero-reel.mp4" type="video/mp4" />
          </video>
          <div class="hero__media-overlay">
            <div class="hero__media-label">Selected reel</div>
            <div class="hero__media-caption">Fusing product strategy, design, and engineering.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '150M+', label: 'Active users every month', delay: 450 },
  { value: '68%', label: 'Average conversion uplift', delay: 550 },
  { value: '30+', label: 'Awards for creativity & craft', delay: 650 }
]
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  padding-top: clamp(8rem, 12vw, 12rem);
  padding-bottom: clamp(4rem, 8vw, 6rem);
  overflow: hidden;

  &__bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(244, 106, 58, 0.35), transparent 55%),
      radial-gradient(circle at 80% 10%, rgba(66, 103, 255, 0.25), transparent 55%),
      linear-gradient(180deg, rgba(9, 9, 9, 0.65) 0%, rgba(6, 6, 6, 0.95) 80%);
    filter: blur(0px);
    z-index: -1;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
  }

  &__left {
    grid-column: span 7;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  &__right {
    grid-column: span 5;
    display: flex;
    align-items: center;
  }

  &__title {
    font-size: clamp(2.8rem, 5vw, 4.5rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin: 0;
  }

  &__subtitle {
    color: var(--text-muted);
    font-size: clamp(1rem, 1.2vw, 1.1rem);
    line-height: 1.7;
    max-width: 540px;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  &__secondary {
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    position: relative;
  }

  &__secondary::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &__secondary:hover::after {
    transform: scaleX(1);
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(1.5rem, 3vw, 2.5rem);
    margin-top: 1.5rem;
  }

  &__stat {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__stat h3 {
    margin: 0;
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 500;
  }

  &__stat span {
    color: var(--text-muted);
    font-size: 0.9rem;
  }

  &__media {
    width: 100%;
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 45px 85px rgba(0, 0, 0, 0.4);
  }

  &__media video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__media-overlay {
    position: absolute;
    inset: auto 0 0 0;
    padding: 1.75rem;
    background: linear-gradient(180deg, rgba(6, 6, 6, 0) 0%, rgba(6, 6, 6, 0.95) 80%);
  }

  &__media-label {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.65);
    margin-bottom: 0.5rem;
  }

  &__media-caption {
    font-size: 1rem;
    max-width: 320px;
    line-height: 1.6;
  }
}

@media (max-width: 1024px) {
  .hero__container {
    grid-template-columns: 1fr;
  }

  .hero__left,
  .hero__right {
    grid-column: span 12;
  }

  .hero__stats {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero__subtitle {
    max-width: unset;
  }
}
</style>
