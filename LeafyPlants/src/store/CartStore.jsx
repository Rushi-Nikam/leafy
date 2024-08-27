import {create} from "zustand"
export const  useCartStore= create((set)=>({
    cart:[],
    addProductToCart:(product)=>set((state)=>({cart:[...state.cart , product]})),
    removeProductFromCart:(productid)=>set((state)=>({cart: state.cart.filter(product => product.id !== productid)})),
    clearProductFromCart:()=>set({cart:[]}), 
}));
