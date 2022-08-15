<template>
    <div class="hello">
        <div class="container">
            <h1 class="text-center">New Arivals</h1>
            <div class="row">
                <div class="col-md-3" v-for="product in pro" :key="product">
                    <div class="prodact-wan">
                        <div
                            class="product-image"
                            v-bind:style="{
                                backgroundImage: `url(${product.img})`,
                            }"
                        >
                            <img
                                src="../assets/cart.png"
                                alt=""
                                width="30px"
                                style="margin: 10px"
                            />
                        </div>
                        <h4>{{ product.title }}</h4>
                        <p>${{ product.price }}</p>
                    </div>
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
                <img width="10px" src="../assets/iconCR.jpg" alt="" /> Copyright
                2022 WebDesign
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            pro: [
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
    name: "ContentToy",
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
