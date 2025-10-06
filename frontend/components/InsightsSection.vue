<template>
  <section class="insights" id="insights">
    <div class="container">
      <div class="section-header fade-up" data-delay="0">
        <h2>Insights & resources.</h2>
        <p>Perspectives on design systems, product strategy, and emerging tech from the Redot team.</p>
      </div>
      <div class="insights__grid">
        <article v-for="(article, index) in articles" :key="article.title" class="insights__card glass-card fade-up" :data-delay="index * 150">
          <span class="insights__tag">{{ article.tag }}</span>
          <h3>{{ article.title }}</h3>
          <p>{{ article.excerpt }}</p>
          <NuxtLink :to="article.link" class="insights__link">Read article</NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const articles = [
  {
    title: 'Design systems as operating systems',
    excerpt: 'How we build design systems that empower cross-functional teams and accelerate delivery.',
    tag: 'Design ops',
    link: '#'
  },
  {
    title: 'From discovery to product-market fit',
    excerpt: 'A repeatable process for validating new bets with lean, data-driven experiments.',
    tag: 'Strategy',
    link: '#'
  },
  {
    title: 'Crafting immersive storytelling with WebGL',
    excerpt: 'Techniques we use to bring brand narratives to life with motion and 3D on the web.',
    tag: 'Engineering',
    link: '#'
  }
]
</script>

<style scoped lang="scss">
.insights {
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
    padding: clamp(1.75rem, 4vw, 2.5rem);
  }

  &__tag {
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }

  h3 {
    margin: 0;
    font-size: 1.4rem;
  }

  p {
    margin: 0;
    color: var(--text-muted);
  }

  &__link {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #fff;
    position: relative;
    padding-bottom: 0.25rem;
  }

  &__link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &__link:hover::after {
    transform: scaleX(1);
  }
}
</style>
