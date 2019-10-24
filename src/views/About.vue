<template>
    <div class="about">
        <h1>{{ pageName }}</h1>
        <p>{{ desc }}</p>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: "About",
    data: function() {
        return {
            pageName: "About Us",
            desc: "This is About us page"
        };
    }
};
</script>
