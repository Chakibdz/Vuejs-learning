<template>
    <div class="container">
        <button
            class="btn btn-outline-primary"
            :class="{ showen: message }"
            @click="message = !message"
        >
            {{ message ? ' Hide message ' : ' Show message ' }}
        </button>
        <transition name="fade">
            <div v-show="message" class="the-message">This is an message</div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'ShowHide',
    data: function() {
        return {
            message: false
        }
    }
}
</script>

<style>
.btn {
    margin-top: 50px;
}
.btn.showen {
    background-color: aquamarine;
}
.the-message {
    margin-top: 20px;
    padding: 50px;
    background-color: beige;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
