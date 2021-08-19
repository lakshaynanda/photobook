<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <Nav></Nav>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Nav from '../src/components/Nav.vue'
import {mapActions} from 'vuex'
export default {
  components: {
    Nav
  },
  mounted() {
    this.authAction()
  },
  methods: {
    ...mapActions('auth', ['authAction'])
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
