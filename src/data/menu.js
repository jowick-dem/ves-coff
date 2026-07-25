import espressoImg from '../assets/vespa/espresso.jpg';
import latteImg from '../assets/vespa/latte.jpg';
import cappuccinoImg from '../assets/vespa/cappuccino.jpg';
import macchiatoImg from '../assets/vespa/caramel_macchiato.jpg';
import americanoImg from '../assets/vespa/iced_americano.jpg';
import coldBrewImg from '../assets/vespa/cold_brew.jpg';
import icedLatteImg from '../assets/vespa/iced_latte.jpg';
import croissantImg from '../assets/vespa/croissant.jpg';
import muffinImg from '../assets/vespa/muffin.jpg';
import cookieImg from '../assets/vespa/cookie.jpg';

export const menuItems = [
    {
        id: 1,
        name: 'Espresso',
        category: 'Hot Coffee',
        description: 'Strong, bold, and pure coffee shot.',
        price: 3.50,
        image: espressoImg
    },
    {
        id: 2,
        name: 'Classic Latte',
        category: 'Hot Coffee',
        description: 'Smooth espresso with steamed milk and a light layer of foam.',
        price: 4.50,
        image: latteImg
    },
    {
        id: 3,
        name: 'Cappuccino',
        category: 'Hot Coffee',
        description: 'Equal parts espresso, steamed milk, and milk foam.',
        price: 4.50,
        image: cappuccinoImg
    },
    {
        id: 4,
        name: 'Caramel Macchiato',
        category: 'Hot Coffee',
        description: 'Espresso with vanilla-flavored syrup, milk, and caramel drizzle.',
        price: 5.00,
        image: macchiatoImg
    },
    {
        id: 5,
        name: 'Iced Americano',
        category: 'Cold Coffee',
        description: 'Espresso shots topped with cold water produce a light layer of crema, then served over ice.',
        price: 3.80,
        image: americanoImg
    },
    {
        id: 6,
        name: 'Cold Brew',
        category: 'Cold Coffee',
        description: 'Slow-steeped in cool water for 20 hours, without touching heat.',
        price: 4.20,
        image: coldBrewImg
    },
    {
        id: 7,
        name: 'Iced Latte',
        category: 'Cold Coffee',
        description: 'Espresso, milk and ice together to create a refreshing drink, sweetened upon request.',
        price: 4.80,
        image: icedLatteImg
    },
    {
        id: 8,
        name: 'Butter Croissant',
        category: 'Pastries',
        description: 'Classic pastry with a flaky, buttery crust and a soft, chewy center.',
        price: 3.50,
        image: croissantImg
    },
    {
        id: 9,
        name: 'Blueberry Muffin',
        category: 'Pastries',
        description: 'A delicious summer treat, dotted with sweet blueberries and topped with sugar.',
        price: 3.20,
        image: muffinImg
    },
    {
        id: 10,
        name: 'Chocolate Chip Cookie',
        category: 'Pastries',
        description: 'Chewy and soft inside, crispy on the edges, loaded with chocolate chips.',
        price: 2.50,
        image: cookieImg
    }
];
