<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <div style="width: 200px;height:50px;border:1px solid #333; border-radius:5px;display: flex;align-items: center;justify-content: center;margin: 20px auto;cursor:pointer;user-select: none" v-ripple>Click me</div>
    <div style="width: 200px;height:50px;border:1px solid #f0f; border-radius:5px;display: flex;align-items: center;justify-content: center;margin: 20px auto;cursor:pointer;user-select: none; color: #f0f" v-ripple>Color stuff</div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
