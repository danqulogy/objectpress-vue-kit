<template>
    <div v-if="content" class="card mb-4">
<!--        <img class="card-img-top"-->
<!--             v-bind:src="content.post.images[0]"-->
<!--                v-bind:alt="content.title"-->
<!--        />-->
        <div class="card-body">
            <h2 class="card-title">{{content.post.title}}</h2>
            <p class="card-text">{{content.post.summary}}</p>
            <router-link v-bind:to="'post/'+content.postID" class="btn btn-primary">
                Read More &rarr;
            </router-link>
        </div>
        <div class="card-footer text-muted">
            Posted on {{content.post.publishDate}}
            by <router-link to="/">{{content.post.author}}</router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: "PostCard",
        props:{
            content: Object
        }
    }
</script>

<style scoped>

</style>