<template>
  <section class="approach" id="approach">
    <div class="container">
      <div class="section-header fade-up" data-delay="0">
        <h2>A proven, collaborative approach.</h2>
        <p>
          We guide you from discovery to launch with rituals that align stakeholders, surface insights, and maintain
          momentum.
        </p>
      </div>
      <div class="approach__steps">
        <div v-for="(step, index) in steps" :key="step.title" class="approach__step glass-card fade-up" :data-delay="index * 140">
          <span class="approach__count">0{{ index + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
          <ul>
            <li v-for="item in step.outcomes" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Discover',
    description: 'Immersing in your product, customers, and data to uncover opportunities and define success.',
    outcomes: ['Stakeholder interviews', 'Customer research', 'Product vision canvas']
  },
  {
    title: 'Design',
    description: 'Concepting, prototyping, and validating journeys that align experiences with business objectives.',
    outcomes: ['Experience map', 'Interactive prototypes', 'Design system foundations']
  },
  {
    title: 'Deliver',
    description: 'Engineering with attention to detail, shipping increments, and building a sustainable ops model.',
    outcomes: ['Technical architecture', 'Agile delivery', 'Analytics & optimization plan']
  }
]
</script>

<style scoped lang="scss">
.approach {
  padding-top: var(--section-spacing);
  padding-bottom: var(--section-spacing);

  &__steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: clamp(1.5rem, 3vw, 2.5rem);
  }

  &__step {
    display: grid;
    gap: 1.2rem;
  }

  &__count {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.45);
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.6;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  li {
    padding: 0.4rem 0.85rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>
