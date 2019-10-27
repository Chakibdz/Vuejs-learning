<template>
    <div class="container">
        <img v-if="selected" :src="selected" alt="" />
    </div>
</template>

<script>
var photos = [
    'https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com',
    'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com',
    'https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.com',
    'https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net',
    'https://via.placeholder.com/150'
]
export default {
    name: 'Random',
    data: function() {
        return {
            photos: photos,
            selected: null
        }
    },
    created() {
        this.selected = this.randomPhoto(this.photos)
    },
    methods: {
        randomPhoto(img) {
            return img[Math.floor(Math.random() * photos.length)]
        }
    }
}
</script>

<style></style>
