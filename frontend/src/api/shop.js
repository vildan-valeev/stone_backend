import instance from './instance'

export const getItems = (data = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(`shop/item/`, {params: data})
     .then(resp => {
       resolve(resp.data.results)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const getOneItem = id => {
  return new Promise((resolve, reject) => {
    instance.get(`shop/item/${id}`)
     .then(resp => {
       resolve(resp.data)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const getFilterMaterial = () => {
  return new Promise((resolve, reject) => {
    instance.get(`shop/item_material/`)
     .then(resp => {
       resolve(resp.data.results)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const getFilterTypes = () => {
  return new Promise((resolve, reject) => {
    instance.get(`shop/item_type/`)
     .then(resp => {
       resolve(resp.data.results)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const getFilterColor = () => {
  return new Promise((resolve, reject) => {
    instance.get(`shop/item_material_color/`)
     .then(resp => {
       resolve(resp.data.results)
     })
     .catch(err => {
       reject(err)
     })
   })
}
export const paypalOrder = data => {
  return new Promise((resolve, reject) => {
    instance.post(`shop/paypal_order/`, data)
     .then(resp => {
       resolve(resp)
     })
     .catch(err => {
       reject(err)
     })
   })
}
// export const createCart = () => {
//   return new Promise((resolve, reject) => {
//     instance.post(`shop/cart/`)
//      .then(resp => {
//        resolve(resp.data.results)
//      })
//      .catch(err => {
//        reject(err)
//      })
//    })
// }
// export const getCartId = id => {
//   return new Promise((resolve, reject) => {
//     instance.get(`shop/cart/${id}`)
//      .then(resp => {
//        resolve(resp.data.results)
//      })
//      .catch(err => {
//        reject(err)
//      })
//    })
// }

export const getCartUser = () => {
  return new Promise((resolve, reject) => {
    instance.get(`shop/cart/me`)
     .then(resp => {
       resolve(resp.data)
     })
     .catch(err => {
       reject(err)
     })
   })
}
export const addToCard = data => {
  return new Promise((resolve, reject) => {
    instance.post(`shop/cart_item/`, data)
     .then(resp => {
       resolve(resp.data.results)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const getOrders = () => {
  return new Promise((resolve, reject) => {
    instance.get(`shop/order/me`)
     .then(resp => {
       resolve(resp.data)
     })
     .catch(err => {
       reject(err)
     })
   })
}
export const ActivateUser = data => {
  return new Promise((resolve, reject) => {
    instance.post(`/auth/users/activation/`, data)
     .then(resp => {
       resolve(resp.data)
     })
     .catch(err => {
       reject(err)
     })
   })
}
// card

// export const addToCard = () => {
//   return new Promise((resolve, reject) => {
//     if
// }