<template>
  <div id="app">
    <button v-on:click="toggle_class()">class付与と削除</button>
    <div class="menu-trigger" v-bind:class="{ 'elem--active' : isActive }">ボタンクリックでこの要素に「.elem--active」のクラスが付与＆削除される</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    toggle_class: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style>
.menu-trigger,
.menu-trigger span {
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
}
.menu-trigger {
  position: relative;
  width: 50px;
  height: 44px;
  margin: 5px;
}
.menu-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: black;
  border-radius: 4px;
}
.menu-trigger span:nth-of-type(1) {
  top: 0;
}
.menu-trigger span:nth-of-type(2) {
  top: 20px;
}
.menu-trigger span:nth-of-type(3) {
  bottom: 0;
}

.menu-trigger:active span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(-45deg);
  transform: translateY(20px) rotate(-45deg);
}
.menu-trigger:active span:nth-of-type(2) {
  opacity: 0;
}
.menu-trigger:active span:nth-of-type(3) {
  -webkit-transform: translateY(-20px) rotate(45deg);
  transform: translateY(-20px) rotate(45deg);
}
</style>