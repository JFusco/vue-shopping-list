<template>
  <button v-on:click="onGoBack" class="btn btn--clear">
    <i class="fa fa-chevron-left" aria-hidden="true"></i> {{title}}
  </button>
</template>

<script type="text/babel">
  import Vue from 'vue'

  export default {
    name: 'back-button',
    props: {
      title: {
        type: String,
        'default': 'Back'
      }
    },

    methods: {
      onGoBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '~scss/mixins';

  .fa {
    @include font-size(18px);

    position: relative;
    top: 1px;
  }
</style>
