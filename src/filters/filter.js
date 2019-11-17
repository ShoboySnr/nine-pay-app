import Vue from 'vue';

Vue.filter('returnMerchants', function (value) {
  if (!value) return ''
  value = value.toString()
  return `${value.charAt(0).toUpperCase() + value.slice(1)} Merchants`
});

Vue.filter('returnPrice', function(value) {
  if (!value) return 0;
  let val = (value/1).toFixed(2);
  return `₦${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
});