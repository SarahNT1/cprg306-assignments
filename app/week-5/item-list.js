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
    const sortByGrouped =()=>
    {
        setSortBy("grouped");
    }

    const sortedItems = items.sort((a, b) => {
        let item1;
        let item2;
        if(sortBy == "grouped")
        {
            item1 = a.category;
            item2 = b.category;

        }
        else
        {
            item1 = a[sortBy];
            item2 = b[sortBy];
        }

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
                <button className="bg-orange-500 p-1 ml-5 w-28" title="name" onClick={sortByName}>Name</button> 
                : <button className="bg-orange-700 p-1 ml-2 w-28" title="name" onClick={sortByName}>Name</button>
                }

                {
                sortBy == "category" ?
                <button className="bg-orange-500 ml-2 p-1 w-28" title="category" onClick={sortByCategory}>Category</button>
                : <button className="bg-orange-700 ml-2 p-1 w-28" title="category" onClick={sortByCategory}>Category</button>
                }

                {
                sortBy == "grouped" ?
                <button className="bg-orange-500 ml-2 p-1 w-28" title="grouped" onClick={sortByGrouped}>Grouped Category</button>
                : <button className="bg-orange-700 ml-2 p-1 w-28" title="grouped" onClick={sortByGrouped}>Grouped Category</button>
                }
            </div>
            
            {sortBy == "name" && (
                <div>
                {sortedItems.map((item) => {return(
                    <div className="m-4">
                        <div key = {item.id}>
                            <Item {...item}/>
                        </div>
                    </div>
                    )})}
                </div>
            )}
            
            {sortBy == "category" && (
                <div>
                {sortedItems.map((item) => {return(
                    <div className="m-4">
                        <div key = {item.id}>
                            <Item {...item}/>
                        </div>
                    </div>
                    )})}
                </div>
            )}
            
            {sortBy == "grouped" && (
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
            )}

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