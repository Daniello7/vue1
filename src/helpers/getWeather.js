import axios from 'axios'

const API_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=37.987&longitude=-1.13&hourly=temperature_2m&timezone=auto'

export const getTemperature = async () => {
  const response = await axios.get(API_URL)
  const newTemperature = response.data.hourly.temperature_2m[0]
  return newTemperature
}
