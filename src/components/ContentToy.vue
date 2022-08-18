<template>
  <div class="hello">
    <div class="container">
      <h1 class="text-center">{{ title }}</h1>
      <div class="row">
        <div class="col-md-3" v-for="(product, i) in pro" :key="i">
          <Card :prodCard="product" />
        </div>
      </div>
      <div class="text-center">
        <button>SHOP ALL</button>
      </div>
      <hr />
      <div class="icon text-center">
        <img src="../assets/twitter.png" alt="" width="20px" />
        <img src="../assets/instagram.png" alt="" width="20px" />
      </div>
      <p class="copyright">
        <img width="10px" src="../assets/iconCR.jpg" alt="" /> Copyright 2022
        WebDesign
      </p>
    </div>
  </div>
</template>

<script>
import Card from "./card.vue";
export default {
  props: {
    pro: {
      type: Array,
      requird: true,
    },
    title: {
      type: String,
      requird: false,
      default: "Title for this page",
    },
  },
  data: function () {
    return {};
  },
  name: "ContentToy",
  components: { Card },
};
</script>

<style scoped lang="scss">
.container {
  .icon img {
    width: 30px;
    margin: 10px;
  }
  p img {
    width: 15px;
  }
  .copyright {
    padding: 15px;
    font-size: 12px;
    color: gray;
    text-align: center;
  }
}
h1 {
  font-family: cursive;
}

button {
  background-color: #e5673a;
  border: none;
  margin: 0 0 0 15px;
  padding: 8px;
  border-radius: 16px;
  width: 130px;
  color: #fff;
  font-size: 12px;
}
h4 {
  font-size: 20px;
  padding: 8px;
  font-family: inherit;
}
.product-image {
  width: 220px;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
}
</style>
