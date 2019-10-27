<template>
  <header class="header">
    <div class="header__logo">
      <img alt="Vue logo" src="./assets/logo.png" class="image" />
    </div>
    <div class="header__links"></div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  height: 80px;
}
.image {
  max-width: 100%;
  max-height: 100%;
}
.header__logo {
  width: 100px;
  padding: 10px;
}
</style>