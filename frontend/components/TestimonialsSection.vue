<template>
  <section class="testimonials" id="testimonials">
    <div class="container">
      <div class="testimonials__wrapper glass-card">
        <div class="testimonials__header fade-up" data-delay="0">
          <h2>What partners say</h2>
          <p>Our collaborators highlight the clarity, empathy, and craftsmanship we bring to every engagement.</p>
        </div>
        <div class="testimonials__list">
          <article
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.author"
            class="testimonials__item fade-up"
            :data-delay="index * 160"
          >
            <p class="testimonials__quote">“{{ testimonial.quote }}”</p>
            <div class="testimonials__author">
              <span>{{ testimonial.author }}</span>
              <span>{{ testimonial.role }}</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote: 'Redot helped us transform a complex product vision into a tangible roadmap that rallied the entire company.',
    author: 'Amelia Brooks',
    role: 'Chief Product Officer, Luminate'
  },
  {
    quote: 'The team brought a level of craft and rigor that elevated every touchpoint of our customer journey.',
    author: 'Jonas Eriksen',
    role: 'VP Experience, Northwind Bank'
  },
  {
    quote: 'They were true partners—challenging assumptions, iterating quickly, and delivering with excellence.',
    author: 'Mira Chen',
    role: 'Founder, Musee Live'
  }
]
</script>

<style scoped lang="scss">
.testimonials {
  padding-top: var(--section-spacing);
  padding-bottom: var(--section-spacing);

  &__wrapper {
    display: grid;
    gap: clamp(2rem, 4vw, 3rem);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: clamp(1.5rem, 4vw, 3rem);

    h2 {
      margin: 0;
      font-size: clamp(2rem, 4vw, 2.75rem);
    }

    p {
      margin: 0;
      max-width: 420px;
      color: var(--text-muted);
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: clamp(1.5rem, 3vw, 2.5rem);
  }

  &__item {
    border-radius: var(--radius-md);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: clamp(1.5rem, 3vw, 2.25rem);
    background: rgba(255, 255, 255, 0.02);
    display: grid;
    gap: 1.5rem;
    height: 100%;
  }

  &__quote {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.7;
  }

  &__author {
    display: grid;
    gap: 0.35rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.65);
  }

  &__author span:first-child {
    font-weight: 500;
    color: #fff;
  }
}

@media (max-width: 900px) {
  .testimonials__header {
    flex-direction: column;
  }
}
</style>
