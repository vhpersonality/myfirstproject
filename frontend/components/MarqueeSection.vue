<template>
  <section class="marquee" aria-label="Client marquee">
    <div class="marquee-track">
      <div v-for="client in clients" :key="client" class="marquee__item">
        {{ client }}
      </div>
      <div v-for="client in clients" :key="client + '-duplicate'" class="marquee__item">
        {{ client }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const clients = ['Epic Games', 'Notion', 'Wix', 'Coca-Cola', 'Virgin', 'Klarna', 'Mercado Pago', 'Sony Music']
</script>

<style scoped lang="scss">
.marquee {
  padding: clamp(3rem, 5vw, 4rem) 0;
  border-block: 1px solid rgba(255, 255, 255, 0.08);

  &__item {
    flex: 0 0 auto;
    min-width: 220px;
    font-size: clamp(1.4rem, 2.6vw, 2.2rem);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
  }
}
</style>
