import { atom } from 'recoil'

const itemsAtom=atom({
    key: "listItems",
    default: [
        {
            id: 1,
            img: '/src/assets/one-handed-gaming-keyboard.png',
            name: "1 handed gaming keyboard",
            title:'Redragon K585-blue switch DITI One-Handed RGB Mechanical Blue Switches, Type-C Professional Wired Gaming Keyboard Keypad with 7 Onboard Macro Keys, Detachable Wrist Rest, 42 Keys (Black)',
            quantity: 1,
            price: 2459.00
        },
        {
            id: 2,
            img: '/src/assets/usb-c-adapter.png',
            name: "usb-c adapter",
            title: 'USB-C Adapter',
            quantity: 1,
            price: 349.00
        },
        {
            id: 3,
            img: '/src/assets/computer-monitor.png',
            name: "monitor",
            title: 'Computer Monitor',
            quantity: 1,
            price: 22799.00
        },
        {
            id: 4,
            img: '/src/assets/invest-book.png',
            name: 'Value Investing Book',
            title: 'The Intelligent Investor: The Definitive Book on Value Investing',
            quantity: 1,
            price: 579.00
        },
        {
            id: 5,
            img: '/src/assets/keyboard.png',
            name: "keyboard",
            title: 'Keyboard',
            quantity: 1,
            price: 2149.00
        },
        {
            id: 6,
            img: '/src/assets/tourist-suitcase.png',
            name: 'American Tourister Suitcase',
            title: 'American Tourister Ivy 55cm Small Hardside Polypropylene 4 Spinner Wheels Cabin Suitcase with Recessed TSA Lock & Color-Matched Components for Women & Men - Black',
            quantity: 1,
            price: 3499.00
        }
    ]
})

export default itemsAtom;