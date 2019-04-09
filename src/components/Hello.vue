<template>
  <div class="mainpart">
    <button v-on:click="prev">last</button>
    <button v-on:click="next">next</button>
    <div v-for="value in album">
      <span v-if="value.status">{{value.ig}}{{value.status}}</span>
      <img v-bind:src="value.url" v-if="value.status" class="slide-img">
    </div>
    
  </div>
</template>
<script>
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
  methods: {
    prev(){
      var i = this.img -1;
      if(i<0){
        i = this.album.length - 1; 
      }
      console.log(i);
      this.album[i] = true;
      this.album[this.img].status = false;
      this.img = i;
    },
    next(){
      var i = this.img + 1;
      console.log(i);
      if(i>this.album.length-1){
        i = 0; 
      }
      this.album[i].status = true;
      this.album[this.img].status = false;
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
