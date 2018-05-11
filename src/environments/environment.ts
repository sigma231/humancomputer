// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebase:   {
    apiKey: "AIzaSyC3jOD5OA9J3uCmNV2xLYUTMjf7FBpPC_k",
    authDomain: "humancomputer-eb79e.firebaseapp.com",
    databaseURL: "https://humancomputer-eb79e.firebaseio.com",
    projectId: "humancomputer-eb79e",
    storageBucket: "humancomputer-eb79e.appspot.com",
    messagingSenderId: "564569121397"
  }
};
