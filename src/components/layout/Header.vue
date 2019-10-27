<template>
  <header class="header">
    <div class="header__logo">
      <img alt="Vue logo" src="../../assets/logo.png" class="image" />
    </div>
    <ul class="menu">
        <li class="menu__item"><router-link to="/" class="link">Home</router-link></li>
        <li class="menu__item"><router-link to="/login" class="link">Login</router-link></li>
        <li class="menu__item"><router-link to="/register" class="link">Register</router-link></li>
    </ul>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  height: 80px;
  justify-content: space-between;
}
.image {
  max-width: 100%;
  max-height: 100%;
}
.header__logo {
  width: 100px;
  padding: 10px;
}
.menu {
  list-style: none;
  display: flex;
  align-items: center;
}
.menu__item {
  margin-right: 50px;
}
.link {
  text-decoration: none;
  color: #2c3e50;
}
</style>