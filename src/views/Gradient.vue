<template>
    <div :style="{ background: gradient }">
        <div class="container">
            <transition-group name="flip-list" tag="ul">
                <li
                    v-for="(color, index) in colors"
                    :key="color.id"
                    :class="{ shake: color.last }"
                >
                    <div class="move">
                        <button
                            v-if="index > 0"
                            class="up fa-angle-double-left"
                            @click="up(index)"
                        ></button>
                        <button
                            v-if="index < colors.length - 1"
                            class="down"
                            @click="down(index)"
                        ></button>
                    </div>
                    <input
                        v-model.trim="color.hex"
                        type="text"
                        maxlength="7"
                        :style="{ color: color.hex }"
                        :class="{ pin: color.disabled }"
                        :disabled="color.disabled"
                        autocomplete="off"
                        autocorrect="off"
                        autocapitalize="off"
                        spellcheck="false"
                    />
                    <button
                        :class="{ locked: color.disabled }"
                        @click="lockColor(index)"
                    ></button>
                </li>
            </transition-group>
            <div class="button-group">
                <div>
                    <button id="add" @click="addColor"></button>
                    <transition name="fade">
                        <button
                            v-if="colors.length > 2"
                            id="remove"
                            @click="removeColor"
                        ></button>
                    </transition>
                </div>
                <button @click="generateGradient">random</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            colors: [
                { id: 0, hex: '#f12711', disabled: false },
                { id: 1, hex: '#f5af19', disabled: false }
            ],
            id: 2
        }
    },
    computed: {
        gradient() {
            let colors = 'linear-gradient(45deg'
            this.colors.forEach(function(e) {
                colors += ',' + e.hex
            })
            colors += ')'
            return colors
        }
    },
    methods: {
        addColor() {
            this.colors.push({
                id: this.id,
                hex: this.randomHex(),
                disabled: false
            })
            this.id++
        },
        removeColor() {
            if (this.colors[this.colors.length - 1].disabled == false) {
                if (this.colors.length > 2) {
                    this.colors.pop()
                }
            }
        },
        generateGradient() {
            for (let i = 0; i < this.colors.length; i++) {
                if (this.colors[i].disabled === false)
                    this.colors[i].hex = this.randomHex()
            }
        },
        lockColor(index) {
            this.colors[index].disabled === true
                ? (this.colors[index].disabled = false)
                : (this.colors[index].disabled = true)
        },
        randomHex() {
            return (
                '#' +
                Math.random()
                    .toString(16)
                    .slice(2, 8)
            )
        },
        up(index) {
            if (index > 0) {
                let temp = this.colors[index]
                this.$set(this.colors, index, this.colors[index - 1])
                this.$set(this.colors, index - 1, temp)
            }
        },
        down(index) {
            if (index < this.colors.length - 1) {
                let temp = this.colors[index]
                this.$set(this.colors, index, this.colors[index + 1])
                this.$set(this.colors, index + 1, temp)
            }
        }
    }
}
</script>

<style>
li {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    position: relative;
}

li > button {
    border-radius: 0px 10px 10px 0px;
}

.button-group {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.button-group > div > button {
    padding: 15px 20px;
}

.button-group button {
    border-radius: 10px;
}

button {
    transition: 0.25s;
}

input,
button {
    all: unset;
}

li > button::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f09c';
}

.locked::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f023';
}

input {
    display: inline;
    background: #ffffff;
    padding: 15px;
    max-width: 225px;
    /*    padding-left:0px; */
    border-radius: 10px 0px 0px 10px;
    transition: color 0.25s, background 0.25s ease-out;
}

li > button,
.button-group button {
    background: #000000;
    color: #ffffff;
    padding: 15px;
    cursor: pointer;
    min-width: 25px;
    text-align: center;
}

.button-group button:hover {
    background: #ffffff;
    color: #000000;
}

li > button:hover::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f023';
}

.locked:hover::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f09c';
}

.pin {
    background: #000000;
    color: #ffffff;
    /*    transition:0.25s; */
    animation-duration: 0.05s;
    /*    animation-name: fillIn; */
}

ul li i {
    content: '#';
    padding: 15px;
    padding-right: 0px;
    background: #ffffff;
    border-radius: 10px 0px 0px 10px;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

#add::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f067';
}

#remove::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f068';
}

#remove::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f068';
}

.up::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: ' ';
}

.down::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: ' ';
}

.move button {
    font-size: 1.25rem;
    cursor: pointer;
    height: 100%;
    width: 100%;
    text-align: center;
}

li .up::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f062';
    opacity: 0;
}

li:hover .up::before,
li:hover .down::before {
    opacity: 1;
    transition: opacity 0.25s ease-out;
}

li .down::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f063';
    opacity: 0;
}

.move button:hover {
    color: #ffffff;
}

.move {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: calc(100%);
    height: 100%;
    width: 35px;
}

li.shake {
    animation-duration: 0.75s;
    animation-name: shake;
}

@keyframes shake {
    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}

#credit {
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-size: 0.8rem;
    text-transform: none;
}

#credit a {
    color: #000000;
}

.flip-list-move {
    transition: transform 0.25s;
}

.flip-list-leave-active {
    position: absolute;
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
