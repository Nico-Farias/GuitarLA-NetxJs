import { useState, useEffect } from 'react'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {


  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  const [carrito, setCarrito] = useState(carritoLS)
  const [paginaLista, setPaginaLista] = useState(false)

  useEffect(() => {
    setPaginaLista(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))

  }, [carrito])


  const agregarCarrito = guitarra => {

    if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
      const carritoActualizado = carrito.map(guitarraState => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }

        return guitarraState
      })

      setCarrito([...carritoActualizado])

      localStorage.setItem('carrito', JSON.stringify(carrito))

    } else {
      setCarrito([...carrito, guitarra])
      localStorage.setItem('carrito', JSON.stringify(carrito))

    }

  }


  const eliminarProducto = id => {

    const carritoActualizado = carrito.filter(guitarra => guitarra.id !== id)
    setCarrito(carritoActualizado)

    localStorage.setItem('carrito', JSON.stringify(carrito))
  }


  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map(guitarraState => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = parseInt(guitarra.cantidad)
      }

      return guitarraState
    })

    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carrito))
  }


  return paginaLista ? <
    Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    eliminarProducto={eliminarProducto}
    actualizarCantidad={actualizarCantidad}
  /> : null
}
