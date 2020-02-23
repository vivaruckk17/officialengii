<template>
  <div class="rdmain">
    <engiiheader />
    <div class="blankl"></div>
    <div class="container">
      <img
        src="~assets/indeximg/homeLeaderremake.jpg"
        width="70%"
        height="500px"
        alt
        class="img-fluid d-block mx-auto"
      />
      <div class="row name-text">
        <div class="offset-4 col-4 chon">
          <p>宮坂 塁</p>
        </div>
        <div class="col-4"></div>
      </div>

      <div class="row mezasu-title">
        <div class="col-2"></div>
        <div class="col-8">
          <div class="row mezasu-text">
            <div class="col-auto">
              <p>リーダーの想い</p>
            </div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>

      <div class="row mezasu-subtitle">
        <div class="col-1"></div>
        <div class="col-10 leadtexmain">
          <p class="leadertext">
            「〇〇な人が知り合いにいたら」「もっと進学先を真剣に考えてたら」 
「学生時代にやっておけばよかった」「就活のときもっとしっかり考えるべきだった」「転職についてもっとリアルな声が聞きたい」等々、今までの人生の中で私は沢山の後悔と、いろんなものを望みました。 
学業にだらけ始めた高専3年次からは、1番大事な時期にも関わらず当時勤めていたアルバイトと部活だけに一生懸命になっていました。 
何の良さもない私でしたが、学校のブランドとバックアップのおかげもあり日本を代表するような企業に勤めることができました。その会社はいわゆる（大手でホワイト企業）福利厚生や将来性等、何をとってもピカイチでした。 
しかし、私のやりたいこと、得意なこと、やるべきこととその企業全く合わずとても苦しみました。 入社から3年目までは毎日のように冒頭に述べたようなタラレバを吐き出し、承認欲求に駆られ、毎日のように遊び歩き、沢山のものを失いました。しょうもない時間の使い方をしたと思っています。
しかしそこから、少しずつ自らを変えるために努力をしました。正しい方向に、正しい姿勢で努力すると自分をとりまく色んな事が変わっていきました。 
そして今、私は毎日充実感のある生活をしています。今の私があるのは紛れもなく、沢山の人が力を貸してくれたおかげです。今の環境に身を置くべきか迷った時も本当に沢山の人が支えてくれました。みんなに助けてもらった分、今度は自らがに少しでも周りの人に自らの経験から得たことを発信して手助けできることはしたいと思いました。 
そこで、「失敗してもいいからやってみよう」と思い、知り合いのエンジニア達に協力してもらいこの【EnGii】というグループをつくりました。 私達が持つものでどれだけの人にどれだけのことができるのかは全く分かりませんが、やれるだけのことはやってみようと思います。 
みんなが後悔していること、悩んでいこと、望むことの手助けをできたらなと思います。

          </p>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <engiifooter class="leaderfooter" />
  </div>
</template>



<script>
import engiiheader from "~/components/engiiheader.vue";
import engiifooter from "~/components/engiifooter.vue";
export default {
  components: {
    engiiheader,
    engiifooter
  }
};
</script>



<style>

.rdmain {
  margin-left: 0;
  margin-right: 0;
}
.blankl {
  padding-top: 8%;
}
.container img {
  border-radius: 20px;
}
.center {
  text-align: center;
}
.name-text {
  padding-top: 20px;
}
@media screen and (min-width: 767px) {
  .chon p {
    font-size: 1.3rem;
    font-weight: bold;
  }
}
@media screen and (max-width: 767px) {
  .chon p {
    font-size: 0.8rem;
    font-weight: bold;
  }
}
.mezasu-text {
  border-bottom: solid 1px;
}
.name-text {
  text-align: center;
}
@media screen and (min-width: 767px) {
  .mezasu-text p {
    font-size: 1.1rem;
  }
}
@media screen and (max-width: 767px) {
  .mezasu-text p {
    font-size: 0.7rem;
  }
}
.mezasu-subtitle {
  padding-top: 20px;
}
@media screen and (min-width: 767px) {
  .leadertext {
    font-size: 0.9rem;
    text-align: center;
    margin-left: 8%;
    margin-right: 8%;
  }
}
@media screen and (max-width: 767px) {
  .leadertext {
    font-size: 0.7rem;
    text-align: center;
  }
}
.leaderfooter {
  margin-top: 10px;
}
</style>