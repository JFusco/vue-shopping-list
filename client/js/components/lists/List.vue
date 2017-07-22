<template>
  <ul class="sl__list">
    <li v-for="item in lists" v-bind:id="item.id" class="sl__list__item">
      <list-item :data="item"></list-item>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Vue from 'vue'
  import ListItem from './ListItem'

  export default {
    name: 'list',

    components: {
      ListItem
    },

    props: {
      lists: {
        type: Array
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
        border-bottom: 1px solid rgba(114, 87, 74, 0.35);
      }
    }
  }
</style>
