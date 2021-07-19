import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function AddFetch() {
  const [product, setProduct] = React.useState({})

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify({
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
      }),
    })
      .then((res) => res.json())
      .then((json) =>
        setProduct(
          json.map((data) => {
            return {
              title: data.title,
              price: data.price,
              description: data.description,
              image: data.image,
              category: data.category,
            }
          }),
        ),
      )
  }, [])
}
