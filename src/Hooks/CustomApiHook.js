import React from 'react'
import { useState, useEffect } from 'react'

export const useFetch = (url, options, body = null) => {
  console.log(url, options, JSON.parse(body))
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const resp = await fetch(url, options, { body: body })
        const data = await resp.json()
        setData(data)

        if (data.data) {
          setProducts(
            data.data.map((data) => {
              return {
                title: data.title,
                price: data.price,
                image: data.image,
                id: data.id,
              }
            }),
          )
        } else {
          setProducts({
            title: data.title,
            price: data.price,
            image: data.image,
            id: data.id,
          })
        }
      } catch (e) {
        setData([])
        setError(e)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])
  return { data, error, isLoading, products }
}
