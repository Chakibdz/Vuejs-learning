<template>
    <div class="header">
        <div class="logo">Ch_ak</div>
        <ul>
            <router-link to="/" tag="li" exact> <a>Home</a></router-link>
            <router-link to="/about" tag="li"><a>About</a></router-link>
            <router-link to="/Help" tag="li"><a>Help</a></router-link>
            <router-link to="/NewTest" tag="li" replace><a>New</a></router-link>
            <router-link to="/Contact" tag="li"><a>Contact</a></router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AppHeader"
};
</script>

<style lang="scss" scoped>
.header {
    background-color: #333;
    color: #fff;
    overflow: hidden;
}
.logo {
    font-size: 24px;
    padding: 20px;
    float: left;
    width: 200px;
}
ul {
    float: left;
    width: calc(100% - 200px);
    li {
        padding: 20px;
        display: inline-block;
        font-size: 18px;
    }
    a {
        color: #fff;
        text-decoration: none;
    }
    .router-link-exact-active a {
        color: rgb(0, 187, 140);
    }
}
</style>
