<template>
    <div class="post-box">
        <span class="post-views">10</span>
        <h3 class="post-title">title</h3>
        <span class="post-date">12-09-2019</span>
        <p class="post-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            excepturi nulla accusantium animi dolorem debitis, laboriosam neque
            illum esse provident sit? Ducimus inventore sequi exercitationem
            perspiciatis. Neque perspiciatis ullam voluptatibus.
        </p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-authore"> author</span>
            </div>
            <div class="col-sm-6 text-right">
                <span class="post-category"> category</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Post"
};
</script>

<style lang="scss" scoped>
.post-box {
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    .post-views {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: rgb(99, 197, 164);
        border-radius: 4px;
        padding: 1px 5px;
        color: #fff;
        text-align: center;
        font-weight: bold;
    }
    .post-date {
        display: block;
        padding: 0 0 5px;
        color: #888;
        font-size: 14px;
    }
    .post-content {
        line-height: 1.8;
        color: #666;
    }
    .post-authore {
        background-color: #607d8b;
        padding: 6px 10px;
        border-radius: 4px;
        color: #fff;
    }
    .post-category {
        background-color: #e91e63;
        padding: 6px 10px;
        border-radius: 4px;
        color: #fff;
    }
}
</style>
