<template>
  <div class="container">
    
    <h2 class="subheader">Categories</h2>

    <CategoriesList />

  </div>
</template>

<script>

import CategoriesList from "@/components/CategoriesList";
export default {
  components: {
    CategoriesList
  }
};
</script>