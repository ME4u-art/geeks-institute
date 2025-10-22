const axios = require('axios');
const chalk = require('chalk');


const API_KEY = '71d05e772fa22fda9473d6f9075c6c58'; 

async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    const data = response.data;

    console.log(chalk.greenBright('\n--- Weather Information ---'));
    console.log(chalk.blue(`City: ${data.name}`));
    console.log(chalk.yellow(`Temperature: ${data.main.temp}°C`));
    console.log(chalk.white(`Condition: ${data.weather[0].description}`));
    console.log(chalk.magenta(`Humidity: ${data.main.humidity}%`));
    console.log(chalk.cyan(`Wind Speed: ${data.wind.speed} m/s\n`));
  } catch (error) {
    console.log(chalk.red(' Unable to fetch weather data.'));
    if (error.response && error.response.status === 404)
      console.log(chalk.red('City not found. Please check your input.'));
  }
}

module.exports = getWeather;
