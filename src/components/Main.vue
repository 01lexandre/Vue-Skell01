<template>
  <div id="app" class="wrapper">
    <Sidebar></Sidebar>
    <div class="main-panel">
      <Navbar></Navbar>
      <div class="content">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Sidebar from './partials/Sidebar.vue'
  import Navbar from './partials/Navbar.vue'
  export default {
    name: 'app',
    components: {
      Sidebar,
      Navbar
    }
  }
</script>

<style src="@sass/style.scss" lang="sass"></style>
