<template>
  <div class="main">
    <engiiheader />
    <div class="blankn"></div>
    <div class="containar">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-10">
          <h3>NEWS</h3>
          <p>EnGiiのブログの更新情報、サービスの最新情報をお届けします</p>
        </div>
        <div class="col-lg-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import engiiheader from "~/components/engiiheader.vue";
export default {
  components: {
    engiiheader
  }
};
</script>

<style>

.blankn {
  padding-top: 8%;
}
</style>