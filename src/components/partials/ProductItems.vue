<template>
  <v-container class="mt-10">
    <p class="display-3">{{productType}} </p>
    <v-row v-if="products.length  === 0">
      <v-col cols="12" class="d-flex justify-center" height="40">
        <p class="red--text display-1"><v-icon x-large class="red--text">mdi-delete-empty</v-icon>
        Sorry, no merchants was found.</p>
      </v-col>
    </v-row>
    <v-row v-else-if="isLoading">
      <v-col cols="12" class="d-flex justify-center">
        <i class="green--text display-1"><v-icon class="=green--text">mdi-loading</v-icon>
        loading...</i>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        cols="12"
        md="3"
        sm="4"
        v-for="product in products"
        :key="product"
        class="product mb-10 mt-10"
      >
      <v-flex
      class="my-2"
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
            flat
            height="100%"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                :src="product.image"
              ></v-img>
                <v-card-text class="text--primary pa-20">
                  <div class="font-weight-bold max-product-width">{{product.title | readMore }}</div>
                </v-card-text>
                <v-card-subtext class="text-center d-flex justify-center pt-0 pa-1 caption">
                    <span v-for="(merchant, index) in product.product_category" :key="index" :class="`${tags[merchant]} white--text pl-1 pr-1`">
                        {{ merchant | returnMerchants }} 
                  </span>
                </v-card-subtext>
                <div class="percentage red d-flex justify-center">
                  <p class="caption mb-0 white--text"> {{ product.cost_price | toPercentage(product.price)}} </p>
                </div>
                <div class="price-bg text-center ma-3 mb-0 headline">
                  {{ product.cost_price | returnPrice }}
                </div>
                <div class="price-bg text-center red--text mt-0 caption line-through">
                  {{ product.price | returnPrice }}
                </div>
                <v-card-actions class="d-flex justify-center white">
                  <v-btn
                    color="success"
                    text
                    @click="addToCart(product)"
                  >
                    <v-icon>mdi-cart</v-icon>
                  </v-btn>
                  <v-btn
                    color="red"
                    text
                    @click="addToFavs(product)"
                  >
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn
                    color="black"
                    text
                  >
                    <v-icon>mdi-eye</v-icon> 
                  </v-btn>
                </v-card-actions>
            </v-card>
        </v-lazy>
      </v-flex>
      </v-col>
    </v-row>
  </v-container>
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

.percentage {
    position: absolute;
    top: 0px;
    right: 0;
    height: 40px;
    padding: 10px;
}

.line-through {
  text-decoration: line-through;
}
</style>

<script>
import filter from '../../filters/filter';


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
      },
      isLoading: this.$store.state.isLoading,
    }
  },
  methods: {
    addToCart(product) {
			this.$store.dispatch('addToCart', product)
      const info = product.title + ' added to cart :)';
      this.$noty.success(info, {
        layout: 'bottomRight'
      });
    },

    addToFavs(product) {
      this.$store.dispatch('addToFavs', product);
      const info = product.title + ' added to Favorites';
      this.$noty.success(info, {
        layout: 'bottomRight'
      })
		}
  },
  filters: {
    filter,
  }
};
</script>
