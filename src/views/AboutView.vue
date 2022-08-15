<template>
    <div class="about">
        <div class="container">
            <h1>{{ pageName }}</h1>
            <p>{{ pageDescription }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            pageName: "About us",
            pageDescription: "This Is About Us Page",
        };
    },
};
</script>
