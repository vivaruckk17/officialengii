<template>
  <div class="main">
    <engiiheader />
    <div class="blankc"></div>
    <div class="container">
      <div class="pg">
        <img
          src="~assets/indeximg/enchiremake.png"
          width="90%"
          height="90%"
          class="img-fluid"
          alt="知恵の輪"
        />
        <div class="row chie-know">
          <div class="offset-1 col-auto know-text text-white">
            <p>知りたかったことを知ろう</p>
          </div>
          <div class="col-6"></div>
        </div>
        <div class="row chie-chie">
          <div class="offset-8 col-auto chie-text text-white">
            <p>EnGii知恵の輪</p>
          </div>
        </div>
      </div>
    </div>
    <servicetitle class="servicetitle" />
    <div class="cominig-soon" style="width:75% !important;margin:0 auto;">
      <img class="w-100" src="~assets/coming_soon.png" />
    </div>
    <div class="chieblank"></div>
    <engiifooter class="bottomfoot" />
  </div>
</template>

<script>
import servicetitle from "~/components/servicetitle.vue";
import engiiheader from "~/components/engiiheader.vue";
import engiifooter from "~/components/engiifooter.vue";
export default {
  components: {
    servicetitle,
    engiiheader,
    engiifooter
  }
};
</script>

<style>
.blankc {
  padding-top: 8%;
}
.servicetitle {
  margin-top: 3%;
}
#coment-chie {
  padding-top: 20%;
  padding-left: 20%;
}
.pg {
  position: relative;
  text-align: center;
}
.pg img {
  border-radius: 20px;
}
.know-text {
  position: absolute;
  top: 20%;
}
.know-text p {
  font-size: 2.7vw;
  font-weight: 600;
  background-color: rgba(204, 204, 204, 0.404);
}
.chie-text {
  position: absolute;
  top: 80%;
}
.chie-text p {
  font-size: 2.3vw;
  font-weight: 600;
  background-color: rgba(204, 204, 204, 0.404);
}
@media screen and (min-width: 767px) {
  .chieblank {
    height: 0;
  }
}
@media screen and (max-width: 767px) {
  .chieblank {
    height: 100px;
  }
}
</style>