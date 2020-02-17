<template>
  <div class="container" v-on:click="isActive01=!isActive01" v-bind:class="{open:isActive01}">
    <div id="nav-toggle">
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
<div class="row">
    <div id="gloval-nav">
      <nav>
        <ul>
          <li class="col-auto">
            <router-link to="/home">
              <p>HOME</p>
            </router-link>
          </li>
          <li>
            <router-link to="/service/servicehome">
              <p>SERVICE</p>
            </router-link>
          </li>
          <li>
            <router-link to="/blog">
              <p>BLOG</p>
            </router-link>
          </li>
          <li>
            <router-link to="/news">
              <p>NEWS</p>
            </router-link>
          </li>
          <li>
            <router-link to="/contact">
              <p>CONTACT</p>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <!-- /#gloval-nav -->
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive01: false
    };
  }
};
</script>

<style>
#nav-toggle {
  position: fixed;
  top: 25px;
  right: 25px;
  height: 32px;
  cursor: pointer;
}

#nav-toggle > div {
  position: relative;
  width: 36px;
}

#nav-toggle span {
  width: 100%;
  height: 1px;
  left: 0;
  display: block;
  background: #333;
  position: absolute;
  -webkit-transition: top 0.5s ease, -webkit-transform 0.6s ease-in-out;
  transition: top 0.5s ease, -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, top 0.5s ease;
  transition: transform 0.6s ease-in-out, top 0.5s ease,
    -webkit-transform 0.6s ease-in-out;
}

#nav-toggle span:nth-child(1) {
  top: 0;
}

#nav-toggle span:nth-child(2) {
  top: 14px;
}

#nav-toggle span:nth-child(3) {
  top: 28px;
}

#nav-toggle:hover span:nth-child(1) {
  top: 4px;
}

#nav-toggle:hover span:nth-child(3) {
  top: 23px;
}

.open #nav-toggle span {
  background: #fff;
}

.open #nav-toggle span:nth-child(1) {
  top: 15px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.open #nav-toggle span:nth-child(2) {
  top: 15px;
  width: 0;
  left: 50%;
}

.open #nav-toggle span:nth-child(3) {
  top: 15px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

/* z-index */
#nav-toggle {
  z-index: 1000;
}

#container {
  z-index: 900;
}

#gloval-nav {
  background: #000;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 990;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  visibility: hidden;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 29px;
  opacity: 0;
  -webkit-transition: opacity 0.6s ease, visibility 0.6s ease;
  transition: opacity 0.6s ease, visibility 0.6s ease;
}

#gloval-nav a {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 10px 0;
  -webkit-transition: color 0.6s ease;
  transition: color 0.6s ease;
}

#gloval-nav a:hover {
  color: #666;
}

#gloval-nav ul {
  list-style: none;
}

#gloval-nav ul li {
  opacity: 0;
  -webkit-transform: translateX(200px);
  transform: translateX(200px);
  -webkit-transition: opacity 0.2s ease, -webkit-transform 0.6s ease;
  transition: opacity 0.2s ease, -webkit-transform 0.6s ease;
  transition: transform 0.6s ease, opacity 0.2s ease;
  transition: transform 0.6s ease, opacity 0.2s ease,
    -webkit-transform 0.6s ease;
}

#gloval-nav ul li:nth-child(2) {
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

#gloval-nav ul li:nth-child(3) {
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

#gloval-nav ul li:nth-child(4) {
  -webkit-transition-delay: 0.45s;
  transition-delay: 0.45s;
}

#gloval-nav ul li:nth-child(5) {
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}

#gloval-nav ul li:nth-child(6) {
  -webkit-transition-delay: 0.75s;
  transition-delay: 0.75s;
}

#gloval-nav ul li:nth-child(7) {
  -webkit-transition-delay: 0.9s;
  transition-delay: 0.9s;
}

/* open */
.open {
  overflow: hidden;
}

.open #gloval-nav {
  visibility: visible;
  opacity: 1;
}

.open #gloval-nav li {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: opacity 0.9s ease, -webkit-transform 1s ease;
  transition: opacity 0.9s ease, -webkit-transform 1s ease;
  transition: transform 1s ease, opacity 0.9s ease;
  transition: transform 1s ease, opacity 0.9s ease, -webkit-transform 1s ease;
}
/*# sourceMappingURL=sample.css.map */
</style>