<template>
    <ul class="pagination justify-content-center mb-4">
        <li class="page-item" v-if="(postIds[postIds.indexOf(currentPostId) + 1])">
            <router-link :to="'/post/'+postIds[postIds.indexOf(currentPostId) + 1]"
                class="page-link">
                &larr; Older
            </router-link>
        </li>
        <li class="page-item" v-if="(postIds[postIds.indexOf(currentPostId) -1])">
            <router-link class="page-link"
                    :to="'/post/'+postIds[postIds.indexOf(currentPostId) -1]">
                Newer &rarr;
            </router-link>
        </li>
    </ul>

</template>

<script>
    export default {
        name: "Pagination",
        props: {
            currentPostId: String
        },
        computed: {
            postIds(){
                return this.$store.getters.getPostIds
            }
        }

    }
</script>

<style scoped>

</style>