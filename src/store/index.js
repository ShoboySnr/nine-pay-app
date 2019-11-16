import Vue from 'vue';
import Vuex from 'vuex';
import { products } from '../data/data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: products,
  },
  mutations: {
		addProduct({ products }, product) {
			products.push(product)
		},
    addToCart({ cart }, product) {
      const itemIndex = cart.findIndex(item => item.id === product.id);

      if (itemIndex === -1) {
				cart.push({ ...product, count: 1 })
			} else {
				cart[itemIndex].count++
			}
    },
    deductItemCount({ cart }, product) {
			const itemIndex = cart.findIndex(item => item.id === product.id)

			cart[itemIndex].count > 1
				? cart[itemIndex].count--
				: cart.splice(itemIndex, 1)
    },
    removeItem({ cart }, product) {
			const itemIndex = cart.findIndex(item => item.id === product.id)

			cart.splice(itemIndex, 1)
		},
		clearCart(state) {
			state.cart = []
		}
  },
  actions: {
		fetchProducts({ commit }) {
					this.products.forEach(product => {
							commit('addProduct', {
								title: product.title,
								image: product.image,
								id: product.id,
								product_category: product.product_category,
							});
					})
				}
		},
	getters: {

	}
})