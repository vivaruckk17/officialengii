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
            <img src="~assets/engii.png" width="50%" height="auto" class="img-fluid" />
          </nuxt-link>
        </div>
        <li class="nav-item col-auto homepad">
          <router-link to="/home">
            <p class="nav-link">HOME</p>
          </router-link>
        </li>
        <li class="nav-item col-auto">
          <router-link to="/service/servicehome">
            <p class="nav-link">SERVICE</p>
          </router-link>
        </li>
        <li class="nav-item col-auto">
          <router-link to="/blog">
            <p class="nav-link">BLOG</p>
          </router-link>
        </li>
        <li class="nav-item col-auto">
          <router-link to="/news">
            <p class="nav-link">NEWS</p>
          </router-link>
        </li>
        <li class="nav-item col-auto">
          <router-link to="/contact">
            <p class="nav-link">CONTACT</p>
          </router-link>
        </li>
        <div class="col-2"></div>
      </ul>
    </div>
    <div id="menu-background"></div>
  </div>
</template>
<script>
export default {};
</script>
    
<style>
* {
  font-family: "游ゴシック Medium";
}
@media screen and (max-width: 480px) {
  .engii-icon{
    margin-top: 10px;
  }
  .homepad{
    margin-top: 15px;
  }
  #ham-menu {
    background-color: #fff; /*メニュー背景色*/
    box-sizing: border-box;
    height: 25%;
    padding: 0 10px; /*メニュー内部上下左右余白*/
    position: fixed;
    right: -100px; /*メニュー横幅①と合わせる*/
    top: 0;
    transition: transform 0.2s linear 0s; /*0.3s は変化するのにかかる時間*/
    width: 100px; /*メニュー横幅①*/
    z-index: 1000;
    border-radius: 0 0 0 20px;
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
    font-size: 30px; /*アイコン（フォント）サイズ*/
    height: 30px; /*アイコン縦高さ*/
    line-height: 30px; /*縦位置中央化*/
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    width: 30px; /*アイコン横幅*/
    transition: all 0.2s linear 0s; /*0.3s はアニメーションにかかる時間*/
    z-index: 1000;
  }
  #menu-cb {
    display: none; /*チェックボックス本体は消しておく*/
  }
  #menu-cb:checked ~ #ham-menu,
  #menu-cb:checked ~ #menu-icon {
    transform: translate(-100px); /*メニュー本体横幅 width と合わせる*/
  }
  #menu-cb:checked ~ #menu-background {
    opacity: 0.5;
    z-index: 999;
  }
  .nav-link {
    color: black;
    font-size: 10px;
    margin: 0;
  }
  .eingii-logo {
    display: none;
  }
  .nav {
    padding-top: 0;
  }
  .nav-item{
    padding: 0;
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
    font-size: 15px;
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


