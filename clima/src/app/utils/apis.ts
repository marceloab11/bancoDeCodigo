import axios from "axios"

export const getCity = async(city:string): Promise<any> => {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=40871da34f891a8e21c0d57d0c693930`)
            return res.data
        }