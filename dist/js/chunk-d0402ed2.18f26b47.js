(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0402ed2","chunk-063bd7ae"],{"57da":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Carousel"),r("SearchPage"),r("ProductItems",{attrs:{productType:"Merchants",products:t.products}})],1)},a=[],i=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),n=r("2f62"),c=r("6a29"),o=r("7502"),d=r("beb2");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={name:"Home",components:{Carousel:c["default"],ProductItems:o["default"],SearchPage:d["default"]},mounted:function(){this.fetchProducts()},computed:Object(n["d"])(["products"]),methods:u({},Object(n["b"])(["fetchProducts"]))},h=p,f=r("2877"),v=Object(f["a"])(h,s,a,!1,null,null,null);e["default"]=v.exports},6460:function(t,e,r){},7502:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-10"},[r("p",{staticClass:"title"},[t._v(t._s(t.productType)+" ")]),0===t.products.length?r("v-row",[r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",height:"40"}},[r("p",{staticClass:"red--text display-1"},[r("v-icon",{staticClass:"red--text",attrs:{"x-large":""}},[t._v("mdi-delete-empty")]),t._v(" No Merchants Found")],1)])],1):r("v-row",t._l(t.products,(function(e){return r("v-col",{key:e,staticClass:"product",attrs:{cols:"6",md:"3",xs:"12"}},[r("v-flex",{staticClass:"my-2"},[r("v-lazy",{attrs:{options:{threshold:.5},transition:"fade-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[r("v-card",{staticClass:"mx-auto",attrs:{raised:"",height:"100%"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:e.image}}),r("v-card-text",{staticClass:"text--primary d-flex justify-center text-center pa-20"},[r("div",{staticClass:"font-weight-bold max-product-width"},[t._v(t._s(e.title))])]),r("v-card-subtext",{staticClass:"text-center d-flex justify-center pt-0 pa-5"},t._l(e.product_category,(function(e,s){return r("span",{key:s,class:t.tags[e]+" white--text pl-2 pr-4"},[t._v(" "+t._s(t._f("returnMerchants")(e))+" ")])})),0),r("div",{staticClass:"price-bg text-center ma-3 headline"},[t._v(" "+t._s(t._f("returnPrice")(e.price))+" ")]),r("v-card-actions",{staticClass:"d-flex justify-center green"},[r("v-btn",{attrs:{color:"white",text:""},on:{click:function(r){return t.addToCart(e)}}},[r("v-icon",[t._v("mdi-cart")])],1),r("v-btn",{attrs:{color:"white",text:""}},[r("v-icon",[t._v("mdi-heart")])],1),r("v-btn",{attrs:{color:"white",text:""}},[r("v-icon",[t._v("mdi-eye")])],1)],1)],1)],1)],1)],1)})),1)],1)},a=[],i=(r("4de4"),r("fb6a"),r("0d03"),r("b680"),r("d3b7"),r("ac1f"),r("25f0"),r("5319"),r("2b0e"));i["default"].filter("returnMerchants",(function(t){return t?(t=t.toString(),"".concat(t.charAt(0).toUpperCase()+t.slice(1)," Merchants")):""})),i["default"].filter("returnPrice",(function(t){if(!t)return 0;var e=(t/1).toFixed(2);return"₦".concat(e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}));var n={name:"ProductItems",props:{productType:{type:String},products:{type:Object}},data:function(){return{tags:{services:"red",products:"green"}}},methods:{addToCart:function(t){this.$store.dispatch("addToCart",t);var e=t.title+" added to cart";this.$notify({group:"products",title:"Success",text:e})}},filters:{filter:void 0}},c=n,o=(r("a290"),r("2877")),d=r("6544"),l=r.n(d),u=r("8336"),p=(r("a4d3"),r("0481"),r("4160"),r("4069"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),h=(r("615b"),r("10d2")),f=r("297c"),v=r("1c87"),b=r("58df");function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(r,!0).forEach((function(e){Object(p["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y=Object(b["a"])(f["a"],v["a"],h["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return m({"v-card":!0},v["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},h["a"].options.computed.classes.call(this))},styles:function(){var t=m({},h["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=f["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}}),O=r("80d2"),j=Object(O["f"])("v-card__actions"),x=(Object(O["f"])("v-card__subtitle"),Object(O["f"])("v-card__text")),_=(Object(O["f"])("v-card__title"),r("62ad")),C=(r("20f6"),r("e8f2")),w=Object(C["a"])("flex"),P=r("132d"),k=r("adda"),S=(r("e25e"),r("f2e7")),V=r("90a2"),B=Object(b["a"])(S["a"]).extend({name:"VLazy",directives:{intersect:V["a"]},props:{minHeight:[Number,String],options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return{minHeight:parseInt(this.minHeight)?Object(O["d"])(this.minHeight):this.minHeight}}},methods:{genContent:function(){var t=Object(O["m"])(this);if(!this.transition)return t;var e=[];return this.isActive&&e.push(t),this.$createElement("transition",{props:{name:this.transition}},e)},onObserve:function(t,e,r){this.isActive||(this.isActive=r)}},render:function(t){return t("div",{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}}),$=r("0fd9"),A=Object(o["a"])(c,s,a,!1,null,"519c0af6",null);e["default"]=A.exports;l()(A,{VBtn:u["a"],VCard:y,VCardActions:j,VCardText:x,VCol:_["a"],VFlex:w,VIcon:P["a"],VImg:k["a"],VLazy:B,VRow:$["a"]})},a290:function(t,e,r){"use strict";var s=r("6460"),a=r.n(s);a.a}}]);
//# sourceMappingURL=chunk-d0402ed2.18f26b47.js.map