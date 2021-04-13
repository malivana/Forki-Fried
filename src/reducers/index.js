const initialState = {
    menu: [],
    cart: [],

    totalPrice: 0,

    loading: true,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'MENU_LOADED': {
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            }
        }

        case 'MENU_REQUESTED': {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case 'MENU_ERROR': {
            return {
                ...state, 
                loading: false, 
                error: true
            }
        }  

        case 'ADD_ITEM_TO_CART': {
            let item;

            // Check if (One Item or Array of items)
            if (state.menu.id) {
                item = state.menu
            }                 
            else if (state.menu.find) {
                item = state.menu.find(item => item.id === action.payload)
            }

            const itemIdx = state.cart.findIndex(item => item.id === action.payload);

            if (itemIdx >= 0) {
                const oldItem = state.cart[itemIdx];

                const newItem = {
                    ...oldItem,
                    qtty: oldItem.qtty += 1
                }          

                console.log(newItem + 'Rewrited');
                console.log(newItem)
                
                return {
                    ...state,

                    totalPrice: state.totalPrice + newItem.price,

                    cart: [
                        ...state.cart.slice(0, itemIdx),
                        newItem,
                        ...state.cart.slice(itemIdx + 1)
                    ]
                }
            }

            const newItem = {
                ...item,
                qtty: 1
            }

            console.log(newItem + 'Added')

            return {
                ...state,
                totalPrice: state.totalPrice += newItem.price,

                cart: [
                    ...state.cart,
                    newItem
                ]
            }
        }  

        case 'REMOVE_ITEM_FROM_CART': {
            const itemIdx = state.cart.findIndex(item => item.id === action.payload);
            const item = state.cart[itemIdx];

            return {
                ...state,
                totalPrice: state.totalPrice - (item.qtty * item.price),
                cart: [
                    ...state.cart.slice(0, itemIdx),
                    ...state.cart.slice(itemIdx + 1)
                ]
            }
        }

        case 'INCR_QTTY': {
            const itemIdx = state.cart.findIndex(item => item.id === action.payload);
            const item = state.cart.find(item => item.id === action.payload);

            const rewritedItem = {
                ...item,
                qtty: item.qtty + 1
            }

            return {
                ...state,
                totalPrice: state.totalPrice + rewritedItem.price,
                cart: [
                    ...state.cart.slice(0, itemIdx),
                    rewritedItem,
                    ...state.cart.slice(itemIdx + 1)
                ]
            }
        }

        case 'DECR_QTTY': {
            const itemIdx = state.cart.findIndex(item => item.id === action.payload);
            const item = state.cart.find(item => item.id === action.payload);

            const rewritedItem = {
                ...item,
                qtty: item.qtty - 1
            }

            if (rewritedItem.qtty === 0) {
                return {
                    ...state, 
                    totalPrice: state.totalPrice - rewritedItem.price,
                    cart: [
                        ...state.cart.slice(0, itemIdx),
                        ...state.cart.slice(itemIdx + 1)
                    ]
                }
            }

            return {
                ...state,
                totalPrice: state.totalPrice - rewritedItem.price,
                cart: [
                    ...state.cart.slice(0, itemIdx),
                    rewritedItem,
                    ...state.cart.slice(itemIdx + 1)
                ]
            }
        }

        case 'ORDER_CREATED': {
            return {
                ...state,
                totalPrice: 0,
                cart: []
            }
        }

        default: 
            return state;
    }
}

export default reducer;