<template>
  <div class="main">
    <engiiheader />
    <div class="blank"></div>
    <div class="container">
      <div class="mainback">
        <img src="~assets/indeximg/homeTop.png" width="100%" height="656px" alt class="img-fluid" />
        <div class="row main-text">
          <div class="col-1"></div>
          <div class="col-7">
            <img
              src="~assets/indeximg/chach-phrase.png"
              width="100%"
              height="66px"
              alt
              class="img-fluid"
            />
          </div>
          <div class="col-4"></div>
        </div>
        <div class="row main-subtext">
          <div class="col-2"></div>
          <div class="col-8 col-md-auto">
            <p class="text-white">私たちはあなたのなりたい姿を実現する"きっかけ"を作ります</p>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
      <hr />
      <div class="row keiivision" v-scroll="handleScroll">
        <div class="visionback col-6">
          <img
            src="~assets/indeximg/fesremake.png"
            width="100%"
            height="100%"
            alt
            class="img-fluid vision-oya"
          />
          <div class="vision-text text-white">
            <p>「目指すビジョン」</p>
          </div>
          <div class="vision-subtext text-white">
            <p>
              新しい自分に出会えるキッカケをより多く作り
              <br />みんなのありたい姿、なりたい姿を叶える
            </p>
            <p>
              ・ボディービルディングサポート
              <br />・ワークインタビュー
              <br />・就職、進学、恋愛等の相談
            </p>
            <p>各サービスで皆様の力になれたらと考えています</p>
          </div>
        </div>
        <div class="keiiback col-6">
          <img
            src="~assets/indeximg/yakeiremake.jpg"
            width="100%"
            height="100%"
            alt
            class="img-fluid"
          />
          <div class="keii-text text-white">
            <p>「EnGiiの作られた経緯」</p>
          </div>
          <div class="keii-subtext text-white">
            <p>
              「ENGII」
              <br />新しい出会いや発見が自らにとって良いものだった時、
              <br />その先の人生は大きく変わる気がする...
              <br />“縁起のいい出会いや発見”を提供したい
            </p>
            <p>
              私たちENGIIは
              <br />私達の今までの経験から「あったらいいな、できたらいいな」
              <br />を形にして、皆様の力になれたらと思っています。
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="readerback" v-scroll="handleScroll2">
        <router-link to="/homeLeader">
          <img
            src="~assets/indeximg/leadermessageresize.png"
            width="87%"
            height="100%"
            alt
            class="img-fluid"
          />
          <div class="row reader-text text-white">
            <div class="col-5"></div>
            <div class="col-5">
              <p class="text-white">リーダーメッセージ</p>
            </div>
            <div class="col-2"></div>
          </div>
        </router-link>
      </div>
      <hr />
      <!-- <homeservice class="hs" v-scroll="handleScroll3" /> -->
      <workinteview v-bind:class="{sideinleft1: isInScreen}" />
      <bodymake v-bind:class="{sideinleft2: isInScreen}" />
      <chienowa v-bind:class="{sideinleft3: isInScreen}" />
    </div>
    <div class="footer">
      <engiifooter />
    </div>
  </div>
</template>

<script>
import engiiheader from "@/components/engiiheader.vue"; // headerをインポート
import engiifooter from "@/components/engiifooter.vue"; // footerをインポート
import homeservice from "@/components/homeservice.vue";
import workinteview from "@/components/service/workinteview.vue";
import bodymake from "@/components/service/bodymake.vue";
import chienowa from "@/components/service/chienowa.vue";
export default {
  components: {
    engiiheader,
    engiifooter,
    homeservice,
    workinteview,
    bodymake,
    chienowa
  },
  props: {
    offset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scrollY: 0,
      height: 0,
      position: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.onResize);
    window.addEventListener("load", () => {
      this.onScroll();
      this.onResize();
    });
  },
  computed: {
    isInScreen() {
      if (this.scrollY > this.position + this.offset + 50) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    handleScroll: function(evt, el) {
      console.log(window.scrollY);
      console.log(window.outerWidth);

      if (window.outerWidth < 720) {
        if (window.scrollY > 30) {
          el.setAttribute(
            "style",
            "opacity: 1; transform: translate3d(0, -10px, 0)"
          );
        }
        return window.scrollY > 35;
      }
      if (window.outerWidth > 720) {
        if (window.scrollY > 500) {
          el.setAttribute(
            "style",
            "opacity: 1; transform: translate3d(0, -10px, 0)"
          );
        }
        return window.scrollY > 550;
      }
    },
    handleScroll2: function(evt, el) {
      console.log(window.scrollY);
      console.log(window.outerWidth);
      if (window.outerWidth < 720) {
        if (window.scrollY > 70) {
          el.setAttribute(
            "style",
            "opacity: 1; transform: translate3d(0, -10px, 0)"
          );
        }
        return window.scrollY > 75;
      }
      if (window.outerWidth > 720) {
        if (window.scrollY > 780) {
          el.setAttribute(
            "style",
            "opacity: 1; transform: translate3d(0, -10px, 0)"
          );
        }
        return window.scrollY > 830;
      }
    },
    handleScroll3: function(evt, el) {
      console.log(window.scrollY);
      console.log(window.outerWidth);

      if (window.outerWidth < 720) {
        if (window.scrollY > 130) {
          el.setAttribute(
            "style",
            "opacity: 1; transform: translate3d(0, -10px, 0)"
          );
        }
        return window.scrollY > 135;
      }
      if (window.outerWidth > 720) {
        if (window.scrollY > 1300) {
          el.setAttribute(
            "style",
            "opacity: 1; transform: translate3d(0, -10px, 0)"
          );
        }
        return window.scrollY > 1350;
      }
    },
    onScroll() {
      this.scrollY = window.pageYOffset;
    },
    onResize() {
      this.height = document.documentElement.clientHeight;
    },
    getPosition() {
      if (this.$el) {
        return (
          this.$el.getBoundingClientRect().top + this.scrollY - this.height
        );
      } else {
        return 0;
      }
    }
  }
};

</script>





<style>
* {
  margin-left: 0%;
  margin-right: 0%;
  font-family: "Noto Sans JP", sans-serif;
}
.blank {
  padding-top: 8%;
}
.row {
  margin-left: 0%;
  margin-right: 0%;
}
.mainback {
  position: relative;
}
.mainback img {
  border-radius: 5% 5% 5% 5%;
}
.main-text {
  position: absolute;
  top: 50%;
}
.main-subtext {
  width: 100%;
  height: 5%;
  position: absolute;
  top: 65%;
}
@media screen and (min-width: 480px) {
  .main-subtext p {
    font-size: 1.9vw;
  }
}
@media screen and (max-width: 480px) {
  .main-subtext p {
    font-size: 1.9vw;
    font-weight: bold;
  }
}

.keiivision {
  margin-top: 6%;
  text-align: center;
  opacity: 0;
  transition: 1.5s all cubic-bezier(0.48, 0.01, 1, 1);
}
.visionback {
  position: relative;
}
.visionback img {
  border-radius: 5% 5% 5% 5%;
}

@media screen and (min-width: 480px) {
  .vision-text {
    position: absolute;
    top: 15%;
    text-align: center;
    width: 94%;
  }
  .vision-text p {
    font-size: 1rem;
  }
  .vision-subtext {
    position: absolute;
    top: 35%;
    text-align: center;
    width: 94%;
  }
  .vision-subtext p {
    font-size: 0.9rem;
  }
}
@media screen and (max-width: 480px) {
  .vision-text {
    position: absolute;
    top: 10px;
    text-align: center;
    width: 84%;
  }
  .vision-text p {
    font-size: 0.4rem;
    font-weight: bold;
  }
  .vision-subtext {
    position: absolute;
    top: 30px;
    text-align: center;
    width: 84%;
  }
  .vision-subtext p {
    font-size: 0.3rem;
    font-weight: bold;
  }
}
.keiiback {
  position: relative;
  width: 100%;
}
.keiiback img {
  border-radius: 5% 5% 5% 5%;
}
@media screen and (min-width: 480px) {
  .keii-text {
    position: absolute;
    top: 15%;
    width: 94%;
    text-align: center;
  }
  .keii-text p {
    font-size: 1rem;
  }

  .keii-subtext {
    position: absolute;
    top: 35%;
    width: 94%;
    text-align: center;
  }
  .keii-subtext p {
    font-size: 0.9rem;
  }
}
@media screen and (max-width: 480px) {
  .keii-text {
    position: absolute;
    top: 10px;
    width: 84%;
    text-align: center;
  }
  .keii-text p {
    font-size: 0.4rem;
    font-weight: bold;
  }

  .keii-subtext {
    position: absolute;
    top: 30px;
    width: 84%;
    text-align: center;
  }
  .keii-subtext p {
    font-size: 0.3rem;
    font-weight: bold;
  }
}
.readerback {
  position: relative;
  text-align: center;
  width: 100%;
  opacity: 0;
  transition: 1.5s all cubic-bezier(0.48, 0.01, 1, 1);
}
.readerback img {
  border-radius: 20px;
  margin-top: 5%;
}
.reader-text {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 60%;
}
.reader-text p {
  font-size: 2vw;
  border-bottom: solid 1px;
}
.footer {
  margin-top: 5%;
}
.wiv {
  opacity: 0;
  transition: 1.5s all cubic-bezier(0.48, 0.01, 1, 1);
}
.sideinleft1{ 
  animation-name:sample01;
  animation-duration:5s; 
  animation-fill-mode: forwards;
}
@keyframes sample01 {
0% {
 opacity: 1;
 transform: translateX(-2000px);
}
  50%{
    opacity: 1;
     transform: translateX(0);
  }
}
.sideinleft2{ 
  animation-name:sample02;
  animation-duration:6s; 
  animation-fill-mode: forwards;
}
@keyframes sample02 {
0% {
 opacity: 1;
 transform: translateX(-2000px);
}
  50%{
    opacity: 1;
     transform: translateX(0);
  }
}
.sideinleft3{ 
  animation-name:sample03;
  animation-duration:7s; 
  animation-fill-mode: forwards;
}
@keyframes sample03 {
0% {
 opacity: 1;
 transform: translateX(-2000px);
}
  50%{
    opacity: 1;
     transform: translateX(0);
  }
}
</style>
