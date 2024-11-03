import { selector } from 'recoil'
import cartItemsAtom from './cartItemsState'

const cartTotalSelector=selector({
    key: 'listTotalSelector',
    get: ({ get })=>{
        const cartTotal=get(cartItemsAtom)
        return cartTotal.reduce((accum, ip) => accum + ip.price*ip.quantity, 0)
    },
})

export default cartTotalSelector