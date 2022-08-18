<template>
  <div class="container">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageName: "Account",
      pageDescription: "This Is Your Account Page",
    };
  },
  name: "MyAccount",
};
</script>
