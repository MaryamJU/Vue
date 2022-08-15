<template>
    <div class="shop">
        <ContentLogo />
        <ContentToy />
    </div>
</template>

<script>
// @ is an alias to /src
import ContentToy from "@/components/ContentToy.vue";
import ContentLogo from "../components/ContentLogo.vue";

export default {
    name: "Shop-",
    components: {
        ContentToy,
        ContentLogo,
    },
};
</script>
