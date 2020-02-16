<template>
  <div class="container">
    <div class="row">
      <div class="col-4 padding">
        <router-link to="/service/workinterview" exact exact-active-class="active">
          <p class="text-work" id="border-top">ワークインタビュー</p>
        </router-link>
      </div>
      <div class="col-4 padding">
        <router-link to="/service/bodymake" exact exact-active-class="active">
          <p class="text-bodymake" id="border-top">ボディメイクサポート</p>
        </router-link>
      </div>
      <div class="col-4 padding">
        <router-link to="/service/chienowa" exact exact-active-class="active">
          <p class="text-chie" id="border-top">EnGii知恵の輪</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style>
* {
  font-family: "游ゴシック Medium",'Hiragino Kaku Gothic Pro','ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic",'ＭＳ Ｐゴシック',sans-serif;
}

@media screen and (min-width: 480px) {
  #border-top {
    border-top: solid 5px #00cdff;
    text-align: center;
    font-size: 25px;
    height: 50px;
  }
}

@media screen and (max-width: 480px) {
  #border-top {
    border-top: solid 2px #00cdff;
    text-align: center;
    font-size: 8px;
    height: 20px;
  }
  .padding {
    padding: 0 10px;
  }
}

.text-work,
.text-bodymake,
.text-chie {
  color: #707070;
  text-align: center;
}

.active p {
  background-color: #00cdff;
  border-radius: 20px;
  color: white;
}
</style>