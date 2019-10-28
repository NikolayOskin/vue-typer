<template>
  <div id="app" class="app">

    <Header />

    <main class="main">
      <router-view></router-view>
    </main>

    <Footer />

  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  name: "app",
  components: {
    Header,
    Footer
  },

};
</script>

<style lang="scss">
@import '@/assets/scss/styles';
</style>
