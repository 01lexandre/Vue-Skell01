<template>
  <div class="container ">
    <h1>{{ msg }}</h1>
    <button class="btn btn-primary">Default<div class="ripple-container"></div></button>
    <div class="form-group label-floating is-empty">
      <label class="control-label">With Floating Label</label>
      <input type="email" class="form-control">
      <span class="material-input"></span></div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your VueSkell01'
      }
    }
  }
</script>
