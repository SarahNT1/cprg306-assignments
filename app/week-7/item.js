export default function Item({name, quantity, category, onSelect})
{
    return(
        <div className="bg-slate-900 max-w-sm p-2 m-4" onClick={onSelect}>
            <div className="text-xl font-bold text-white">
                {name}
            </div>
            <div className="text-white text-sm">
                Buy {quantity} in {category}
            </div>
        </div>
    );
}