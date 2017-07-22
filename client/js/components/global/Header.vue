<template>
  <header class="sl__header">
    <div class="sl__header__left">
      <slot name="header-left"></slot>
    </div>

    <h1 class="sl__header__title">{{title}}</h1>

    <div class="sl__header__right">
      <slot name="header-right"></slot>
    </div>
  </header>
</template>

<script type="text/babel">
  import Vue from 'vue';

  export default Vue.component('mast-head', {
    name: 'mast-head',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "~scss/mixins";

  .sl {
    &__header {
      background: #72574a;
      color: #F7F9F9;
      height: 75px;
      position: fixed;
      width: 100vw;

    &__title {
      @include font-size(25px);

      margin: 0 100px 0;
      line-height: 75px;
      text-align: center;
      height: inherit;
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    a {
      text-decoration: none;
      line-height: 75px;
    }

    a,
    .btn {
      height: inherit;
      padding: 0 20px;
    }

    &__right,
    &__left {
      height: inherit;
      position: absolute;
      top: 0;
    }

    &__right {
       right: 0;

      .btn,
      a {
        border-left: 1px solid rgba(247, 249, 249, 0.4);
        margin-left: 15px;
      }
    }

    &__left {
      left: 0;

      .btn,
      a {
        border-right: 1px solid rgba(247, 249, 249,  0.4);
        margin-right: 15px;
      }
    }

    &__right > div,
    &__left > div {
      height: inherit;
      display: flex;
      align-items: center;
     }
    }
  }
</style>
