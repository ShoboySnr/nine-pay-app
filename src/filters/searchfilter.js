export function filterByTitle (products, keyword) {
  const search = keyword.trim().toLowerCase()
  if (!search.length) return products;
  return products.filter(product => product.name.toLowerCase().indexOf(search) > -1)
}