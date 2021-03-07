export const InitialState = {
  basket: [],
  loggedinuser: null
}
export const getBasketTotal =(basket) => basket?.reduce((amount,item)=> item.price + amount, 0);

const Reducer = (state, action) => {
  console.log(action);
  switch (action.type){
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket,action.item]
      }
      case 'SET_LOGIN':
        return {
          ...state,
          loggedinuser: action.user
        }
        case 'REMOVE_FROM_CART':
          let newcart = [...state.basket]
          const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
          if(index >= 0){
            newcart.splice(index,1)
          }else{
            console.log('Error')
          }
          return{...state, basket: newcart}
  }
}

export default Reducer;