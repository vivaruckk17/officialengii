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
            <p></p>
            <p>
              ・人財の宝
              <br />・ボディービルディングサポート
              <br />・ワークインタビュー
              <br />・何でも相談しちゃってよ
            </p>
            <p></p>
            <p>各サービスで様々な面でみなさんの力になれたらなと考えています</p>
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
              <br />新しい出会いや発見が自らにとって良いものだった時、その先の人生は
              <br />大きく変わる気がする... “縁起のいい出会いや発見”を提供したい
              <br />縁起がいい＝ENGII からグループ名が決まりました
            </p>
            <p></p>
            <p>
              私たちENGIIは
              <br />自分たちの今までの経験から「あったらいいな、できたらいいな」
              <br />を形にして、みなさんの力になれればなと思っています。
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
      <hr>
     <!-- <homeservice class="hs" v-scroll="handleScroll3" /> -->
      <workinteview class="wiv" v-scroll="handleScroll3" />
      <bodymake />
      <chienowa />
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
    }
  }
};
</script>

<style>
* {
  margin-left: 0%;
  margin-right: 0%;
  font-family: "游ゴシック Medium";
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
.main-subtext p {
  font-size: 1.9vw;
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
    font-size: 1.0rem;
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
  }
  .vision-subtext {
    position: absolute;
    top: 30px;
    text-align: center;
    width: 84%;
  }
  .vision-subtext p {
    font-size: 0.3rem;
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
    font-size: 1.0rem;
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
  }

  .keii-subtext {
    position: absolute;
    top: 30px;
    width: 84%;
    text-align: center;
  }
  .keii-subtext p {
    font-size: 0.3rem;
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
</style>
