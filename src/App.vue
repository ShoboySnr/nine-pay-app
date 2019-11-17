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
      footerItems: {
        "Let us Help You": [
          {
            title: 'Help Center',
            path: '',
          },
          {
            title: 'FAQ',
            path: '',
          },
          {
            title: 'How to Shop',
            path: '',
          },
          {
            title: 'Delivery Option & Timelines',
            path: '',
          },
          {
            title: 'Coperate & Bulk Purchases',
            path: ''
          }
        ],
        "About 9Pay": [
          {
            title: 'About us',
            path: '',
          },
          {
            title: 'Terms & Conditions',
            path: '',
          },
          {
            title: 'Privacy & Policy',
            path: '',
          },
          {
            title: 'Careers',
            path: '',
          },
          {
            title: 'Express',
            path: ''
          }
        ],
        "Make Money With 9Pay": [
          {
            title: 'Sell on 9Pay',
            path: '',
          },
          {
            title: 'Become an Affiliate Partner',
            path: '',
          },
          {
            title: 'Become a Sales Consultant',
            path: '',
          },
          {
            title: 'Become a Vendor Service Provider',
            path: '',
          },
          {
            title: 'Become a Logistics Service Partner',
            path: ''
          }
        ]
      },
      title: '9Pay'
    }
  },
};
</script>
