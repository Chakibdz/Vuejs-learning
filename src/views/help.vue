<template>
    <div class="help">
        <h1>{{ pageName }}</h1>
        <p>{{ desc }}</p>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'Help',
    data: function() {
        return {
            pageName: 'help page',
            desc: 'This is help us page'
        }
    }
}
</script>
