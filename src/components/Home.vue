<template>
  <div>
    <Carousel />
    <SearchPage />
    <ProductItems productType="Merchants" :products="products" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Carousel from "./partials/Carousel.vue"
import ProductItems from "./partials/ProductItems.vue"
import SearchPage from "./partials/SearchPage.vue"

export default {
  name: 'Home',
  components: {
    Carousel,
    ProductItems,
    SearchPage
  },
  mounted() {
		this.fetchProducts();
  },
  computed: mapState(['products']),
  methods: {
		...mapActions(['fetchProducts']),
	},
};
</script>
