<template>
    <div class="bg-primary pt-5 content">
        <!--  Page Content-->
        <div class="container">
            <div class="row">
                <!--      Post Content Column-->
                <div class="text-light col-lg-8" v-if="article">
                    <!--        Title-->
                    <div>
                        <h1 class="mt-4">{{article.post.title}}</h1>

                        <!--        Author-->
                        <p class="lead">by {{article.post.author}}</p>

                        <hr />

                        <!--        Date/Time-->
                        <p>
                            Posted on {{article.post.publishDate}}
                        </p>

                        <hr />

                        <!--        Preview Image-->
                        <img
                                class="img-fluid rounded"
                                v-bind:src="article.post.images[0]"
                                v-bind:alt="article.post.title"
                        />

                        <hr />

                        <!--        Post Content-->
                        <p>{{article.post.details}}</p>

                        <hr />

                        <!--         Pagination-->
                        <Pagination v-bind:current-post-id="article.postID"></Pagination>
                    </div>

                </div>
                <div class="col-lg-4">
                    <!--      Widgets-->
                    <Widget/>
                </div>
            </div>
            <!--    .row-->
        </div>
        <!--  .container-->
    </div>

</template>

<script>
    import Widget from "../components/Widget";
    import Pagination from "../components/Pagination";
    export default {
        name: "Post",
        components: {Pagination, Widget},
        created() {
            this.$store.dispatch('fetchPosts', null)
        },
        computed: {
            article(){
                const posts = this.$store.getters.getPosts
                return posts.find(p => p.postID ===  this.$route.params.id)

            }
        }
    }
</script>

<style scoped>

</style>