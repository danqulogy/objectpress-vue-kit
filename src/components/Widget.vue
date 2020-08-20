<template>
    <div>
        <!--  Search Widget-->
        <div class="card my-4">
            <h5 class="card-header">Search</h5>
            <div class="card-body">
                <div class="input-group">
                    <input
                            type="text"
                            class="form-control"
                            placeholder="Search for..."
                    />
                    <span class="input-group-append">
              <button class="btn btn-primary" type="button">
                Go!
              </button>
            </span>
                </div>
            </div>
        </div>

        <!--  Categories Widget-->
        <div class="card my-4">
            <h5 class="card-header">Categories</h5>
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-6">
                        <ul class="list-unstyled mb-0">
                            <li>
                                <router-link to="/">Web Design</router-link>
                            </li>
                            <li>
                                <router-link to="/">HTML</router-link>
                            </li>
                            <li>
                                <router-link to="/">Freebies</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <ul class="list-unstyled mb-0">
                            <li>
                                <router-link to="/">JavaScript</router-link>
                            </li>
                            <li>
                                <router-link to="/">CSS</router-link>
                            </li>
                            <li>
                                <router-link to="/">Tutorials</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!--  Side Widget-->
        <div class="card my-4">
            <h5 class="card-header">Side Widget</h5>
            <div class="card-body">
                You can put anything you want inside of these side widgets. They are
                easy to use, and feature the new Bootstrap 4 card containers!
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Widget"
    }
</script>

<style scoped>

</style>