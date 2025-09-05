import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            products: [
                { name: 'product one', price: 33 },
                { name: 'product two', price: 42 },
                { name: 'product three', price: 42 },
                { name: 'product four', price: 20 },
            ]
        }
    },
    getters:{
        saleProducts(state){
            var saleProduct = state.products.map(product=>{
                return{
                    name:'---'+product.name+'**',
                    price:product.price/2
                }
            })
            return saleProduct
        }
    }
})



export default store
