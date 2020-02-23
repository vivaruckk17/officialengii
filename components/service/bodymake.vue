<template>
  <div class="homeservice">
    <div class="container allservice">
      <div id="body" class="row">
        <router-link to="/service/bodymake">
          <img
            src="~assets/indeximg/bodymake.png"
            width="87%"
            height="100%"
            alt
            class="img-fluid d-block mx-auto"
          />
          <div class="row body-texts text-white">
            <div class="col-5 offset-5 ">
              <p class="text-white body-texts-back">ダイエットサポート</p>
            </div>
            <div class="col-2"></div>
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
#body {
  margin-top: 3%;
}

#body {
  position: relative;
  text-align: center;
  overflow: hidden; /*拡大時にはみ出た部分を隠す*/
  background: #000;
  width: 87%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
}
.body-texts-back{
  background-color: rgba(204, 204, 204, 0.404);
}
#body img {
  border-radius: 20px;
  display: block;
  transition-duration: 0.3s;
  width: 100%;
}
#body img:hover {
  transform: scale(1.1);
  transition-duration: 0.3s;
  opacity: 0.8;
}

.bodyintext {
  text-align: center;
  position: relative;
  top: 40px;
}
.bodyintext p {
  font-size: 3vw;
  font-family: "游ゴシック Medium";
  color: white;
}

.body-texts {
  width: 100%;
  position: absolute;
  top: 60%;
}
.body-texts p {
  font-size: 2.7vw;
  font-weight: 600;
}
</style>