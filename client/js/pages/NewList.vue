<template>
	<div class="page page__new-list">
    <mast-head title="New List">
      <div slot="header-left">
        <back-button></back-button>
      </div>

      <div slot="header-right">
        <button class="btn btn--clear">Save</button>
      </div>
    </mast-head>

    <div class="page__body">
      page body
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
