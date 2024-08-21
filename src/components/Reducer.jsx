// defined all aplication level states

export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => { 
    basket?.reduce((amount,item) => item.price + amount, 0)
} 

const Reducer = (state,action) => {
    console.log(action)
    switch(action.type){
        default:
            return state
    }
}

export default Reducer;