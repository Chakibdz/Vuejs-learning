<template>
    <div class="container mt-5">
        <button
            :class="{ selected: isSelected }"
            @click="isSelected = !isSelected"
        >
            First methods
        </button>
        <button @click="toggle">Second method</button>
        <button @click="toggleAdvenced($event, 'selected')">
            Third method
        </button>
    </div>
</template>

<script>
export default {
    name: 'Toggle',
    data: function() {
        return {
            isSelected: false
        }
    },
    methods: {
        toggle: function(event) {
            event.target.classList.toggle('selected')
        },
        toggleAdvenced: function(event, theClass) {
            event.target.classList.toggle(theClass)
        }
    }
}
</script>

<style>
.selected {
    background-color: aquamarine;
}
</style>
