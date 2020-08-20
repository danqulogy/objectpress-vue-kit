import Vue from 'vue'
import Vuex from 'vuex'
import http from '../services/http.service';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, posts){
      state.posts = posts
    }
  },
  actions: {
    fetchPosts(context, limit = null){
      http.post('/content/all', {
        app: '2dc26aa8-ebe0-4c3a-a43d-8f68123aaa65',
        client: 'a9efbd45-9242-4840-ab37-a4ef5fd468ab',
        limit: limit
      }).then(res => {
        context.commit('setPosts', res.data)
      })
    },

    updatePostsAction(context, payload){
      context.commit('setPosts', payload)
    }

  },
  getters: {
    getPosts(state){
      return state.posts
    },

    getPostIds(state){
      return state.posts.map(p => p.postID)
    }
  },
  modules: {
  }
})
