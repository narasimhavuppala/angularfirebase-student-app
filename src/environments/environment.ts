// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyCS41dvnnE8A5ba39X-W6PYKJCEEH4LqZs",
      authDomain: "angularfirebase-student-app.firebaseapp.com",
      databaseURL: "https://angularfirebase-student-app.firebaseio.com",
      projectId: "angularfirebase-student-app",
      storageBucket: "angularfirebase-student-app.appspot.com",
      messagingSenderId: "18280089415"    
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
