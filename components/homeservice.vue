<template>
  <div class="homeservice">
    <div class="container allservice">
      <div id="work" class="row" v-scroll="handleScroll">
        <router-link to="/service/workinterview">
          <img
            src="~assets/indeximg/room-iFIht7bf-Cs-unsplash.png"
            width="87%"
            height="100%"
            alt
            class="img-fluid d-block mx-auto"
          />
          <div class="row work-texts text-white">
            <div class="col-5 offset-5">
              <p class="text-white">ワークインタビュー</p>
            </div>
            
          </div>
        </router-link>
      </div>
      <div id="body" class="row" v-scroll="handleScroll">
        <router-link to="/service/bodymake">
          <img
            src="~assets/indeximg/bodymake.png"
            width="87%"
            height="100%"
            alt
            class="img-fluid d-block mx-auto"
          />
        </router-link>
        <div class="row body-texts text-white">
          <div class="col-5 offset-5">
            <router-link to="/service/bodymake">
              <p class="text-white">ボディメイクサポート</p>
            </router-link>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
      <div id="chie" class="row" v-scroll="handleScroll">
        <router-link to="/service/chienowa">
          <img
            src="~assets/indeximg/UNADJUSTEDNONRAW_thumb_b01.png"
            width="87%"
            height="100%"
            alt
            class="img-fluid #chie"
          />
          <div class="row chie-texts text-white">
            <div class="col-5 offset-5">
              <p class="text-white">知恵の輪</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.allservice {
  text-align: center;
}
#work {
  margin-top: 7%;
}
#body {
  margin-top: 3%;
}
#chie {
  margin-top: 3%;
}
#work,
#body,
#chie {
  position: relative;
  text-align: center;
  overflow: hidden; /*拡大時にはみ出た部分を隠す*/
  background: #000;
  border-radius: 20px;

}
#work img {
  border-radius: 20px;
  display: block;
  transition-duration: 0.3s;
    width: 100%;

}
#work img:hover {
  transform: scale(1.1); /*画像の拡大率*/
  transition-duration: 0.3s;
  opacity: 0.8;	/* 小さくするほど暗くなります */
}
#body img {
  border-radius: 20px;
}
#chie img {
  border-radius: 20px;
}
.workintext {
  text-align: center;
  position: relative;
  top: 40px;
}
.workintext p {
  font-size: 2vw;
  font-family: "游ゴシック Medium";
  color: white;
}
.bodyintext {
  text-align: center;
  position: relative;
  top: 40px;
}
.bodyintext p {
  font-size: 2vw;
  font-family: "游ゴシック Medium";
  color: white;
}
.chieintext {
  text-align: center;
  position: relative;
  top: 40px;
}
.chieintext p {
  font-size: 2vw;
  font-family: "游ゴシック Medium";
  color: white;
}
.work-texts,
.body-texts,
.chie-texts {
  width: 100%;
  position: absolute;
  top: 60%;
}
.work-texts p,
.body-texts p,
.chie-texts p {
  font-size: 2vw;
}
</style>