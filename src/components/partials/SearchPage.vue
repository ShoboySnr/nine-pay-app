<template>
  <div>
    <v-container>
      <v-row class="mt-5">
        <v-col
        col-12
        class="d-flex justify-center"
        >
          <p class="subtitle-1">Find Merchants </p>
        </v-col>
      </v-row>
      <v-form v-model="valid">
        <v-row align="center">
          <v-col class="d-flex" cols="12" sm="3">
            <v-text-field
              v-model="search"
              label="Type to search"
            ></v-text-field>
          </v-col>
          <v-col class="d-flex" cols="12" sm="3">
            <v-select
              :items="sortBy"
              :item-value="sortBy"
              label="Sort By"
              outlined
              v-on:change="getfilteredData"
            ></v-select>
          </v-col>
          <v-col class="d-flex" cols="12" sm="3">
            <v-select
              :items="product_category"
              :item-value="product_category"
              label="Product Category"
              outlined
              v-on:change="getfilteredData"
            ></v-select>
          </v-col> 
          <v-col class="d-flex" cols="12" sm="3">
            <v-select
              :items="orderBy"
              :item-value="orderBy"
              label="Order By"
              outlined
              v-on:change="getfilteredData"
            ></v-select>
          </v-col>
        </v-row>

      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',

  data() {
    return {
       product_category: [
        {
         text: 'All Merchants',
         value: ''
        }, 
        {
         text: 'Services Merchants',
         value: 'services'
       },
       {
         text: 'Products Merchants',
         value: 'products'
       },
      ],
      sortBy: [
        {
          text: 'All',
          value: ''
        },
        {
          text: 'Merchants Name',
          value: 'name'
        },
        {
          text: 'Merchants Type',
          value: 'type'
        }
      ],
      orderBy: [
        {
          text: 'Default',
          value: ''
        },
        {
          text: 'Ascending',
          value: 'ASC'
        },
        {
          text: 'Descending',
          value: 'DESC'
        }
      ]
    }
  },
  methods: {
    getfilteredData() {
      
    }
  },
};
</script>
