<template>
  <div class="mainpart">
    <div class="slide-container">
      <div v-for="value in album">
        <!-- <span v-if="value.status">{{value.ig}}{{value.status}}</span> -->
        <img v-bind:src="value.url" v-if="value.status" class="slide-img">
      </div>
      <button v-on:click="prev" class="slide-prev">last</button>
      <button v-on:click="next" class="slide-next">next</button>
    </div>
    
  </div>
</template>
<script>
import { setInterval } from 'timers';
export default {
  // eslint-disable-next-line
  name: "Hello",
  data() {
    return {
      img:0,
      album: [
        {
          url:require('../assets/logo.png'),
          status:true,
          ig:0,
        },
        {
          'url':require('./../assets/test.png'),
          status:false,
          ig:1,
        },
        {
          'url':require('./../assets/logo.png'),
          status:false,
          ig:2
        },
      ],
    };
  },
  created(){
    let _this = this;
      setInterval(function(){
        _this.next();
      },2000);
  },
  methods: {
    prev(){
      var i = this.img - 1;
      if(i < 0){
        i = this.album.length - 1; 
      }
      var j = this.img;
      this.album[i].status = true;
      this.album[j].status = false;
      this.img = i;
    },
    next(){
      var i = this.img + 1;
      if(i>this.album.length-1){
        i = 0; 
      }
      var j = this.img;
      this.album[i].status = true;
      this.album[j].status = false;
      this.img = i;
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    num: function() {
      return this.books.length;
    }
  }
  
};
function slide(img,album){
  setInterval(function(){
    var i = img + 1;
        if(i>album.length-1){
          i = 0; 
        }
        var j = img;
        album[i].status = true;
        album[j].status = false;
        img = i;
  },2000)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainpart {
  width: 1200px;
  height: 300px;
  margin: 50px auto;
  padding: 50px 20px;
  background-color: rgba(255, 255, 255);
}
.bookcase {
  display: inline;
}
.slide-img{
  width:100%;
  min-height:300px;
  max-height: 300px
}
</style>
