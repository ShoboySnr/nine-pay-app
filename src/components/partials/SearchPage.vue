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
              label="Sort By"
              outlined
              v-model="sortByValue"
            ></v-select>
          </v-col>
          <v-col class="d-flex" cols="12" sm="3">
            <v-select
              :items="product_category"
              label="Product Category"
              outlined
              v-model="productCategory"
            ></v-select>
          </v-col> 
          <v-col class="d-flex" cols="12" sm="3">
            <v-select
              :items="orderBy"
              :items-value="orderBy"
              label="Order By"
              outlined
              v-model="oderByValue"
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
  oderByValue: '',
  search: '',
  sortByValue: '',
  productCategory: '',

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
          value: '',
          type: '',
        },
        {
          text: 'Lowest Price',
          value: 'sortByLowPrice',
        },
        {
          text: 'Highest Price',
          value: 'sortByHighPrice',
        }
      ],
    }
  },
  computed: {
    computedProducts: function () {
      alert(this.oderByValue);
      return this.$store.dispatch('computedProducts', {
        search: this.search, 
        sortByValue: this.sortByValue, 
        productCategory: this.productCategory, 
        oderByValue: this.oderByValue
      });
    }
  }
};
</script>
