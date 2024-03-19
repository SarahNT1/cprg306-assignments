"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function Page()
{
    const{ user } = useUserAuth();
    const[items, setItems] = useState(itemsData);
    const[selectedItemName, setSelectedItemName] = useState();

    if(!user) return <div className="text-lg">Log in to view this page.</div>;

    const handleItemSelect =(selectedItem)=>{
        const emojiRegex = /[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g;
        const removedEmoji = selectedItem.replace(emojiRegex, '');
        const cleaned = removedEmoji.split(',')[0].trim();
        setSelectedItemName(cleaned);
        // alert(`Selected Item: ${selectedItem}\nRemoved Emoji: ${removedEmoji}\nCleaned: ${cleaned}`);
    }
    
    let randId = 0;

    const handleAddItem =(name, quantity, category)=>{
        randId++;
        const newItems = {
            "id": randId,
            "name": name,
            "quantity": quantity,
            "category": category,
        }
        setItems([...items, newItems]);
    }

    return(
        <main className="bg-slate-950 min-h-screen">
            <h1 className="text-white text-3xl font-bold pt-4 pl-4">
                Shopping List
            </h1>
            <h2 className="text-white text-xl font-semibold pt-4 ml-4">
                Add New Item
            </h2>
            <div className="flex flex-row">
                <div>
                    <NewItem onAddItem={handleAddItem}/>
                    <ItemList items={items} onItemSelect={handleItemSelect}/>
                </div>
                <div className="ml-24">
                    <MealIdeas className="text-white text-3xl font-bold pt-4 pl-4" ingredient={selectedItemName}/>
                </div>
            </div>
            
        </main>
    )
}