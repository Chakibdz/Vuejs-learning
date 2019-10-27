<template>
    <div class="container">
        <ul class="tabs-choose">
            <li :class="[tab === 'one' ? 'active' : ' ']" @click="tab = 'one'">
                Tab One
            </li>
            <li :class="[tab === 'two' ? 'active' : ' ']" @click="tab = 'two'">
                Tab Two
            </li>
            <li
                :class="[tab === 'three' ? 'active' : ' ']"
                @click="tab = 'three'"
            >
                Tab Three
            </li>
            <li
                :class="[tab === 'four' ? 'active' : ' ']"
                @click="tab = 'four'"
            >
                Tab Four
            </li>
        </ul>
        <div class="tabs-content">
            <div v-if="tab === 'one'" class="content-one">Content One</div>
            <div v-if="tab === 'two'" class="content-one">Content Two</div>
            <div v-if="tab === 'three'" class="content-one">Content Three</div>
            <div v-if="tab === 'four'" class="content-one">Content Four</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tab',
    data: function() {
        return {
            tab: 'one'
        }
    }
}
</script>

<style scoped>
.tabs-choose {
    margin-bottom: 0;
}
.tabs-choose li {
    display: inline-block;
    padding: 10px 20px;
    background-color: #eee;
    cursor: pointer;
    opacity: 0.5;
}
.tabs-choose li.active {
    opacity: 1;
    background-color: aqua;
}
.tabs-content {
    background-color: #eee;
    margin: 0 auto;
    padding: 20px;
}
</style>
