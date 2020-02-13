function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-horizontal-stepper linear #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\" errorMessage=\"Missing required fields.\">\n\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>My Information</ng-template>\n\n      <mat-card>\n      <table class=\"example-full-width\" cellspacing=\"2\"><tr>\n        <td><mat-form-field class=\"example-full-width\">\n          <mat-label>First name</mat-label>\n          <input matInput>\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <mat-label>Last Name</mat-label>\n          <input matInput>\n        </mat-form-field></td>\n      </tr></table>\n\n      <p>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Telephone</mat-label>\n          <span matPrefix>+1 &nbsp;</span>\n          <input type=\"tel\" matInput placeholder=\"555-555-1234\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Email</mat-label>\n          <textarea matInput placeholder=\"Ex. pat@example.com\"></textarea>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Address</mat-label>\n          <textarea matInput placeholder=\"Ex. 100 Main St\"></textarea>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Address 2</mat-label>\n          <textarea matInput></textarea>\n        </mat-form-field>\n      </p>\n\n      <table class=\"example-full-width\" cellspacing=\"2\"><tr>\n        <td><mat-form-field class=\"example-full-width\">\n          <mat-label>City</mat-label>\n          <input matInput placeholder=\"Ex. San Francisco\">\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <mat-label>State</mat-label>\n          <input matInput placeholder=\"Ex. California\">\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <mat-label>Postal Code</mat-label>\n          <input matInput #postalCode maxlength=\"5\" placeholder=\"Ex. 94105\" value=\"\">\n          <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n        </mat-form-field></td>\n      </tr></table>\n    </mat-card>\n      <div>\n        <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n      </div>\n    </form>\n\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" errorMessage=\"Missing required fields.\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Work Experience</ng-template>\n      <mat-card>\n      <table class=\"example-full-width\" cellspacing=\"2\"><tr>\n        <td><mat-form-field class=\"example-full-width\">\n          <mat-label>Job Title</mat-label>\n          <input matInput>\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <mat-label>Company</mat-label>\n          <input matInput>\n        </mat-form-field></td>\n      </tr></table>\n      <p>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Location</mat-label>\n          <textarea matInput></textarea>\n        </mat-form-field>\n      </p>\n\n      <table class=\"example-full-width\" cellspacing=\"2\"><tr>\n        <td><mat-form-field class=\"example-full-width\">\n          <mat-label>From Date</mat-label>\n          <input matInput>\n        </mat-form-field></td>\n        <td><mat-form-field class=\"example-full-width\">\n          <mat-label>To Date</mat-label>\n          <input matInput>\n        </mat-form-field></td>\n      </tr></table>\n\n      <p>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Role Description</mat-label>\n          <textarea matInput></textarea>\n        </mat-form-field>\n      </p>\n\n    </mat-card>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n\n<body>\n    <header>\n        <div class=\"collapse bg-dark\" id=\"navbarHeader\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-8 col-md-7 py-4\">\n                        <h4 class=\"text-white\">About</h4>\n                        <p class=\"text-muted\">Add some information about the album below, the author, or any other\n                            background\n                            context. Make it a few sentences long so folks can pick up some informative tidbits. Then,\n                            link them off\n                            to some social networking sites or contact information.</p>\n                    </div>\n                    <div class=\"col-sm-4 offset-md-1 py-4\">\n                        <h4 class=\"text-white\">Contact</h4>\n                        <ul class=\"list-unstyled\">\n                            <li><a href=\"#\" class=\"text-white\">Follow on Twitter</a></li>\n                            <li><a href=\"#\" class=\"text-white\">Like on Facebook</a></li>\n                            <li><a href=\"#\" class=\"text-white\">Email me</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"navbar navbar-dark bg-dark box-shadow\">\n            <div class=\"container d-flex justify-content-between\">\n                <a href=\"#\" class=\"navbar-brand d-flex align-items-center\">\n                    <!-- <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\"\n                        stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                        class=\"mr-2\">\n                        <path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\">\n                        </path>\n                        <circle cx=\"12\" cy=\"13\" r=\"4\"></circle>\n                    </svg> -->\n                    \n                    <strong>Find & Post Jobs</strong>\n                </a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarHeader\"\n                    aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n            </div>\n        </div>\n    </header>\n\n    <main role=\"main\">\n<!-- \n<div [ngStyle]=\"{'background-image': 'url(' + photo + ')'}\"></div>\n        <div [ngStyle]=\"{'background-color':'green'}\"> -->\n        <section class=\"jumbotron text-center\">\n            <div class=\"container\">\n                <h1 class=\"jumbotron-heading\">Welcome</h1>\n                <p class=\"lead text-muted\">Something short and leading about the collection below—its contents, the\n                    creator,\n                    etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>\n                <p>\n                    <a href=\"#\" routerLink=\"/login\" class=\"btn btn-primary my-2\">LOOKING FOR A JOB</a>\n                    <span style=\"margin-right: 1em\"></span>\n                    <a href=\"#\" routerLink=\"/login\" class=\"btn btn-secondary my-2\">SEARCHING FOR TALENT</a>\n\n                </p>\n            </div>\n        </section>\n<!-- </div> -->\n    </main>\n\n    <!-- <button type=\"button\" class=\"btn btn-primary\" tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n    Button with tooltip\n  </button> -->\n    <div class=\"album py-5 bg-light\">\n        <div class=\"container\">\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card mb-4 shadow-sm\">\n                        <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                            xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                            role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                            <title>Placeholder</title>\n                            <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                dy=\".3em\">111111</text>\n                        </svg>\n                        <div class=\"card-body\">\n                            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                additional\n                                content. This content is a little bit longer.</p>\n                            <div class=\"d-flex justify-content-between align-items-center\">\n                                <div class=\"btn-group\">\n                                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                    <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> -->\n                                </div>\n                                <small class=\"text-muted\">9 mins</small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card mb-4 shadow-sm\">\n                        <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                            xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                            role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                            <title>Placeholder</title>\n                            <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                dy=\".3em\">Thumbnail</text>\n                        </svg>\n                        <div class=\"card-body\">\n                            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                additional\n                                content. This content is a little bit longer.</p>\n                            <div class=\"d-flex justify-content-between align-items-center\">\n                                <div class=\"btn-group\">\n                                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                    <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> -->\n                                </div>\n                                <small class=\"text-muted\">9 mins</small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card mb-4 shadow-sm\">\n                        <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                            xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                            role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                            <title>Placeholder</title>\n                            <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                dy=\".3em\">Thumbnail</text>\n                        </svg>\n                        <div class=\"card-body\">\n                            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                additional\n                                content. This content is a little bit longer.</p>\n                            <div class=\"d-flex justify-content-between align-items-center\">\n                                <div class=\"btn-group\">\n                                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                    <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> -->\n                                </div>\n                                <small class=\"text-muted\">9 mins</small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card mb-4 shadow-sm\">\n                        <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                            xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                            role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                            <title>Placeholder</title>\n                            <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                dy=\".3em\">Thumbnail</text>\n                        </svg>\n                        <div class=\"card-body\">\n                            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                additional\n                                content. This content is a little bit longer.</p>\n                            <div class=\"d-flex justify-content-between align-items-center\">\n                                <div class=\"btn-group\">\n                                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                    <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> -->\n                                </div>\n                                <small class=\"text-muted\">9 mins</small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card mb-4 shadow-sm\">\n                        <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                            xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                            role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                            <title>Placeholder</title>\n                            <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                dy=\".3em\">Thumbnail</text>\n                        </svg>\n                        <div class=\"card-body\">\n                            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                additional\n                                content. This content is a little bit longer.</p>\n                            <div class=\"d-flex justify-content-between align-items-center\">\n                                <div class=\"btn-group\">\n                                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                    <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> -->\n                                </div>\n                                <small class=\"text-muted\">9 mins</small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card mb-4 shadow-sm\">\n                        <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                            xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                            role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                            <title>Placeholder</title>\n                            <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                dy=\".3em\">Thumbnail</text>\n                        </svg>\n                        <div class=\"card-body\">\n                            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                additional\n                                content. This content is a little bit longer.</p>\n                            <div class=\"d-flex justify-content-between align-items-center\">\n                                <div class=\"btn-group\">\n                                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                    <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> -->\n                                </div>\n                                <small class=\"text-muted\">9 mins</small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card mb-4 shadow-sm\">\n                        <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                            xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                            role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                            <title>Placeholder</title>\n                            <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                dy=\".3em\">Thumbnail</text>\n                        </svg>\n                        <div class=\"card-body\">\n                            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                additional\n                                content. This content is a little bit longer.</p>\n                            <div class=\"d-flex justify-content-between align-items-center\">\n                                <div class=\"btn-group\">\n                                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                    <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> -->\n                                </div>\n                                <small class=\"text-muted\">9 mins</small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card mb-4 shadow-sm\">\n                        <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                            xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                            role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                            <title>Placeholder</title>\n                            <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                dy=\".3em\">Thumbnail</text>\n                        </svg>\n                        <div class=\"card-body\">\n                            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                additional\n                                content. This content is a little bit longer.</p>\n                            <div class=\"d-flex justify-content-between align-items-center\">\n                                <div class=\"btn-group\">\n                                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                    <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> -->\n                                </div>\n                                <small class=\"text-muted\">9 mins</small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card mb-4 shadow-sm\">\n                        <svg class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"100\"\n                            xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"\n                            role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                            <title>Placeholder</title>\n                            <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"50%\" y=\"50%\" fill=\"#eceeef\"\n                                dy=\".3em\">Thumbnail</text>\n                        </svg>\n                        <div class=\"card-body\">\n                            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to\n                                additional\n                                content. This content is a little bit longer.</p>\n                            <div class=\"d-flex justify-content-between align-items-center\">\n                                <div class=\"btn-group\">\n                                    <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                                    <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button> -->\n                                </div>\n                                <small class=\"text-muted\">9 mins</small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- ////// -->\nstepperer\n    <button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n        {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n    </button>\n    <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n        <mat-step [stepControl]=\"firstFormGroup\">\n            <form [formGroup]=\"firstFormGroup\">\n                <ng-template matStepLabel>Fill out your name</ng-template>\n                <mat-form-field>\n                    <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n                </mat-form-field>\n                <div>\n                    <button mat-button matStepperNext>Next</button>\n                </div>\n            </form>\n        </mat-step>\n        <mat-step [stepControl]=\"secondFormGroup\">\n            <form [formGroup]=\"secondFormGroup\">\n                <ng-template matStepLabel>Fill out your address</ng-template>\n                <mat-form-field>\n                    <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n                </mat-form-field>\n                <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                </div>\n            </form>\n        </mat-step>\n        <mat-step>\n            <ng-template matStepLabel>Done</ng-template>\n            You are now done.\n            <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button (click)=\"stepper.reset()\">Reset</button>\n            </div>\n        </mat-step>\n    </mat-horizontal-stepper>\n\n\n</body>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!doctype html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"Mark Otto, Jacob Thornton, and Bootstrap contributors\">\n    <meta name=\"generator\" content=\"Jekyll v3.8.6\">\n    <title>Signin Page</title>\n\n    <link rel=\"canonical\" href=\"https://getbootstrap.com/docs/4.4/examples/sign-in/\">\n\n    <!-- Bootstrap core CSS -->\n    <link href=\"/docs/4.4/dist/css/bootstrap.min.css\"\n        integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n\n    <!-- Favicons -->\n    <link rel=\"apple-touch-icon\" href=\"/docs/4.4/assets/img/favicons/apple-touch-icon.png\" sizes=\"180x180\">\n    <link rel=\"icon\" href=\"/docs/4.4/assets/img/favicons/favicon-32x32.png\" sizes=\"32x32\" type=\"image/png\">\n    <link rel=\"icon\" href=\"/docs/4.4/assets/img/favicons/favicon-16x16.png\" sizes=\"16x16\" type=\"image/png\">\n    <link rel=\"manifest\" href=\"/docs/4.4/assets/img/favicons/manifest.json\">\n    <link rel=\"mask-icon\" href=\"/docs/4.4/assets/img/favicons/safari-pinned-tab.svg\" color=\"#563d7c\">\n    <link rel=\"icon\" href=\"/docs/4.4/assets/img/favicons/favicon.ico\">\n    <meta name=\"msapplication-config\" content=\"/docs/4.4/assets/img/favicons/browserconfig.xml\">\n    <meta name=\"theme-color\" content=\"#563d7c\">\n\n\n    <style>\n        .bd-placeholder-img {\n            font-size: 1.125rem;\n            text-anchor: middle;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n        }\n\n        @media (min-width: 768px) {\n            .bd-placeholder-img-lg {\n                font-size: 3.5rem;\n            }\n        }\n    </style>\n</head>\n\n<body class=\"text-center\" style=\"width: 40%; margin-left: 25em; margin-top: 3em\">\n    <form class=\"form-signin\">\n        <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n        <p class=\"card-text\" style=\"margin-left: -33em; margin-top: 1em; margin-bottom: 1em;\">Email</p>\n        <label for=\"inputEmail\" class=\"sr-only\" >Email address</label>\n        <input  [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\"  type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n        <p class=\"card-text\" style=\"margin-left: -31em; margin-top: 1em; margin-bottom: -0.1em;\"> Password</p>\n        <label for=\"inputPassword\" class=\"sr-only\" >Password</label>\n        <input  [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\"  style=\"margin-top: 1em; margin-bottom: 1em\" required>\n        <p class=\"card-text\" style=\"margin-left: -27em; margin-bottom: -0.1em;\"> HR or Candidate ?</p>\n        <select [(ngModel)]=\"choice\" [ngModelOptions]=\"{standalone: true}\"  class=\"custom-select d-block w-100\" id=\"state\" style=\"margin-top: 1em; margin-bottom: 1em\" required>\n            <option  *ngFor=\"let choice of choices\"  [(value)]=\"choice\" >{{choice}}</option>\n        </select>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"login()\">Sign in</button>\n    </form>\n\n    <p class=\"mt-5 mb-3 text-muted\" style=\"padding-top: -2em;\">\n        Don't have an account?\n        <a href=\"#\" routerLink=\"/register\" class=\"to_register\"> Register</a>\n        <span style=\"margin-left: 10px \"></span> \n       <label for=\"\">|</label>\n        <span style=\"margin-left: 10px \"></span>\n        <a href=\"#\" routerLink=\"/retrive\" class=\"to_retrive\"> Forgot Password? </a>\n        <br>\n        <a href=\"#\" routerLink=\"\" class=\"to_home\"> Go to home page </a>\n    </p>\n    <!-- <button (click)=\"showSuccess()\">Show Toaster</button> -->\n    <!-- <h1><a (click)=\"onClick()\">Click</a></h1> -->\n    <div toastContainer></div>\n\n    <!-- /// -->\n\n    <button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n        {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n    </button>\n    <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n        <mat-step [stepControl]=\"firstFormGroup\">\n            <form [formGroup]=\"firstFormGroup\">\n                <ng-template matStepLabel>Fill out your name</ng-template>\n                <mat-form-field>\n                    <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n                </mat-form-field>\n                <div>\n                    <button mat-button matStepperNext>Next</button>\n                </div>\n            </form>\n        </mat-step>\n        <mat-step [stepControl]=\"secondFormGroup\">\n            <form [formGroup]=\"secondFormGroup\">\n                <ng-template matStepLabel>Fill out your address</ng-template>\n                <mat-form-field>\n                    <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n                </mat-form-field>\n                <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                </div>\n            </form>\n        </mat-step>\n        <mat-step>\n            <ng-template matStepLabel>Done</ng-template>\n            You are now done.\n            <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button (click)=\"stepper.reset()\">Reset</button>\n            </div>\n        </mat-step>\n    </mat-horizontal-stepper>\n\n\n</body>\n\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!doctype html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"Mark Otto, Jacob Thornton, and Bootstrap contributors\">\n    <meta name=\"generator\" content=\"Jekyll v3.8.6\">\n    <title>Signin Page</title>\n\n    <link rel=\"canonical\" href=\"https://getbootstrap.com/docs/4.4/examples/sign-in/\">\n\n    <link href=\"/docs/4.4/dist/css/bootstrap.min.css\"\n        integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n\n    <link rel=\"apple-touch-icon\" href=\"/docs/4.4/assets/img/favicons/apple-touch-icon.png\" sizes=\"180x180\">\n    <link rel=\"icon\" href=\"/docs/4.4/assets/img/favicons/favicon-32x32.png\" sizes=\"32x32\" type=\"image/png\">\n    <link rel=\"icon\" href=\"/docs/4.4/assets/img/favicons/favicon-16x16.png\" sizes=\"16x16\" type=\"image/png\">\n    <link rel=\"manifest\" href=\"/docs/4.4/assets/img/favicons/manifest.json\">\n    <link rel=\"mask-icon\" href=\"/docs/4.4/assets/img/favicons/safari-pinned-tab.svg\" color=\"#563d7c\">\n    <link rel=\"icon\" href=\"/docs/4.4/assets/img/favicons/favicon.ico\">\n    <meta name=\"msapplication-config\" content=\"/docs/4.4/assets/img/favicons/browserconfig.xml\">\n    <meta name=\"theme-color\" content=\"#563d7c\">\n\n\n    <style>\n        .bd-placeholder-img {\n            font-size: 1.125rem;\n            text-anchor: middle;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n        }\n\n        @media (min-width: 768px) {\n            .bd-placeholder-img-lg {\n                font-size: 3.5rem;\n            }\n        }\n    </style>\n</head>\n<body class=\"text-center\" style=\"width: 40%; margin-left: 25em; margin-top: 3em\">\n\n<div id=\"container_demo\">\n    <div id=\"wrapper\">\n        <div id=\"register\">\n            <form class=\"form-signin\" (submit)=\"register(regForm)\"  #regForm=\"ngForm\">\n                <h1 class=\"h3 mb-3 font-weight-normal\"> Register </h1>\n                    <p class=\"card-text\" style=\"margin-left: -27em; margin-bottom: -0.1em;\"> HR or Candidate ?</p>\n                    <select [(ngModel)]=\"choice\" [ngModelOptions]=\"{standalone: true}\" class=\"custom-select d-block w-100\" id=\"state\" #roleInput=\"ngModel\" name= \"role\" required>\n                        <option *ngFor=\"let choice of choices\"  [(value)]=\"choice\" >\n                            {{choice}}\n                        </option>\n                    </select>\n                    \n                    <p class=\"card-text\" style=\"margin-left: -33em; margin-top: 1em; margin-bottom: -0.1em;\">Email</p>\n                    <input [(ngModel)]=\"email\" class=\"form-control\" id=\"emailsignup\" name=\"email\" required=\"required\" type=\"email\" #emailInput=\"ngModel\"\n                        placeholder=\"mysupermail@mail.com\" />\n                    <p class=\"card-text\" style=\"margin-left: -31em; margin-top: 1em; margin-bottom: -0.1em;\"> Password</p>\n                    <input  [(ngModel)]=\"password1\" class=\"form-control\" id=\"passwordsignup\" name=\"password\" required=\"required\" type=\"password\" #passwordInput=\"ngModel\"\n                        placeholder=\"eg. X8df!90EO\" />\n                    <p class=\"card-text\" style=\"margin-left: -27.5em; margin-top: 1em; margin-bottom: -0.1em;\">Confirm Password</p>\n                    <input  [(ngModel)]=\"password2\" class=\"form-control\" id=\"passwordsignup_confirm\" name=\"passwordsignup_confirm\" required=\"required\" type=\"password\"\n                        placeholder=\"eg. X8df!90EO\" />\n                    <p class=\"card-text\" style=\"margin-left: -33em; margin-top: 1em; margin-bottom: 1em;\"></p>\n                    <p>{{meg}}</p>\n                    <button class=\"btn btn-lg btn-primary btn-block\"  type=\"submit\">Sign Up</button>\n                     <p class=\"mt-5 mb-3 text-muted\">\n                    Already a member ?\n                    <a href=\"#\" routerLink=\"/login\" class=\"to_register\"> Login </a>\n                    <br>\n                    <a href=\"#\" routerLink=\"\" class=\"to_register\"> Go to home page </a>\n                </p>\n            </form>\n            <div toastContainer></div>\n        </div>\n\n    </div>\n</div>\n</body>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/retrive/resetpassword/resetpassword.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/retrive/resetpassword/resetpassword.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRetriveResetpasswordResetpasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid form\">\n    <div class=\"row\" *ngIf=\"CurrentState=='Wait'\">\n        <div class=\"col-md-12  close-form\">\n            <h2> Please Wait...</h2>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"CurrentState=='NotVerified'\">\n        <div class=\"col-md-12\">\n            <h2> Invalid URL.</h2>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"CurrentState=='Verified'\">\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n            <div class=\"card card-signin my-5\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title text-center\">Set New Password</h5>\n                    <div>\n                        <div id=\"errorMsg\" *ngIf=\"errorMessage\">\n                            <span>{{errorMessage}}</span>\n                        </div>\n                        <div id=\"successMsg\" *ngIf=\"successMessage\">\n                            <span>{{successMessage}}</span>\n                        </div>\n                        <form action=\"\" [formGroup]=\"ResponseResetForm\" (ngSubmit)=\"ResetPassword(ResponseResetForm)\">\n                            <div class=\"form-group\">\n                                <input _ngcontent-c0=\"\" class=\"form-control form-control-lg\" placeholder=\"Password\"\n                                    type=\"password\" id=\"password\" formControlName=\"newPassword\" />\n                                <span *ngIf=\"!ResponseResetForm.get('newPassword').valid && !IsResetFormValid\"\n                                    class=\"help-block\">Password is required with atleast 4 characters.</span>\n                            </div>\n                            <div class=\"form-group\">\n                                <input _ngcontent-c0=\"\" class=\"form-control form-control-lg\"\n                                    placeholder=\"Confirm Password\" type=\"password\" id=\"cpassword\"\n                                    formControlName=\"confirmPassword\" />\n                                <span *ngIf=\"!ResponseResetForm.get('confirmPassword').valid && !IsResetFormValid\"\n                                    class=\"help-block\">. </span>\n                                <span\n                                    *ngIf=\"ResponseResetForm.get('confirmPassword').valid && (ResponseResetForm.get('confirmPassword').value != ResponseResetForm.get('newPassword').value) && !IsResetFormValid\"\n                                    class=\"help-block\">Confirm Password does not match with password.</span>\n                            </div>\n                            <div class=\"form-group\">\n                                <div>\n\n                                    <button type=\"submit\" class=\"  btn btn-primary\">Update\n                                        Password</button>\n\n                                </div>\n                            </div>\n                        </form>\n                        <br>\n                        <a href=\"#\" routerLink=\"\" class=\"to_home\"> Go to home page </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/retrive/retrive.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/retrive/retrive.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRetriveRetriveComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid form\">\n    <div class=\"row form-row \">\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n            <div class=\"card my-5\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title text-center\">Forgot Password</h5>\n                    <div>\n                        <div id=\"errorMsg\" *ngIf=\"errorMessage\">\n                            <span>{{errorMessage}}</span>\n                        </div>\n                        <div id=\"successMsg\" *ngIf=\"successMessage\">\n                            <span>{{successMessage}}</span>\n                        </div>\n                        <form action=\"\" [formGroup]=\"RequestResetForm\" (ngSubmit)=\"RequestResetUser(RequestResetForm)\">\n                            <div class=\"form-group\">\n                                <input _ngcontent-c0=\"\" class=\"form-control form-control-lg\" placeholder=\"email\"\n                                    type=\"text\" id=\"email\" formControlName=\"email\" />\n                                <span *ngIf=\"!RequestResetForm.get('email').valid && !IsvalidForm\"\n                                    class=\"help-block\">Please enter a valid email!</span>\n                            </div>\n                            <div class=\"form-group\">\n                                <div>\n                                    <button type=\"submit\" (click)=\"request()\" class=\" btn btn-primary\">Reset\n                                        Password</button>\n                                </div>\n                            </div>\n                        </form>\n                        <a href=\"#\" routerLink=\"\" class=\"to_home\"> Go to home page </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/workform/workform.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/workform/workform.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWorkformWorkformComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!doctype html>\n<html lang=\"en\">\n\n  <head></head>\n\n  <body class=\"bg-light\" data-gr-c-s-loaded=\"true\">\n    <div class=\"container\">\n  <div class=\"py-5 text-center\">\n    <h2>Application form</h2>\n    <p class=\"lead\">Fill the required information to proceed to next step</p>\n  </div>\n\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-md-10\">\n      <h4 class=\"mb-3\">Work Experience</h4>\n      <form class=\"needs-validation\" novalidate=\"\">\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"jobtitle\">Job Title</label>\n            <input type=\"text\" class=\"form-control\" id=\"jobtitle\" placeholder=\"\" value=\"\" required=\"\">\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"company\">Company</label>\n            <input type=\"text\" class=\"form-control\" id=\"company\" placeholder=\"\" value=\"\" required=\"\">\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"loaction\">Location </label>\n          <input type=\"text\" class=\"form-control\" id=\"loaction\" placeholder=\"\">\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-5 mb-3\">\n            <label for=\"from\">From</label>\n            <input type=\"text\" class=\"form-control\" id=\"from\" placeholder=\"MM/YYYY\" value=\"\" required=\"\">\n          </div>\n\n          <div class=\"col-md-5 mb-3\">\n            <div class=\"checkbox\">\n              <label><input type=\"checkbox\" name=\"remember\"> I Currently work here</label>\n            </div>\n          </div>\n\n\n          <div class=\"col-md-5 mb-3\">\n            <label for=\"to\">To</label>\n            <input type=\"text\" class=\"form-control\" id=\"to\" placeholder=\"MM/YYYY\" value=\"\" required=\"\">\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"role\">Role Description</label>\n          <textarea rows = 6 class=\"form-control\" id=\"role\" placeholder=\"\" > </textarea>\n        </div>\n\n        <a href=\"localhost:4200/workform\" class=\"btn btn-primary btn-lg \" role=\"button\" aria-disabled=\"true\">Add more work experience</a>\n\n        <hr class=\"mb-4\">\n        <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Cancel</button>\n        <hr class=\"mb-4\">\n        <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Save and Continue</button>\n      </form>\n    </div>\n   </div>\n\n  <footer class=\"my-5 pt-5 text-muted text-center text-small\">\n    <p class=\"mb-1\">HR Solutions</p>\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\n    </ul>\n  </footer>\n  </div>\n\n  </body>\n</html>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _retrive_retrive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./retrive/retrive.component */
    "./src/app/retrive/retrive.component.ts");
    /* harmony import */


    var _retrive_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./retrive/resetpassword/resetpassword.component */
    "./src/app/retrive/resetpassword/resetpassword.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./form/form.component */
    "./src/app/form/form.component.ts");
    /* harmony import */


    var _workform_workform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./workform/workform.component */
    "./src/app/workform/workform.component.ts");

    var routes = [{
      path: "login",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: "register",
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }, {
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    }, {
      path: "workform",
      component: _workform_workform_component__WEBPACK_IMPORTED_MODULE_9__["WorkformComponent"]
    }, {
      path: "form",
      component: _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"]
    }, {
      path: "retrive",
      component: _retrive_retrive_component__WEBPACK_IMPORTED_MODULE_5__["RetriveComponent"]
    }, {
      path: "valid/:token",
      component: _retrive_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'hrweb';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./form/form.component */
    "./src/app/form/form.component.ts");
    /* harmony import */


    var _workform_workform_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./workform/workform.component */
    "./src/app/workform/workform.component.ts");
    /* harmony import */


    var _retrive_retrive_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./retrive/retrive.component */
    "./src/app/retrive/retrive.component.ts");
    /* harmony import */


    var _retrive_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./retrive/resetpassword/resetpassword.component */
    "./src/app/retrive/resetpassword/resetpassword.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_17__["FormComponent"], _workform_workform_component__WEBPACK_IMPORTED_MODULE_18__["WorkformComponent"], _retrive_retrive_component__WEBPACK_IMPORTED_MODULE_19__["RetriveComponent"], _retrive_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_20__["ResetpasswordComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/form/form.component.css":
  /*!*****************************************!*\
    !*** ./src/app/form/form.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-form-field {\n  margin-top: 20px;\n  margin-left: 8px;\n\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n\n.mat-card{\n  width: 80%;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcblxufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi5tYXQtY2FyZHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/form/form.component.ts":
  /*!****************************************!*\
    !*** ./src/app/form/form.component.ts ***!
    \****************************************/

  /*! exports provided: FormComponent */

  /***/
  function srcAppFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");

    var FormComponent =
    /*#__PURE__*/
    function () {
      function FormComponent(_formBuilder) {
        _classCallCheck(this, FormComponent);

        this._formBuilder = _formBuilder;
      }

      _createClass(FormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }]);

      return FormComponent;
    }();

    FormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html")).default,
      providers: [{
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__["STEPPER_GLOBAL_OPTIONS"],
        useValue: {
          showError: true
        }
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form.component.css */
      "./src/app/form/form.component.css")).default]
    })], FormComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(http, loginService, route, toastrService) {
        _classCallCheck(this, LoginComponent);

        this.http = http;
        this.loginService = loginService;
        this.route = route;
        this.toastrService = toastrService;
        this.choices = ['HR', 'Candidate'];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.toastrService.overlayContainer = this.toastContainer;
        } // this.isLoading = true;

      }, {
        key: "login",
        value: function login() {
          this.role = this.choice;
          this.loginService.login(this.email, this.password, this.role);
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.toastrService.error('wrong password or role must match');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"], {
      static: true
    })], LoginComponent.prototype, "toastContainer", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/login/login.service.ts":
  /*!****************************************!*\
    !*** ./src/app/login/login.service.ts ***!
    \****************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppLoginLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(http, router) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(LoginService, [{
        key: "getToken",
        value: function getToken() {
          return this.token;
        }
      }, {
        key: "getIsAuth",
        value: function getIsAuth() {
          return this.isAuthenticated;
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          return this.userId;
        }
      }, {
        key: "getAuthStatusListener",
        value: function getAuthStatusListener() {
          return this.authStatusListener.asObservable();
        }
      }, {
        key: "login",
        value: function login(email, password, role) {
          var _this = this;

          var authData = {
            email: email,
            password: password,
            role: role
          };
          this.http.post( // "http://localhost:3000/login",
          "login", authData).subscribe(function (response) {
            var token = response.token;
            _this.token = token;

            if (token) {
              var expiresInDuration = response.expiresIn;

              _this.setAuthTimer(expiresInDuration);

              _this.isAuthenticated = true;
              _this.userId = response.userId;

              _this.authStatusListener.next(true);

              var now = new Date();
              var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
              console.log(expirationDate);

              _this.saveAuthData(token, expirationDate, _this.userId);

              _this.router.navigate(["/"]);
            }
          });
        }
      }, {
        key: "autoAuthUser",
        value: function autoAuthUser() {
          var authInformation = this.getAuthData();

          if (!authInformation) {
            return;
          }

          var now = new Date();
          var expiresIn = authInformation.expirationDate.getTime() - now.getTime();

          if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.token = null;
          this.isAuthenticated = false;
          this.authStatusListener.next(false);
          this.userId = null;
          clearTimeout(this.tokenTimer);
          this.clearAuthData();
          this.router.navigate(["/"]);
        }
      }, {
        key: "setAuthTimer",
        value: function setAuthTimer(duration) {
          var _this2 = this;

          console.log("Setting timer: " + duration);
          this.tokenTimer = setTimeout(function () {
            _this2.logout();
          }, duration * 1000);
        }
      }, {
        key: "saveAuthData",
        value: function saveAuthData(token, expirationDate, userId) {
          localStorage.setItem("token", token);
          localStorage.setItem("expiration", expirationDate.toISOString());
          localStorage.setItem("userId", userId);
        }
      }, {
        key: "clearAuthData",
        value: function clearAuthData() {
          localStorage.removeItem("token");
          localStorage.removeItem("expiration");
          localStorage.removeItem("userId");
        }
      }, {
        key: "getAuthData",
        value: function getAuthData() {
          var token = localStorage.getItem("token");
          var expirationDate = localStorage.getItem("expiration");
          var userId = localStorage.getItem("userId");

          if (!token || !expirationDate) {
            return;
          }

          return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
          };
        }
      }, {
        key: "newPassword",
        value: function newPassword(body) {
          // return this.http.post('http://localhost:3000/reset', body);
          return this.http.post('reset', body);
        }
      }, {
        key: "ValidPasswordToken",
        value: function ValidPasswordToken(body) {
          // return this.http.post('http://localhost:3000/valid', body);
          return this.http.post('valid', body);
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login/login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(authService, toastrService, http, router) {
        _classCallCheck(this, RegisterComponent);

        this.authService = authService;
        this.toastrService = toastrService;
        this.http = http;
        this.router = router;
        this.choices = ['HR', 'Candidate'];
        this.toastrService.overlayContainer = this.toastContainer;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.toastrService.overlayContainer = this.toastContainer;
        }
      }, {
        key: "register",
        value: function register(form) {
          var _this3 = this;

          if (this.password1 == this.password2) {
            this.role = this.choice;
            var authData = {
              email: form.value.email,
              password: form.value.password,
              role: this.choice
            };
            this.http.post("register", authData) // .post("/register", authData)
            .subscribe(function (response) {
              _this3.meg = response["message"];
              console.log("show detail of response :", _this3.meg);

              _this3.router.navigate(["login"]);
            }, function (error) {
              _this3.meg = error.message;
              console.log("error is", _this3.meg);
            });
          } else {
            this.onClick();
          }
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.toastrService.error('confirmed password should be the same');
        }
      }, {
        key: "onClick1",
        value: function onClick1() {
          this.toastrService.warning('accoun exists');
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastContainerDirective"], {
      static: true
    })], RegisterComponent.prototype, "toastContainer", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/retrive/resetpassword/resetpassword.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/retrive/resetpassword/resetpassword.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRetriveResetpasswordResetpasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldHJpdmUvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/retrive/resetpassword/resetpassword.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/retrive/resetpassword/resetpassword.component.ts ***!
    \******************************************************************/

  /*! exports provided: ResetpasswordComponent */

  /***/
  function srcAppRetriveResetpasswordResetpasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function () {
      return ResetpasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../login/login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ResetpasswordComponent =
    /*#__PURE__*/
    function () {
      function ResetpasswordComponent(authService, router, route, fb) {
        var _this4 = this;

        _classCallCheck(this, ResetpasswordComponent);

        this.authService = authService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.IsResetFormValid = true;
        this.CurrentState = 'Wait';
        this.route.params.subscribe(function (params) {
          _this4.resetToken = params.token;
          console.log(_this4.resetToken);

          _this4.VerifyToken();
        });
      }

      _createClass(ResetpasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Init();
        }
      }, {
        key: "VerifyToken",
        value: function VerifyToken() {
          var _this5 = this;

          this.authService.ValidPasswordToken({
            resettoken: this.resetToken
          }).subscribe(function (data) {
            _this5.CurrentState = 'Verified';
          }, function (err) {
            _this5.CurrentState = 'NotVerified';
          });
        }
      }, {
        key: "Init",
        value: function Init() {
          this.ResponseResetForm = this.fb.group({
            resettoken: [this.resetToken],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]]
          });
        }
      }, {
        key: "ResetPassword",
        value: function ResetPassword(form) {
          var _this6 = this;

          console.log(form.get('confirmPassword'));

          if (form.valid) {
            console.log("front end test: ", form);
            this.IsResetFormValid = true;
            this.authService.newPassword(this.ResponseResetForm.value).subscribe(function (data) {
              _this6.ResponseResetForm.reset();

              _this6.successMessage = data.message;
              setTimeout(function () {
                _this6.successMessage = null;

                _this6.router.navigate(['login']);
              }, 3000);
            }, function (err) {
              if (err.error.message) {
                _this6.errorMessage = err.error.message;
              }
            });
          } else {
            this.IsResetFormValid = false;
          }
        }
      }]);

      return ResetpasswordComponent;
    }();

    ResetpasswordComponent.ctorParameters = function () {
      return [{
        type: _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    ResetpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resetpassword',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resetpassword.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/retrive/resetpassword/resetpassword.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resetpassword.component.css */
      "./src/app/retrive/resetpassword/resetpassword.component.css")).default]
    })], ResetpasswordComponent);
    /***/
  },

  /***/
  "./src/app/retrive/retrive.component.css":
  /*!***********************************************!*\
    !*** ./src/app/retrive/retrive.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRetriveRetriveComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldHJpdmUvcmV0cml2ZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/retrive/retrive.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/retrive/retrive.component.ts ***!
    \**********************************************/

  /*! exports provided: RetriveComponent */

  /***/
  function srcAppRetriveRetriveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RetriveComponent", function () {
      return RetriveComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var RetriveComponent =
    /*#__PURE__*/
    function () {
      function RetriveComponent(http, router) {
        _classCallCheck(this, RetriveComponent);

        this.http = http;
        this.router = router;
        this.IsvalidForm = true;
      }

      _createClass(RetriveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.RequestResetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email], this.forbiddenEmails)
          });
        }
      }, {
        key: "RequestResetUser",
        value: function RequestResetUser(form) {
          console.log(this.RequestResetForm.value.email);
        }
      }, {
        key: "request",
        value: function request() {
          var _this7 = this;

          // if (form.valid) {
          //   this.IsvalidForm = true;
          this.http // .post("http://localhost:3000/retrive", { email: this.RequestResetForm.value.email })
          .post("retrive", {
            email: this.RequestResetForm.value.email
          }).subscribe(function (response) {
            // this.RequestResetForm.reset();
            _this7.successMessage = "Reset password link send to email sucessfully.";
            setTimeout(function () {
              _this7.successMessage = null;

              _this7.router.navigate(['login']);
            }, 3000);
          }, function (err) {
            if (err.error.message) {
              _this7.errorMessage = err.error.message;
            }
          });
        }
      }]);

      return RetriveComponent;
    }();

    RetriveComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    RetriveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-retrive',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./retrive.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/retrive/retrive.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./retrive.component.css */
      "./src/app/retrive/retrive.component.css")).default]
    })], RetriveComponent);
    /***/
  },

  /***/
  "./src/app/workform/workform.component.css":
  /*!*************************************************!*\
    !*** ./src/app/workform/workform.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWorkformWorkformComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmtmb3JtL3dvcmtmb3JtLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/workform/workform.component.ts":
  /*!************************************************!*\
    !*** ./src/app/workform/workform.component.ts ***!
    \************************************************/

  /*! exports provided: WorkformComponent */

  /***/
  function srcAppWorkformWorkformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkformComponent", function () {
      return WorkformComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WorkformComponent =
    /*#__PURE__*/
    function () {
      function WorkformComponent() {
        _classCallCheck(this, WorkformComponent);
      }

      _createClass(WorkformComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WorkformComponent;
    }();

    WorkformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-workform',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./workform.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/workform/workform.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./workform.component.css */
      "./src/app/workform/workform.component.css")).default]
    })], WorkformComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/huanwu/Documents/5394project/5394Project/hrweb/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map