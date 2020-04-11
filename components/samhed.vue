<template>
  <!--EnGiiロゴが入るクラス-->
  <div class="container">
    <a
      class="menu-trigger"
      href="#"
      v-on:click="isActive01=!isActive01"
      v-bind:class="{active:isActive01}"
    >
      <span></span>
      <span></span>
      <span></span>
    </a>
    <ul class="nav row" id="anchor">
      <div class="col-md-1"></div>
      <li class="nav-item col-md-auto homepad">
        <router-link to="/index">
          <p class="nav-link link-box">HOME</p>
        </router-link>
      </li>
      <li class="nav-item col-md-auto">
        <router-link to="/service/servicehome">
          <p class="nav-link link-box">SERVICE</p>
        </router-link>
      </li>
      <li class="nav-item col-md-auto">
        <router-link to="/blog">
          <p class="nav-link link-box">BLOG</p>
        </router-link>
      </li>
      <li class="nav-item col-md-auto">
        <router-link to="/news">
          <p class="nav-link link-box">NEWS</p>
        </router-link>
      </li>
      <li class="nav-item col-md-auto">
        <router-link to="/contact">
          <p class="nav-link link-box">CONTACT</p>
        </router-link>
      </li>
      <div class="col-1"></div>
    </ul>
    <div id="menu-background"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive01: false
    };
  }
};
</script>
    



<style>
* {
  font-family: "游ゴシック Medium";
}
@media screen and (max-width: 480px) {
  .menu-trigger,
  .menu-trigger span {
    display: inline-block;
    transition: all 0.4s;
    box-sizing: border-box;
  }
  .menu-trigger {
    background-color: #fff; /*アイコン部分背景色*/
    color: #333; /*アイコン（フォント）色*/
    display: block;
    font-size: 30px; /*アイコン（フォント）サイズ*/
    height: 44px; /*アイコン縦高さ*/
    line-height: 30px; /*縦位置中央化*/
    position: fixed;
    right: 10%;
    text-align: center;
    top: 5%;
    width: 50px; /*アイコン横幅*/
    transition: all 0.2s linear 0s; /*0.3s はアニメーションにかかる時間*/
    z-index: 1000;
  }
  .menu-trigger span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: black;
    border-radius: 4px;
  }
  .menu-trigger span:nth-of-type(1) {
    top: 0;
  }
  .menu-trigger span:nth-of-type(2) {
    top: 20px;
  }
  .menu-trigger span:nth-of-type(3) {
    bottom: 0;
  }

  .menu-trigger.active span:nth-of-type(1) {
    -webkit-transform: translateY(20px) rotate(-45deg);
    transform: translateY(20px) rotate(-45deg);
  }
  .menu-trigger.active span:nth-of-type(2) {
    opacity: 0;
  }
  .menu-trigger.active span:nth-of-type(3) {
    -webkit-transform: translateY(-20px) rotate(45deg);
    transform: translateY(-20px) rotate(45deg);
  }
  #menu-background {
    background-color: white; /*黒背景部分背景色*/
    display: block;
    height: 100%;
    opacity: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: all 0.2s linear 0s; /*0.3s は変化するのにかかる時間*/
    width: 100%;
    z-index: -1;
  }
  .menu-trigger.active ~ #menu-background {
    opacity: 1;
    z-index: 999;
  }
  .link-box {
    visibility: hidden;
  }
  .menu-trigger.active ~ .link-box {
      visibility: visible;
  }
}

@media screen and (min-width: 480px) {
  .header-contaner {
    width: 100%;
    position: fixed;
    z-index: 10;
    text-align: center;
    height: 102px;
  }
  .header-logo {
    background-color: white;
  }
  .rgba {
    background: rgba(77, 76, 74, 0.54);
  }
  .nav {
    padding-top: 3px;
  }
  .nav-link {
    font-size: 18px;
  }
  .link-box {
    padding-top: 10px;
  }
  .nav-item p {
    color: white;
  }
  .engii-icon {
    display: none;
  }
  #menu-cb {
    display: none; /*チェックボックス本体は消しておく*/
  }
  #menu-icon {
    display: none;
  }
}
</style>


