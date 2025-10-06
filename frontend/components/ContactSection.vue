<template>
  <section class="contact" id="contact">
    <div class="container">
      <div class="contact__grid glass-card fade-up" data-delay="0">
        <div class="contact__intro">
          <div class="badge">Let’s collaborate</div>
          <h2>Ready to build what’s next?</h2>
          <p>
            Tell us about your challenge, and we’ll assemble a custom squad across strategy, design, and engineering to
            make it real.
          </p>
        </div>
        <form class="contact__form" @submit.prevent>
          <label>
            Name
            <input type="text" placeholder="Your name" required />
          </label>
          <label>
            Work email
            <input type="email" placeholder="name@company.com" required />
          </label>
          <label>
            What are you building?
            <textarea rows="4" placeholder="Tell us about your project" required></textarea>
          </label>
          <button class="btn-primary" type="submit">
            <span>Submit</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5L19 5L19 16" stroke="currentColor" stroke-width="1.6" />
              <path d="M19 5L5 19" stroke="currentColor" stroke-width="1.6" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  padding-top: var(--section-spacing);
  padding-bottom: var(--section-spacing);

  &__grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: clamp(2rem, 5vw, 3.5rem);
  }

  &__intro {
    grid-column: span 5;
    display: grid;
    gap: 1.5rem;

    h2 {
      margin: 0;
      font-size: clamp(2rem, 4vw, 2.75rem);
    }

    p {
      margin: 0;
      color: var(--text-muted);
      line-height: 1.7;
      max-width: 420px;
    }
  }

  &__form {
    grid-column: span 7;
    display: grid;
    gap: 1.25rem;
  }

  label {
    display: grid;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.75);
  }

  input,
  textarea {
    padding: 0.9rem 1.1rem;
    border-radius: var(--radius-sm);
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(0, 0, 0, 0.4);
    color: inherit;
    font-size: 1rem;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: rgba(244, 106, 58, 0.6);
    box-shadow: 0 0 0 2px rgba(244, 106, 58, 0.2);
  }
}

@media (max-width: 1024px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }

  .contact__intro,
  .contact__form {
    grid-column: span 12;
  }
}
</style>
