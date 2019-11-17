<template>
  <v-app white>
    <div>
      <v-app-bar
          color="success accent-4"
          dense
          dark
        >
        <v-container class="d-flex pe-2">
          <v-row>
          <v-toolbar-title>{{ title }}</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn text
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          class="text-capitalize"
            >
            <v-icon> {{item.icon}} </v-icon>
            {{ item.title }}
            {{ item.title == 'Cart' ? `(${cartsCount})` : '' }}
          </v-btn>
          </v-row>
        </v-container>
        </v-app-bar>
    </div>

    <v-content>
     
        <router-view></router-view>
    </v-content>

     <v-footer class="justify-center d-flex black white--text">
       <v-container class="pt-10 pb-10">
         <v-row>
           <v-col
            cols="12"
            md="4"
            sm="4"
            v-for="(items) in footerItems"
            :key="items"
            class="pb-10"
          >
            <div v-for='(item) in items' :key="item">
              <p class="display-1"> {{ items[title] }} </p>
              <v-btn :ripple=false text class="subtitle-2 white--text text-capitalize" :to="item.path"> {{ item.title }} </v-btn>
            </div>
           </v-col>
         </v-row>

         <div class="text-center">
          <span>&copy; 9Pay Merchant Shop 2019</span>
         </div>
       </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import { footerItems, menuItems } from './data/data';

export default {
  name: 'App',

  computed: {
    ...mapGetters(['cartsCount'])
  },
  data () {
    return {
      fixed: false,
      menuItems,
      footerItems,
      title: '9Pay'
    }
  },
};
</script>
