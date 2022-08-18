<template>
  <div class="shop">
    <ContentLogo />
    <ContentToy :pro="property" title="New Arivals" />
  </div>
</template>

<script>
// @ is an alias to /src
import ContentToy from "@/components/ContentToy.vue";
import ContentLogo from "@/components/ContentLogo.vue";

export default {
  name: "Shop-",
  components: {
    ContentToy,
    ContentLogo,
  },
  data() {
    return {
      property: [
        {
          title: "Construction Set",
          img: "/img/toy1.jpg",
          price: 10.99,
        },
        {
          title: "Soft Pink Bunny",
          img: "/img/toy2.jpg",
          price: 10.99,
        },
        {
          title: "Ring Stacker Toy",
          img: "/img/toy3.jpg",
          price: 10.99,
        },
        {
          title: "Coil Spring Toy",
          img: "/img/toy4.jpg",
          price: 10.99,
        },
      ],
    };
  },
  methods: {
    getFromAxios() {},
  },
};
</script>
