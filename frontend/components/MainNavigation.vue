<template>
  <header class="nav" :class="{ 'nav--scrolled': isScrolled }">
    <div class="nav__inner">
      <NuxtLink to="/" class="nav__logo fade-up" data-delay="0">
        <span class="nav__logo-dot" />
        <span>Redot Studio</span>
      </NuxtLink>
      <nav class="nav__links">
        <NuxtLink v-for="item in navItems" :key="item.label" :to="item.href" class="fade-up" :data-delay="item.delay">
          {{ item.label }}
        </NuxtLink>
      </nav>
      <button class="btn-primary fade-up" data-delay="450">
        <span>Start a project</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 5L19 5L19 16" stroke="currentColor" stroke-width="1.6" />
          <path d="M19 5L5 19" stroke="currentColor" stroke-width="1.6" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Expertise', href: '#capabilities', delay: 150 },
  { label: 'Cases', href: '#cases', delay: 250 },
  { label: 'Approach', href: '#approach', delay: 350 },
  { label: 'Insights', href: '#insights', delay: 400 }
]

const isScrolled = ref(false)

onMounted(() => {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 30
  }
  onScroll()
  window.addEventListener('scroll', onScroll)
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped lang="scss">
.nav {
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 1.5rem clamp(1.5rem, 4vw, 3.5rem);
  transition: backdrop-filter 0.5s ease, background 0.5s ease, border 0.5s ease;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-bottom: 1px solid transparent;
    transition: border 0.5s ease;
  }

  &--scrolled {
    backdrop-filter: blur(18px);
    background: rgba(8, 8, 8, 0.65);
    &::after {
      border-color: rgba(255, 255, 255, 0.08);
    }
  }

  &__inner {
    width: min(100%, var(--max-width));
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  &__logo {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-size: 0.95rem;
    color: #fff;
  }

  &__logo-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(130deg, #f46a3a, #ffb876);
    box-shadow: 0 0 12px rgba(244, 106, 58, 0.65);
  }

  &__links {
    display: flex;
    gap: clamp(1.5rem, 4vw, 3rem);
    a {
      color: var(--text-muted);
      font-size: 0.95rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      transition: color 0.3s ease;
      &:hover {
        color: #fff;
      }
    }
  }
}

@media (max-width: 900px) {
  .nav__links {
    display: none;
  }

  .btn-primary {
    display: none;
  }
}
</style>
