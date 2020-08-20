<template>
  <div class="bg-primary pt-5 content">
    <!--  Page Content-->
    <div class="container">
      <div class="row">
        <!--      Blog Entries Column -->
        <div class="col-md-8">
          <div class="text-light my-4">
            <h1>My Blog</h1>
            <h5>Hipster Ipsum</h5>
          </div>

          <!--        Blog Posts-->
          <div>
            <div v-if="posts.length">
              <PostCard v-bind:key="p.postID" v-bind:content="p" v-for="p in posts"></PostCard>

            </div>
            <template v-else>
              <div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title">No Posts articles found</h5>
                  <p class="card-text">We are cooking up some articles. Check another time</p>
                </div>
              </div>
            </template>
          </div>

        </div>

        <div class="col-md-4">
          <!--      Widgets-->
          <widget/>
        </div>

      </div>
      <!--    .row-->
    </div>
    <!--  container-->
  </div>

</template>

<script>
// @ is an alias to /src

import PostCard from "../components/PostCard";
import Widget from "../components/Widget";
export default {
  name: 'Home',
  components: {
    Widget,
    PostCard,
  },
  data: function() {
    return {

    };
  },
  created() {
    this.$store.dispatch('fetchPosts', null)
  },
    computed: {
        posts(){
            return this.$store.getters.getPosts
        }
    }

}
</script>
