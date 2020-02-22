<template>
  <div class="contact-form">
    <engiiheader />
    <div class="main-contact">
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
              <p>EnGiiのサービス・ブログに関するお問い合わせ、質問、要望等を受け付けています。</p>
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
          <div class="genre-select">
            <select name="select">
              <option value="ワークインタビュー">ワークインタビュー</option>
              <option value="ボディメイクサポート">ボディメイクサポート</option>
              <option value="EnGii知恵の輪">EnGii知恵の輪</option>
              <option value="その他">その他</option>
            </select>
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
            <div class="sex-select">
            <select name="select">
              <option value="male">男性</option>
              <option value="female">女性</option>
              <option value="その他">その他</option>
            </select>
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
            <textarea type="text" name="faq-form"></textarea>
          </div>
        </div>
        <hr>
        <div class="submit-btn">
          <input type="submit" value="送信する">
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
  padding-right: 10px;
  width:100%;
  color:white;
  top:2.5rem;
  height:200px;
  
}
.contact-box .text1{
  font-size: 1.7rem;
  padding-left: 30px;
}
.contact-box .text2{
  width:100%;
  font-size:0.8rem;
  position:absolute;
  bottom:3.2rem;
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
.genre-select{
  margin-top: 1rem;
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
  color:white;
  font-weight:600;
}
.must-icon p{
   background-color:#00CDFF;
  font-size:0.9rem;
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
  margin-bottom:1rem;
  width: 100%;
  height:14rem;


}
.fac-content-form-box textarea{
  width:100%;
  height:100%;
}
.submit-btn{
  text-align:center;
  margin-bottom:2rem;
}
.row {
  margin:0;
}
@media screen and (min-width: 350px){
  .contact-box{
    top:3rem;
  }
  .contact-box .text1{
    font-size: 2.0rem;
  }
  .contact-box .text2{
    bottom:2rem;
  }
}
@media screen and (min-width:400px) and (max-width:767px){
  .main-contact{
    max-width:400px;
    margin:0 auto;
  }
}
@media screen and (min-width:767px) and (max-width:1024px){
  .main-contact{
    max-width:767px;
    margin: 0 auto;
  }
  .contact-box{
    top:10rem;

  }
  .contact-box .text1{
    font-size: 3.0rem;
    padding-left:10%;
  }
  .contact-box .text2{
    bottom:-70px;
    font-size:1.7rem;

  }
  .text2 .text2-box{
    width:70%;
  }
  .form-box{
    display:flex;
  }
  .title-box{
    width:50%;
  }
  .genre-select{
    width:50%;
  }
  .mail-address-form-box{
    width:50%;
  }

}

</style>
