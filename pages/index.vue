<template>
  <div class="main">
    <engiiheader />
    <div class="blank"></div>
    <div class="home-main container">
      <div class="mainback">
        <img src="~assets/indeximg/homeTop.png" width="100%" height="100%" alt class="img-fluid" />
        <div class="row main-text">
          <div class="col-1"></div>
          <div class="col-7 toptextback">
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
          <div class="col-md-2 col-xs-2"></div>
          <div class="col-md-8 col-xs-8">
            <p class="text-white subtextback">私たちはあなたのなりたい姿を実現する"きっかけ"を作ります</p>
          </div>
          <div class="col-md-2 col-xs-2"></div>
        </div>
      </div>
      <hr />
      <div class="row keiivision" v-scroll="handleScroll">
        <div class="visionback col-md-6 col-xs-12">
          <img src="~assets/indeximg/fesremake.png" alt class="img-fluid vision-oya" />
          <div class="vision-text text-white">
            <p>「目指すビジョン」</p>
          </div>
          <div class="vision-subtext text-white">
            <p>
              EnGiiが介在し、沢山の人が関わり合うことで
              <br />新しい自分に出会えるキッカケをより多く作り
              <br />ありたい姿、なりたい姿を叶えることができる。
              <br />そんなグループを目指します。
            </p>
            <p>
              私たちEnGiiは
              <br />私達の今までの自身の経験から「あったらいいな、できたらいいな」
              <br />を形にして、皆様の力になれたらと思っています。
            </p>
          </div>
        </div>
        <div class="keiiback col-md-6 col-xs-12">
          <img src="~assets/indeximg/background.jpg" alt class="img-fluid" />
          <div class="keii-text text-white">
            <p>「EnGiiとは」</p>
          </div>
          <div class="keii-subtext text-white">
            <p>なぜ「ENGII」なのか、、、</p>
            <p>
              <br />新しい出会いや発見が自らにとって良いものだった時
              <br />その先の人生は大きく変わる気がする...
              <br />“縁起のいい出会いや発見”を提供したい
              <br />縁起いい＝EnGii となりました。
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="readerback" v-scroll="handleScroll2">
        <router-link to="/homeLeader">
          <img
            src="~assets/indeximg/leadermessage.jpg"
            width="87%"
            height="100%"
            alt
            class="img-fluid"
          />
          <div class="row reader-text text-white">
            <div class="col-5"></div>
            <div class="col-auto rdtextback">
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
}
.blank {
  padding-top: 8%;
}
.toptextback {
  background-color: rgba(204, 204, 204, 0.404);
}
.subtextback {
  background-color: rgba(204, 204, 204, 0.404);
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
@media screen and (min-width: 767px) {
  .main-subtext p {
    text-align: right;
    font-size: 1.3rem;
  }
}
@media screen and (max-width: 767px) {
  .main-subtext p {
    text-align: center;
    font-size: 0.7rem;
    font-weight: bold;
  }
}
.keiivision {
  margin-top: 6%;
  text-align: center;
}
.visionback {
  position: relative;
}
.visionback img {
  border-radius: 5% 5% 5% 5%;
}

@media screen and (min-width: 767px) {
  .visionback img {
    width: 100%;
    height: 100%;
  }
  .keiivision {
    opacity: 0;
    transition: 1.5s all cubic-bezier(0.48, 0.01, 1, 1);
  }
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
@media screen and (max-width: 767px) {
  .visionback img {
    width: 90%;
    height: 90%;
  }
  .vision-text {
    position: absolute;
    top: 15%;
    text-align: center;
    width: 95%;
  }
  .vision-text p {
    text-align: center;
    font-size: calc(8px + 0.4vw);
  }
  .vision-subtext {
    position: absolute;
    top: 30%;
    text-align: center;
    width: 95%;
  }
  .vision-subtext p {
    font-size: calc(8px + 0.3vw);
  }
}
.keiiback {
  position: relative;
  width: 100%;
}
.keiiback img {
  border-radius: 5% 5% 5% 5%;
}
@media screen and (min-width: 767px) {
  .keiiback img {
    width: 100%;
    height: 100%;
  }
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
@media screen and (max-width: 767px) {
  .keiiback img {
    width: 90%;
    height: 90%;
  }
  .keii-text {
    position: absolute;
    top: 15%;
    width: 95%;
    text-align: center;
  }
  .keii-text p {
    font-size: calc(8px + 0.4vw);
  }

  .keii-subtext {
    position: absolute;
    top: 30%;
    width: 95%;
    text-align: center;
  }
  .keii-subtext p {
    font-size: calc(8px + 0.3vw);
  }
}
@media screen and (min-width: 767px) {
  .readerback {
    position: relative;
    text-align: center;
    width: 100%;
    opacity: 0;
    transition: 1.5s all cubic-bezier(0.48, 0.01, 1, 1);
  }
}
@media screen and (max-width: 767px) {
  .readerback {
    position: relative;
    text-align: center;
    width: 100%;
  }
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
  font-size: 2.7vw;
  font-weight: 600;
  background-color: rgba(204, 204, 204, 0.404);
}
.footer {
  margin-top: 5%;
}
.wiv {
  opacity: 0;
  transition: 1.5s all cubic-bezier(0.48, 0.01, 1, 1);
}
@media screen and (min-width: 767px) {
  .sideinleft1 {
    animation-name: sample01;
    animation-duration: 5s;
    animation-fill-mode: forwards;
  }
  @keyframes sample01 {
    0% {
      opacity: 1;
      transform: translateX(2000px);
    }
    50% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .sideinleft2 {
    animation-name: sample02;
    animation-duration: 6s;
    animation-fill-mode: forwards;
  }
  @keyframes sample02 {
    0% {
      opacity: 1;
      transform: translateX(2000px);
    }
    50% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .sideinleft3 {
    animation-name: sample03;
    animation-duration: 7s;
    animation-fill-mode: forwards;
  }
  @keyframes sample03 {
    0% {
      opacity: 1;
      transform: translateX(2000px);
    }
    50% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
@media screen and (min-width: 1024px) {
  .home-main {
    max-width: 1024px;
  }
}
</style>
