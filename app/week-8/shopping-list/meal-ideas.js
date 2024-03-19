"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas (ingredient){
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

        if(!response.ok){
            throw new Error('Failed to fetch meal ideas');
        }

        const data = await response.json();
        if(data.meals != null){
            const meals = data.meals.map(meal => ({
                id: meal.idMeal,
                name: meal.strMeal,
                imageUrl: meal.strMealThumb,
            }))
            return meals;
        }
        else{
            return null;
        }
        
    }
    catch(error){
        console.error(error.message);
        return null;
    }
}

export default function MealIdeas({ingredient}){
    const[meals, setMeals] = useState([]);
    const[mealIsNull, setMealIsNull] = useState("true");

    const loadMealIdeas = async ()=>{
        const fetchedMeals = await fetchMealIdeas(ingredient);
        if (fetchedMeals != null) {
            setMealIsNull("false");
            setMeals(fetchedMeals);
        }
        else{
            setMealIsNull("true");
            setMeals([]);
        }
    }

    useEffect(()=>{
        loadMealIdeas();
    }, [ingredient]);

    return(
        <div className="bg-slate-900 p-5 text-white">
            {mealIsNull == "true" && (
                <div>
                    <h1 className="text-xl text-center mb-5">Meal ideas: {ingredient}</h1>
                    <div className="text-center mb-5">No meal ideas.</div>
                </div>
            )}
            {mealIsNull == "false" && (
                <div>
                    <h1 className="text-xl text-center mb-5">Meal Ideas: {ingredient}</h1>
                    <ul>
                    {meals.map(meal => (
                        <li className="bg-slate-950 p-2 text-center m-2 mb-4" key={meal.id}>{meal.name}</li>
                    ))}
                    </ul>
              </div>
            )}
        </div>
            
        
        
        
    )
}