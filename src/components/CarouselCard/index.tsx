interface Professional {
    avatar: string
    name: string
    lastName: string
    area: string
}
export function CarouselCard({name, lastName, area, avatar}: Professional) {
    return (
        <div className="w-max h-max flex flex-col text-center shadow-lg bg-white p-4 rounded-lg">
            <div className="w-10 h-10 rounded-full">
                {avatar}
            </div>
            <p>{`${name} ${lastName}`}</p>
            <p>{area}</p>
        </div>
    )
}