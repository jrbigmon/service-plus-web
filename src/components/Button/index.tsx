interface Button {
    name: string
}

export function Button({name}:Button){
    return(
        <div className="rounded-lg bg-sky-400 hover:bg-sky-600 max-w-max p-2">
            <button className="text-zinc-600">{name}</button>
        </div>
    )
}