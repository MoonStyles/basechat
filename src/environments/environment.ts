// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA7M7i0oHfziXqIjuR9tmbf2-vT9W6d6WQ',
    authDomain: 'basechat-4cebb.firebaseapp.com',
    databaseURL: 'https://basechat-4cebb.firebaseio.com',
    projectId: 'basechat-4cebb',
    storageBucket: 'basechat-4cebb.appspot.com',
    messagingSenderId: '434125805191'
  }
};
