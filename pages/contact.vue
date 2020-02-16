<template>
  <div class="main">
    <engiiheader />
    
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
  font-family: "游ゴシック Medium",'Hiragino Kaku Gothic Pro','ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic",'ＭＳ Ｐゴシック',sans-serif;
}
