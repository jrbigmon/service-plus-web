import { Button } from '../Button'
import { Carousel } from '../Carousel'
export function Home() {
    return (
        <div className="p-4">
            <h1 className="text-orange-400 font-bold text-2xl text-center">O que você precisa ?</h1>
            <div className='flex justify-center gap-3 p-4'>
                <Button name='Eletricista'/>
                <Button name='Eletricista'/>
                <Button name='Eletricista'/>
            </div>
            <Carousel />
        </div>
    )
}