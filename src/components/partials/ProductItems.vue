<template>
  <div class="mt-10">
    <p class="title">{{productType}} </p>
    <v-row>
      <v-col
        cols="12"
        md="3"
        v-for="product in products"
        :key="product"
        class="product"
      >
      <v-card
        class="mx-auto"
        raised
        >
          <progressive-img
            class="white--text align-end"
            height="200px"
            :src="product.image"
          />
            <v-card-text class="text--primary d-flex justify-center text-center pa-20">
              <div class="font-weight-bold max-product-width">{{product.title}}</div>
            </v-card-text>
        </v-card>
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
</style>

<script>
export default {
  name: 'ProductItems',
  props: [
    'productType',
    'products'
  ],
};
</script>
