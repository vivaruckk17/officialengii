<template>
  <div class="homeservice">
    <div class="container allservice">
      <div id="work" class="row">
        <router-link to="/service/workinterview">
          <img
            src="~assets/indeximg/room-iFIht7bf-Cs-unsplash.png"
            width="87%"
            height="100%"
            alt
            class="img-fluid d-block mx-auto"
          />
          <div class="row work-texts">
            <div class="col-auto offset-5">
              <p class="text-white work-texts-back">ワークインタビュー</p>
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
#work {
  position: relative;
  text-align: center;
  overflow: hidden; /*拡大時にはみ出た部分を隠す*/
  background: #000;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 87%;
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
  opacity: 0.8; /* 小さくするほど暗くなります */
}
.workintext {
  text-align: center;
  position: relative;
  top: 40px;
}
.workintext p {
  font-size: 3vw;
  color: white;
}
.work-texts-back{
  background-color: rgba(204, 204, 204, 0.404);
}
.work-texts {
  width: 100%;
  position: absolute;
  top: 60%;
}
.work-texts p {
  font-size: 2.7vw;
  font-weight: 600;
}
</style>