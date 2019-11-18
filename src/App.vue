<template>
  <v-app>
    <div id="app">
          <v-toolbar  color="success" dark flat class="white-text fixed" app height="100px"  clipped-left>
            <v-toolbar-side-icon  @click.stop="drawer = !drawer" class="hidden-md-and-up hamburger white-text">
              <v-icon class="pr-2" x-large> mdi-menu </v-icon>
            </v-toolbar-side-icon>
            <v-container class="d-flex">
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
        </v-container>
          </v-toolbar>
          <v-navigation-drawer
            v-model="drawer"
            temporary
            absolute
            width = "200"
            id = "drawer"
            class="pt-10 pb-10"
          >
            <v-link to="/" light flat class="logo black-text ml-3 text-center">
                {{ title }}
            </v-link>
           <v-list>
              <v-btn
                v-for="item in menuItems"
                :key="item.icon"
                :to="item.path"
                class="text-capitalize black-text mt-3 mb-3 headline"
                flat
                text
              >
              <v-icon class="pr-2"> {{item.icon}} </v-icon>
                {{ item.title }}
              </v-btn>  
            </v-list>
          </v-navigation-drawer>
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

#drawer{
  background: #ffffff;
}
.hamburger {
  width: 40px;
  height: 40px;
  background: transparent;
}

.fixed {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100vw;
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
      title: '9Pay',
      drawer: null 
    }
  },
};
</script>
