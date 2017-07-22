<template>
	<div class="sl__loader">
    <i v-if="loader.show" class="fa fa-refresh fa-spin fa-3x fa-fw"></i>

    <slot v-else name="children"></slot>
	</div>
</template>

<script type="text/babel">
  import Vue from 'vue'
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'loader',

    computed: mapState([
      'loader'
    ])
  }
</script>

<style lang="scss" scoped>
	@import '~scss/variables';

  .sl {
    &__loader {
      text-align: center;
      min-width: 40px;
    }
  }

  .fa {
    font-size: inherit;
  }
</style>
