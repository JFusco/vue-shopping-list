<template>
	<div class="page page__new-list">
    <mast-head title="New List">
      <div slot="header-left">
        <back-button title="Cancel" icon="fa-times"></back-button>
      </div>

      <div slot="header-right">
        <button class="btn btn--clear" v-on:click="onSaveList">
          <loader>
            <span slot="children">Save</span>
          </loader>
        </button>
      </div>
    </mast-head>

    <div class="page__body">
      <div class="page__body-content">
        <div class="input__group">
          <label class="input__label" for="list-name">Shopping list name</label>
          <input v-model="listName" type="text" id="list-name" placeholder="Name" />
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </div>
      </div>
    </div>
	</div>
</template>

<script type="text/babel">
  import Vue from 'vue'
  import { mapActions, mapState } from 'vuex'
  import BackButton from '../components/global/BackButton'
  import Loader from '../components/global/Loader'

  export default {
    components: {
      BackButton,
      Loader
    },

    data(){
      return {
        listName: ''
      }
    },

    methods: {
      ...mapActions([
        'saveList'
      ]),

      onSaveList(){
        this.saveList({
          name: this.listName
        }).then(() => {
          if (this.lists.data.success){
            this.$router.push({ name: 'lists' })
          }
        })
      }
    },

    computed: {
      ...mapState([
        'lists'
      ])
    }
  }
</script>
