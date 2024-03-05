import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from './ui/card'
import Image from 'next/image'
import { Ieventos } from '@/lib/interfaces'
import { dateFormat } from '@/lib/date-format'

const CardEvent = ({event, onClick}: {event: Ieventos, onClick: () => void}) => {
    const {fecha, hora, mes} = dateFormat(event.createdAt)
    const [dia] = fecha.split('/')
    const img = "https://static.vecteezy.com/system/resources/previews/005/988/959/non_2x/calendar-icon-free-vector.jpg";
    return (
        <Card onClick={onClick} className="w-full cursor-pointer rounded-xl  hover:shadow-lg hover:shadow-green-300 hover:border-green-400 bg-green-200">
            <CardContent className="flex justify-center items-center flex-col rounded-xl bg-white">
                <div className=" w-full flex  items-center justify-around">
                    <div>
                        <p className="block text-5xl w-full">{mes}</p>
                        <p className="block text-5xl">{dia}</p>
                    </div>
                    <Image src={img} alt="image-event" width={40} height={40} />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-3 bg-green-200 pt-2 rounded-b-xl">
                <CardTitle className="text-start text-xl">
                    {event.title}
                </CardTitle>
                <div className="flex items-center gap-2 ">
                    <p className="text-sm">
                        {  }
                    </p>
                    <CardDescription className="text-sm">
                        {event.description}
                    </CardDescription>
                </div>
            </CardFooter>
        </Card>
    )
}

export default CardEvent