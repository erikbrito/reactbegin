import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import './styles.css'

const Product = () => {
	const [product, setProduct] = useState({})

	useEffect(() => {
		const { id } = this.props.match.params

    const fetchData = async () => {
			const response = await api.get(`/products/${id}`)
			setProduct(response.data)
		}

		fetchData()
  }, [])

	return (
		<div className='product-info'>
			<h1>{product.title}</h1>
			<p>{product.description}</p>

			<p>
				URL: <a href={product.url}>{product.url}</a>
			</p>

		</div>
	)
}

export default Product