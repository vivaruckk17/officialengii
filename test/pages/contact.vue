<template>
  <div class="main">
    <engiiheader />
    <div class="main-contact">
      <div class="blankcon"></div>
      <div class="background-image-top container">
        <img src="~@/assets/contact/contact.jpg" />
        <div class="container middle-contact">
          <div class="middle-box">
            <div class="row">
              <div>
                <div class="text">
                  <h1>CONTACT</h1>
                </div>
                <div class="message">
                  <p>EnGiiのサービス・ブログに関するお問い合わせ、質問、要望等を受け付けています。</p>
                </div>
              </div>
            </div>
            <div class="mailList">
              <div class="mailBox row">
                <div class="col-md-2"></div>
                <div class="mail col-md-3">
                  <p>ワークインタビュー</p>
                </div>
                <div class="detail detailText col-md-6">
                  <!--ワークインタビュー用のメールアドレス-->
                  <p></p>
                </div>
                <div class="col-md-1"></div>
              </div>
              <div class="mailBox row">
                <div class="col-md-2"></div>
                <div class="mail col-md-3">
                  <p>ボディーメイクサポート</p>
                </div>
                <div class="detail detailText col-md-6">
                  <!--ボディーメイク用-->
                  <p></p>
                </div>
                <div class="col-md-1"></div>
              </div>
              <div class="mailBox row">
                <div class="col-md-2"></div>
                <div class="mail col-md-3">
                  <p>相談サイト</p>
                </div>
                <div class="detail detailText col-md-6">
                  <!--相談サイト用メールアドレス-->
                  <p></p>
                </div>
                <div class="col-md-1"></div>
              </div>
              <div class="mailBox row">
                <div class="col-md-2"></div>
                <div class="mail end col-md-3">
                  <p>ブログ</p>
                </div>
                <div class="detail detailText end col-md-6">
                  <!--ブログのリンク-->
                  <p></p>
                </div>
                <div class="col-md-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <engiifooter />
  </div>
</template>
<script>
import engiiheader from "@/components/engiiheader.vue"; // headerをインポート// footerをインポート
import engiifooter from "@/components/engiifooter.vue"; // footerをインポート
export default {
  components: {
    engiiheader,
    engiifooter
  }
};
</script>
<style>
* {
  font-family: "游ゴシック Medium";
}
.main-contact{
    height:800px;
}
html {
  height: 100%;
}
.main {
  position: relative;
}
.blankcon {
  padding-top: 8%;
}
.background-image-top {
  position: relative;
  max-width: 80%;
  
}
.background-image-top img {
  max-width: 100%;

  border-radius: 5% 5% 5% 5%;
  -ms-filter: blur(6px);
  filter: blur(6px);
      height:200px;
      width:100%;
}

.middle-contact {
  position: absolute;
  width: 100% !important;

  top: 0;
}
.middle-box {
  width: 80%;
  margin: 0 auto;
}
.text {
  z-index: 1;
  margin-top: 10%;
  font-size: 10px;
}
.message {
  z-index: 1;
  margin-top: 10%;
  font-size: 13px;

  color: white;
}

.mailList {
  z-index: 1;
  margin-top: 35%;
  font-size: 10px;
  color: white;
  padding-bottom: 20px;
}
.mail {
  z-index: 1;
  background-color: rgba(226, 226, 226, 0.932);
  border: solid 1px #707070;
  border-bottom: none;
  color: #141414;
}
.detail {
  z-index: 1;
  background-color: rgba(226, 226, 226, 0.932);
  border: solid 1px #707070;
  border-bottom: none;
  color: #141414;
}
.detailText {
  background-color: #ffffffde;
}
.end {
  border-bottom: solid 1px #707070;
}
.text h1 {
  color: white;
  border-bottom: solid 3px white;
  font-size: 15px;
}
@media screen and (min-width: 600px){
  .background-image-top img{
      height:200px;
      width:100%;
  }
  .mailList{
      margin-top:20%;
  }
}
@media screen and (min-width: 768px){
    
    .background-image-top img{
      height:auto;
      max-width:100%;
  }
  .mailList{
      margin-top:10%;
  }
  .text {
    z-index: 1;
    margin-top: 10%;
    font-size: 50px;
  }
  .main-contact{
      height:700px;
  }
}
@media screen and (min-width: 800px) {
  .blankcon {
    padding: 5%;
  }
  
  .text h1{
      font-size: 40px;
  }
  .message {
    z-index: 1;

    margin-top: 20px;
    font-size: 12px;

    color: white;
  }
  .mailList {
    z-index: 0;
    margin-top: 10%;
    font-size: 15px;
    color: white;
  }
  .mail {
    background-color: rgba(226, 226, 226, 0.932);
    border: solid 1px #707070;
    border-bottom: none;
    color: #141414;
  }
  .detail {
    background-color: rgba(226, 226, 226, 0.932);
    border: solid 1px #707070;
    border-bottom: none;
    color: #141414;
  }
  .detailText {
    background-color: #ffffffde;
  }
  .end {
    border-bottom: solid 1px #707070;
  }
}
@media screen and (min-width: 995px) {
  .mailList{
      margin-top:10%;
  }
  .message {
    font-size: 15px;
  }
  .main-contact{
      height:800px;
  }
}
@media screen and (min-width: 1120px) {
  .mailList{
      margin-top:10%;
  }
  .blankcon{
      padding: 6%;
  }
  .text {
    margin-top: 15%;
  }

  .message {
    font-size: 18px;
  }
  .main-contact{
      height:1000px;
  }
}
</style>