<template>
    <div id="intro">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h1>Award winning</h1>
                    <h1>toys for children</h1>
                    <p class="toy-text ms-2">
                        Creative,timeless toys for children of all ages!
                    </p>
                    <div>
                        <button class="shop-now p-2 ms-2">SHOP NOW</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="logo2">
                        <img
                            class="img-fluid"
                            alt="Vue logo"
                            src="../assets/log.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#intro {
    height: 380px;
    background-image: url("../assets/svg.png");
}
/*
p, ps, pe, px, py, pb, pt, 1~5
m, ms, me, mx, my, mt, mt, 
*/
.toy-text {
    font-size: 13px;
    color: gray;
}
.shop-now {
    background-color: #e5673a;
    border: none;
    border-radius: 16px;
    width: 130px;
    color: #fff;
    font-size: 12px;
}
h1 {
    font-family: cursive;
    font-size: 35px;
}
</style>
