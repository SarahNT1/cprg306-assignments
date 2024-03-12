"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({items, onItemSelect})
{
    const[sortBy, setSortBy] = useState("name");

    const sortByName =()=>
    {
        setSortBy("name");
    }
    const sortByCategory =()=>
    {
        setSortBy("category");
    }

    const itemsCopy = items;

    const sortedItems = itemsCopy.sort((a, b) => {
        const item1 = a[sortBy];
        const item2 = b[sortBy];

        if(item1 < item2)
        {
            return -1;
        }
        else if(item1 > item2)
        {
            return 1;
        }
        else
        {
            if(a["quantity"] < b["quantity"])
            {
                return -1;
            }
            else if(a["quantity"] > b["quantity"])
            {
                return 1;
            }
            return 0;
        }
    })

      return(
        <div>
            <div className="text-white pl-4 pt-2 mb-10">
                Sort by:
                {
                sortBy == "name" ? 
                <button className="bg-orange-500 p-1 ml-2 w-28" title="name" onClick={sortByName}>Name</button> 
                : <button className="bg-orange-700 p-1 ml-2 w-28" title="name" onClick={sortByName}>Name</button>
                }

                {
                sortBy == "category" ?
                <button className="bg-orange-500 ml-2 p-1 w-28" title="category" onClick={sortByCategory}>Category</button>
                : <button className="bg-orange-700 ml-2 p-1 w-28" title="category" onClick={sortByCategory}>Category</button>
                }
            </div>
            
            <div>
                {sortedItems.map((item) => {return(
                    <div className="m-4">
                        <div key = {item.id}>
                            <Item {...item} onSelect={() => onItemSelect(item.name)}/>
                        </div>
                    </div>
                )})}
            </div>
            
            {/* {sortBy == "grouped" && (
                <div>
                    {Object.entries(sortedItems.reduce((acc, item) => 
                    {
                        if(acc[item.category])
                        {
                            acc[item.category].push(item);
                        }
                        else
                        {
                            acc[item.category] = [item];
                        }
                        return acc;
                    }, {})).map(([category, items]) => {return(
                        <div>
                            <div className="ml-8 text-xl transform-text: capitalize">
                                {category}
                            </div>
                            {items.map(item => (
                                <div className="m-4">
                                    <div key={item.id}>
                                        <Item {...item}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )})}
                </div>
            )} */}

        </div>
      )
      
}