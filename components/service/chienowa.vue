<template>
  <div class="homeservice">
    <div class="container allservice">
      <div id="chie" class="row">
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
              <p class="text-white chie-texts-back">知恵の輪</p>
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
*{
  font-family:  'Noto Sans JP', sans-serif;
}
.allservice {
  text-align: center;
}

#chie {
  margin-top: 3%;
}

#chie {
  position: relative;
  text-align: center;
  overflow: hidden; /*拡大時にはみ出た部分を隠す*/
  background: #000;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 87%;
}

#chie img {
  border-radius: 20px;
  display: block;
  transition-duration: 0.3s;
  width: 100%;
}
#chie img:hover {
  transform: scale(1.1); /*画像の拡大率*/
  transition-duration: 0.3s;
  opacity: 0.8; /* 小さくするほど暗くなります */
}

.chieintext {
  text-align: center;
  position: relative;
  top: 40px;
}
.chieintext p {
  font-size: 3vw;
  font-family: "游ゴシック Medium";
  color: white;
}
.chie-texts-back{
  background-color: rgba(204, 204, 204, 0.404);
}
.chie-texts {
  width: 100%;
  position: absolute;
  top: 60%;
}

.chie-texts p {
  font-size: 2.7vw;
  font-weight: 600;
}
</style>