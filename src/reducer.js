const initialState = {
    listProduct: [],
    listProductByName: [],
    productFilterByCategory: [],
    filterByCategory: ''
}


export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {

        case 'LIST_PRODUCT': {
            console.log("Lista de productos", action.payload);
            return {
                ...state,
                listProduct: action.payload
            }
        }

        case 'PRODUCT_BY_NAME': {
            const listProductByName = (state.listProduct || [])
                .filter(data => data.title.toLowerCase().includes(action.payload.toLowerCase()))
            return { ...state, listProductByName }
        }

        default: {
            return state
        }
    }
}
