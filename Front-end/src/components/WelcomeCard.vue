<template>
  <section class="welcome-card" aria-labelledby="welcome-title">
    <img class="welcome-card__logo" src="@/assets/logo.svg" alt="" width="72" height="72" />
    <p class="welcome-card__eyebrow">Gestão integrada</p>
    <h1 id="welcome-title">FlowERP</h1>
    <p class="welcome-card__description">Bem-vindo à sua plataforma de gestão.</p>
  </section>
</template>

<style scoped>
.welcome-card {
  width: min(100%, 34rem);
  padding: 3.5rem 2rem;
  border: 1px solid #e2e8f0;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0 1.5rem 4rem rgb(15 23 42 / 8%);
  text-align: center;
}

.welcome-card__logo {
  display: block;
  margin: 0 auto 1.5rem;
}

.welcome-card__eyebrow {
  margin: 0 0 0.5rem;
  color: #2563eb;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  color: #172033;
  font-size: clamp(2rem, 8vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.04em;
}

.welcome-card__description {
  margin: 0.75rem 0 0;
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
}
</style>
