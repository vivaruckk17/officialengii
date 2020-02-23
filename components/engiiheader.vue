<template>
  <!--EnGiiロゴが入るクラス-->
  <div class="header-contaner rgba">
    <div class="row">
      <div class="offset-4 col-7 engii-icon">
        <img src="~assets/engii.png" width="50%" height="200px" class="img-fluid" />
      </div>
    </div>
    <input id="menu-cb" type="checkbox" value="off" />
    <label id="menu-icon" for="menu-cb">≡</label>
    <label id="menu-background" for="menu-cb"></label>
    <div id="ham-menu">
      <ul class="nav row" id="anchor">
        <div class="col-3 eingii-logo">
          <nuxt-link v-scroll-to="'#anchor'" to>
            <img src="~assets/logo/logo_engii2.png" width="50%" height="auto" class="img-fluid" />
          </nuxt-link>
        </div>
        <div class="col-md-1"></div>
        <li class="nav-item col-md-auto">
          <router-link to="/home" class="nav-link link-box homepad">HOME</router-link>
        </li>
        <li class="nav-item col-md-auto">
          <router-link to="/service/servicehome" class="nav-link link-box">SERVICE</router-link>
        </li>
        <li class="nav-item col-md-auto">
          <router-link to="/blog" class="nav-link link-box">BLOG</router-link>
        </li>
        <li class="nav-item col-md-auto">
          <router-link to="/news" class="nav-link link-box">NEWS</router-link>
        </li>
        <li class="nav-item col-md-auto">
          <router-link to="/contact" class="nav-link link-box">CONTACT</router-link>
        </li>
        <div class="col-1"></div>
      </ul>
    </div>
    <div id="menu-background"></div>
  </div>
</template>
<script>
export default {};
</script>
    
<style>

@media screen and (max-width: 767px) {
  .engii-icon {
    margin-top: 10px;
  }
  .homepad {
    margin-top: 50px;
  }
  #ham-menu {
    background-color: #fff; /*メニュー背景色*/
    box-sizing: border-box;
    height: 100%;
    padding: 0 10px; /*メニュー内部上下左右余白*/
    position: fixed;
    right: -200px; /*メニュー横幅①と合わせる*/
    top: 0;
    transition: transform 0.2s linear 0s; /*0.3s は変化するのにかかる時間*/
    width: 200px; /*メニュー横幅①*/
    z-index: 1000;
  }

  #menu-background {
    background-color: #333; /*黒背景部分背景色*/
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

  #menu-icon {
    background-color: #fff; /*アイコン部分背景色*/
    border-radius: 0 0 0 10px; /*左下角丸*/
    color: #333; /*アイコン（フォント）色*/
    cursor: pointer;
    display: block;
    font-size: 50px; /*アイコン（フォント）サイズ*/
    height: 50px; /*アイコン縦高さ*/
    line-height: 50px; /*縦位置中央化*/
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    width: 50px; /*アイコン横幅*/
    transition: all 0.2s linear 0s; /*0.3s はアニメーションにかかる時間*/
    z-index: 1000;
  }
  #menu-cb {
    display: none; /*チェックボックス本体は消しておく*/
  }
  #menu-cb:checked ~ #ham-menu,
  #menu-cb:checked ~ #menu-icon {
    transform: translate(-200px); /*メニュー本体横幅 width と合わせる*/
  }
  #menu-cb:checked ~ #menu-background {
    opacity: 0.5;
    z-index: 999;
  }
  .nav-link {
    color: black;
    font-size: 20px;
    font-weight: 600;
  }
  .eingii-logo {
    display: none;
  }
  .nav {
    padding-top: 0;
  }
  .nav-item {
    padding: 10px 0;
    margin: 0 auto;
    text-align: center;
  }
}

@media screen and (min-width: 767px) {
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
    font-weight: 600;
    color: white;
  }
  .nav-link:hover {
    text-decoration: none;
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

  .nav-link {
    position: relative;
    display: inline-block;
    text-decoration: none;
    padding-bottom: 0;
  }
  .nav-link::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: "";
    width: 100%;
    height: 3px;
    background: #00CDFF;
  
    transform: scale(0, 1);
    transform-origin: right top;
    transition: transform 0.3s;
  }
  .nav-link:hover::after {
    transform-origin: left top;
    transform: scale(1, 1);
  }
  .nav-link:hover {
    text-decoration: none;
    color: white;
  }
}
</style>


