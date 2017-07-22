<template>
	<div class="page page__shopping-list">
    <mast-head title="Shopping List">
      <div slot="header-left">
        <back-button></back-button>
      </div>
    </mast-head>

    <div class="page__body">
      new shopping list
    </div>
	</div>
</template>

<script type="text/babel">
  import Vue from 'vue'
  import BackButton from '../components/global/BackButton'

  export default {
    components: {
      BackButton
    }
  }
</script>

<style lang="scss" scoped>
	@import '~scss/variables';

</style>
