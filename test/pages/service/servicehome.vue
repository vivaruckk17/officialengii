<template>
  <div class="main">
    <engiiheader />
    <div class="blank2"></div>
    <workinteview />
    <bodymake />
    <chienowa />
    <engiifooter class="footermargin" />
    <!-- <servicetitle class="servicetitle" /> -->
  </div>
</template>

<script>
import engiiheader from "~/components/engiiheader.vue";
import engiifooter from "~/components/engiifooter.vue";
import workinteview from "@/components/service/workinteview.vue";
import bodymake from "@/components/service/bodymake.vue";
import chienowa from "@/components/service/chienowa.vue";
export default {
  components: {
    engiiheader,
    engiifooter,
    workinteview,
    bodymake,
    chienowa
  },
  methods: {
    handleScrollhs: function(evt, el) {
      console.log(window.scrollY);
      console.log(window.outerWidth);

      if (window.outerWidth > 720) {
        if (window.scrollY > 40) {
          el.setAttribute(
            "style",
            "opacity: 1; transform: translate3d(0, -10px, 0)"
          );
        }
        return window.scrollY > 90;
      }
    }
  }
};
</script>

<style>
.blank2 {
  padding-top: 8%;
}
.footermargin {
  margin-top: 70px;
}

</style>