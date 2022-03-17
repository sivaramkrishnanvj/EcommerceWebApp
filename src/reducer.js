export const initialState ={
  
    cart:[],
    user: null,
};

const reducer=(state,action)=>{
   
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
            cart:[...state.cart,action.item]
            };
            
            case 'REMOVE_FROM_CART':
            let newCart = [...state.cart];
            const index = state.cart.findIndex(obj=>obj.id===action.id);
            if(index>=0){
             newCart.splice(index,1);
            }   else{
                console.warn(
                    `Cant remove the item(id:${action.id}) as it is not in Cart`
                );
            } 
            return {...state , newCart};
               
                default:
                    return state;
    }
}

export default reducer