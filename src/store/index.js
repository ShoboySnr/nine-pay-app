import Vue from 'vue';
import Vuex from 'vuex';
import { products } from '../data/data';
import  { GET_ALL_PRODUCTS, ADD_TO_CART, REMOVE_ITEM, CLEAR_CART, IS_DATA_READY, DEDUCT_ITEM_COUNT } from './types';
import { filterByTitle, filterByProductCategory, filterByPrice, filterByAlphabetically } from '../filters/searchfilter';

Vue.use(Vuex);

//get the merchants here
const allproducts = products;

export default new Vuex.Store({
  state: {
		cart: [],
		products: [],
		keyword: '',
		isDataReady: false,
  },
  mutations: {
		[GET_ALL_PRODUCTS] ({ products }, product) {
			products.push(product)
		},

    [ADD_TO_CART] ({ cart }, payload) {
      if (payload.itemIndex === -1) {
				cart.push({ ...payload.product, count: 1 })
			} else {
				cart[payload.itemIndex].count++
			}
		},
		
    [DEDUCT_ITEM_COUNT] ({ cart }, product) {
			const itemIndex = cart.findIndex(item => item.id === product.id)

			cart[itemIndex].count > 1
				? cart[itemIndex].count--
				: cart.splice(itemIndex, 1)
		},
		
    [REMOVE_ITEM] ({ cart }, product) {
			const itemIndex = cart.findIndex(item => item.id === product.id)

			cart.splice(itemIndex, 1)
		},

		[CLEAR_CART] (state) {
			state.cart = []
		},

		[IS_DATA_READY](state, value) {
			state.isDataReady = value; 
		}

  },
  actions: {
		fetchProducts({ commit }) {
			allproducts.forEach(product => {
					commit(GET_ALL_PRODUCTS, {
						title: product.title,
						image: product.image,
						id: product.id,
						product_category: product.product_category,
						price: product.price,
					});
					commit(IS_DATA_READY, true);
			});
		},

		addToCart({ commit, state }, product) {
			const itemIndex = state.cart.findIndex(item => item.id === product.id);
			commit(ADD_TO_CART, { product: product, itemIndex: itemIndex } );
		},

		sortByLowPrice({state}) {
			return state.products.sort(function(a, b) {
				return a.price - b.price;
			});
		},

		sortByHighPrice({state}) {
			return state.products.sort(function(a, b) {
				return b.price - a.price;
			});
		},

		sortByDefault({state}) {
			return state.products;
		},
		// sortByProductCategory({state}, {productCategory}) {
		
		// },

		// sortByMerchantTitle({state}) {
		// 	return state.products.sort(function(a, b) {
		// 		if (a.title > b.title) { return 1}
		// 		if (a.title < b.title) { return -1 }
		// 		return 0
		// 	});
		// },

		sortByMerchantType({state}) {
			return state.products.sort(function(a, b) {
				if (a.product_category[0] > b.product_category[0]) { return 1}
				if (a.product_category[0] < b.product_category[0]) { return -1 }
				return 0
			});
		},

		filteredByAll: ({commit, state}, payload)  => {
			const obj = filterByAlphabetically(filterByPrice(filterByProductCategory(filterByTitle(allproducts, payload.keyword), payload.productCategory), payload.oderByValue), payload.sortByValue);
			state.products = []
			obj.forEach(product => {
				commit(GET_ALL_PRODUCTS, {
					title: product.title,
					image: product.image,
					id: product.id,
					product_category: product.product_category,
					price: product.price,
				});
				commit(IS_DATA_READY, true);
		});
		},
	
		

		// sortByMerchantCategory({state}, payload) {
		// 	const merchantIndex = state.cart.find(item => item.product_category === payload);
		// 	return state.products[merchantIndex];
		// }

		computedProducts ({state}, {search, productCategory, oderByValue}) {
			alert(oderByValue);
      return state.products.filter((item) => {
				return (search.length === 0 || item.name.includes(search)) && 
				(productCategory.length === 0 || item.product_category.includes(productCategory))
				.sort((a, b) => {
					return a[oderByValue].toString().localeCompare(b[oderByValue].toString())
				});
      //   return (this.keyword.length === 0 || item.name.includes(this.keyword)) &&
      //   (this.colors.length === 0 || this.colors.includes(item.color)) &&
      //   (this.sizes.length === 0 || this.sizes.includes(item.size))
      // }).sort((a, b) => {
      //   return a[this.sortBy].toString().localeCompare(b[this.sortBy].toString())
      // })
		})


			// checkout ({ commit, state }, products) {
			// 	// save the items currently in the cart
			// 	const savedCartItems = [...state.cart.added]
			// 	// send out checkout request, and optimistically
			// 	// clear the cart
			// 	commit(CHECKOUT_REQUEST)
			// 	// the shop API accepts a success callback and a failure callback
			// 	shop.buyProducts(
			// 		products,
			// 		// handle success
			// 		() => commit(CHECKOUT_SUCCESS),
			// 		// handle failure
			// 		() => commit(CHECKOUT_FAILURE, savedCartItems)
			// 	)
			// },

			// filterByOrder({commit, state}, order) {

			// }
		}
	},
	getters: {
		cartsCount : state => {
			
			return state.cart.length;
		},
		getCart: state => {
			return state.cart;
		},
		products: state => {
			return state.products;
		},
		filteredByAll: state => {
			return filterByTitle (state.products, state.keyword)
		},
		
	}
})