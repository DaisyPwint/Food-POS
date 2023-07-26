import MilkTea from './img/milk-tea.png';
import Pizza from './img/pizza.png';
import Coffee from './img/iced-coffee.png';
import Salad from './img/salad.png';
import Burger from './img/hamburger.png';
import Dessert from './img/dessert.png';
import Pasta from './img/pasta.png';
import Sandwich from './img/sandwich.png';

export const categories = [
  {
    id: 1,
    catName: 'milk tea',
    icon: MilkTea  
  },
  {
    id: 2,
    catName: 'pizza',
    icon: Pizza
  },
  {
    id: 3,
    catName: 'coffee',
    icon: Coffee
  },
  {
    id: 4,
    catName: 'salad',
    icon: Salad
  },
  {
    id: 5,
    catName: 'burger',
    icon: Burger
  },
  {
    id: 6,
    catName: 'dessert',
    icon: Dessert
  },
  {
    id: 7,
    catName: 'pasta',
    icon: Pasta 
  },
  {
    id: 8,
    catName: 'sandwich',
    icon: Sandwich
  }
]

export const menu = [
    {
        id: 1,
        name: 'macchiato milk tea',
        category: 'milk tea',
        image: 'https://media.istockphoto.com/id/1429609573/tr/foto%C4%9Fraf/coffee-beverages-with-coffee-beans-on-wooden-table-in-a-coffee-shop.jpg?s=612x612&w=0&k=20&c=pfFMLyMo219OXhH6DFsR0tm37ZKdfgYi106hLdqdqQI=',
        price: 22.99,
        amount: 1,
        size: ['L', 'M', 'S'],
        sugar: ['30%', '50%', '70%'],
        ice: ['30%', '50%', '70%'],
        topping: ['pineapple jelly', 'coffee jelly', 'rainbow jelly', 'strawberry poppers', 'mango poppers']
    },
    {
        id: 2,
        name: 'margherita pizza',
        category: 'pizza',
        image: 'https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.webp?b=1&s=170667a&w=0&k=20&c=pobf9fs5EsiNZMuyrq_44Y3LT8c4cz7_jmxvgQPclY4=',
        price: 15.99,
        amount: 1,
        size: ['S', 'M', 'L'],
        toppings: ['mozzarella cheese', 'tomatoes', 'basil']
    },
    {
        id: 3 ,
        name: 'cappuccino',
        category: 'coffee',
        image: 'https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.webp?b=1&s=170667a&w=0&k=20&c=Ksq0vNF3LHsNR6GHF_Plgzj2GjBmMTyZIZiU-cw5jZI=',
        price: 15.49,
        amount: 1,
        size: ['Regular', 'Large'],
        sugar: ['No sugar', '1 teaspoon', '2 teaspoons'],
        milk: ['Full cream', 'Skimmed', 'Soy'],
        extra: ['Cocoa powder', 'Cinnamon']
      },
      {
        id: 4,
        name: 'Caesar salad',
        category: 'salad',
        image: 'https://media.istockphoto.com/id/1398784362/photo/salmon-salad.webp?b=1&s=170667a&w=0&k=20&c=TZjE7-bYES5n3sznJc0sQSGKZB7tE71cEDw80afsJHs=',
        price: 12.99,
        amount: 1,
        size: ['Regular'],
        toppings: ['Romaine lettuce', 'Parmesan cheese', 'Croutons', 'Caesar dressing']
      },
      {
        id: 5,
        name: 'cheeseburger',
        category: 'burger',
        image: 'https://media.istockphoto.com/id/520215281/photo/bacon-burger.webp?b=1&s=170667a&w=0&k=20&c=HRAeDKZVqXIfQvnubHbCWTiC4KYpcHViCxBgKGqw0eU=',
        price: 10.99,
        amount: 1,
        size: ['Single', 'Double'],
        toppings: ['Cheese', 'Lettuce', 'Tomato', 'Onion', 'Pickles']
    },
    {
        id: 6,
        name: 'chocolate cake',
        category: 'dessert',
        image: 'https://media.istockphoto.com/id/1370520449/photo/slice-of-chocolate-cake-with-glaze.webp?b=1&s=170667a&w=0&k=20&c=YpiiIjJfRGC-xd7ZjJaWYI-zARdb9GMSPvpc-DKL-5I=',
        price: 8.99,
        amount: 1,
        size: ['Slice', 'Whole'],
        flavor: ['Chocolate', 'Vanilla', 'Strawberry'],
        frosting: ['Chocolate ganache', 'Buttercream'],
        topping: ['Sprinkles', 'Whipped cream']
    },
    {
      id: 7,
      name: 'vanilla ice cream',
      category: 'dessert',
      image: 'https://media.istockphoto.com/id/1437951628/photo/sweet-indulgence.webp?b=1&s=170667a&w=0&k=20&c=xib9LWrQBWNKWiaTxoWsRas97VOVGzXFNM2QiSYs4Dk=',
      price: 6.99,
      amount: 1,
      size: ['Small', 'Medium', 'Large'],
      toppings: ['Chocolate syrup', 'Whipped cream', 'Cherry']
  },
  {
      id: 8,
      name: 'spaghetti carbonara',
      category: 'pasta',
      image: 'https://images.unsplash.com/photo-1574969903809-3f7a1668ceb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BhZ2hldHRpJTIwY2FyYm9uYXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
      price: 13.99,
      amount: 1,
      size: ['Regular'],
      toppings: ['Bacon', 'Egg yolk', 'Parmesan cheese', 'Black pepper']
  },
  {
      id: 9,
      name: 'iced coffee',
      category: 'coffee',
      image: 'https://media.istockphoto.com/id/1366672341/photo/glass-with-ice-and-coffee.webp?b=1&s=170667a&w=0&k=20&c=TqtuTA8F5yhqbANae014_qYEZBDDlWdX9jmAWK3GmZo=',
      price: 8.99,
      amount: 1,
      size: ['Regular', 'Large'],
      sugar: ['No sugar', '1 teaspoon', '2 teaspoons'],
      milk: ['Regular', 'Almond', 'Oat'],
      additional: ['Whipped cream', 'Caramel syrup']
  },
  {
      id: 10,
      name: 'turkey club sandwich',
      category: 'sandwich',
      image: 'https://media.istockphoto.com/id/1397193477/photo/club-sandwich-made-with-bacon-ham-turkey-cheese-lettuce-and-tomato.webp?b=1&s=170667a&w=0&k=20&c=Sz2aFQ_oQeho9s435e37D88Svv0uHwewqB9ZVaDiUg4=',
      price: 11.99,
      amount: 1,
      size: ['Regular'],
      toppings: ['Turkey', 'Bacon', 'Lettuce', 'Tomato', 'Mayonnaise']
  },
  {
      id: 11,
      name: 'chocolate chip cookie',
      category: 'dessert',
      image: 'https://media.istockphoto.com/id/1265001647/photo/chocolate-chip-cookies.webp?b=1&s=170667a&w=0&k=20&c=AfV7MS8uGHvdGE1dsE-UUnaymrn5aT3lkQsQRNMWMP8=',
      price: 3.99,
      amount: 1,
      size: ['Regular'],
      type: ['Classic', 'Double Chocolate', 'Oatmeal Raisin']
  }
];

