<template>
  <div id="app">
    <div id="mask-cover"></div>
    <div id="mask-cover-content"></div>
    <div class="main">
      <nav class="top-nav" v-bind:class="active" v-on:click.prevent>
        <span>{{title}}</span>
        <div class="inline content-nav">
          <router-link  to="/hello" ><a href="#" class="hello" v-on:click="makeActive('hello')">Home</a></router-link>
          <router-link  to="/world" ><a href="#" class="world" v-on:click="makeActive('/world')">Projects</a></router-link>
          <a href="#" class="services" v-on:click="makeActive('services')">Services</a>
          <a href="#" class="contact" v-on:click="makeActive('contact')">Contact</a>
        </div>
      </nav>
      <div class="router-container"><router-view/></div>
      
    </div>
    <div class="footer">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "Welcome to Yur Vue.js App",
      active: "hello",
      title: "Vue"
    };
  },
  methods: {
    makeActive: function(item) {
      // 模型改变，视图会自动更新
      this.active = item;
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  watch:{
    '$route.path':{
      handler: function (val, oldVal) {
        let path = val.substr(1)
        console.log(path);
        this.makeActive(path);
      }
    }
  },
  components:{
    'app-com':`<span>全局组件<span>`
  }

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  width: 100%;
  overflow: hidden;
}
.footer {
  text-align: center;
  width: 100%;
  border-top: black 1px solid;
  font-style: italic;
}
body {
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
.inline {
  display: inline;
}
.main {
  width: 100%;
  min-height: 50em;
  background-color: rgba(248, 245, 245, 0.986);
  margin: 0 auto;
}
.router-container{
  width:70%;
  margin:0 auto;
}
.top-nav {
  width: 100%;
  background-color: rgb(18, 19, 19);
}
h1,
h2 {
  font-weight: normal;
  margin: 0;
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
nav span {
  line-height: 40px;
  font-size: 20px;
  margin-left: 30px;
  font-style: italic;
  color: antiquewhite;
}
nav {
  display: inline-block;
  margin: 0px auto;
  background-color: #070707;
  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
}

nav a {
  display: inline-block;
  padding: 18px 30px;
  color: #fff !important;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  background-color: transparent;
  -webkit-transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
  transition: background-color 0.25s;
}

nav a:first-child {
  border-radius: 2px 0 0 2px;
}

nav a:last-child {
  border-radius: 0 2px 2px 0;
}
nav.hello .hello,
nav.world .world,
nav.services .services,
nav.contact .contact {
  background-color: #e35885;
}
a,
a:visited {
  outline: none;
  color: #021218;
}

a:hover {
  text-decoration: none;
  /* border: #78afdb 1px solid; */
  background-color: rgba(100, 96, 96, 0.5);
}
nav span {
  margin-left: 50px;
}
.content-nav {
  margin: 0 300px;
}
</style>