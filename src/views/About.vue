<template>
    <div class="about">
        <h1>{{ pageName }}</h1>
        <p>{{ desc }}</p>
    </div>
</template>
<script>
export default {
    name: 'About',
    data: function() {
        return {
            pageName: 'About Us',
            desc: 'This is About us page'
        }
    }
}
</script>
