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
          {{ item.title }}
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

     <v-footer :fixed="fixed" app>
      <span>&copy; 9Pay 2019</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      fixed: false,
      items: [{
        title: 'Login',
        path: '/login'
      },
      {
        title: 'Need Help?',
        path: '/contact'
      }],
      title: '9Pay'
    }
  },
};
</script>
