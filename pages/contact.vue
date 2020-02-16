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
 font-family:  'Noto Sans JP', sans-serif;
}
