<template>
  <section class="awards" id="awards">
    <div class="container">
      <div class="section-header fade-up" data-delay="0">
        <h2>Recognition for creativity and performance.</h2>
        <p>
          Our collaborations have been celebrated by industry-leading juries for pushing boundaries in product design and
          engineering.
        </p>
      </div>
      <div class="awards__grid">
        <div v-for="(award, index) in awards" :key="award.name" class="awards__card glass-card fade-up" :data-delay="index * 130">
          <h3>{{ award.name }}</h3>
          <p>{{ award.description }}</p>
          <span>{{ award.year }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const awards = [
  { name: 'Webby Awards', description: 'Product Innovation — Apps, Mobile & Voice', year: '2024' },
  { name: 'Awwwards', description: 'Site of the Day — Experiential', year: '2023' },
  { name: 'Red Dot Design', description: 'Best of the Best — Brand & Communication', year: '2023' },
  { name: 'Apple Design Awards', description: 'Finalist — Delight & Fun', year: '2022' }
]
</script>

<style scoped lang="scss">
.awards {
  padding-top: var(--section-spacing);
  padding-bottom: var(--section-spacing);

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: clamp(1.5rem, 3vw, 2.5rem);
  }

  &__card {
    display: grid;
    gap: 1rem;
  }

  h3 {
    margin: 0;
    font-size: 1.4rem;
  }

  p {
    margin: 0;
    color: var(--text-muted);
  }

  span {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.5);
  }
}
</style>
