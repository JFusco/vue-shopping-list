<template>
	<div class="sl__store-count">
    {{listCount}}
	</div>
</template>

<script type="text/babel">
  export default {
    name: 'list-count',

    props: {
      count: {
        type: Number,
        required: true
      }
    },

    computed: {
      listCount(){
        const listLength = this.count
        const suffix = listLength === 1 ? 'list' : 'lists'

        return `${listLength} ${suffix}`
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '~scss/variables';

  .sl {
    &__store-count {
      margin-left: 20px;
    }
  }
</style>
