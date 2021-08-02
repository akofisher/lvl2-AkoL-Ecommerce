export function serializeProductList(data) {
  return data.map((el) => {
    return {
      title: el.title,
      price: el.price,
      image: el.image,
      id: el.id,
    }
  })
}

export function serializeSingleProduct(el) {
  return {
    id: el.id,
    title: el.title,
    price: el.price,
    category: el.category,
    description: el.description,
    image: el.image,
  }
}
