import axios from 'axios';
import cheerio from 'cheerio';

const city = 'example_city';

export async function getUserInfo(city) {
  const url = `https://www.google.com/?q=${city}+weather/`;
  const response = await axios(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  const temperature = $('#wob_tm').text();
  const precipitation = $('#wob_pp').text();
  const humidity = $('#wob_hm').text();
  const wind = $('#wob_ws').text();
  const observation = $('#wob_dc').text();
  const all = $('#wob_wc');

  const userInfo = {
    temperature,
    precipitation,
    humidity,
    wind,
    observation
  };

  return userInfo;
}

getUserInfo(username)
  .then((userInfo) => {
    console.log(userInfo);
  })
  .catch((error) => {
    console.error(error);
  });
