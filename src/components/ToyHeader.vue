<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg bg-white">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Kidzo Toys</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link to="/" tag="li" exact
                                ><a class="nav-link active"
                                    >Shop</a
                                ></router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" tag="li"
                                ><a class="nav-link">About</a></router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link to="/MyAccount" tag="li"
                                ><a class="nav-link">My Account</a></router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link to="/Cart" tag="li"
                                ><a class="nav-link">Cart(0)</a></router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "ToyHeader",
};
</script>

<style lang="scss" scoped>
.header {
    background-color: #fff;
    color: #000;
    overflow: hidden;
    width: 100%;
    .logo {
        font-size: 15px;
        padding: 20px;
        float: left;
        width: 200px;
    }
    ul {
        float: left;
        width: calc(100% - 400px);
        margin: 0;
        li {
            padding: 20px;
            display: inline-block;
            font-size: 18px;
            a {
                color: #000;
                text-decoration: none;
                font-size: 13px;
                color: rgb(120, 119, 119);
            }
        }
    }
}
</style>
