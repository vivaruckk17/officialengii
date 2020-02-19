<template>
  <div class="main">
    <engiiheader />
    <div class="main">
      <div class="top">
        <div class="background-image-main">
          <img 
          style="width:100%;"
          src="~assets/contact/image01.png"/>
        </div>
        <div class="contact-box">
          <div class="text1">
            <p>CONTACT</p>
          </div>
          <div class="text2">
            <div class="text2-box">
              <p>EnGiiのアービス・ブログに関する<br>
              お問い合わせ、質問、要望等を受け付けています。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="main-form">
        <div class="faq-form">
          <p>お問い合わせ情報入力</P>
        </div>
        <div class="form-box genre">
          <div class="title-box">
            <p>お問い合わせジャンル</p>
            <div class="must-icon">
              <p>必須</p>
            </div>
          </div>
        </div>
        <hr>
        <div class="form-box name">
          <div class="title-box">
            <p>お名前</p>
            <div class="must-icon">
                  <p>必須</p>
            </div>
          </div>
          <div class="name-form-box">
            <div class="family-name">
              <input type="text" name="family-name" placeholder="山田">
            </div>
            <div class="first-name">
              <input type="text" name="family-name" placeholder="太郎">
            </div>
          </div>
        </div>
        <hr>
        <div class="form-box name-sub">
          <div class="title-box">
            <p>お名前（フリガナ）</p>
            <div class="must-icon">
                  <p>必須</p>
            </div>
          </div>
          <div class="name-form-box">
            <div class="family-name">
              <input type="text" name="family-name" placeholder="ヤマダ">
            </div>
            <div class="first-name">
              <input type="text" name="family-name" placeholder="タロウ">
            </div>
          </div>
        </div>
        <hr>
        <div class="form-box sex">
          <div class="title-box">
            <p>性別</p>
          </div>
        </div>
        <hr>
        <div class="form-box mail-address">
          <div class="title-box">
            <p>メールアドレス</p>
            <div class="must-icon">
                  <p>必須</p>
            </div>
          </div>
          <div class="mail-address-form-box">
            <input type="text" name="mail-adddress" placeholder="◯◯◯@example.com">
          </div>
        </div>
        <hr>
        <div class="form-box faq-content">
          <div class="title-box">
            <p>お問い合わせ内容</p>
            <div class="must-icon">
                  <p>必須</p>
            </div>
          </div>
          <div class="fac-content-form-box">
            <input type="text" name="faq-form">
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

.top{
  width: 100%;
  position:relative;
}

.background-image-main{
  position: relative !important;
  width:100%;
  
}
.contact-box{
  position: absolute;
  padding-left:20px;
  padding-right: 10px;
  width:100%;
  color:white;
  top:3rem;
  height:200px;
  
}
.contact-box .text1{
  font-size: 2.0rem;
}
.contact-box .text2{
  width:100%;
  font-size:0.65rem;
  position:absolute;
  bottom:1rem;
  text-align:left;
}
.text2 .text2-box{
  position: absolute;
  right:2rem;
  width:250px;
}
.main-form{
  width:100%;
  padding-left:2rem;
  padding-right:2rem;
}
.faq-form{
  border-left:thick solid #00CDFF;
}
.faq-form p{
  margin:0;
  margin-top:0.2rem;
  margin-bottom: 0.2rem;
  margin-left: 1rem;
  font-size:1.4rem;
  font-weight: 600;
  color:#484848
}
.form-box{
  color:#484848;

}
.title-box{
  margin-top: 1rem;
  display:flex;
}
.title-box p{
  margin: 0;
}
.must-icon{
  margin-left:3rem;
  background-color:#00CDFF;
  color:white;
  font-weight:600;
}
.must-icon p{
  font-size:0.9rem;
  margin:0;
  margin: 0.1rem 0.7rem;
}


.name-form-box{
  margin-top:1rem;
  display: flex;
}
.family-name{
 
  box-sizing: border-box;
  width:45%;
  margin-right:1rem;

  

}

.first-name{
  box-sizing: border-box;

  width:45%;
  margin-left:1rem;
  

}
.family-name input,
.first-name input,
.mail-address-form-box input{
  width:100%;
}

.mail-address-form-box{
  margin-top:1rem;

  width:100%;
}
.fac-content-form-box{
  margin-top:1rem;
  margin-bottom:2rem;
  width: 100%;
  height:14rem;


}
.fac-content-form-box input{
  width:100%;
  height:100%;
}

</style>
