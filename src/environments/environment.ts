// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // API URLs
  api_base_url: 'http://localhost:5019',
  api_ski_tours_path: '/ski_touring',
  api_tests_path: '/test',

  // Account links
  github_url: 'https://github.com/hyanton',
  instagram_url: 'https://www.instagram.com/antonyjchenry/',

  // Logo urls
  github_logo_path: '/assets/img/logo/github_logo.png',
  instagram_logo_path: '/assets/img/logo/instagram_white_logo.png'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
