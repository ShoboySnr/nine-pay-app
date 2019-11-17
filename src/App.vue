<template>
  <v-app>
    <div>
      <v-app-bar
          color="success accent-4"
          light
          height="80px"
          fixed
        >
        <v-container class="d-flex pe-2 mt-15 mb-15">
          <v-toolbar  color="success" dark flat class="white-text" app>
            <v-toolbar-title>
              <v-link to="/" light flat class="logo">
                {{ title }}
              </v-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down white--text">
            <v-btn text
            v-for="item in menuItems"
            :key="item.icon"
            :to="item.path"
            class="text-capitalize white--text"
            flat
              >
              <v-icon class="pr-2"> {{item.icon}} </v-icon>
              {{ item.title }}
              {{ item.title == 'Cart' ? `(${cartsCount})` : '' }}
              {{ item.title == 'Favorites' ? `(${favsCount})` : '' }}
            </v-btn>
            </v-toolbar-items>
            <v-menu class="hidden-md-and-up">
                <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
                  <v-list>
                    <v-btn
                      v-for="item in menuItems"
                      :key="item.icon"
                      :to="item.path"
                      class="text-capitalize"
                      flat
                    >
                    <v-icon> {{item.icon}} </v-icon>
                      {{ item.title }}
                    </v-btn>  
                  </v-list>
            </v-menu>
          </v-toolbar>
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
              <v-btn flat :ripple=false text class="subtitle-2 white--text text-capitalize pt-2 pb-3" :to="item.path"> {{ item.title }} </v-btn>
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

<style>
.logo {
  font-size: 3.7rem;
}

body {
  font-family: Brown;
}
</style>

<script>
import { mapGetters } from 'vuex';
import { footerItems, menuItems } from './data/data';
import './assets/styles/main.css';

export default {
  name: 'App',

  computed: {
    ...mapGetters(['cartsCount', 'favsCount'])
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
