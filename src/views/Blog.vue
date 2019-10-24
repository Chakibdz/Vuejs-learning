<template>
    <div>
        <div class="container">
            <h1>{{ pageName }}</h1>
            <p>{{ desc }}</p>
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="posts-place">
                            <BlogPosts />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="sidebare">
                            <SidesBare />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogPosts from "@/components/blog/BlogPosts.vue";
import SidesBare from "@/components/global/SidesBare.vue";

export default {
    name: "Blog",
    components: {
        BlogPosts,
        SidesBare
    },
    data: function() {
        return {
            pageName: "blog page",
            desc: "This is blog us page"
        };
    }
};
</script>
