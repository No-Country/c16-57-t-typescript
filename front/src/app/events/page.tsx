
"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { TfiLocationPin } from "react-icons/tfi";
import { CalendarIcon } from "@radix-ui/react-icons";
import {IoMdShare } from "react-icons/io";
import { TiHeartOutline } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { BsMoonStars } from "react-icons/bs";
import { CiSun } from "react-icons/ci";
import { LiaTheaterMasksSolid } from "react-icons/lia";
import { MdOutlineMusicNote } from "react-icons/md";
import { DialogOverlay } from "@radix-ui/react-dialog";
import { evento } from "@/app/model/evento";
import { useEffect, useState } from "react";
import { Ieventos } from "@/lib/interfaces";

const EventsPage =  () => {
  let eventoGuardado; // Declara la variable fuera de cualquier ámbito
  const [eventos, setEventos] = useState<Ieventos[]>([])
  
  eventoGuardado = {
    title: "Evento de prueba",
    description: "Descripción del evento de prueba",
    location: "Ubicación del evento de prueba",
    startdate: "Fecha de inicio del evento de prueba",
    enddate: "Fecha de fin del evento de prueba",
  };
  

  eventoGuardado = {
    title: "Evento de prueba",
    description: "Descripción del evento de prueba",
    location: "Ubicación del evento de prueba",
    startdate: "Fecha de inicio del evento de prueba",
    enddate: "Fecha de fin del evento de prueba",
  };
   
  const fnGetEvents = async () => {
    try {
      const response =  await axios.get("http://localhost:3001/api/events/", {
        headers: {
            "Auth-Token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWNlYjBlNTIzNDFmYjYyOTZmYWE4NDYiLCJpYXQiOjE3MDkwNjc5MzIsImV4cCI6MTcwOTA3MTUzMn0.nJGBUn3ykV4zeq-Y6xtIGqee5mlAgNNnTiPAO-NscPI"
        }
      })
      setEventos(response.data)
    } catch (error) {
      console.error("Error al consultar el evento:", error);
    }
  }
  useEffect(() => {
    fnGetEvents()
  }, [])
  console.log(eventos);
  if(eventos.length === 0) return <p>...Cargando</p>
  return (
    <>
    {
        eventos.map((evento, i) => {
            return <li key={i}>{evento.title}</li>
        })
    }
     <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Ver evento</Button>
      </DialogTrigger>
      
        
      <DialogContent
        className="
       p-8 mx-auto max-w-5xl h-max  border border-spacing-2
      "
      >
        
        <section>
          <div className="flex justify-between ">
            <div className="space-y-4">
              <DialogTitle className="text-3xl font-bold ">{eventoGuardado.title}</DialogTitle>
              <h2 className="text-center text-2xl font-semibold flex py-2">
                <TfiLocationPin className="my-1" />
                {eventoGuardado.location}
              </h2>
              
              <div className="flex w-max space-x-2 ">
                <div className="flex">
                  <CalendarIcon className=" size-6" />
                  <p className="text-center font-semibold text-lg px-2 ">
                    {" "}
                    {eventoGuardado.startdate}
                  </p>
                </div>
                <div className="flex">
                  <CalendarIcon className="size-6" />
                  <p className="text-center font-semibold text-lg px-2  ">
                    {" "}
                    {eventoGuardado.enddate}
                  </p>
                </div>
              </div>
              <div className="px-2 flex items-center space-x-2 ">
                <button className="bg-white size-10 shadow-md flex justify-center items-center shadow-slate-400 p-1 rounded-full">
                  <IoMdShare className="size-8 p-1" />
                </button>
                <button className="bg-white size-10 shadow-md flex justify-center items-center shadow-slate-400 p-1 rounded-full">
                  <TiHeartOutline className="size-8 p-1" />
                </button>
                <button className="bg-white size-10 shadow-md flex justify-center items-center shadow-slate-400 p-1 rounded-full">
                  <FaPlus className="size-8 p-1" />
                </button>
              </div>
            </div>
            <DialogOverlay className="border shadow-md rounded-md h-max p-3  ">
              <h2
                className="
                font-bold
                bg-white
                shadow-lg
                rounded-md
                w-max
                px-1
                text-center
                "
              >
                Organizador
              </h2>
              <img
                src="https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-imagen-de-caricatura-de-un-astronauta-sentado-en-una-luna-ilustraci%C3%B3n-de-alta-calidad.jpg"
                alt="evento"
                className="h-40 w-40 rounded-full my-2"
              />

              <h4 className="text-center font-semibold">
                Nombre de organizador
              </h4>
            </DialogOverlay>
          </div>
          <div className="w-full border border-black bg-green-500 my-3 p-4 rounded-lg bg-opacity-65">
            <h2 className="text-2xl font-bold">Sobre el evento</h2>
            <p className="text-justify">
            {eventoGuardado.description}
            </p>
          </div>
          <div className="w-full flex">
            <div className="bg-gray-200 my-3 p-4 w-1/2 rounded-md bg-opacity-75">
              <h3
                className="text-center
                font-bold
                bg-white
                shadow-lg
                rounded-md
                w-max
                px-1"
              >
                Opiniones
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore corporis magni omnis ea non aut, voluptatem sint
                deleniti fugit voluptates nam cumque explicabo enim praesentium
                iure natus quasi ipsa velit!
              </p>
            </div>
            <div className=" p-3 m-3 w-max ">
              <div className="grid grid-cols-2 place-items-center ">
                <div className="border p-2 bg-gray-200 w-max rounded-full shadow-lg m-2">
                  <GiKnifeFork className="size-8" />
                </div>
                <div className="border p-2 bg-gray-200 w-max rounded-full shadow-lg m-2">
                  <BsMoonStars className="size-8" />
                </div>
                <div className="border p-2 bg-gray-200 w-max rounded-full shadow-lg m-2">
                  <CiSun className="size-8" />
                </div>
                <div className="border p-2 bg-gray-200 w-max rounded-full shadow-lg m-2">
                  <LiaTheaterMasksSolid className="size-8" />
                </div>
                <div className="border p-2 bg-gray-200 w-max rounded-full shadow-lg m-2">
                  <MdOutlineMusicNote className="size-8 " />
                </div>
              </div>
            </div>
            <div className="p-3 m-3 w-1/4 bg-gray-200 bg-opacity-75 rounded-md h-1/2">
              <h3
                className="text-center
                font-bold
                
                bg-white
                shadow-lg
                rounded-md
                w-max
                px-1"
              >
                Gasto promedio
              </h3>
              <p
                className="
                text-center
                w-max
                px-1
                "
              >
                $100.00
              </p>
            </div>
          </div>
        </section>

        <DialogFooter>
          <div className="flex justify-center space-x-4 w-full">
            <Button
              className="h-10 w-36 font-medium rounded-full p-4 text-base bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-gray-400"
              type="submit"
            >
              Unirme
            </Button>
            <Button
              className="h-10 w-36 font-medium rounded-full p-4 text-base bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-gray-400"
              type="submit"
            >
              No me interesa
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default EventsPage
