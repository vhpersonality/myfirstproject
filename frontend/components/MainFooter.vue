<template>
  <footer>
    <div class="container footer">
      <div class="footer__top">
        <div class="footer__brand">
          <div class="footer__logo">
            <span></span>
            Redot Studio
          </div>
          <p>
            Digital product studio crafting brand-defining experiences through strategy, storytelling, and engineering.
          </p>
        </div>
        <div class="footer__cta">
          <h3>Let’s build something iconic.</h3>
          <button class="btn-primary">
            <span>Start a project</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5L19 5L19 16" stroke="currentColor" stroke-width="1.6" />
              <path d="M19 5L5 19" stroke="currentColor" stroke-width="1.6" />
            </svg>
          </button>
        </div>
      </div>
      <div class="footer__grid">
        <div>
          <h4>Studios</h4>
          <ul>
            <li>Paris</li>
            <li>London</li>
            <li>New York</li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <ul>
            <li><a href="mailto:hello@redot.studio">hello@redot.studio</a></li>
            <li><a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>Strategy</li>
            <li>Design</li>
            <li>Engineering</li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© {{ new Date().getFullYear() }} Redot Studio. All rights reserved.</span>
        <div class="footer__legal">
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: grid;
  gap: clamp(2.5rem, 5vw, 4rem);

  &__top {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: clamp(1.5rem, 4vw, 3rem);
  }

  &__brand {
    max-width: 420px;
    display: grid;
    gap: 1rem;

    p {
      margin: 0;
      color: var(--text-muted);
      line-height: 1.6;
    }
  }

  &__logo {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: linear-gradient(130deg, #f46a3a, #ffb876);
      box-shadow: 0 0 12px rgba(244, 106, 58, 0.65);
    }
  }

  &__cta {
    display: grid;
    gap: 1rem;
    align-items: center;

    h3 {
      margin: 0;
      font-size: clamp(1.8rem, 3vw, 2.4rem);
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2rem;

    h4 {
      margin-bottom: 1rem;
      font-weight: 500;
    }

    ul {
      display: grid;
      gap: 0.5rem;
      color: var(--text-muted);
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    color: rgba(255, 255, 255, 0.55);
    font-size: 0.85rem;
  }

  &__legal {
    display: flex;
    gap: 1.5rem;
  }

  &__legal a {
    color: inherit;
  }
}
</style>
