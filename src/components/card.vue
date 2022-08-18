<template>
  <div class="prodact-wan">
    <div
      class="product-image"
      :style="{
        backgroundImage: `url(${prodCard.img})`,
      }"
    >
      <img src="../assets/cart.png" alt="" width="30px" style="margin: 10px" />
    </div>
    <h4>{{ prodCard.title }}</h4>
    <p>${{ prodCard.price }}</p>
  </div>
</template>

<script>
export default {
  prop: ["prodCard"],
};
</script>

<style>
</style>