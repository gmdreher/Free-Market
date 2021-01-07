export default function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'LIST_PRODUCT': {
            console.log("Lista de productos");
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

        case 'FILTER_BY_CATEGORY': {
            const { categ } = action.payload;

            if ('' === categ) {
                return { ...state, productFilterByCategory: [], filterByCategory: '', };
            }

            const productFilterByCategory = state.listProduct.filter((data) => data.available_filters === categ);

            return { ...state, productFilterByCategory, filterByCategory: categ }
        }

        default: {
            return state
        }
    }
}
