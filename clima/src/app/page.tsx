"use client"

import { useState } from "react";
import axios from "axios";
import { Modal } from "./components/modal";
import { Clima } from "./types/clima";

const Page = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<Clima | null>(null); // Estado para armazenar os dados da requisição

  const handleModal = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=40871da34f891a8e21c0d57d0c693930&units=metric`);
      const { temp } = response.data.main; // Acessa o valor de "temp"
      const { speed } = response.data.wind; // Acessa o valor de "speed"
      setWeatherData({ temp, speed }); // Armazena os valores de "temp" e "speed" no estado
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  return (
    <div className="w-full h-screen bg-slate-800 text-white flex justify-center items-center">
      <div>
        <h1 className="text-4xl text-center">Clima</h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Digite a cidade"
            className="p-5 h-8 mt-2 rounded-md text-black"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={handleModal}
            className="py-2 px-3 bg-zinc-600 ml-2 text-center rounded-md mt-2"
          >
            Buscar
          </button>
        </div>
      </div>
      <Modal city={city} temp={weatherData?.temp} vento={weatherData?.speed}/> {/* Passa city e weatherData como props para o componente Modal */}
    </div>
  );
};

export default Page;