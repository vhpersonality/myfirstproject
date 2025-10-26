<template>
  <section class="capabilities" id="capabilities">
    <div class="container">
      <div class="section-header fade-up" data-delay="0">
        <h2>Capabilities spanning the entire product lifecycle.</h2>
        <p>
          We operate as an extension of your team, aligning strategy, user experience, visual storytelling, and
          engineering into one continuous flow. Our squads bring your vision to life.
        </p>
      </div>
      <div class="capabilities__grid">
        <article v-for="(capability, index) in capabilities" :key="capability.title" class="glass-card fade-up" :data-delay="index * 120">
          <header>
            <span class="capabilities__index">0{{ index + 1 }}</span>
            <h3>{{ capability.title }}</h3>
          </header>
          <p>{{ capability.description }}</p>
          <ul>
            <li v-for="item in capability.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const capabilities = [
  {
    title: 'Product strategy',
    description: 'Crafting data-informed roadmaps to unlock new business opportunities and sustainable growth.',
    items: ['Vision articulation', 'Discovery & research', 'Product positioning', 'Roadmapping workshops']
  },
  {
    title: 'Experience design',
    description: 'Design systems, visual identities, and micro-interactions that give products a distinctive voice.',
    items: ['Design systems', 'UX & UI design', 'Brand storytelling', 'Motion design']
  },
  {
    title: 'Engineering',
    description: 'Turning concepts into performant, scalable products with meticulous engineering craftsmanship.',
    items: ['Full-stack development', 'Web & native apps', 'Emerging tech (AR/VR)', 'Quality assurance']
  }
]
</script>

<style scoped lang="scss">
.capabilities {
  padding-top: var(--section-spacing);
  padding-bottom: var(--section-spacing);

  &__grid {
    display: grid;
    gap: clamp(1.5rem, 3vw, 2.5rem);
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
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
    padding: 0.35rem 0.85rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.75);
  }

  &__index {
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
  }
}
</style>
