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
              v-model="keyword"
              label="Type to search"
              @keyup="filteredByAll($event)"
            ></v-text-field>
          </v-col>
          <v-col class="d-flex" cols="12" sm="3">
            <v-select
              :items="sortBy"
              label="Sort By"
              outlined
              v-model="sortByValue"
              @change="filteredByAll($event)"
            ></v-select>
          </v-col>
          <v-col class="d-flex" cols="12" sm="3">
            <v-select
              :items="product_category"
              label="Product Category"
              outlined
              v-model="productCategory"
              @change="filteredByAll($event)"
            ></v-select>
          </v-col> 
          <v-col class="d-flex" cols="12" sm="3">
            <v-select
              :items="orderBy"
              label="Order By"
              outlined
              @change="filteredByAll($event)"
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

  data() {
    return {
      oderByValue: '',
      keyword: this.$store.state.keyword,
      sortByValue: '',
      productCategory: '',
       product_category: [
        {
         text: 'All Merchants',
         value: ''
        }, 
        {
         text: 'Only Services Merchants',
         value: 'services'
       },
       {
         text: 'Only Products Merchants',
         value: 'products'
       },
       {
         text: 'Multiple Merchants',
         value: 'both'
       },
      ],
      sortBy: [
        {
          text: 'All',
          value: '',
        },
        {
          text: 'Merchants Name',
          value: 'title',
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
        },
        {
          text: 'Lowest to Highest Price',
          value: 'low',
        },
        {
          text: 'Highest to Lowest Price',
          value: 'high',
        }
      ],
    }
  },
  
  computed: {
    filteredByAll() {
      return this.$store.dispatch('filteredByAll', {
        keyword: this.keyword,
        sortByValue: this.sortByValue,
        productCategory: this.productCategory,
        oderByValue: this.oderByValue
      })
      // return filterByTitle(this.$store.state.products, this.keyword)
    }
  }
};
</script>
