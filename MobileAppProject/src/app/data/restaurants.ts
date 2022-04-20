import { Restaurant } from '../services/restaurants'

let restaurants: Restaurant[] = [
    {
        id: 1,
        restaurant_name: "Osmows", 
        address: "263 Augusta Ave, Toronto", 
        description: "Shawarma and falafel take out", 
        tags: ["Shawarma", "Middle-eastern"],
        rating: null
    },
    { 
        id: 2,
        restaurant_name: "789 Pizza", 
        address: "789 College St, Toronto", 
        description: "Dank pizza, open late", 
        tags: ["Pizza", "24/7"],
        rating: null
    },
    {
        id: 3,
        restaurant_name: "Burger Dude", 
        address: "50 Oxford Ave, Toronto", 
        description: "Huge burgers and massive combos, dude", 
        tags: ["Burgers", "American"],
        rating: null
    },
    {
        id: 4,
        restaurant_name: "Vinny The Pasta Man", 
        address: "243 Augusta Ave, Toronto", 
        description: "Authentic Italian pasta and sandwiches", 
        tags: ["Pasta", "Italian"],
        rating: null
    },
    {
        id: 5,
        restaurant_name: "Mango Like", 
        address: "351 Augusta Ave, Toronto", 
        description: "Thai and Viet desserts and ice cream", 
        tags: ["Dessert", "Thai"],
        rating: null
    },
    
    
]

export default restaurants;


