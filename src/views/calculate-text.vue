<template>
    <div class="container">
        <h4>write your message ({{ maxLenghth }} Characters Allowed)</h4>
        <textarea v-model="message" :maxlength="maxLenghth" @input="counter" />
        <span class="counter" :class="{ zero: rechZero }"
            >Left | <span>{{ remainingChars }}</span></span
        >
    </div>
</template>

<script>
export default {
    name: 'Calculate',
    data: function() {
        return {
            maxLenghth: 50,
            remainingChars: 50,
            message: null,
            rechZero: false
        }
    },
    methods: {
        counter: function() {
            this.remainingChars = this.maxLenghth - this.message.length
            this.rechZero = this.remainingChars === 0
        }
    }
}
</script>

<style>
.container h4 {
    margin-top: 50px;
}
.container textarea {
    width: 400px;
    height: 200px;
    resize: none;
    background-color: #eee;
    border: 1px solid #ccc;
}
.container .counter {
    display: block;
    text-align: right;
    padding-top: 10px;
    margin: 20px auto;
    width: 400px;
}
.container .counter.zero span {
    color: red;
    font-weight: bold;
}
</style>
