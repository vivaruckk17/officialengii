<template>
  <div class="main">
    <engiiheader />
    <div class="blankw"></div>
    <div class="container">
      <div class="pg">
        <img
          src="~assets/service/workInterview/room.png"
          width="100%"
          height="656px"
          alt
          class="img-fluid"
        />
        <div class="row">
          <p id="coment_real" class="offset-1 col-auto">いろんな仕事のリアルな声を発信します</p>
        </div>
        <div class="row">
          <p id="coment_work" class="offset-8 col-auto">ワークインタビュー</p>
        </div>
      </div>
    </div>
    <servicetitle class="servicetitle" />

    <div class="container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10 boxs">
          <p class="textbox">
            「こんな仕事もあるんだ！」「この会社、この職種って実際はどうなんだろう」「公務員ってお給料どうかな？」
            「保育士ってやっぱりすごく辛い？」等々みんなが知りたい仕事のことってとても多いですよね。もちろん上記
            のような事だけでなく、本当に多岐にわたる疑問や知りたいことが仕事に対してあったりします。ワークインタビューは
            アルバイトや会社で仕事をしている人の[リアルな声を発信して、これから就職をする人や転職をする人、アルバイトをする人のため
            に少しでもためになればと思いインタビュー形式で質疑応答をし、それをブログにて取りまとめたものになります。
            このサービスが皆さんの暇つぶしやこれからの為になればなと思います。
          </p>
          <div class="col-1"></div>
        </div>
      </div>
      
      <!--<p :class="{'fade-in': scrollY > 150 }">Sample01-FADE-IN</p>-->
      <div class="cominig-soon" style="width:75% !important;margin:0 auto;">
        <img class="w-100" src="~assets/coming_soon.png" />
      </div>
    </div>
    <engiifooter />
  </div>
</template>


<script>
import servicetitle from "~/components/servicetitle.vue";
import engiiheader from "~/components/engiiheader.vue";
import engiifooter from "@/components/engiifooter.vue"; // footerをインポート

export default {
  components: {
    servicetitle,
    engiiheader,
    engiifooter
  },
  data() {
    return {
      // 座標を指定
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
  }
};
</script>

<style>
* {
  font-family:  'Noto Sans JP', sans-serif;
}
.blankw {
  padding-top: 8%;
}

.servicetitle {
  margin-top: 3%;
}

.boxs {
  border: solid 2px #c4c4c4;
  padding: 10px;
  margin: 20px;
}

#coment_real,
#coment_work {
  color: white;
  font-size: 2.9vw;
}

.pg {
  position: relative;
}

.pg img {
  border-radius: 20px;
}
#coment_real {
  position: absolute;
  top: 20%;
  font-size: 2vw;
}
#coment_work {
  position: absolute;
  top: 80%;
  font-size: 2vw;
}
.textbox {
  font-size: 1.5vw;
}


.fade-in{ 
  font-size:40px;
  animation-name:sample01;
  animation-duration:3s; 
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
</style>