import Vue from 'vue';

Vue.filter('returnMerchants', function (value) {
  if (!value) return ''
  value = value.toString()
  return `${value.charAt(0).toUpperCase() + value.slice(1)}`
});

Vue.filter('returnPrice', function(value) {
  if (!value) return 0;
  let val = (value/1).toFixed(2);
  return `₦${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
});

Vue.filter('readMore', function(value) {
  if (value.length <= 28) return value;
  return `${value.substr(0, 28)}...`;
});

Vue.filter('toPercentage', function(first_value, second_value) {
  return `${(((second_value - first_value) / second_value) * 100).toFixed(0)}%`;
})