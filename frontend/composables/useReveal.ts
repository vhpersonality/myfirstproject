export const useReveal = () => {
  const reveal = () => {
    const elements = document.querySelectorAll<HTMLElement>('.fade-up')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
      }
    )

    elements.forEach((el, index) => {
      const delay = el.dataset.delay ? Number(el.dataset.delay) : index * 120
      el.style.transitionDelay = `${delay}ms`
      observer.observe(el)
    })
  }

  onMounted(() => {
    requestAnimationFrame(reveal)
  })
}
