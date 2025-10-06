<template>
  <section class="intro" id="about">
    <div class="container intro__container glass-card fade-up" data-delay="150">
      <div class="intro__content">
        <div>
          <p class="intro__eyebrow">Global studio</p>
          <h2>
            Creating delightful digital journeys with <span>product strategy</span>, <span>story-driven design</span>, and
            <span>engineering excellence</span>.
          </h2>
        </div>
        <p class="intro__description">
          We collaborate with scale-ups and enterprises to craft apps, platforms, and ecosystems that customers love.
          From positioning to production-ready builds, Redot combines product strategy, design systems, and emerging
          technologies to unlock growth.
        </p>
      </div>
      <ul class="intro__metrics">
        <li v-for="metric in metrics" :key="metric.label" class="intro__metric">
          <span class="intro__metric-value">{{ metric.value }}</span>
          <span class="intro__metric-label">{{ metric.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const metrics = [
  { value: '12', label: 'Years of cross-disciplinary expertise' },
  { value: '40+', label: 'Specialists across strategy, design & dev' },
  { value: '23', label: 'Countries our products are used in' }
]
</script>

<style scoped lang="scss">
.intro {
  padding-top: var(--section-spacing);
  padding-bottom: var(--section-spacing);

  &__container {
    display: grid;
    gap: clamp(2rem, 6vw, 4rem);
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: clamp(1.5rem, 5vw, 3.5rem);
  }

  &__eyebrow {
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 1rem;
  }

  h2 {
    font-size: clamp(2.2rem, 4vw, 3rem);
    line-height: 1.2;
    margin: 0;
  }

  h2 span {
    color: var(--accent-secondary);
  }

  &__description {
    max-width: 420px;
    color: var(--text-muted);
    line-height: 1.7;
    margin: 0;
  }

  &__metrics {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(1.5rem, 4vw, 2.5rem);
  }

  &__metric {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  &__metric-value {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    font-weight: 500;
  }

  &__metric-label {
    font-size: 0.9rem;
    color: var(--text-muted);
  }
}

@media (max-width: 1024px) {
  .intro__content {
    flex-direction: column;
  }

  .intro__metrics {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
}
</style>
