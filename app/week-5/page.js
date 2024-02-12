import ItemList from "./item-list";

export default function Page()
{
    return(
        <main className="bg-slate-950 min-h-screen">
            <h1 className="text-white text-3xl font-bold pt-4 pl-6">
                Shopping List
            </h1>
            <ItemList/>
        </main>
    )
}