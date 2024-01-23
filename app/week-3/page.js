import ItemList from "./item-list";

export default function Page()
{
    return(
        <main className="bg-slate-950 min-h-screen">
            <h1 className="text-white text-3xl font-bold pl-2 pt-2">
                Shopping List
            </h1>
            <ItemList/>
        </main>
    )
}