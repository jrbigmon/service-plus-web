import { CarouselCard } from "../CarouselCard";

interface Professional {
    name: string;
    lastName: string
    avatar: string
    area: string
}
export function Carousel() {
    return (
        <CarouselCard name="Vagner" lastName="Siqueira" avatar="avatar" area="eletricista"/>
    )
}