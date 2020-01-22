export const addItemToCart = (cartItems, itemToAdd) => {

  const isExistingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id)

  if (isExistingCartItem) {

    return cartItems.map(cartItem => {
      return cartItem.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    })

  }

  return [...cartItems, {...itemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.map(cartItem => {
    return cartItem.id === itemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
  }).filter(cartItem => {
    return cartItem.quantity !== 0
  })
}
