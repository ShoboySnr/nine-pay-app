import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'
import { products } from '../data/data';
import  { 
		GET_ALL_PRODUCTS, 
		ADD_TO_CART, 
		REMOVE_ITEM,
		CLEAR_CART, 
		IS_DATA_READY, 
		DEDUCT_ITEM_COUNT,
		IS_LOADING,
		ADD_TO_FAV } from './types';
import { filterByTitle, filterByProductCategory, filterByPrice, filterByAlphabetically } from '../filters/searchfilter';

Vue.use(Vuex);

//get the merchants here
const allproducts = products;

//Initialize vue persists
const vuexPersist = new VuexPersist(
	{
		key: 'cart',
		storage: window.localStorage
	},
	{
		key: 'favorites',
		storage: window.localStorage
	},
	)

export default new Vuex.Store({
	plugins: [vuexPersist.plugin],

  state: {
		isLoading: false,
		cart: [],
		products: [],
		keyword: '',
		isDataReady: false,
		favorites: [],
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
		},

		[IS_LOADING] (state, value) {
			state.isLoading = value;
		},

		[ADD_TO_FAV] ({ favorites }, payload) {
			payload.itemIndex === -1 ? favorites.push({ ...payload.product, count: 1 }) : '';
		},

  },
  actions: {
		fetchProducts({ commit }) {
			commit(IS_LOADING, true);
			allproducts.forEach(product => {
					commit(GET_ALL_PRODUCTS, {
						title: product.title,
						image: product.image,
						id: product.id,
						product_category: product.product_category,
						price: product.price,
						cost_price: product.cost_price,
					});
			});
			commit(IS_LOADING, false);
		},

		addToCart({ commit, state }, product) {
			const itemIndex = state.cart.findIndex(item => item.id === product.id);
			commit(ADD_TO_CART, { product: product, itemIndex: itemIndex } );
		},

		addToFavs({ commit, state }, product) {
			const itemIndex = state.favorites.findIndex(item => item.id === product.id);
			commit(ADD_TO_FAV, { product: product, itemIndex: itemIndex } );
		},

		filteredByAll: ({commit, state}, payload)  => {
			commit(IS_LOADING, true);
			const obj = filterByAlphabetically(filterByPrice(filterByProductCategory(filterByTitle(allproducts, payload.keyword), payload.productCategory), payload.oderByValue), payload.sortByValue);
			state.products = []
			obj.forEach(product => {
				commit(GET_ALL_PRODUCTS, {
					title: product.title,
					image: product.image,
					id: product.id,
					product_category: product.product_category,
					price: product.price,
					cost_price: product.cost_price,
				});
			});
			commit(IS_LOADING, false);
		},
	},


	getters: {
		cartsCount : state => state.cart.length,

		favsCount : state => state.favorites.length,

		getCart: state => state.cart,

		products: state => state.products,

		filteredByAll: state => filterByTitle (state.products, state.keyword),
		
	}
})