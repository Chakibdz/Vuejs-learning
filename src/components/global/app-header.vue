<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Ch_ak</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNavDropdown" class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <router-link to="/" tag="li" exact>
                            <a class="nav-link">Home</a>
                        </router-link>
                        <router-link to="/about" tag="li" class="nav-item">
                            <a class="nav-link">About</a>
                        </router-link>
                        <router-link to="/blog" tag="li" class="nav-item">
                            <a class="nav-link">Blog</a>
                        </router-link>
                        <router-link to="/help" tag="li" class="nav-item">
                            <a class="nav-link">Help</a>
                        </router-link>

                        <li class="nav-item dropdown">
                            <a
                                id="navbarDropdownMenuLink"
                                class="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >Other tutoriels</a
                            >
                            <div
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <router-link to="/calculate-text">
                                    <a class="dropdown-item"
                                        >Calculate Textarea</a
                                    >
                                </router-link>
                                <router-link to="/Faq">
                                    <a class="dropdown-item">FAQ</a>
                                </router-link>
                                <router-link to="/Shmessage">
                                    <a class="dropdown-item"
                                        >Show Hide message</a
                                    >
                                </router-link>
                                <router-link to="/Random-views">
                                    <a class="dropdown-item">Random Views</a>
                                </router-link>
                                <router-link to="/Tabs">
                                    <a class="dropdown-item">Tabs</a>
                                </router-link>
                                <router-link to="/Toggle">
                                    <a class="dropdown-item">Toggle</a>
                                </router-link>
                                <router-link to="/Gradient">
                                    <a class="dropdown-item">Gradient</a>
                                </router-link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
li.nav-item.router-link-exact-active.router-link-active a {
    color: rgb(0, 187, 140);
}
</style>
