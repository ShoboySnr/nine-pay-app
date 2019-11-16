<template>
  <div>
    <Carousel />
    <ProductItems productType="Merchants" :products="products" />
  </div>
</template>

<script>
import Carousel from "./partials/Carousel.vue"
import ProductItems from "./partials/ProductItems.vue"

export default {
  name: 'Home',
  components: {
    Carousel,
    ProductItems
  },
  post: {
  id: 1,
  title: 'My Journey with Vue'
  },
  data() {
    return {
      products: [
        {
          id: '1',
          title: 'O\'Cash Financial Services Enterprise',
          image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          id: '2',
          title: 'Catenin95',
          image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          id: '3',
          title: 'TEGASI Enterprises',
          image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          id: '4',
          title: 'Facebook Wealth Formular',
          image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
      ],
    }
  }
};
</script>
