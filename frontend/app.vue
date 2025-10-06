<template>
  <div class="page-wrapper">
    <MainNavigation />
    <main>
      <HeroSection />
      <IntroSection />
      <CapabilitiesSection />
      <CaseStudiesSection />
      <CaseAccordionSection />
      <MarqueeSection />
      <AwardsSection />
      <TestimonialsSection />
      <ApproachSection />
      <InsightsSection />
      <ContactSection />
    </main>
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'page-body'
  }
})

if (process.client) {
  const { useReveal } = await import('~/composables/useReveal')
  useReveal()
}
</script>
