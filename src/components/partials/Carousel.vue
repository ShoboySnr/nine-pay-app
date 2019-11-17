<template>
  <v-container fluid class="pa-0">
    <v-carousel
      v-model="model"
      :show-arrows="showArrows"
      :hide-delimiters="hideDelimiters"
      :cycle="cycle"
    >
    <v-carousel-item
      v-for="(item,index) in carouselItems"
      :key="index"
      :src="item.src"
      transition="slide-x-reverse-transition"
      :href="item.path"
    >
      <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-2 white--text grey pl-10 pr-10"> {{ item.text }}</div>
      </v-row>
    
    </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import { carouselItems } from '../../data/data'

export default {
  name: 'Carousel',

  data () {
      return {
        carouselItems,
        hideDelimiters: true,
        showArrows: true,
        model: 0,
        cycle: true,

      }
    },
};
</script>
