// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  BASE_API_URL: 'http://samples.openweathermap.org/data/2.5/weather?',
  BASE_SEARCH_URL: 'http://samples.openweathermap.org/data/2.5/find?',
  GET_IMAGE_URL: (id: string) => {
    return 'http://openweathermap.org/img/w/' + id + '.png';
  },
  BASE_API_KEY: 'e26eeabca9e39433929248234b6a16e6',
  BASE_API_UNITS: 'metric'
};
