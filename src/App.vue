<template>
  <v-app>
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
          v-for="item in items"
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
      <v-container class="pt-10 pb-10">
        <router-view></router-view>
      </v-container>
    </v-content>

     <v-footer class="justify-center d-flex">
      <span>&copy; 9Pay Merchant Shop 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',

  computed: {
    ...mapGetters(['cartsCount'])
  },
  data () {
    return {
      fixed: false,
      items: [{
        title: 'Login',
        path: '/login',
        icon: 'mdi-login-variant'
      },
      {
        title: 'Need Help?',
        path: '/contact',
        icon: 'mdi-face-agent'
      },
      {
        title: 'Cart',
        path: '/cart',
        icon: 'mdi-cart'
      },
      {
        title: 'Favorites',
        path: '/favorites',
        icon: 'mdi-heart'
      },
      {
        title: 'Checkout',
        path: '/checkout',
        icon: 'mdi-credit-card'
      }],
      title: '9Pay'
    }
  },
};
</script>
