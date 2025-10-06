<template>
  <section class="case-accordion">
    <div class="container glass-card fade-up" data-delay="100">
      <header class="case-accordion__header">
        <h2>Inside our partnerships</h2>
        <p>
          Explore how Redot embeds with teams to accelerate delivery, align stakeholders, and launch products with
          confidence.
        </p>
      </header>
      <div class="case-accordion__items">
        <div
          v-for="(item, index) in items"
          :key="item.title"
          class="case-accordion__item"
          :class="{ 'case-accordion__item--open': openIndex === index }"
        >
          <button class="case-accordion__trigger" type="button" @click="toggle(index)">
            <span class="case-accordion__index">0{{ index + 1 }}</span>
            <span class="case-accordion__title">{{ item.title }}</span>
            <span class="case-accordion__icon" aria-hidden="true">
              <span></span>
              <span></span>
            </span>
          </button>
          <transition name="accordion">
            <div v-if="openIndex === index" class="case-accordion__content">
              <p>{{ item.description }}</p>
              <ul>
                <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    title: 'Embedded squads',
    description: 'Multi-disciplinary pods that integrate with your workflows, rituals, and stakeholders to ship faster.',
    highlights: ['Dedicated product manager', 'Design, engineering, QA', 'Weekly rituals & demos']
  },
  {
    title: 'Discovery sprints',
    description: 'Compressed research and prototyping cycles that validate opportunities and map customer journeys.',
    highlights: ['Product positioning framework', 'UX research synthesis', 'Interactive prototype & roadmap']
  },
  {
    title: 'Design systems',
    description: 'Crafting scalable systems that unify brand and product experiences across teams and platforms.',
    highlights: ['Token architecture', 'Documentation & tooling', 'Design ops enablement']
  }
]

const openIndex = ref(0)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<style scoped lang="scss">
.case-accordion {
  padding-bottom: var(--section-spacing);

  .glass-card {
    padding: clamp(2rem, 5vw, 3rem) clamp(1.5rem, 5vw, 3.5rem);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: clamp(1.5rem, 4vw, 3.5rem);
    margin-bottom: clamp(2rem, 4vw, 3rem);

    h2 {
      margin: 0;
      font-size: clamp(2rem, 4vw, 3rem);
    }

    p {
      margin: 0;
      max-width: 460px;
      color: var(--text-muted);
      line-height: 1.6;
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__item {
    border-radius: var(--radius-md);
    border: 1px solid rgba(255, 255, 255, 0.08);
    overflow: hidden;
    background: rgba(255, 255, 255, 0.02);
    transition: background 0.4s ease, border 0.4s ease;

    &--open {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(255, 255, 255, 0.18);
    }
  }

  &__trigger {
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 1.75rem;
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    text-align: left;
  }

  &__index {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.5);
  }

  &__title {
    font-size: 1.35rem;
    font-weight: 500;
  }

  &__icon {
    position: relative;
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    span {
      position: absolute;
      width: 16px;
      height: 2px;
      background: #fff;
      border-radius: 999px;
      transition: transform 0.3s ease;
    }

    span:last-child {
      transform: rotate(90deg);
    }
  }

  &__item--open &__icon span:last-child {
    transform: rotate(0deg);
  }

  &__content {
    padding: 0 1.75rem 1.75rem;
    display: grid;
    gap: 1.2rem;

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
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.35s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  height: 0;
}

@media (max-width: 900px) {
  .case-accordion__header {
    flex-direction: column;
  }

  .case-accordion__trigger {
    grid-template-columns: 1fr auto;
    grid-template-areas:
      'title icon'
      'index icon';
    align-items: start;
  }

  .case-accordion__index {
    grid-area: index;
  }

  .case-accordion__title {
    grid-area: title;
  }
}
</style>
