import { useWeatherStore } from '@/stores/weatherStore'
import { getTemperature } from '@/helpers/getWeather'

export const useWheather = async () => {
  const temperature = await getTemperature()
  const weatherStore = useWeatherStore()
  weatherStore.temperature = temperature
}
