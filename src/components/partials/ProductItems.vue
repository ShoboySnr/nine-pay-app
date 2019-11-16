<template>
  <div class="mt-10">
    <p class="title">{{productType}} </p>
    <v-row v-if="products.length  === 0">
      <v-col cols="12" class="d-flex justify-center" height="40">
        <p class="red--text display-1"><v-icon x-large class="red--text">mdi-delete-empty</v-icon>
        No Merchants Found</p>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        cols="12"
        md="3"
        v-for="product in products"
        :key="product"
        class="product"
      >
      <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        transition="fade-transition"
      >
        <v-card
          class="mx-auto"
          raised
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="product.image"
            ></v-img>
              <v-card-text class="text--primary d-flex justify-center text-center pa-20">
                <div class="font-weight-bold max-product-width">{{product.title}}</div>
              </v-card-text>
              <v-card-subtext class="text-center d-flex justify-center pt-0 pa-5">
                  <span v-for="(merchant, index) in product.product_category" :key="index" :class="`${tags[merchant]} white--text pl-2 pr-4`">
                      {{ merchant | returnMerchants }} </span>
              </v-card-subtext>
              <v-card-actions class="d-flex justify-center green">
                <v-btn
                  color="white"
                  text
                >
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
                 <v-btn
                  color="white"
                  text
                >
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn
                  color="white"
                  text
                >
                  <v-icon>mdi-eye</v-icon> 
                </v-btn>
              </v-card-actions>
          </v-card>
      </v-lazy>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.max-product-width {
  max-width: 90%;
}

.product {
  min-height: 300px
}

.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>

<script>
import capitalizemerchants from '../../filters/capitalizemerchants';


export default {
  name: 'ProductItems',
  props: {
    productType: {
      type: String
    },
    products: {
      type: Object
    }
  },
  data() {
    return {
      tags: {
        services: 'red',
        products: 'green',
      }
    }
  },
  filters: {
    capitalizemerchants
  }
};
</script>