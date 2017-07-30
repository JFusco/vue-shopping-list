<template>
  <div role="main">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/babel">
  import Vue from 'vue'
  import MastHead from './components/global/Header'

  export default {
    components: {
      MastHead
    },

    data() {
      return {
        transitionName: 'slideLeft'
      };
    },

    watch: {
      '$route'(to, from) {
        const toDepth = to.path.split('/').filter(el => { return el.length !== 0 })
        const fromDepth = from.path.split('/').filter(el => { return el.length !== 0 })

        this.transitionName = toDepth < fromDepth ? 'slideRight' : 'slideLeft'
      }
    }
  }
</script>

<style lang="scss">
  @import
  "~scss/normalize",
  "~scss/variables",
  "~scss/mixins",
  "~scss/typography",
  "~scss/animations",
  "~scss/components/page",
  "~scss/components/link",
  "~scss/components/button",
  "~scss/components/input";

  html,
  body {
    font-size: $main-font-size;
    font-family: $main-font;
    color: $main-font-color;
    box-sizing: border-box;
    background: #F7FAF7;
  }
</style>
