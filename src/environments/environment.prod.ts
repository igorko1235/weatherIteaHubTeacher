// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const BASE_API_URL = 'https://api.openweathermap.org/data/2.5/';

export const environment = {
  production: false,
  BASE_CURRENT_WEATHER_URL: BASE_API_URL + 'weather?',
  BASE_SEARCH_URL: BASE_API_URL + 'find?',
  BASE_FORECAST_URL: BASE_API_URL + 'forecast?',
  WEATHER_IMAGE_BASE: 'http://openweathermap.org/img/w/',
  COUNTRY_IMAGE_BASE: 'http://openweathermap.org/images/flags/',
  BASE_API_KEY: 'e26eeabca9e39433929248234b6a16e6',
  BASE_API_UNITS: 'metric',
  BASE_METRIC_UNITS: {
    'metric': {
      temperature: 'C',
      speed: 'km',
    }
  },
  BASE_API_SEARCH_TYPE: 'like',
  FIREBASE_CONFIG: {
    apiKey: 'AIzaSyBYWNdlErPkBY7UhzcikVdyT0iSaQQ9wGE',
    authDomain: 'iteahhubbackend.firebaseapp.com',
    databaseURL: 'https://iteahhubbackend.firebaseio.com/',
    storageBucket: '.appspot.com',
    messagingSenderId: '',
  }
};
