"use client";
import items from "./items.json";
import { useState } from "react";
import Item from "./item";

export default function ItemList()
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

    const sortedItems = items.sort((a, b) => {
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
            <div>
                Sort by:
                {
                sortBy == "name" ? 
                <button className="bg-orange-500 p-1 m-2 w-28" title="name" onClick={sortByName}>Name</button> 
                : <button className="bg-orange-700 p-1 m-2 w-28" title="name" onClick={sortByName}>Name</button>
                }

                {
                sortBy == "category" ?
                <button className="bg-orange-500 p-1 m-2 w-28" title="category" onClick={sortByCategory}>Category</button>
                : <button className="bg-orange-700 p-1 m-2 w-28" title="category" onClick={sortByCategory}>Category</button>
                }
            </div>
            
            <div>
                {sortedItems.map((item) => {return(
                    <div>
                        <div key = {item.id}>
                            <Item {...item}/>
                        </div>
                    </div>
                )})}
            </div>

            {/* {sortBy == "name" && (
                <div>
                    {items.map((item) => {return(
                        <div>
                            <div>
                                {item.name}
                            </div>
                            <div>
                                Buy {item.quantity} in {item.category}
                            </div>
                        </div>
                    )}) }
                </div>
            )}
            {sortBy == "category" && (
                <div>
                    Category
                </div>
            )} */}
        </div>
      )
      
}