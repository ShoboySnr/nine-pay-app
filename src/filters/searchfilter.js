export function filterByTitle (products, keyword) {
  const search = keyword.trim().toLowerCase()
  if (!search.length) return products;
  return products.filter(product => product.title.toLowerCase().indexOf(search) > -1)
}

export function filterByProductCategory(products, product_category) {
  if (!product_category) return products
  return products.filter(item => {
    return product_category === 'both' &  item.product_category.length >= 2 ? item.product_category : item.product_category.slice(0) == product_category;
  });
}

export function filterByPrice(products, sort_key) {
  if(!sort_key.length ) return products;
  return products.sort((a,b) => {
    return sort_key === 'high' ? b.cost_price - a.cost_price : a.cost_price - b.cost_price;
  })
}

export function filterByAlphabetically(products, sort_key) {
  if (!sort_key.length) return products;
  return products.sort((a, b) => {
    if (sort_key === 'title') return a.title < b.title ? -1 : 1;
    else return a.product_category[0] < b.product_category[0] ? -1 : 1
  })
}