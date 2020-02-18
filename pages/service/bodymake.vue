<template>
  <div class="main">
    <engiiheader />
    <div class="blankb"></div>
    <div class="container">
      <div class="pg">
        <img
          src="~assets/service/bodymake/bodymakeTop.jpg"
          alt="ボディメイク"
          class="img-fluid"
        />
        <div class="row">
          <p id="coment_support" class="offset-1 col-auto">
            「なりたい自分の姿」に向けて
            <br />頑張るあなたをサポートします
          </p>
        </div>
        <div class="row">
          <p id="coment-body" class="text-white offset-8 col-auto">ボディメイクサポート</p>
        </div>
      </div>
    </div>
    <servicetitle class="servicetitle" />
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-5 offset-1">
          <h3 class="sup">サポート説明</h3>
          <div class="Description-pgarea">
            <img
              src="~assets/service/bodymake/body-description.png"
              alt
              width="100%"
              height="100%"
              class="img-fluid"
            />
          </div>
        </div>

        <div class="col-md-5 offset-1 col-10">
          <div class="Description">
            <p>
              【痩せたいけどダイエットが続かな...】
              <br />【体を絞るにはどういう食事がいいんだろう】
              <br />【トレーニングのメニューは何がいいの】
              <br />【ジムって高いな、そもそも近くにジムがないし】
              <br />【パーソナルトレーナーってこんなにも高いんだ】 等々
              <br />
            </p>
            <p>
              自分の体型を変えたくても様々な理由から
              <br />1歩踏み出せない人が多いと思います。
              <br />私たちはそんな方々のために、個人の生活リズムや環境、運動能力に合わせたアドバイスで、なりたい姿をサポートをします！
            </p>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </div>

    <div class="container Figure">
      <div class="row flows">
        <div class="col-1"></div>
        <div class="col-10 boxarea">
          <h3 class="flow">サポートの流れ</h3>
          <div class="row">
            <div class="col-1 col-md-2"></div>
            <div class="col-10 col-md-8 center">
              <div class="Registration enclosure">
                <h4 class="h4-size">LINE公式サイト登録</h4>
                <div class="row">
                  <div class="col-1"></div>
                  <div class="col-md-10 left">
                    <p>サポートを始めるにあたってメッセージのやり取りをする際に必要になります</p>
                    <p>※質問等がある場合は「CONTACT」の「ボディーメイクサポート」からお願いします</p>
                  </div>
                </div>
              </div>

              <!-- 矢印 -->
              <triangle />

              <div class="counseling enclosure">
                <h4 class="h4-size">カウンセリング</h4>
                <div class="row">
                  <div class="col-md-1"></div>
                  <div class="col-md-10 left">
                    <p>
                      ・今の生活リズム・ダイエット、体作りをしたい目的・今のお悩み
                      <br />・過去のダイエット経験 ・運動の経験、得意不得意 ・好き嫌い
                      <br />・現在の身長、体重、体脂肪率（任意）
                    </p>
                  </div>
                  <div class="col-md-1"></div>
                </div>
              </div>

              <triangle />

              <div class="goal enclosure">
                <h4 class="h4-size">目標設定</h4>
                <div class="row">
                  <div class="col-md-1"></div>
                  <div class="col-md-10 left">
                    <p>
                      カウンセリングした上で、あなたのなりたい姿に沿った目標設定をし目標達成に向けて次の日からサポートします！
                      <br />なりたい姿の実現！
                    </p>
                  </div>
                  <div class="col-md-1"></div>
                </div>
              </div>

              <triangle />

              <div class="support enclosure">
                <h4 class="h4-size">サポート</h4>
                <div class="row">
                  <div class="col-md-2"></div>
                  <div class="col-md-8 left">
                    <p>
                      直接会わなくても大丈夫！！
                      <br />基本、メッセージやお電話にてサポートします。
                      <br />朝に1日の流れを確認し
                      <br />夜寝る前にその日の振り返りをします。
                    </p>
                  </div>
                  <div class="col-md-2"></div>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>

    <div class="container　application">
      <div class="row">
        <div class="col-8 offset-2 left-text">
          <h3 class="application-title">お申込み</h3>
          <p class="underline blankapp">
            <router-link to="/service/terms">利用規約</router-link>をご確認いただき、ご承諾いただける場合はページ下部の「同意する」ボタンを押して
            次の画面へお進みください。
          </p>
        </div>
      </div>
      <div class="cominig-soon" style="width:75% !important;margin:0 auto;">
        <img class="w-100" src="~assets/coming_soon.png" />
      </div>
    </div>
    <engiifooter />
  </div>
</template>

<script>
import servicetitle from "~/components/servicetitle.vue";
import engiiheader from "~/components/engiiheader.vue";
import engiifooter from "~/components/engiifooter.vue"; // footerをインポート
import triangle from "~/components/triangle.vue";
export default {
  components: {
    servicetitle,
    engiiheader,
    engiifooter,
    triangle
  }
};
</script>

<style>
* {
  font-family: "游ゴシック Medium";
}

.blankb {
  padding-top: 8%;
}

.servicetitle {
  margin-top: 3%;
  padding-bottom: 50px;
}

.Description-pgarea img {
  border-radius: 20px;
}

#coment_support {
  color: #7e7e7e;
  position: absolute;
  top: 20%;
  font-size: 2vw;
}

#coment-body {
  position: absolute;
  top: 80%;
  font-size: 2vw;
}

.body-comment {
  padding-top: 6%;
}

.before,
.after {
  font-size: 1.9vw;
}

.pg {
  position: relative;
}

.bodymake-pg {
  background-size: 100% auto;
  background-position: center;
  height: 100%;
  width: 100%;
}

.sup {
  border-left: solid 3px #00cdff;
  color: #838383;
  font-size: 2vw;
}

.Description > p {
  font-size: 15px;
  text-align: left;
  margin-top: 8%;
}

.center {
  text-align: center;
}

.boxarea {
  background-color: #f9f9f9;
}

.center > p {
  font-size: 1.8vw;
  text-align: center;
}

.boxarea {
  padding-top: 30px;
}

.flow {
  text-align: left;
  font-size: 2vw;
}

.enclosure {
  border: solid 2px #707070;
  margin-bottom: 30px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
}
/* 矢印 */

.application {
  padding-top: 100px;
}

.left {
  text-align: left;
}
.col-lg-8 > h5 {
  margin-bottom: 20px;
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}

.body-text {
  position: absolute;
  top: 30%;
  width: 100%;
}

.pg img {
  border-radius: 20px;
}

.application-title {
  font-size: 2.5vw;
  text-align: left;
}

p {
  font-size: 1.8vw;
}

.left-text > p {
  text-align: left;
}
.application-title {
  border-left: solid 3px #00cdff;
  margin-bottom: 50px;
  margin-top: 50px;
  color: #838383;
}
.underline {
  border-bottom: solid 2px #e7e7e7;
  margin-bottom: 30px;
}
.h4-size {
  font-size: 2.3vw;
}
@media screen and (min-width: 767px) {
  .boxarea > .flow {
    border-left: solid 3px #00cdff;
    color: #838383;
  }

  .flows {
    padding-top: 80px;
  }
}

@media screen and (max-width: 767px) {
  .Description > p {
    font-size: 10px;
  }
  .flow {
    border-left: solid 2px #00cdff;
  }

  .flows {
    padding-top: 50px;
  }
}
</style>