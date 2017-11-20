<template>
	<div class="page page__shopping-list">
    <mast-head title="Shopping List">
      <div slot="header-left">
        <back-button></back-button>
      </div>
    </mast-head>

    <div class="page__body">
      <div class="page__body-content">
        <input v-model="itemName" type="text" id="item-name" placeholder="Add item" />
      </div>

      <button v-on:click="onSaveShoppingList">save test</button>
    </div>
	</div>
</template>

<script type="text/babel">
  import Vue from 'vue'
  import { mapActions, mapState } from 'vuex'
  import BackButton from '../components/global/BackButton'

  export default {
    components: {
      BackButton
    },

    data(){
      return {
        itemName: ''
      }
    },

    methods: {
      ...mapActions([
        'saveShoppingList'
      ]),

      onSaveShoppingList(){
        console.log(this.itemName);

        this.saveShoppingList({
          name: this.itemName
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '~scss/variables';

</style>
