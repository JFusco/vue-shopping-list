<template>
  <router-link :to="{name: 'shoppingList', params: {id: data._id}}" class="sl__list__item__container">
    <div class="sl__list__item__name">{{data.name}} - {{date}}</div>
    <i aria-hidden="true" class="fa fa-chevron-right"></i>
    <button v-on:click="onDeleteCategory">DELETE</button>
  </router-link>
</template>

<script type="text/babel">
  import Vue from 'vue'
  import { mapActions, mapState } from 'vuex'
  import moment from 'moment'

  export default {
    name: 'list-item',

    props: {
      data: {
        type: Object,
        required: true
      }
    },

    methods: {
      ...mapActions([
        'deleteList'
      ]),

      onDeleteCategory(e){
        e.preventDefault();

        this.deleteList(this.data._id)
      }
    },

    computed: {
      ...mapState([
        'lists'
      ]),

      date(){
        return moment(this.data.createdDate).format('MMM DD, YYYY')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import
  "~scss/variables",
  "~scss/mixins";

  .sl {
    &__list {
      &__item {
        &__container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 25px;
        }

        &__name {
          @include font-size(18px);
        }

        .fa {
          @include font-size(20px);
        }
      }
    }
  }
</style>
