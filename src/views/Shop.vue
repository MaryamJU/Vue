<template>
    <div class="shop">
        <ContentLogo />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ContentLogo from "../components/ContentLogo.vue";

export default {
    name: "Shop-",
    components: {
        HelloWorld,
        ContentLogo,
    },
};
</script>
