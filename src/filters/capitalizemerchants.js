import Vue from 'vue';

Vue.filter('returnMerchants', function (value) {
  if (!value) return ''
  value = value.toString()
  return `${value.charAt(0).toUpperCase() + value.slice(1)} Merchants`
});