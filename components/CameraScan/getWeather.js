export const getWeather = async (data, setWeather, setShowCamera) => {
    
    await fetch(data)
    .then(res => res.json())
    .then(res => setWeather(res))
    .finally(() => setShowCamera(false))
}