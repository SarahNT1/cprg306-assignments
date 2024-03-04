"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page()
{
    const[items, setItems] = useState(itemsData);
    
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
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    )
}