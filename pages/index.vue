<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-start
      </h1>
      <h2 class="subtitle">
        Nuxt Static Page Generator
      </h2>
      <div class="links">
        <router-link :to="link1">
          <div class="button--green">Static Page 1</div>
        </router-link>
        <router-link :to="link2">
          <div class="button--grey">Static Page 2</div>
        </router-link>
      </div>
      <div class="erroneous-links">
        <router-link :to="link3">
          <div class="button--red">Erroneous Route</div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data: () => ({
    link1: '/vuejs/1',
    link2: '/vuejs/2',
    link3: '/vuejs/3'
  }),
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.erroneous-links {
  padding-top: 20px;
}
</style>
