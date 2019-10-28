<template>
  <header class="header">
    <div class="header__logo">
      <img alt="Vue logo" src="../../assets/images/logo.png" class="image" />
    </div>
    <ul class="menu">
        <li class="menu__item"><router-link to="/" class="link">Home</router-link></li>
        <li class="menu__item"><router-link to="/login" class="link">Login</router-link></li>
        <li class="menu__item"><router-link to="/register" class="link">Register</router-link></li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/header';

</style>