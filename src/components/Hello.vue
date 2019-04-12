<template>
  <div class="mainpart" id="mainpart">
    <!-- <mycomponent></mycomponent> -->
    <div class="slide-container">
      <div v-for="value in album">
        <!-- <span v-if="value.status">{{value.ig}}{{value.status}}</span> -->
        <img v-bind:src="value.url" v-if="value.status" class="slide-img" >
      </div>
      <button v-on:click="prev" class="slide-prev">last</button>
      <button v-on:click="next" class="slide-next">next</button>
    </div>
    <!-- novel list -->
    <div class="booklist">
      <div class="book" v-for="book in books">
        <img v-bind:src="book.cover">
        <div class="book-title">{{book.title}}</div>
        <div class="book-info">{{book.info}}</div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  // eslint-disable-next-line
  name: "Hello",
  data() {
    return {
      timer: null,//计时器id
      img: 0,//显示的图片索引
      isSelect:this.isSelect = this.$route.name,
      album: [
        {
          url: require("../assets/logo.png"),
          status: true,
          ig: 0
        },
        {
          url: require("./../assets/test.png"),
          status: false,
          ig: 1
        },
        {
          url: require("./../assets/logo.png"),
          status: false,
          ig: 2
        }
      ],
      books:[
        {
          title:"test",
          cover:require("./../assets/test.png"),
          info:"info"
        },
        {
          title:"test",
          cover:require("./../assets/test.png"),
          info:"info"
        }
      ],
    };
  },
  created() {
    let _this = this;
    this.timer = setInterval(function() {
      _this.next();
    }, 2000);
  },
  methods: {
    prev() {//轮播图上一页
      var i = this.img - 1;
      if (i < 0) {
        i = this.album.length - 1;
      }
      var j = this.img;
      this.album[i].status = true;
      this.album[j].status = false;
      this.img = i;
    },
    next() {//轮播图下一页
      var i = this.img + 1;
      if (i > this.album.length - 1) {
        i = 0;
      }
      var j = this.img;
      this.album[i].status = true;
      this.album[j].status = false;
      this.img = i;
    }
  },
  watch: {
    img(before, after) {
      clearInterval(this.timer);
      let _this = this;
      this.timer = setInterval(function() {
        _this.next();
      }, 2000);
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    num: function() {
      return this.books.length;
    }
  },
  watch:{
    '$router'(to,from){
      console.log(from);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./../assets/css/hello.css";
/* @import './../assets/css/iconfont.css'; */
</style>
