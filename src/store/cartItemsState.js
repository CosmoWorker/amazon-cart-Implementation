import { atom } from 'recoil'

const cartItemsAtom=atom({
    key: 'listCartItemsAtom',
    default: []
})

export default cartItemsAtom