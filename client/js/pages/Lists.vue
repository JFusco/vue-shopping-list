<template>
  <div class="page page__home">

    <!-- Header -->
    <mast-head title="Lists">
      <div slot="header-right">
        <router-link :to="{name: 'newList'}" class="btn btn--clear">
          <i class="fa fa-cart-plus" aria-hidden="true"></i>
        </router-link>
      </div>

      <div slot="header-left">
        <loader>
          <div slot="children">
            <list-count :count="lists.data.length"></list-count>
          </div>
        </loader>
      </div>
    </mast-head>

    <!-- Store lists -->
    <div class="page__body">
      <list v-if="!lists.isFetching" :lists="lists.data"></list>
    </div>
  </div>
</template>

<script type="text/babel">
  import Vue from 'vue'
  import { mapActions, mapState } from 'vuex'
  import List from '../components/lists/List'
  import ListCount from '../components/lists/ListCount'
  import Loader from '../components/global/Loader'

  export default {
    components: {
      Loader,
      List,
      ListCount
    },

    methods: {
      ...mapActions([
        'getLists'
      ])
    },

    created(){
      this.getLists();
    },

    computed: {
      ...mapState([
        'lists'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  @import
  "~scss/variables",
  "~scss/mixins";

  .fa {
  @include font-size(25px);

    line-height: 75px;
  }
</style>
