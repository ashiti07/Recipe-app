import React,{useEffect,useState} from 'react';
import Recipe from './Recipe.js';
import '../Cart.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Cart = () =>{

    const APP_ID='53be5da2';
    const APP_KEY='03acd360ae8082ecceca1df3a1d409b2';
    const BASE='https://api.edamam.com/search'

    const [recipe,setRecipes]=useState([]);
    const [search,setSearch]= useState("");
    const [query,setQuery]= useState('chicken')

    useEffect(()=>{
        getRecipes();
    },[query]);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=> {
        AOS.init({duration:3000})
    },[])

    const getRecipes= async () =>{
        const response = await fetch(`${BASE}?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data= await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

    const updateSearch = e =>{
        setSearch(e.target.value);
    };

    const getSearch = e=>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return(
        <div>
        <form onSubmit={getSearch} className="search-form">
            <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="search some yummy recipes!" />
            <button className="search-button" type="submit">Search
            </button>
        </form>
        <div className="recipes">
        {recipe.map(recipe =>(
            <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}/>
        ))}
     </div>
     </div>
    );
};

export default Cart;