<template>
    <div class="my-account">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            pageName: "Account",
            pageDescription: "This Is Your Account Page",
        };
    },
    name: "MyAccount",
};
</script>
