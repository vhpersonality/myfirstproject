<template>
  <section class="cases" id="cases">
    <div class="container">
      <div class="section-header fade-up" data-delay="0">
        <h2>Case studies where craft meets measurable impact.</h2>
        <p>
          From fintech to wellness and culture, we partner with teams to ship signature experiences that move metrics and
          audiences alike.
        </p>
      </div>
      <div class="cases__grid">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="cases__card glass-card fade-up"
          :data-delay="index * 140"
        >
          <figure class="cases__media">
            <NuxtImg :src="project.image" :alt="project.title" format="webp" />
            <figcaption>{{ project.tagline }}</figcaption>
          </figure>
          <div class="cases__content">
            <div class="cases__meta">
              <span>{{ project.industry }}</span>
              <span>{{ project.year }}</span>
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <ul>
              <li v-for="service in project.services" :key="service">{{ service }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Project = {
  title: string
  description: string
  image: string
  industry: string
  year: string
  services: string[]
  tagline: string
}

const config = useRuntimeConfig()

const { data } = await useAsyncData<Project[]>(
  'cases',
  async () => {
    try {
      const response = await $fetch<Project[]>(`${config.public.apiBase}/api/cases/`, {
        headers: {
          Accept: 'application/json'
        }
      })
      return response
    } catch (error) {
      console.warn('Falling back to local case data', error)
      const localData = await import('~/data/cases.json')
      return localData.default as Project[]
    }
  }
)

const projects = computed(() => data.value ?? [])
</script>

<style scoped lang="scss">
.cases {
  padding-top: var(--section-spacing);
  padding-bottom: var(--section-spacing);

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: clamp(1.75rem, 4vw, 3rem);
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__media {
    position: relative;
    border-radius: var(--radius-md);
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.03);
  }

  figure {
    margin: 0;
  }

  figcaption {
    position: absolute;
    inset: auto 0 0 0;
    padding: 1.25rem 1.5rem;
    background: linear-gradient(180deg, rgba(6, 6, 6, 0) 0%, rgba(6, 6, 6, 0.9) 90%);
    font-size: 0.95rem;
  }

  &__meta {
    display: flex;
    gap: 1rem;
    color: rgba(255, 255, 255, 0.55);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.75rem;
  }

  h3 {
    margin: 0;
    font-size: 1.75rem;
  }

  p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.6;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 1.25rem;
  }

  li {
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    font-size: 0.8rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.65);
  }
}
</style>
