<template>
  <header class="header">
    <div class="header__logo">
      <img alt="Vue logo" src="./assets/logo.png" class="image" />
    </div>
    <ul class="menu">
        <li class="menu__item"><a href="" class="link"></a></li>
    </ul>
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