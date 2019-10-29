<template>
  <ul class="categories">
    <li
      v-for="(category, key) in categories"
      :key="key"
      class="categories__item"
      @click="selectCategory(category)"
    >
      <router-link :to="{ name: 'category', params: {categoryName: category } }" class="link">
        <div class="category-title">{{category}}</div>
        <div class="category-desc">Exercises: 5</div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      currentCategory: "",
      categories: ["text", "numbers", "symbols", "code", "mix"]
    };
  },
  methods: {
    selectCategory(category) {
      this.$emit("select-category", category);
      this.currentCategory = category;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/components/categories";
</style>

