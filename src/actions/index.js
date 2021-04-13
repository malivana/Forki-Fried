const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}

const menuError = () => {
    return{
        type: 'MENU_ERROR'
    }
}

const addItemToCart = (id) => {
    return {
        type: 'ADD_ITEM_TO_CART',
        payload: id
    }
}

const incrQuantity = (id) => {
    return {
        type: 'INCR_QTTY',
        payload: id
    }
}

const decrQuantity = (id) => {
    return {
        type: 'DECR_QTTY',
        payload: id
    }
}

const removeItemFromCart = (id) => {
    return {
        type: 'REMOVE_ITEM_FROM_CART',
        payload: id
    }
}

const orderCreated = () => {
    return {
        type: 'ORDER_CREATED'
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,

    addItemToCart,
    removeItemFromCart,

    decrQuantity,
    incrQuantity,

    orderCreated
}