<template>
  <div class="main">
    <engiiheader />
    <div class="blankc"></div>
    <div class="container">
      <div class="pg">
        <img
          src="~assets/service/chienowa/chienowa.jpg"
          width="100%"
          height="656px"
          class="img-fluid"
        />
        <div class="row chie-know">
          <div class="offset-1 col-5 know-text text-white">
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
    <engiifooter />
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
* {
  font-family: "游ゴシック Medium";
}
.blankc {
  padding-top: 8%;
}
.servicetitle {
  margin-top: 3%;
}

#coment_know,
#coment-chie {
  font-size: 2.9vw;
}

#coment-chie {
  padding-top: 20%;
  padding-left: 20%;
}
.pg {
  position: relative;
}
.pg img {
  border-radius: 20px;
}
.know-text {
  position: absolute;
  top: 20%;
}
.know-text p {
  font-size: 2vw;
}
.chie-text {
  position: absolute;
  top: 80%;
}
.chie-text p {
  font-size: 2vw;
}
</style>