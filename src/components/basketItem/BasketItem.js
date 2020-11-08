import React from 'react'

function BasketItem({ id, title, image, price, rating }) {
  return (
    <div className="basketitem">
      <div className="basketitem__info">
        <p>{title}</p>
        <p className="basketitem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketitem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
    </div>
  )
}

export default BasketItem
