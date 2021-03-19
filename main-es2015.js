(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\menna\projects\New project\zero\src\main.ts */"zUnb");


/***/ }),

/***/ "0JOB":
/*!**************************************************!*\
  !*** ./src/app/myaccount/myaccount.component.ts ***!
  \**************************************************/
/*! exports provided: MyaccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountComponent", function() { return MyaccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "18Le");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "55oq");







class MyaccountComponent {
    constructor(auth, firestore, router) {
        this.auth = auth;
        this.firestore = firestore;
        this.router = router;
    }
    ngOnInit() {
        this.initUser();
    }
    initUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firestore.collection('users').ref.limit(1).get();
            this.UID = yield this.auth.getUID();
            console.log("UAE", this.UID);
            if (this.UID) {
                var doc = yield this.firestore.collection('users').doc(this.UID).ref.get();
                this.user = doc.data();
            }
            else {
                this.router.navigate(['signin']);
            }
        });
    }
    logout() {
        this.auth.Logout();
    }
}
MyaccountComponent.ɵfac = function MyaccountComponent_Factory(t) { return new (t || MyaccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MyaccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyaccountComponent, selectors: [["app-myaccount"]], decls: 56, vars: 2, consts: [[1, "container", "pl-5", "pr-5", 2, "padding-top", "140px"], ["category", "My Account"], [2, "height", "24px"], [1, "row"], [1, "col-lg-3"], [1, "container-1"], [2, "font-family", "proxima-nova", "font-size", "24px"], ["routerLink", "/myorders"], [3, "click"], [1, "col-lg-9"], [1, "text-muted"], [2, "width", "50%"], [2, "height", "0.3px"], [1, "float-left"], [1, "d-flex", "justify-content-between"], [1, "float-right"], ["href", "editprofile"], [2, "height", "0.5px"], ["href", "manageaddress"]], template: function MyaccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "my account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Account Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyaccountComponent_Template_a_click_14_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Hello,");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " From your dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Account Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Contact Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Contact no: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "9876543210");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Address book");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Manage Addresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Name: ", ctx.user.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Email: ", ctx.user.mail, "");
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".container[_ngcontent-%COMP%]{\n  padding-top: 8%;\n}\nh5[_ngcontent-%COMP%]{\n    text-transform: uppercase;\n    font-weight: bolder;\n    font-size:15px;\n  }\na[_ngcontent-%COMP%]{\n    text-decoration: underline;\n    color: black;\n  }\na[_ngcontent-%COMP%]:hover{\n   text-decoration: underline;\n    color: black;\n    opacity: 0.7;\n  }\n.account-nav[_ngcontent-%COMP%] {\n    margin-inline: 10px;\n  }\n.breadcrumb[_ngcontent-%COMP%]{\nbackground-color:transparent;\nfont-size: small;\n  }\np[_ngcontent-%COMP%]{\n    color: rgba(0, 0, 0, 0.699);\n  }\nh2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{\n    font-family: 'proxima-nova';\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15YWNjb3VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCO0FBRUE7SUFDRSwwQkFBMEI7SUFDMUIsWUFBWTtFQUNkO0FBQ0E7R0FDQywwQkFBMEI7SUFDekIsWUFBWTtJQUNaLFlBQVk7RUFDZDtBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0E7QUFDRiw0QkFBNEI7QUFDNUIsZ0JBQWdCO0VBQ2Q7QUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUVBO0lBQ0UsMkJBQTJCO0NBQzlCIiwiZmlsZSI6Im15YWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgcGFkZGluZy10b3A6IDglO1xufVxuaDV7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZToxNXB4O1xuICB9XG4gIFxuICBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBhOmhvdmVye1xuICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICBcbiAgLmFjY291bnQtbmF2IHtcbiAgICBtYXJnaW4taW5saW5lOiAxMHB4O1xuICB9XG4gIC5icmVhZGNydW1ie1xuYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbmZvbnQtc2l6ZTogc21hbGw7XG4gIH1cblxuICBwe1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjk5KTtcbiAgfVxuICBcbiAgaDIsIGg0LCBoMSwgaDUsIGg2e1xuICAgIGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhJztcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyaccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-myaccount',
                templateUrl: './myaccount.component.html',
                styleUrls: ['./myaccount.component.css']
            }]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "18Le":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.service */ "jOXV");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AuthenticationService {
    constructor(afAuth, service, firestore, router) {
        this.afAuth = afAuth;
        this.service = service;
        this.firestore = firestore;
        this.router = router;
    }
    // Sign up with email/password
    SignUp(email, password, name) {
        return this.afAuth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
            window.alert("You have been successfully Registered");
            this.firestore.collection('users').doc(result.user.uid).set({
                'name': name,
                'mail': email,
                'password': password
            });
            this.router.navigate(['/']);
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    changePassword(email) {
        return this.afAuth.sendPasswordResetEmail(email).then((res) => {
            window.alert("Password Reset Link has been Sent to Your Email Address.");
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    // Sign in with email/password
    SignIn(email, password) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
            this.router.navigate(['/']);
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    Logout() {
        return this.afAuth.signOut()
            .then((result) => {
            this.router.navigate(['/']);
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    getUID() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var u = yield this.afAuth.currentUser;
            return u.uid;
        });
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "55oq":
/*!****************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function BreadcrumbComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("breadcrumb-item  ", ctx_r0.cats.indexOf(cat_r1) === ctx_r0.cats.length - 1 ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("display: ", ctx_r0.cats.indexOf(cat_r1) === ctx_r0.cats.length - 1 ? "block" : "none", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("display: ", ctx_r0.cats.indexOf(cat_r1) != ctx_r0.cats.length - 1 ? "block" : "none", ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r0.routes[ctx_r0.cats.indexOf(cat_r1)], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r1);
} }
class BreadcrumbComponent {
    constructor(firestore) {
        this.firestore = firestore;
        this.cats = [];
        this.routes = [];
    }
    ngOnInit() {
        if (this.category != undefined) {
            this.cats.push(this.category.replace('NULL', 'All'));
            this.crumb();
        }
        else if (this.data != undefined) {
            this.cats = this.data.category;
            this.category = this.cats[0];
            this.crumb();
        }
        console.log(this.data, this.cats, 'IS COOKING');
    }
    ngOnChanges() {
        if (this.category != undefined) {
            this.cats.push(this.category.replace('NULL', 'All'));
            this.crumb();
        }
        else if (this.data != undefined) {
            this.cats = this.data.category;
            this.category = this.cats[0];
            this.crumb();
        }
        console.log("CHANGE", this.data, this.cats, 'IS COOKING');
    }
    crumb() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var docs = yield this.firestore.collection("category").ref.where('category', 'array-contains-any', this.cats).limit(1).get();
            this.cats = [];
            this.routes = [];
            if (docs.docs.length > 0) {
                this.cats.push('Home');
                this.routes.push("");
                this.cats.push(docs.docs[0].id);
                this.routes.push("productlists/" + docs.docs[0].id + "/" + docs.docs[0].id);
                this.cats.push(this.category.replace('NULL', 'All'));
                this.routes.push("productlists/" + this.category + "/" + this.category);
            }
            else {
                this.cats.push('Home');
                this.routes.push("");
                this.cats.push(this.category.replace('NULL', 'All'));
                this.routes.push("productlists/" + this.category + "/" + this.category);
            }
            if (this.data != undefined) {
                this.cats.push(this.data.name);
                this.routes.push("productlists/" + this.data.name + "/" + this.data.name);
            }
            this.cats = this.removeDuplicates(this.cats);
            this.routes = this.removeDuplicates(this.routes);
            console.log(this.routes);
        });
    }
    removeDuplicates(array) {
        return array.filter((a, b) => array.indexOf(a) === b);
    }
    ;
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { data: "data", category: "category" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[1, "breadcrumb", 2, "padding", "0px"], [3, "class", 4, "ngFor", "ngForOf"], [3, "href"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BreadcrumbComponent_li_1_Template, 5, 12, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cats);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".breadcrumb[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    background-color: transparent;\r\n    color: black;\r\n    left: 0px;\r\n  }\r\n  \r\n  .toplink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    color: black;\r\n  }\r\n  \r\n  .btn-c[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    text-transform: uppercase;\r\n    border-radius: 0;\r\n    font-size: 11px;\r\n  \r\n  }\r\n  \r\n  .btn-c[_ngcontent-%COMP%]:hover{\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    text-transform: uppercase;\r\n    border-radius: 0;\r\n  \r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    text-transform: uppercase;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]:hover{\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    text-transform: uppercase;\r\n    border-radius: 0;\r\n  \r\n  }\r\n  \r\n  img[_ngcontent-%COMP%] {\r\n    border-radius: 2px;\r\n    max-width: 100%;\r\n    width: 100%;\r\n    height: auto;\r\n    text-align: center;\r\n    border: none;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%]{\r\n    border: none;\r\n  }\r\n  \r\n  .card-footer[_ngcontent-%COMP%]{\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paginate[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    border: none;\r\n    text-align: center;\r\n  }\r\n  \r\n  .paginate[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    border: none;\r\n  }\r\n  \r\n  .paginate[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    border: none;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .sidemenu[_ngcontent-%COMP%] {\r\n      border-right:solid 1px rgba(255, 255, 255, 0.10);\r\n    }\r\n  }\r\n  \r\n  .custom-dropdown[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n  }\r\n  \r\n  .collection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  padding: -20px;\r\n  }\r\n  \r\n  .collection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border: none;\r\n  text-transform: capitalize;\r\n  }\r\n  \r\n  .collection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n  color: black;\r\n  \r\n  }\r\n  \r\n  a[_ngcontent-%COMP%]:link {\r\n    color: rgb(26, 26, 26); \r\n    background-color: transparent; \r\n    text-decoration: none;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%]:visited {\r\n    color: rgb(43, 43, 43);\r\n    background-color: transparent;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%]:hover {\r\n    color: rgb(0, 0, 0);\r\n    background-color: transparent;\r\n    text-decoration: underline;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFNBQVM7RUFDWDs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3QixZQUFZO0VBQ2Q7O0VBR0E7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTs7RUFFakI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7O0VBRWxCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCOztFQUVsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUNBO0lBQ0UsWUFBWTtJQUNaLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBQ0E7SUFDRTtNQUNFLGdEQUFnRDtJQUNsRDtFQUNGOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtFQUNBLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Q7O0VBRUE7RUFDQSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQjs7RUFDQTtFQUNBLHFCQUFxQjtFQUNyQixZQUFZOztFQUVaOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0VBQzVCIiwiZmlsZSI6ImJyZWFkY3J1bWIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuICBcclxuICAudG9wbGluayBhe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gICAgXHJcbiAgLmJ0bi1je1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuYnRuLWM6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJke1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICAuY2FyZC1mb290ZXJ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luYXRlIC5wYWdpbmF0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wYWdpbmF0ZSBhe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0ZSAuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNpZGVtZW51IHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWRyb3Bkb3due1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY29sbGVjdGlvbiAuY2FyZCwuY2FyZC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IC0yMHB4O1xyXG4gIH0gIFxyXG4gIFxyXG4gIC5jb2xsZWN0aW9uIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuICAuY29sbGVjdGlvbiBidXR0b246aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgXHJcbiAgfVxyXG5cclxuICBhOmxpbmsge1xyXG4gICAgY29sb3I6IHJnYigyNiwgMjYsIDI2KTsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogcmdiKDQzLCA0MywgNDMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: ['./breadcrumb.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "5Fl7":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication.service */ "18Le");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class SigninComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    move() {
        this.router.navigate(['signup']);
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 19, vars: 0, consts: [[1, "log", 2, "padding-top", "130px"], [1, "input-cont"], ["stlye", "text-align-left prox", 2, "font-family", "proxima-nova"], [1, "authBlock"], [1, "input-cont", "formGroup"], ["type", "text", "required", "", "placeholder", "Email address", 1, "formControl", 2, "font-size", "16px"], ["email", ""], [1, "border1"], ["type", "password", "required", "", "placeholder", "Password", 1, "formControl", 2, "font-size", "16px"], ["password", ""], [1, "border2"], [2, "height", "32px"], ["type", "button", 1, "button", "btn-lg", "btn-block", 2, "font-family", "proxima-nova", 3, "click"], ["routeActive", "", 1, "text-center", 3, "click"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.auth.SignIn(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_div_click_17_listener() { return ctx.move(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Create a new account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    background-color: #EEE;\r\n  }\r\n  \r\n  .clear[_ngcontent-%COMP%] {\r\n    clear: both;\r\n  }\r\n  \r\n  .log[_ngcontent-%COMP%] {\r\n    width: 420px;\r\n    margin: 5% auto;\r\n    background-color: #FFF;\r\n  \r\n  }\r\n  \r\n  .log[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    color: black;\r\n    font-weight: bold;\r\n    font-size: 26px;\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 0 20px 40px;\r\n  }\r\n  \r\n  .log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]:last-of-type {\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: 40px;\r\n    outline: none;\r\n    color: #212121;\r\n    font-size: 22px;\r\n    font-weight: 400;\r\n    background: none;\r\n    border: none;\r\n  }\r\n  \r\n  .log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n  }\r\n  \r\n  .log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    color: #948c8c;\r\n    top: 0;\r\n    left: 0;\r\n    line-height: 40px;\r\n    transition: .3s;\r\n  }\r\n  \r\n  .log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] {\r\n    margin-top: -20px;\r\n    transform: scale(.8);\r\n    color: #bdbdbd;\r\n  }\r\n  \r\n  .log[_ngcontent-%COMP%]   .border1[_ngcontent-%COMP%], .log[_ngcontent-%COMP%]   .border2[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 2px;\r\n    background-color: black;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n  }\r\n  \r\n  .log[_ngcontent-%COMP%]   .border1[_ngcontent-%COMP%]::after, .log[_ngcontent-%COMP%]   .border1[_ngcontent-%COMP%]::before, .log[_ngcontent-%COMP%]   .border2[_ngcontent-%COMP%]::after, .log[_ngcontent-%COMP%]   .border2[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 0;\r\n    height: 2px;\r\n    transition: .5s;\r\n  }\r\n  \r\n  .log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ .border1[_ngcontent-%COMP%]::after, .log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ .border1[_ngcontent-%COMP%]::before, .log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ .border2[_ngcontent-%COMP%]::after, .log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ .border2[_ngcontent-%COMP%]::before {\r\n    width: 50%;\r\n  }\r\n  \r\n  .log[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%], .log[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: calc(50% - 50px);\r\n    display: block;\r\n    font-size: 12px;\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .log[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\r\n    margin-left: 50px;\r\n  }\r\n  \r\n  .log[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0 auto 20px;\r\n    border: 2px solid transparent;\r\n    padding: 5px 20px;\r\n    font-size: 22px;\r\n    cursor: pointer;\r\n    color: #ed2553;\r\n    transition: .5s;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    \r\n    border: none;\r\n    color: white;\r\n    padding: 15px 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    border-radius: 0%;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]:hover {\r\n    background-color: black;\r\n    \r\n    border: none;\r\n    color: white;\r\n    padding: 15px 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .log[_ngcontent-%COMP%]   .new-account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: black;\r\n    font-size: 14px;\r\n    text-align: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7O0VBRXhCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxNQUFNO0lBQ04sT0FBTztJQUNQLGlCQUFpQjtJQUlqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBSWpCLG9CQUFvQjtJQUNwQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUlYLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUdBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsY0FBYztJQUlkLGVBQWU7RUFDakI7O0VBR0E7SUFDRSx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gIH1cclxuICBcclxuICAuY2xlYXIge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2cge1xyXG4gICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmxvZyBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZyAuaW5wdXQtY29udCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgMjBweCA0MHB4O1xyXG4gIH1cclxuICBcclxuICAubG9nIC5pbnB1dC1jb250Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAubG9nIC5pbnB1dC1jb250IGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAubG9nIC5pbnB1dC1jb250IGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2cgLmlucHV0LWNvbnQgbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6ICM5NDhjOGM7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gIH1cclxuICBcclxuICAubG9nIC5pbnB1dC1jb250IGlucHV0OmZvY3VzK2xhYmVsIHtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC44KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSguOCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKC44KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xyXG4gICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2cgLmJvcmRlcjEsIC5sb2cgLmJvcmRlcjIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZyAuYm9yZGVyMTo6YWZ0ZXIsIC5sb2cgLmJvcmRlcjE6OmJlZm9yZSwgLmxvZyAuYm9yZGVyMjo6YWZ0ZXIsIC5sb2cgLmJvcmRlcjI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAuNXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiAuNXM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2cgLmlucHV0LWNvbnQgaW5wdXQ6Zm9jdXN+LmJvcmRlcjE6OmFmdGVyLCAubG9nIC5pbnB1dC1jb250IGlucHV0OmZvY3Vzfi5ib3JkZXIxOjpiZWZvcmUsIC5sb2cgLmlucHV0LWNvbnQgaW5wdXQ6Zm9jdXN+LmJvcmRlcjI6OmFmdGVyLCAubG9nIC5pbnB1dC1jb250IGlucHV0OmZvY3Vzfi5ib3JkZXIyOjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZyAuY2hlY2ssIC5sb2cgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAubG9nIC5jaGVjayB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmxvZyBmb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZWQyNTUzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC41cztcclxuICAgIC1vLXRyYW5zaXRpb246IC41cztcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgLyogR3JlZW4gKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgLyogR3JlZW4gKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2cgLm5ldy1hY2NvdW50IGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signin',
                templateUrl: './signin.component.html',
                styleUrls: ['./signin.component.css']
            }]
    }], function () { return [{ type: src_app_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "jOXV");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _productitem_productitem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../productitem/productitem.component */ "c3h7");







function HomeComponent_div_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-productitem", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", product_r1);
} }
class HomeComponent {
    //test
    constructor(productService, firestore) {
        this.productService = productService;
        this.firestore = firestore;
    }
    ngOnInit() {
        this.firestore.collection("static").doc('data').ref.get().then((doc) => {
            this.images = doc.data().slider;
            this.bigtext = doc.data().big_text;
            this.small = doc.data().small_text;
        });
        this.productService.getProducts("HOME").subscribe(data => {
            this.products = data.map(e => {
                console.log(e.payload.doc.data());
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 165, vars: 1, consts: [["id", "slider1", 1, "csslider", "infinity"], [1, "d-flex", "justify-content-center", "align-items-center", "m-auto", "text-center"], [1, "header-h1"], [2, "font-size", "16px", "font-weight", "normal", "line-height", "30px"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "3"], [1, "carousel-inner"], [1, "carousel-item", "active", "position-relative", "d-flex", "justify-content-center", "align-items-center"], ["src", "https://firebasestorage.googleapis.com/v0/b/zeroarmario.appspot.com/o/thai-an-fPny13VTWks-unsplash%402x%201.png?alt=media&token=ca50877d-5312-4114-ae96-6856621d1282", "alt", "...", 1, "d-block", "w-100"], [2, "font-size", "22px", "font-weight", "normal", "line-height", "30px"], [1, "carousel-item", "position-relative", "d-flex", "justify-content-center", "align-items-center"], [1, "explore-product"], [1, "container"], [1, "line"], ["routerLink", "productlists/Coupler wears/Coupler wears", 1, "row"], ["routerLink", "productlists/Henley shirts/Henley shirts", 1, "col-6", "col-lg-2", "col-xs-6", "col-sm-6"], ["src", "../../assets/images/png/products/4.png", "alt", ""], ["routerLink", "productlists/Plain wear/Plain wear", 1, "col-6", "col-lg-2", "col-xs-6", "col-sm-6"], ["src", "../../assets/images/png/products/3.png", "alt", ""], ["routerLink", "productlists/Sweat shirts/Sweat shirts", 1, "col-6", "col-lg-2", "col-xs-6", "col-sm-6"], ["src", "../../assets/images/png/products/5.png", "alt", ""], ["routerLink", "productlists/Couple wears/Couple wears", 1, "col-6", "col-lg-2", "col-xs-6", "col-sm-6"], ["src", "../../assets/images/png/products/1.png", "alt", ""], ["routerLink", "productlists/Hoddies/Hoddies", 1, "col-6", "col-lg-2", "col-xs-6", "col-sm-6"], ["src", "../../assets/images/png/products/6.png", "alt", ""], ["routerLink", "productlists/Covid 19/Covid 19", 1, "col-6", "col-lg-2", "col-xs-6", "col-sm-6"], ["src", "../../assets/images/png/products/2.png", "alt", ""], [1, "handpicked-categories"], [2, "text-align", "center"], [1, "row", "handpicked-img", 2, "margin-top", "50px"], ["routerLink", "productlists/Women/Women", 1, "col-sm-12", "col-md-6", "col-lg-3", 2, "margin-bottom", "30px"], ["src", "../../assets/images/png/categories/women.png", "alt", ""], ["routerLink", "productlists/Men/Men", 1, "col-sm-12", "col-md-6", "col-lg-3", 2, "margin-bottom", "30px"], ["src", "../../assets/images/png/categories/men.png", "alt", ""], ["routerLink", "productlists/Children/Children", 1, "col-sm-12", "col-md-6", "col-lg-3", 2, "margin-bottom", "30px"], ["src", "../../assets/images/png/categories/children.png", "alt", ""], ["routerLink", "productlists/Home/Home", 1, "col-sm-12", "col-md-6", "col-lg-3", 2, "margin-bottom", "30px"], ["src", "../../assets/images/png/categories/stationary.png", "alt", ""], [1, "shop-by-design"], [1, "container", "pt-3", "pr-5", "pl-5"], [1, "row", "pt-5"], [1, "item", "col-md-6", "col-sm-12"], ["src", "../../assets/images/item1.png", "alt", ""], [1, "left"], ["src", "../../assets/images/item2.png", "alt", ""], [1, "right"], [1, "row"], ["src", "../../assets/images/item3.png", "alt", ""], ["src", "../../assets/images/item4.png", "alt", ""], [1, "pack", "pl-5", "pr-5"], [1, "col-lg-4", "col-sm-12", "mb-4", 2, "align-self", "flex-end", "margin-bottom", "10px"], ["src", "../../assets/images/png/pack/2.png", "alt", ""], [1, "btn-1"], [1, "col-lg-4", "col-sm-12", "mb-4", 2, "margin-bottom", "10px"], ["src", "../../assets/images/png/pack/1.png", "alt", ""], [1, "pack-title-1"], [1, "btn-2"], ["src", "../../assets/images/png/pack/3.png", "alt", ""], [1, "pack-title-2", 2, "font-size", "22px", "text-align", "center", "font-size", "bold"], [1, "bestproduct", "pl-3", "pr-3", "pt-0"], ["class", "col-sm-6 col-6 col-md-6 col-lg-3", "id", "product", 4, "ngFor", "ngForOf"], [1, "container", 2, "text-align", "center", "width", "300px", "height", "200px", "padding-top", "10px", "}\n#btn{\nfont-size", "25px"], ["routerLink", "productlists/NULL/All Products", 1, "btn", 2, "align-items", "center", "align-content", "top"], [2, "font-size", "12px"], ["data-icon", "bi:arrow-right", "data-inline", "false", 1, "iconify", 2, "margin-left", "12px"], ["id", "product", 1, "col-sm-6", "col-6", "col-md-6", "col-lg-3"], [3, "data"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Upto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "50% off on everything");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Upto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "50% off on everything");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Upto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "50% off on everything");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Upto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "50% off on everything");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Upto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "50% off on everything");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Explore Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Henley shirts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Plain wear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Sweatshirts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Couple wears");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Hoddies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Covid 19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Handpicked categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Explore our complete handmade products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "featuring farhuman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Womens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Men");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Children");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "section", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Shop by Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Explore our designs from different genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "featuring Zeroarmario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h4", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Dream of 2044");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h4", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "- Love to boo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h4", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Minimalism");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h4", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "View all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "section", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Recharge your Saving");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Shop all your favourite clothes with much reasonable price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "30% Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h4", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "20% Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "on Student ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Deal of the season");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "section", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Best product selling for us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](159, HomeComponent_div_159_Template, 2, 1, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "VIEW ALL PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _productitem_productitem_component__WEBPACK_IMPORTED_MODULE_5__["ProductitemComponent"]], styles: ["@import url(\"https://use.typekit.net/bza3vcv.css\");\r\n*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"proxima-nova\";\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n}\r\n.carousel[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 30px !important;\r\n  bottom: 40px ;\r\n  margin: 0 !important;\r\n}\r\n.carousel[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  background-color: black\r\n}\r\n.carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .header-h1[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: 999;\r\n  color: white;\r\n  font-size: 50px;\r\n}\r\nh2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{\r\n  font-family: 'proxima-nova';\r\n}\r\n\r\n.explore-product[_ngcontent-%COMP%]{\r\n  margin-top: 150px;\r\n}\r\n.explore-product[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n}\r\n.explore-product[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 26px;\r\n  font-weight: bold;\r\n}\r\nhr.line[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  border: 1.5px solid #E9103B;\r\n  color: #E9103B;\r\n  opacity: 1;\r\n  width: 40px;\r\n}\r\n.explore-product[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\n  margin-top: 70px;\r\n}\r\n.explore-product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 100%;\r\n  max-width: 100%;\r\n  width: 144px;\r\n  height: 144px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.explore-product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-style: 16px medium;\r\n  margin-top: 27px;\r\n}\r\n@media only screen and (max-width: 762px){\r\n  .explore-product[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n  }\r\n  .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .header-h1[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n  }\r\n\r\n}\r\n@media only screen and (max-width: 450px) {\r\n  .carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .header-h1[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n  }\r\n}\r\n.overlay[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  color: white;\r\n  display: none;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.categories[_ngcontent-%COMP%]{\r\n  padding-top: 5%;\r\n}\r\n#categories[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: bolder;\r\n}\r\n#categories[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n  max-width: 100%;\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n  margin: 6px;\r\n  padding: 10px;\r\n}\r\n#categories[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n  border-radius: 10px;\r\n  max-width: 100%;\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n  margin: 6px;\r\n  padding: 10px;\r\n  opacity: 0.7;\r\n}\r\n.categories[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 21px;\r\n  position: absolute;\r\n  margin: 0;\r\n  color: white;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.categories[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n  max-width: 100%;\r\n}\r\n.shop[_ngcontent-%COMP%]{\r\n  padding-top: 5%;\r\n}\r\n#shop[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\n  padding-top: 5%;\r\n}\r\n#shop[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: bolder;\r\n}\r\n#shop[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n  max-width: 100%;\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n  margin: 6px;\r\n  padding: 10px;\r\n}\r\n#shop[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  font-size: 21px;\r\n}\r\n.shop[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin: 0;\r\n  color: white;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.bottom-right[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  right: 35px;\r\n  color: white;\r\n}\r\n.dream[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n  overflow: hidden;\r\n  padding: 200px;\r\n}\r\n.bottom-left[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  left: 35px;\r\n  color: white;\r\n}\r\n.top-right[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 35px;\r\n}\r\n.top-left[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 20px;\r\n  left: 35px;\r\n}\r\n#pack[_ngcontent-%COMP%]{\r\n  padding-top: 5%;\r\n}\r\n#pack[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\n  padding-top: 4%;\r\n}\r\n#pack[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: bolder;\r\n}\r\n#pack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  max-width: 100%;\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n}\r\n#pack[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 15%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n\r\n  color: white;\r\n  font-size: 16px;\r\n}\r\n#pack[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\r\n  background-color: black;\r\n}\r\n.bestproduct[_ngcontent-%COMP%]{\r\n  padding-top: 5%;\r\n}\r\n#bestproduct[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 2px;\r\n  max-width: 100%;\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n  border: none;\r\n}\r\n#bestproduct[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n#bestproduct[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background-color: white;\r\n}\r\n#bestproduct[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: bolder;\r\n}\r\n#bestproduct[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  color: #eb2c52;\r\n  align-items: center;\r\n  padding: 10px 12px;\r\n  border-color: #eb2c52;\r\n  border-radius: 0;\r\n}\r\n#bestproduct[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #eb2c52;\r\n  color: white;\r\n  align-items: center;\r\n  padding: 10px 12px;\r\n  border-color: #eb2c52;\r\n  border-radius: 0;\r\n}\r\n#tester[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 2px;\r\n  max-width: 100%;\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n  border: none;\r\n}\r\n.btn-1[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 25%;\r\n  left:45%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  background-color: white;\r\n  color: black;\r\n  font-size: 16px;\r\n  padding: 12px 24px;\r\n  border: none;\r\n  cursor: pointer;\r\n  width:40%;\r\n  height: 10%;\r\n}\r\n.title-1[_ngcontent-%COMP%] {\r\n\r\n  position: absolute;\r\n  top: 10%;\r\n  left: 44%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  color: black;\r\n  font-size: 19px;\r\n  font-weight:800;\r\n}\r\n.btn-1[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.7;\r\n}\r\n.carousel-indicators[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  float: right;\r\n  right: 0px !important;\r\n  left: inherit;\r\n}\r\n.right.carousel-control[_ngcontent-%COMP%], .left.carousel-control[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.right.carousel-control[_ngcontent-%COMP%], .left.carousel-control[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  filter:alpha(opacity=0); \r\n}\r\n.carousel-indicators[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 99%;\r\n  border: 2px solid #ffffff;\r\n  background-color: none;\r\n}\r\n.btn-2[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  background-color: black;\r\n  color: white;\r\n  font-size: 16px;\r\n  padding: 12px 24px;\r\n  border: none;\r\n\r\n}\r\n.btn-2[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.7;\r\n}\r\n.title-2[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 47%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  color: white;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n\r\n}\r\n.text-muted[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\r\n.carousel-item[_ngcontent-%COMP%]{\r\n  height: 40%px;\r\n}\r\nmat-grid-tile[_ngcontent-%COMP%]{\r\n  \r\n  height:350px;\r\n}\r\n@media only screen and (max-width: 762px){\r\n  .handpicked-categories[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n  }\r\n  .handpicked-categories.row[_ngcontent-%COMP%]{\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n@media only screen and (max-width: 575px) {\r\n  .handpicked-categories[_ngcontent-%COMP%]   .handpicked-img[_ngcontent-%COMP%] {\r\n    padding: 0 50px;\r\n  }\r\n}\r\n\r\n.handpicked-categories[_ngcontent-%COMP%]{\r\n  margin-top: 150px;\r\n}\r\n.handpicked-categories[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 26px;\r\n  font-weight: bold;\r\n}\r\n.handpicked-categories[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  margin-bottom: 24px;\r\n  color: #4E4E4E;\r\n}\r\n.handpicked-categories[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.handpicked-categories[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.7;\r\n}\r\n.handpicked-categories[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, 50%);\r\n  color: #FFFFFF;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.shop-by-design[_ngcontent-%COMP%]{\r\n  margin-top: 150px;\r\n}\r\n.shop-by-design[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  margin-bottom: 24px;\r\n  color: #4E4E4E;\r\n}\r\n.shop-by-design[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\r\n  padding: 15px\r\n}\r\n.shop-by-design[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 26px;\r\n  font-weight: bold;\r\n}\r\n.shop-by-design[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 5px !important;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n.shop-by-design[_ngcontent-%COMP%]   h4.left[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  position: absolute;\r\n  top: 80%;\r\n  left: 10%;\r\n}\r\n.shop-by-design[_ngcontent-%COMP%]   h4.right[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  position: absolute;\r\n  top: 80%;\r\n  right: 10%;\r\n}\r\n\r\n.pack[_ngcontent-%COMP%]{\r\n  margin-top: 150px;\r\n}\r\n.pack[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\n  margin-top: 80px;\r\n}\r\n.pack[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 26px;\r\n  font-weight: bold;\r\n}\r\n.pack[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  margin-bottom: 24px;\r\n  color: #4E4E4E;\r\n}\r\n.pack[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  color: #000000;\r\n  line-height: 30px;\r\n}\r\n.pack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border: 2px solid #000000;\r\n  position: relative;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.pack[_ngcontent-%COMP%]   button.btn-1[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 50%;\r\n  transform: translate(-50%, 50%);\r\n  background-color: black;\r\n  color: #FFFFFF;\r\n  height: auto;\r\n  font-size: 14px;\r\n  padding: 10px 25px;\r\n  border: none;\r\n}\r\n.pack[_ngcontent-%COMP%]   button.btn-2[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 22%;\r\n  left: 50%;\r\n  transform: translate(-50%, -78%);\r\n  background-color: #FFFFFF;\r\n  color: #000000;\r\n  opacity: 1;\r\n  font-size: 12px;\r\n  padding: 10px 25px;\r\n  border: none;\r\n}\r\n.pack[_ngcontent-%COMP%]   .pack-title-1[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 15%;\r\n  left: 50%;\r\n  transform: translate(-50%, -85%);\r\n}\r\n.pack[_ngcontent-%COMP%]   .pack-title-2[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: #FFFFFF;\r\n  font-size: 26px;\r\n  font-weight: bold;\r\n}\r\n.bestproduct[_ngcontent-%COMP%]{\r\n  margin-top: 150px;\r\n}\r\n.bestproduct[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\n  margin-top: 0px;\r\n}\r\n.bestproduct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 26px;\r\n  font-weight: bold;\r\n}\r\n.bestproduct[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 2px;\r\n  max-width: 100%;\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n  border: none;\r\n}\r\n.bestproduct[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n.bestproduct[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background-color: white;\r\n}\r\n.bestproduct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: bolder;\r\n}\r\n.bestproduct[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  background-color: white;\r\n  color: #EB2C52;\r\n  align-items: center;\r\n  padding: 10px 12px;\r\n  border-color: #EB2C52;\r\n  border-radius: 0;\r\n  border: 2px solid #EB2C52;\r\n}\r\n.bestproduct[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #EB2C52;\r\n  color: white;\r\n  align-items: center;\r\n  padding: 10px 12px;\r\n  border-color: #EB2C52;\r\n  border-radius: 0;\r\n}\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{\r\n  font-family: 'proxima-nova';\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrREFBa0Q7QUFDbEQ7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFO0FBQ0Y7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQU1BLGtCQUFrQjtBQUNsQjtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFHQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFJQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztBQUNsQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsb0NBQW9DOztFQUVwQyxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0FBQ2I7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QixFQUFFLGVBQWU7QUFDMUM7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjs7QUFFbkI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUlBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0EsaUJBQWlCO0FBQ2pCO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtBQUNaO0FBQ0EsdUJBQXVCO0FBQ3ZCO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyx5QkFBeUI7RUFDekIsY0FBYztFQUNkLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9iemEzdmN2LmNzc1wiKTtcclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuLmNhcm91c2VsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICBib3R0b206IDQwcHggO1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXHJcbn1cclxuXHJcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtaXRlbSAuaGVhZGVyLWgxIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuaDIsIGg0LCBoMSwgaDUsIGg2e1xyXG4gIGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhJztcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qRXhwbG9yZSBQcm9kdWN0Ki9cclxuLmV4cGxvcmUtcHJvZHVjdHtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxufVxyXG4uZXhwbG9yZS1wcm9kdWN0IC5yb3d7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5leHBsb3JlLXByb2R1Y3QgaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuaHIubGluZXtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjRTkxMDNCO1xyXG4gIGNvbG9yOiAjRTkxMDNCO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuLmV4cGxvcmUtcHJvZHVjdCAucm93e1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcbn1cclxuLmV4cGxvcmUtcHJvZHVjdCBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiAxNDRweDtcclxuICBoZWlnaHQ6IDE0NHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uZXhwbG9yZS1wcm9kdWN0IHAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXN0eWxlOiAxNnB4IG1lZGl1bTtcclxuICBtYXJnaW4tdG9wOiAyN3B4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYycHgpe1xyXG4gIC5leHBsb3JlLXByb2R1Y3R7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICAuY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0gLmhlYWRlci1oMSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaXRlbSAuaGVhZGVyLWgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLmNhdGVnb3JpZXN7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcbiNjYXRlZ29yaWVzIGgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuI2NhdGVnb3JpZXMgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuI2NhdGVnb3JpZXMgaW1nOmhvdmVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcyBoMyB7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMgaDM6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLnNob3B7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcbiNzaG9wIC5yb3d7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcbiNzaG9wIGgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuI3Nob3AgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiNzaG9wIGg0e1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuLnNob3AgaDMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmJvdHRvbS1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMzVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmRyZWFte1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMjAwcHg7XHJcbn1cclxuXHJcbi5ib3R0b20tbGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBsZWZ0OiAzNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRvcC1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjBweDtcclxuICByaWdodDogMzVweDtcclxufVxyXG5cclxuLnRvcC1sZWZ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIGxlZnQ6IDM1cHg7XHJcbn1cclxuI3BhY2t7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcbiNwYWNrIC5yb3d7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG59XHJcbiNwYWNrIGgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuI3BhY2sgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jcGFjayAuY29udGFpbmVyIC50aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTUlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuI3BhY2sgLmNvbnRhaW5lciAuYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4uYmVzdHByb2R1Y3R7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcblxyXG4jYmVzdHByb2R1Y3QgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4jYmVzdHByb2R1Y3QgLmNhcmQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4jYmVzdHByb2R1Y3QgLmNhcmQtZm9vdGVyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuI2Jlc3Rwcm9kdWN0IGgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuI2Jlc3Rwcm9kdWN0IGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICNlYjJjNTI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWIyYzUyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbiNiZXN0cHJvZHVjdCBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjJjNTI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogI2ViMmM1MjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbiN0ZXN0ZXIgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYnRuLTEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDI1JTtcclxuICBsZWZ0OjQ1JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDo0MCU7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbn1cclxuLnRpdGxlLTEge1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMCU7XHJcbiAgbGVmdDogNDQlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OjgwMDtcclxufVxyXG5cclxuLmJ0bi0xOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmNhcm91c2VsLWluZGljYXRvcnN7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICBsZWZ0OiBpbmhlcml0O1xyXG59XHJcbi5yaWdodC5jYXJvdXNlbC1jb250cm9sLCAubGVmdC5jYXJvdXNlbC1jb250cm9sIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5yaWdodC5jYXJvdXNlbC1jb250cm9sLCAubGVmdC5jYXJvdXNlbC1jb250cm9sIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGZpbHRlcjphbHBoYShvcGFjaXR5PTApOyAvKiBJRSBzdXBwb3J0ICovXHJcbn1cclxuLmNhcm91c2VsLWluZGljYXRvcnMgPiBsaSB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5JTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG5cclxufVxyXG4uYnRuLTI6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG4udGl0bGUtMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDQ3JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLnRleHQtbXV0ZWR7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbXtcclxuICBoZWlnaHQ6IDQwJXB4O1xyXG59XHJcblxyXG5tYXQtZ3JpZC10aWxle1xyXG4gIC8qIGJvcmRlcjoycHggc29saWQ7ICovXHJcbiAgaGVpZ2h0OjM1MHB4O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYycHgpe1xyXG4gIC5oYW5kcGlja2VkLWNhdGVnb3JpZXN7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC5oYW5kcGlja2VkLWNhdGVnb3JpZXMucm93e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAuaGFuZHBpY2tlZC1jYXRlZ29yaWVzIC5oYW5kcGlja2VkLWltZyB7XHJcbiAgICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKkhhbmRwaWNrZWQgQ2F0ZWdvcmllcyovXHJcbi5oYW5kcGlja2VkLWNhdGVnb3JpZXN7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbn1cclxuLmhhbmRwaWNrZWQtY2F0ZWdvcmllcyBoMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaGFuZHBpY2tlZC1jYXRlZ29yaWVzIHB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgY29sb3I6ICM0RTRFNEU7XHJcbn1cclxuLmhhbmRwaWNrZWQtY2F0ZWdvcmllcyBpbWcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5oYW5kcGlja2VkLWNhdGVnb3JpZXMgaW1nOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmhhbmRwaWNrZWQtY2F0ZWdvcmllcyBoNHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4vKlNob3AtYnktRGVzaWduKi9cclxuLnNob3AtYnktZGVzaWdue1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG59XHJcbi5zaG9wLWJ5LWRlc2lnbiBwe1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIGNvbG9yOiAjNEU0RTRFO1xyXG59XHJcbi5zaG9wLWJ5LWRlc2lnbiAucm93IC5pdGVte1xyXG4gIHBhZGRpbmc6IDE1cHhcclxufVxyXG4uc2hvcC1ieS1kZXNpZ24gaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnNob3AtYnktZGVzaWduIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zaG9wLWJ5LWRlc2lnbiBoNC5sZWZ0e1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4MCU7XHJcbiAgbGVmdDogMTAlO1xyXG59XHJcbi5zaG9wLWJ5LWRlc2lnbiBoNC5yaWdodHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogODAlO1xyXG4gIHJpZ2h0OiAxMCU7XHJcbn1cclxuLypSZWNoYXJnZSBZb3VyIFNhdmluZyovXHJcbi5wYWNre1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG59XHJcbi5wYWNrIC5yb3d7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG4ucGFjayBoMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucGFjayBwe1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIGNvbG9yOiAjNEU0RTRFO1xyXG59XHJcbi5wYWNrIGg0e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG4ucGFjayBpbWcge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4ucGFjayBidXR0b24uYnRuLTF7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4ucGFjayBidXR0b24uYnRuLTJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjIlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNzglKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnBhY2sgLnBhY2stdGl0bGUtMXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNSU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC04NSUpO1xyXG59XHJcbi5wYWNrIC5wYWNrLXRpdGxlLTJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmJlc3Rwcm9kdWN0e1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG59XHJcbi5iZXN0cHJvZHVjdCAucm93e1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4uYmVzdHByb2R1Y3QgaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmJlc3Rwcm9kdWN0IGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uYmVzdHByb2R1Y3QgLmNhcmQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uYmVzdHByb2R1Y3QgLmNhcmQtZm9vdGVyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmJlc3Rwcm9kdWN0IGgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uYmVzdHByb2R1Y3QgYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjRUIyQzUyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogI0VCMkM1MjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNFQjJDNTI7XHJcbn1cclxuLmJlc3Rwcm9kdWN0IGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCMkM1MjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRUIyQzUyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNntcclxuICBmb250LWZhbWlseTogJ3Byb3hpbWEtbm92YSc7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return [{ type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "AJxa":
/*!**************************************************************!*\
  !*** ./src/app/ordersucesspage/ordersucesspage.component.ts ***!
  \**************************************************************/
/*! exports provided: OrdersucesspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersucesspageComponent", function() { return OrdersucesspageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products.service */ "jOXV");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication.service */ "18Le");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function OrdersucesspageComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Size: Large");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Qty: 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", p_r1.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs.", p_r1.price, "");
} }
class OrdersucesspageComponent {
    constructor(firestore, route, service, auth, router) {
        this.firestore = firestore;
        this.route = route;
        this.service = service;
        this.auth = auth;
        this.router = router;
        this.OID = "";
        this.UID = "";
        this.mm = "Prepaid";
        this.amounts = [];
        this.sub_total = 0;
        this.total = 0;
        this.deliver_fee = 100;
        this.discount = 0;
    }
    ngOnInit() {
        this.OID = this.route.snapshot.paramMap.get("oid") || "";
        this.firestore.collection('orders').doc(this.OID).ref.get().then(d => {
            this.order = d.data();
            this.products = [];
            this.order.order_items.forEach((e) => {
                this.getProduct(e);
            });
        });
    }
    getProduct(p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var d = yield this.firestore.collection('products').doc(p.sku.replace(p.name, '')).ref.get();
            var pr = Object.assign({ id: d.id }, d.data());
            this.products.push(pr);
            if (this.items.length == this.amounts.length && this.items.length != 0) {
                this.calculateT();
            }
        });
    }
    calculateT() {
        this.sub_total = this.order.sub_total;
        this.discount = this.order.total_discount;
        this.deliver_fee = this.order.shipping_charges;
        this.total = this.sub_total + this.deliver_fee - this.discount;
    }
}
OrdersucesspageComponent.ɵfac = function OrdersucesspageComponent_Factory(t) { return new (t || OrdersucesspageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
OrdersucesspageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrdersucesspageComponent, selectors: [["app-ordersucesspage"]], decls: 117, vars: 15, consts: [[1, "container-1", 2, "padding-top", "150px"], [1, "row"], [1, "col-lg-7", "col-sm-12"], [1, "col-1"], ["id", "material-1", 1, "material-icons"], [1, "col-11", 2, "padding-left", "32px"], [2, "color", "#18A221", "font-weight", "bolder", "margin-bottom", "0px"], [2, "font-weight", "lighter"], [1, "row", 2, "margin-top", "20px"], [1, "row", 2, "padding-bottom", "0px"], [1, "col-4", 2, "font-weight", "bold", "padding-bottom", "0px", "margin-bottom", "0px"], [1, "col-4", 2, "font-weight", "lighter", "padding-bottom", "0px", "margin-bottom", "0px"], [1, "row", 2, "margin-bottom", "15px"], [1, "col-4", 2, "font-weight", "bold"], [1, "col-4", 2, "font-weight", "lighter", "color", "blue"], [1, "col-lg-4", "col-md-4", "col-sm-4"], ["href", "#", 1, "btn", "btn-dark", 2, "border-radius", "0px", "background-color", "black"], [1, "col-lg--3", "col-md-3", "col-sm-3"], [1, "btn", 2, "border", "2px solid", "border-radius", "5px"], [1, "material-icons", 2, "height", "30%", "width", "30%"], ["id", "container-3", 1, "row"], [1, "col-lg-6", "col-sm-6", "col-md-6"], [2, "font-weight", "bold"], ["id", "address", 2, "padding-right", "15px", "padding-left", "15px"], ["id", "container-4", 1, "col-lg-5", "col-xl-5", "col-sm-5", "col-md-5", 2, "padding", "15px"], [2, "width", "40px", "height", "40px"], ["id", "container-5", 1, "col-lg-5", "col-xl-5", "col-sm-5", "col-md-5", 2, "padding", "15px"], [1, "col-lg-1"], [1, "col-lg-4", "col-sm-12"], [1, "new4"], ["class", "row mt-1", "style", "padding-top:5%;", 4, "ngFor", "ngForOf"], [1, "col-8"], [1, "col-2"], [1, "new1"], [1, "col-8", 2, "font-weight", "bolder"], [1, "row", "mt-1", 2, "padding-top", "5%"], [1, "col-3"], ["alt", "", 2, "width", "100px", "height", "100px", "object-fit", "cover", 3, "src"], [1, "col-9", 2, "padding-left", "32px"], [1, "col-8", 2, "font-weight", "bold", "margin-bottom", "0px"], [1, "col-2", 2, "font-weight", "bold", "margin-bottom", "0px"]], template: function OrdersucesspageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "We got it, Thanks you for your order!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "It's Ordered, Check your inbox Shortly for Confrimation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Estimated Date Of Delivery : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "May 12 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Order Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Continue Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " printer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Delivery Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Shipping Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "4-5 Bussiness Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Need Help?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Send Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Domestic contact: 90258 90258");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Exchange & Returns");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Order Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Faster checkout every time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "1. Create Account or Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "2. Save your info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "3. Subscribe to newsletter and sam discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "4. Checkout faster and enjoy special offer!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "hr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, OrdersucesspageComponent_div_88_Template, 14, 3, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "hr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "hr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "hr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "hr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.order.oid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.order.billing_customer_name, " ", ctx.order.billing_last_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate5"]("", ctx.order.billing_address, " ", ctx.order.billing_address_2, " ", ctx.order.billing_city, " ", ctx.order.billing_state, " ", ctx.order.billing_pincode, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.order.billing_email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.order.billing_phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs. ", ctx.order.sub_total, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs. ", ctx.order.total_discount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs. ", ctx.order.shipping_charges, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs. ", ctx.order.sub_total + ctx.order.shipping_charges - ctx.order.total_discount, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".container-1[_ngcontent-%COMP%]{\r\n    padding-top: 10%;\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n#material-1[_ngcontent-%COMP%]{\r\n    color: green;\r\n    font-size: 60px;\r\n}\r\n#container-3[_ngcontent-%COMP%]{\r\n   padding-top: 1%;\r\n   border:2px solid; \r\n}\r\n#address[_ngcontent-%COMP%]{\r\n    border:2px dashed rgba(0, 0, 0, 0.411); \r\n    padding-left: 5%;\r\n    padding-top: 5%;\r\n}\r\n#container-4[_ngcontent-%COMP%]{\r\n    border:2px solid;\r\n    \r\n}\r\n#container-5[_ngcontent-%COMP%]{\r\n    border:2px solid;\r\n   \r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    width:180px;\r\n    height:50px;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    width:100px;\r\n    height:auto;\r\n}\r\n.new4[_ngcontent-%COMP%] {\r\n    border: 1px solid;\r\n  }\r\nh2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{\r\n    font-family: 'proxima-nova';\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyc3VjZXNzcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBRUE7R0FDRyxlQUFlO0dBQ2YsZ0JBQWdCO0FBQ25CO0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFHQTtJQUNJLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsMkJBQTJCO0NBQzlCIiwiZmlsZSI6Im9yZGVyc3VjZXNzcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci0xe1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufVxyXG4jbWF0ZXJpYWwtMXtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxufVxyXG5cclxuI2NvbnRhaW5lci0ze1xyXG4gICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgIGJvcmRlcjoycHggc29saWQ7IFxyXG59XHJcblxyXG4jYWRkcmVzc3tcclxuICAgIGJvcmRlcjoycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC40MTEpOyBcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuXHJcblxyXG4jY29udGFpbmVyLTR7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkO1xyXG4gICAgXHJcbn1cclxuI2NvbnRhaW5lci01e1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZDtcclxuICAgXHJcbn1cclxuYnV0dG9ue1xyXG4gICAgd2lkdGg6MTgwcHg7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxufVxyXG4gXHJcbi5uZXc0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIH1cclxuXHJcbiAgaDIsIGg0LCBoMSwgaDUsIGg2LCBoM3tcclxuICAgIGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhJztcclxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrdersucesspageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-ordersucesspage',
                templateUrl: './ordersucesspage.component.html',
                styleUrls: ['./ordersucesspage.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "AZme":
/*!***************************************!*\
  !*** ./src/app/shiprocket.service.ts ***!
  \***************************************/
/*! exports provided: ShiprocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiprocketService", function() { return ShiprocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "18Le");







class ShiprocketService {
    constructor(firestore, auth, http) {
        this.firestore = firestore;
        this.auth = auth;
        this.http = http;
        this.URL = "https://apiv2.shiprocket.in/";
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //var header = new HttpHeaders()
            //header.append('Content-Type', 'application/json');
            this.http
                .post(`https://apiv2.shiprocket.in/v1/external/auth/login`, {
                email: "www.subash88@gmail.com",
                password: "Subash don1",
            })
                .subscribe((e) => {
                //window.alert(e.token)
                localStorage.setItem("TOKEN", e.token);
            });
        });
    }
    cancelOrder(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var t = this.getToken();
            //window.alert(t);
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Bearer ${t}`,
            });
            //header.append();
            this.http.post(`https://apiv2.shiprocket.in/v1/external/orders/cancel`, { 'ids': [order.oid] }, {
                headers: header,
            }).subscribe(e => {
                console.log("CANCEL ORDER ", e);
            });
        });
    }
    placeOrder(order, call) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var t = this.getToken();
            //window.alert(t);
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Bearer ${t}`,
            });
            //header.append();
            this.http.post(`https://apiv2.shiprocket.in/v1/external/orders/create/adhoc`, JSON.parse(JSON.stringify(order)), {
                headers: header,
            }).subscribe(e => {
                console.log("PLACE ORDER ", e);
                call(e);
            });
        });
    }
    trackOrder(oid, call) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var t = this.getToken();
            //window.alert(t);
            console.log(oid);
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Bearer ${t}`,
            });
            //header.append();
            this.http.get(`https://apiv2.shiprocket.in/v1/external/courier/track/shipment/${oid}`, {
                headers: header,
            }).subscribe(e => {
                console.log(e);
                call(e['tracking_data']['track_url']);
            });
        });
    }
    getToken() {
        return localStorage.getItem("TOKEN");
    }
}
ShiprocketService.ɵfac = function ShiprocketService_Factory(t) { return new (t || ShiprocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ShiprocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ShiprocketService, factory: ShiprocketService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShiprocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAk4UhK0L1ZYa_hAoYHnfRc_ZSCB8Qdc-g",
        authDomain: "zeroarmario.firebaseapp.com",
        projectId: "zeroarmario",
        storageBucket: "zeroarmario.appspot.com",
        messagingSenderId: "4761305316",
        appId: "1:4761305316:web:5406184500f785ef656cf1",
        measurementId: "G-65FPDLKWJ6"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F70D":
/*!*************************************!*\
  !*** ./src/app/rozorpay.service.ts ***!
  \*************************************/
/*! exports provided: RozorpayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RozorpayService", function() { return RozorpayService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _window_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window-ref.service */ "lFR4");





class RozorpayService {
    constructor(winRef, http) {
        this.winRef = winRef;
        this.http = http;
    }
    ngOnInit() { }
    createRzpayOrder(data, call) {
        console.log(data);
        //https://us-central1-zeroarmario.cloudfunctions.net/paymentApi/
        // call api to create order_id
        //this.payWithRazor(data);
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({});
        //header.append();
        this.http
            .post(`https://us-central1-zeroarmario.cloudfunctions.net/paymentApi`, {
            amount: Math.round((data.sub_total + data.shipping_charges - data.total_discount) * 100),
            oid: data.order_id,
        })
            .subscribe((e) => {
            console.log("Payment ", e);
            const options = {
                key: "rzp_test_lwjCmkonOQAC4Q",
                amount: e.amount,
                currency: "INR",
                name: "",
                description: "",
                image: "../../assets/images/png/zeroarmario.png",
                order_id: e.id,
                modal: {
                    escape: false,
                },
                notes: {},
                theme: {
                    color: "#0c238a",
                },
            };
            options.handler = (response, error) => {
                options.response = response;
                console.log(response);
                console.log(options);
                this.http.post(`https://us-central1-zeroarmario.cloudfunctions.net/paymentApi/confirmPayment`, response).subscribe((e) => {
                    if (e.status == "PAYMENT SUCCESSFULL") {
                        data.razorpay_order_id = response.razorpay_order_id;
                        data.razorpay_payment_id = response.razorpay_payment_id;
                        call(data);
                    }
                });
            };
            options.modal.ondismiss = () => {
                console.log("Transaction cancelled.");
            };
            const rzp = new this.winRef.nativeWindow.Razorpay(options);
            rzp.open();
        });
    }
    payWithRazor(order, e) { }
}
RozorpayService.ɵfac = function RozorpayService_Factory(t) { return new (t || RozorpayService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_window_ref_service__WEBPACK_IMPORTED_MODULE_2__["WindowRefService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RozorpayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RozorpayService, factory: RozorpayService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RozorpayService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _window_ref_service__WEBPACK_IMPORTED_MODULE_2__["WindowRefService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "I0nD":
/*!************************************************!*\
  !*** ./src/app/salestag/salestag.component.ts ***!
  \************************************************/
/*! exports provided: SalestagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalestagComponent", function() { return SalestagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SalestagComponent {
    constructor() { }
    ngOnInit() {
    }
}
SalestagComponent.ɵfac = function SalestagComponent_Factory(t) { return new (t || SalestagComponent)(); };
SalestagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SalestagComponent, selectors: [["app-salestag"]], decls: 0, vars: 0, template: function SalestagComponent_Template(rf, ctx) { }, styles: [".navbar-color[_ngcontent-%COMP%] {\r\n    background: #FFFFFF 0% 0% no-repeat padding-box;\r\n    box-shadow: 0px 3px 6px #00000029;\r\n    \r\n    color: black;\r\n  }\r\n  \r\n  .nav-items-color[_ngcontent-%COMP%] {\r\n    color: black;\r\n  }\r\n  \r\n  .custom-drop-down[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .navbar-toggler-icon[_ngcontent-%COMP%] {\r\n    border: none;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%] {\r\n    border: none;\r\n  }\r\n  \r\n  @media all and (min-width: 992px) {\r\n    .navbar[_ngcontent-%COMP%] {\r\n      padding-top: 1%;\r\n      padding-bottom: 0;\r\n    }\r\n  \r\n    .navbar[_ngcontent-%COMP%]   .has-megamenu[_ngcontent-%COMP%] {\r\n      position: static !important;\r\n    }\r\n  \r\n    .navbar[_ngcontent-%COMP%]   .megamenu[_ngcontent-%COMP%] {\r\n      left: -5%;\r\n      right: 0;\r\n      top: 95%;\r\n      width: 110%;\r\n      padding-top: 20px;\r\n      padding-bottom: 20px;\r\n      padding-left: 10%;\r\n      padding-right: 10%;\r\n    }\r\n  \r\n    .navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n      padding-top: 1rem;\r\n      padding-bottom: 1rem;\r\n    }\r\n  }\r\n  \r\n  .nn[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    margin-right: 15px;\r\n    margin-left: 15px;\r\n  }\r\n  \r\n  .s-left[_ngcontent-%COMP%] {\r\n    width: 10px;\r\n  }\r\n  \r\n  @media (max-width: 768px) {\r\n    .s-left[_ngcontent-%COMP%] {\r\n  \r\n      float: center;\r\n      margin-right: 15px;\r\n      margin-left: 15px;\r\n    }\r\n  }\r\n  \r\n  .badge-danger[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    padding-left: 6 px;\r\n    padding-right: 6px;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .saletag[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    text-align: center;\r\n    align-content: center;\r\n    align-items: center;\r\n    background-color: black;\r\n  }\r\n  \r\n  .container-1[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    height: 20px;\r\n    width:100%;\r\n  }\r\n  \r\n  #search[_ngcontent-%COMP%]{\r\n  height: 300px;\r\n  align-items: center;\r\n  padding-top: 10%;\r\n  padding-left: 35%;\r\n  }\r\n  \r\n  #search-1[_ngcontent-%COMP%]{\r\n    width: 65%;\r\n    font-size: 18px;\r\n    padding-left: 0px;\r\n    background-color: transparent;\r\n      color: black;\r\n      outline: none;\r\n      outline-style: none;\r\n      border-top: none;\r\n      border-left: none;\r\n      border-right: none;\r\n      border-bottom: solid #00000093 2px;\r\n      border-radius: 0px;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzdGFnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksK0NBQStDO0lBQy9DLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0U7TUFDRSxlQUFlO01BQ2YsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsMkJBQTJCO0lBQzdCOztJQUVBO01BQ0UsU0FBUztNQUNULFFBQVE7TUFDUixRQUFRO01BQ1IsV0FBVztNQUNYLGlCQUFpQjtNQUNqQixvQkFBb0I7TUFDcEIsaUJBQWlCO01BQ2pCLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixvQkFBb0I7SUFDdEI7RUFDRjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBR0E7SUFDRTs7TUFFRSxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLGlCQUFpQjtJQUNuQjtFQUNGOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFVBQVU7RUFDWjs7RUFFQTtFQUNBLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQjs7RUFDQTtJQUNFLFVBQVU7SUFDVixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDZCQUE2QjtNQUMzQixZQUFZO01BQ1osYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixrQ0FBa0M7TUFDbEMsa0JBQWtCOztFQUV0QiIsImZpbGUiOiJzYWxlc3RhZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXZiYXItY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICAvKiBvcGFjaXR5OiAwLjk1OyAqL1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAubmF2LWl0ZW1zLWNvbG9yIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1kcm9wLWRvd24gcCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxJTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2YmFyIC5oYXMtbWVnYW1lbnUge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2YmFyIC5tZWdhbWVudSB7XHJcbiAgICAgIGxlZnQ6IC01JTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogOTUlO1xyXG4gICAgICB3aWR0aDogMTEwJTtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhciAubmF2LWxpbmsge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ubiAubmF2LWxpbmsge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zLWxlZnQge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnMtbGVmdCB7XHJcbiAgXHJcbiAgICAgIGZsb2F0OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWRnZS1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYgcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zYWxldGFne1xyXG4gICAgLyogaGVpZ2h0OiAxMHB4OyAqL1xyXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lci0xe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuICBcclxuICAjc2VhcmNoe1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIHBhZGRpbmctbGVmdDogMzUlO1xyXG4gIH1cclxuICAjc2VhcmNoLTF7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG4gICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAjMDAwMDAwOTMgMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalestagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-salestag',
                templateUrl: './salestag.component.html',
                styleUrls: ['./salestag.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IiZn":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "18Le");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "55oq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkout_item_checkout_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../checkout-item/checkout-item.component */ "ue+7");









function CheckoutComponent_app_checkout_item_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-checkout-item", 31);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", item_r2);
} }
// import Timestamp = firebase.firestore.Timestamp;
class CheckoutComponent {
    constructor(firestore, auth) {
        this.firestore = firestore;
        this.auth = auth;
        this.UID = "";
        this.amounts = [];
        this.sub_total = 0;
        this.total = 0;
        this.deliver_fee = 100;
        this.discount = 0;
        this.expired = false;
        this.invalid = false;
    }
    ngOnInit() {
        this.firestore.collection('users').ref.limit(1).get().then(e => {
            this.auth.getUID().then((uu) => {
                this.UID = uu;
                this.firestore
                    .collection("users")
                    .doc(uu)
                    .collection("cart")
                    .snapshotChanges()
                    .subscribe((data) => {
                    this.items = data.map((eb) => {
                        return Object.assign({ id: eb.payload.doc.id }, (eb.payload.doc.data()));
                    });
                    this.amounts = [];
                    this.items.forEach((p) => {
                        this.getProduct(p);
                    });
                });
            });
        });
    }
    getProduct(p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var d = yield this.firestore.collection('products').doc(p.pid).ref.get();
            var pr = d.data();
            if (p.size) {
                this.amounts.push(pr.size[p.size]);
            }
            else {
                this.amounts.push(pr.price);
            }
            if (this.items.length == this.amounts.length && this.items.length != 0) {
                if (this.items[0].coupon) {
                    var cc = yield this.firestore.collection('coupon').doc(this.items[0].coupon).ref.get();
                    this.coupon = Object.assign({ id: cc.id }, cc.data());
                    this.invalid = false;
                    var o = this.coupon.expire.toDate();
                    //console.log( typeof(o), o , o.getTime(), Date.now())
                    if (o.getTime() < Date.now()) {
                        //window.alert('EXPIRED')
                        this.expired = true;
                        this.coupon = null;
                    }
                    else {
                        this.expired = false;
                    }
                }
                this.calculateT();
            }
        });
    }
    calculateT() {
        this.sub_total = 0;
        this.amounts.forEach((e) => {
            this.sub_total = this.sub_total + e;
        });
        if (this.coupon) {
            this.discount = this.sub_total * (this.coupon.offer / 100);
        }
        else {
            this.discount = 0;
        }
        this.total = this.sub_total + this.deliver_fee - this.discount;
    }
    couponie(c) {
        this.coupon = null;
        this.firestore.collection('coupon').ref.where('code', '==', c.toUpperCase()).limit(1).get().then((d) => {
            if (d.docs.length == 1) {
                this.coupon = Object.assign({ id: d.docs[0].id }, d.docs[0].data());
                this.invalid = false;
                var o = this.coupon.expire.toDate();
                //console.log( typeof(o), o , o.getTime(), Date.now())
                if (o.getTime() < Date.now()) {
                    //window.alert('EXPIRED')
                    this.expired = true;
                    this.coupon = null;
                }
                else {
                    this.expired = false;
                }
            }
            else {
                this.invalid = true;
            }
            this.calculateT();
            this.items.forEach((e) => {
                //window.alert(this.coupon.id + "UIDD"+ this.UID + "CART" + e.id);
                this.firestore.collection('users').doc(this.UID).collection('cart').doc(e.id).ref.update({ 'coupon': this.coupon.id });
            });
        });
    }
    deploy() {
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 89, vars: 25, consts: [[1, "container", 2, "padding-top", "110px"], [2, "padding-left", "15px"], ["category", "Shopping Bag"], [1, "col-lg-9"], [1, "cart"], [1, "t-1"], [1, "container"], [1, "row"], [3, "data", 4, "ngFor", "ngForOf"], [1, "col-lg-3"], [1, "bar", 2, "border-left", "solid 1px #00000029", "margin-right", "20px", "padding-left", "30px"], [2, "font-weight", "bold", "font-family", "proxima-nova"], [1, "text-muted", "float-left"], [1, "float-left"], [1, "btn", "btn-block", "button", "text-center", 3, "click"], ["routerLink", "/address", 1, "navi", "rou", 2, "color", "white", "background-color", "green", "text-decoration", "none"], [1, "bar", 2, "padding", "20px"], [1, "checkout-content"], [1, "bx", "bxs-lock-alt", "float-left", 2, "margin-top", "2px"], [1, "bx", "bx-check-shield", "float-left", 2, "margin-top", "3px"], [1, "text-muted", "float-right"], [1, "bottom-btn"], [1, "col-lg-2"], ["routerLink", "/wishlist", 1, "btn", "btn-block", "button1", 2, "border", "2px solid"], ["routerLink", "..", 1, "btn", "btn-block", "button2"], [1, "col-lg-4"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Enter coupon / Promo code", "aria-label", "Enter coupon / Promo code", "aria-describedby", "basic-addon2", 1, "form-control", 2, "text-transform", "uppercase", "border", "2px solid"], ["cop", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "button2", 3, "click"], [3, "data"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Products in Bag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CheckoutComponent_app_checkout_item_12_Template, 1, 1, "app-checkout-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Order summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CheckoutComponent_Template_button_click_35_listener() { return ctx.deploy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Checkout to payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Consumes data protection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Secure payment with SSL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "delivery information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Delivery Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "small", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "3 to 8 working days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Delivery by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "small", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Shippocket");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Bag of Wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Continue Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CheckoutComponent_Template_button_click_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](77); return ctx.couponie(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u00A0\u00A0 Apply \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "br");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Subtotal: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 13, ctx.sub_total, "INR"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Shipping: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 16, ctx.deliver_fee, "INR"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Discount: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](28, 19, ctx.discount, "INR"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](32, 22, ctx.total, "INR"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("font-size: 13px; font-family: 'proxima-nova'; color: gray; display: ", ctx.expired || ctx.invalid ? "block" : "none", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.expired ? "Code Expired" : ctx.invalid && _r1.value ? "Invalid Code" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("font-size: 13px; font-family: 'proxima-nova'; color: green; display: ", ctx.coupon ? "block" : "none", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Code Applied with ", ctx.coupon == null ? null : ctx.coupon.offer, "% Discount");
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _checkout_item_checkout_item_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: ["h6[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n  }\r\n  .toplink[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  .toplink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  img[_ngcontent-%COMP%] {\r\n  border-radius: 2px;\r\n  max-width: 100%;\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n  border: none;\r\n  }\r\n  a[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  a[_ngcontent-%COMP%]:hover{\r\n    text-decoration: underline;\r\n    background-color: white;\r\n    color: black;\r\n    opacity: 0.7;\r\n  }\r\n  p[_ngcontent-%COMP%]{\r\n    color: green;\r\n  }\r\n  .button[_ngcontent-%COMP%]{\r\n    background-color: green;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-radius: 0;\r\n    border: none;\r\n  }\r\n  .button[_ngcontent-%COMP%]:hover{\r\n    background-color: green;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    opacity: 0.7;\r\n    border: none;\r\n  \r\n  }\r\n  .bottom-btn[_ngcontent-%COMP%]   .button1[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n  \r\n  }\r\n  .bottom-btn[_ngcontent-%COMP%]   .button1[_ngcontent-%COMP%]:hover{\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n  }\r\n  .bottom-btn[_ngcontent-%COMP%]   .button2[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n  \r\n  }\r\n  .bottom-btn[_ngcontent-%COMP%]   .button2[_ngcontent-%COMP%]:hover{\r\n    background-color: white;\r\n    color: black;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n  \r\n  }\r\n  input[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    height: auto;\r\n  \r\n  }\r\n  .checkout-content[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n  h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{\r\n    font-family: 'proxima-nova';\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtFQUNkO0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHFCQUFxQjtFQUN2QjtFQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1o7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7RUFFQTtJQUNFLFlBQVk7RUFDZDtFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZOztFQUVkO0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjs7RUFFbEI7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCO0VBR0E7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjs7RUFFbEI7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCOztFQUVsQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTs7RUFFZDtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBRUE7SUFDRSwyQkFBMkI7Q0FDOUIiLCJmaWxlIjoiY2hlY2tvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg2e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAudG9wbGluayAuYnJlYWRjcnVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLnRvcGxpbmsgYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcbiAgXHJcbiAgcHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmJvdHRvbS1idG4gLmJ1dHRvbjF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmJvdHRvbS1idG4gLmJ1dHRvbjE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmJvdHRvbS1idG4gLmJ1dHRvbjJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmJvdHRvbS1idG4gLmJ1dHRvbjI6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICBcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICBcclxuICB9XHJcbiAgLmNoZWNrb3V0LWNvbnRlbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGgyLCBoNCwgaDEsIGg1LCBoNntcclxuICAgIGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhJztcclxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-checkout',
                templateUrl: './checkout.component.html',
                styleUrls: ['./checkout.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "NRAf":
/*!************************************************************!*\
  !*** ./src/app/e-edit-address/e-edit-address.component.ts ***!
  \************************************************************/
/*! exports provided: EEditAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EEditAddressComponent", function() { return EEditAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class EEditAddressComponent {
    constructor() { }
    ngOnInit() {
    }
}
EEditAddressComponent.ɵfac = function EEditAddressComponent_Factory(t) { return new (t || EEditAddressComponent)(); };
EEditAddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EEditAddressComponent, selectors: [["app-e-edit-address"]], decls: 37, vars: 0, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("//use.fontawesome.com/releases/v5.0.7/css/all.css")], [1, "edit-address"], [1, "address-left"], [2, "font-size", "24px"], [1, "order"], [1, "logout"], [1, "vl"], [1, "address-right"], ["name", "addressform"], ["type", "text", "name", "adress1", "placeholder", "Address line 1", 1, "inputbox"], ["type", "text", "name", "adress1", "placeholder", "Address line 2", 1, "inputbox"], ["type", "text", "name", "adress1", "placeholder", "City*", 1, "inputbox"], ["type", "text", "name", "adress1", "placeholder", "State*", 1, "inputbox"], ["type", "text", "name", "adress1", "placeholder", "Postal code*", 1, "inputbox-postal"], [1, "icon-p"], [1, "bx", "bx-home"], [1, "bx", "bx-briefcase"], ["type", "submit", "onclick", "validateForm()"]], template: function EEditAddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "MY ACCOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Account information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Shipping address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Would you like to Label your address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Save address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".edit-address[_ngcontent-%COMP%]{\r\n    margin-left: 12%;\r\n    margin-top: 10%;\r\n    height: 500px;\r\n    width: 70%;\r\n    \r\n}\r\n.address-left[_ngcontent-%COMP%]{\r\n    width: 33%;\r\n    display: block;\r\n    float: left;\r\n    font-family: 'proxima-nova';\r\n}\r\n.address-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: 'proxima-nova';\r\n    font-weight: bold;\r\n    font-size: 35px;\r\n    padding: 25px 0 20px 0;\r\n}\r\n.address-left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n font-weight: bold;\r\n padding-bottom:15px ;\r\n}\r\n.address-left[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]{\r\n    display: block;\r\n    padding-top: 0px;\r\n    padding-bottom: 15px;\r\n    color: #000;\r\n}\r\n.address-left[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]{\r\n    color: #000;\r\n    border-bottom: 1px solid #000;\r\n    font-weight: bold;\r\n}\r\n.address-right[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n    display: block;\r\n    padding-left: 8%;\r\n    float: left;\r\n}\r\n.address-right[_ngcontent-%COMP%]   .inputbox[_ngcontent-%COMP%]{\r\noutline:none;\r\nborder: 1px solid #000;\r\npadding: 7px 7px 7px 10px;\r\nwidth: 70%;\r\nmargin-bottom: 20px;\r\nfont-size: 15px;\r\ncolor:#000;\r\n}\r\n.address-right[_ngcontent-%COMP%]   .inputbox-postal[_ngcontent-%COMP%]{\r\n    outline:none;\r\n    border: 1px solid #000;\r\n    padding: 7px 7px 7px 10px;\r\n    width: 40%;\r\n    margin-bottom: 20px;\r\n    font-size: 15px;\r\n    color:#000;\r\n    }\r\n.address-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-weight: bold;\r\n        padding-bottom: 20px;\r\n    }\r\n.address-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n        outline:none;\r\n        padding: 9px 7px 9px 10px;\r\n        width: 40%;\r\n        margin-bottom: 20px;\r\n        font-size: 15px;\r\n        color:#f3f3f3;\r\n        border: none;\r\n        background-color: #000;\r\n        }\r\n.vl[_ngcontent-%COMP%]{\r\n    float: left;\r\n    width: 1px;\r\n    height: 300px;\r\n    background-color:#f3f3f3;\r\n}\r\n.icon-p[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    display: inline-block;\r\n    margin-right: 25px;\r\n}\r\ni[_ngcontent-%COMP%]{\r\n    color:#000;border:3px solid #000;border-radius: 4px;margin-right: 5px;\r\n}\r\n@media(max-width: 768px){\r\n    .address-left[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        margin-bottom: 30px;\r\n    }\r\n    .address-right[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        margin-bottom: 50px;\r\n        padding-bottom: 150px;\r\n    }\r\n    .vl[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .address-right[_ngcontent-%COMP%]   .inputbox[_ngcontent-%COMP%]{\r\n     width: 90%;\r\n    }\r\n    .address-right[_ngcontent-%COMP%]   .inputbox-postal[_ngcontent-%COMP%]{\r\n     width: 80%;\r\n    }\r\n    .address-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n    }  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZWRpdC1hZGRyZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixVQUFVOztBQUVkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLG9CQUFvQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7QUFDQSxZQUFZO0FBQ1osc0JBQXNCO0FBQ3RCLHlCQUF5QjtBQUN6QixVQUFVO0FBQ1YsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZixVQUFVO0FBQ1Y7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFVBQVU7SUFDVjtBQUVKO1FBQ1EsaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4QjtBQUNKO1FBQ1EsWUFBWTtRQUNaLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixhQUFhO1FBQ2IsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QjtBQUNSO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLGlCQUFpQjtBQUN6RTtBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO0tBQ0MsVUFBVTtJQUNYO0lBQ0E7S0FDQyxVQUFVO0lBQ1g7SUFDQTtJQUNBLFVBQVU7SUFDVjtBQUNKIiwiZmlsZSI6ImUtZWRpdC1hZGRyZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1hZGRyZXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyJTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgXHJcbn1cclxuLmFkZHJlc3MtbGVmdHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdwcm94aW1hLW5vdmEnO1xyXG59XHJcbi5hZGRyZXNzLWxlZnQgaDF7XHJcbiAgICBmb250LWZhbWlseTogJ3Byb3hpbWEtbm92YSc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHBhZGRpbmc6IDI1cHggMCAyMHB4IDA7XHJcbn1cclxuLmFkZHJlc3MtbGVmdCBsaXtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gcGFkZGluZy1ib3R0b206MTVweCA7XHJcbn1cclxuLmFkZHJlc3MtbGVmdCAub3JkZXJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5hZGRyZXNzLWxlZnQgLmxvZ291dHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYWRkcmVzcy1yaWdodHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uYWRkcmVzcy1yaWdodCAuaW5wdXRib3h7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxucGFkZGluZzogN3B4IDdweCA3cHggMTBweDtcclxud2lkdGg6IDcwJTtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxuZm9udC1zaXplOiAxNXB4O1xyXG5jb2xvcjojMDAwO1xyXG59XHJcbi5hZGRyZXNzLXJpZ2h0IC5pbnB1dGJveC1wb3N0YWx7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgcGFkZGluZzogN3B4IDdweCA3cHggMTBweDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IzAwMDtcclxuICAgIH1cclxuXHJcbi5hZGRyZXNzLXJpZ2h0IHB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbi5hZGRyZXNzLXJpZ2h0IGJ1dHRvbntcclxuICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogOXB4IDdweCA5cHggMTBweDtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiNmM2YzZjM7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4udmx7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjNmM2YzO1xyXG59XHJcbi5pY29uLXB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn1cclxuaXtcclxuICAgIGNvbG9yOiMwMDA7Ym9yZGVyOjNweCBzb2xpZCAjMDAwO2JvcmRlci1yYWRpdXM6IDRweDttYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLmFkZHJlc3MtbGVmdHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmFkZHJlc3MtcmlnaHR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAudmx7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5hZGRyZXNzLXJpZ2h0IC5pbnB1dGJveHtcclxuICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmFkZHJlc3MtcmlnaHQgLmlucHV0Ym94LXBvc3RhbHtcclxuICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLmFkZHJlc3MtcmlnaHQgYnV0dG9ue1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIH0gIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EEditAddressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-e-edit-address',
                templateUrl: './e-edit-address.component.html',
                styleUrls: ['./e-edit-address.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SBxm":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication.service */ "18Le");



class SignupComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 25, vars: 0, consts: [[1, "log", 2, "padding-top", "130px"], [1, "input-cont"], ["stlye", "text-align-left prox", 2, "font-family", "proxima-nova"], [1, "authBlock"], [1, "input-cont", "formGroup"], ["type", "text", "required", "", "placeholder", "First Name", 1, "formControl", 2, "font-size", "16px"], ["firstName", ""], [1, "border1"], ["id", "lastName", "type", "text", "required", "", "placeholder", "Last Name", 1, "formControl", 2, "font-size", "16px"], ["lastName", ""], ["type", "text", "required", "", "placeholder", "Email address", 1, "formControl", 2, "font-size", "16px"], ["email", ""], ["type", "password", "required", "", "placeholder", "Password", 1, "formControl", 2, "font-size", "16px"], ["password", ""], [1, "border2"], [2, "height", "32px"], ["type", "button", 1, "button", "btn-lg", "btn-block", 2, "font-family", "proxima-nova", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.authenticationService.SignUp(_r2.value, _r3.value, _r0.value + " " + _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Create a new account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.prox[_ngcontent-%COMP%]{\r\n  font-family: 'proxima-nova';\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  background-color: #EEE;\r\n}\r\n\r\n.clear[_ngcontent-%COMP%] {\r\n  clear: both;\r\n}\r\n\r\n.log[_ngcontent-%COMP%] {\r\n  width: 420px;\r\n  margin: 5% auto;\r\n  background-color: #FFF;\r\n\r\n}\r\n\r\n.log[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  color: black;\r\n  font-weight: bold;\r\n  font-size: 26px;\r\n  margin-bottom: 50px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  \r\n  margin: 0 20px 20px;\r\n}\r\n\r\n.log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]:last-of-type {\r\n  margin-bottom: 30px;\r\n\r\n  \r\n}\r\n\r\n.log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 40px;\r\n  outline: none;\r\n  color: #212121;\r\n  font-size: 22px;\r\n  font-weight: 400;\r\n  background: none;\r\n  border: none;\r\n  \r\n}\r\n\r\n.log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n.log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  color: #948c8c;\r\n  top: 0;\r\n  left: 0;\r\n  line-height: 40px;\r\n  transition: .3s;\r\n}\r\n\r\n.log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] {\r\n  margin-top: -20px;\r\n  transform: scale(.8);\r\n  color: #bdbdbd;\r\n}\r\n\r\n.log[_ngcontent-%COMP%]   .border1[_ngcontent-%COMP%], .log[_ngcontent-%COMP%]   .border2[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 2px;\r\n  background-color: black;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n.log[_ngcontent-%COMP%]   .border1[_ngcontent-%COMP%]::after, .log[_ngcontent-%COMP%]   .border1[_ngcontent-%COMP%]::before, .log[_ngcontent-%COMP%]   .border2[_ngcontent-%COMP%]::after, .log[_ngcontent-%COMP%]   .border2[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 0;\r\n  height: 2px;\r\n  transition: .5s;\r\n}\r\n\r\n.log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ .border1[_ngcontent-%COMP%]::after, .log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ .border1[_ngcontent-%COMP%]::before, .log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ .border2[_ngcontent-%COMP%]::after, .log[_ngcontent-%COMP%]   .input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ .border2[_ngcontent-%COMP%]::before {\r\n  width: 50%;\r\n}\r\n\r\n.log[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%], .log[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: calc(50% - 50px);\r\n  display: block;\r\n  font-size: 12px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.log[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\r\n  margin-left: 50px;\r\n}\r\n\r\n.log[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0 auto 20px;\r\n  border: 2px solid transparent;\r\n  padding: 5px 20px;\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n  color: #ed2553;\r\n  transition: .5s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  \r\n  border: none;\r\n  color: white;\r\n  padding: 15px 20px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  border-radius: 0%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: black;\r\n  \r\n  border: none;\r\n  color: white;\r\n  padding: 15px 20px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  opacity: 0.9;\r\n}\r\n\r\n.floating[_ngcontent-%COMP%] {\r\n  margin-bottom: 2rem;\r\n  \r\n  transition: background-color 0.2s ease;\r\n}\r\n\r\n.floating[_ngcontent-%COMP%]:hover, .floating[_ngcontent-%COMP%]:focus-within {\r\n  \r\n}\r\n\r\n.floating__input[_ngcontent-%COMP%] {\r\n  \r\n  font-size: 1rem;\r\n  border: none;\r\n  background: none;\r\n  \r\n  \r\n}\r\n\r\n.floating__input[_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.floating__input[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.floating__input[_ngcontent-%COMP%]::placeholder {\r\n  color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.floating__label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: relative;\r\n  max-height: 0;\r\n  font-weight: 500;\r\n  pointer-events: none;\r\n}\r\n\r\n.floating__label[_ngcontent-%COMP%]::before {\r\n  color: var(--label__color);\r\n  content: attr(data-content);\r\n  display: inline-block;\r\n  filter: blur(0);\r\n  border: none;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  transform-origin: left top;\r\n  transition: transform 0.2s ease;\r\n  left: 1rem;\r\n  position: relative;\r\n}\r\n\r\n.floating__label[_ngcontent-%COMP%]::after {\r\n  bottom: 1rem;\r\n  content: \"\";\r\n  height: 0.1rem;\r\n  border: none;\r\n  position: absolute;\r\n  \r\n  opacity: 0;\r\n  left: 0;\r\n  top: 100%;\r\n  margin-top: -0.1rem;\r\n  transform: scale3d(0, 1, 1);\r\n  width: 100%;\r\n}\r\n\r\n.floating__input[_ngcontent-%COMP%]:focus    + .floating__label[_ngcontent-%COMP%]::after {\r\n  transform: scale3d(1, 1, 1);\r\n  border: none;\r\n  opacity: 1;\r\n}\r\n\r\n.floating__input[_ngcontent-%COMP%]:-moz-placeholder-shown    + .floating__label[_ngcontent-%COMP%]::before {\r\n  transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);\r\n  border: none;\r\n}\r\n\r\n.floating__input[_ngcontent-%COMP%]:-ms-input-placeholder    + .floating__label[_ngcontent-%COMP%]::before {\r\n  transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);\r\n  border: none;\r\n}\r\n\r\n.floating__input[_ngcontent-%COMP%]:placeholder-shown    + .floating__label[_ngcontent-%COMP%]::before {\r\n  transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);\r\n  border: none;\r\n}\r\n\r\n.floating__label[_ngcontent-%COMP%]::before, .floating__input[_ngcontent-%COMP%]:focus    + .floating__label[_ngcontent-%COMP%]::before {\r\n  border: none;\r\n  transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);\r\n}\r\n\r\n.floating__input[_ngcontent-%COMP%]:focus    + .floating__label[_ngcontent-%COMP%]::before {\r\n  color: var(--color__accent);\r\n  border: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 1rem 3rem;\r\n  max-width: 40rem;\r\n  margin: 0 auto;\r\n  font-family: var(--font__family);\r\n  font-size: var(--font__size);\r\n  font-weight: 400;\r\n  min-height: 100vh;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\nfieldset[_ngcontent-%COMP%] {\r\n  border: none;\r\n  padding: 3rem 2rem 1.5rem;\r\n}\r\n\r\nlegend[_ngcontent-%COMP%] {\r\n  padding: 0 0.5rem;\r\n}\r\n\r\n\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  background: #904e95;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n.hidden--visually[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  clip: rect(1px 1px 1px 1px);\r\n  clip: rect(1px, 1px, 1px, 1px);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixzQkFBc0I7O0FBRXhCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7O0VBRWxCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjs7O0FBR3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsTUFBTTtFQUNOLE9BQU87RUFDUCxpQkFBaUI7RUFJakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUlqQixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFJWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFJZCxlQUFlO0FBQ2pCOztBQUdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxtQkFBbUI7O0VBRW5CLHNDQUFzQztBQUN4Qzs7QUFFQTs7O0FBR0E7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7O0VBRWhCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFGQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFGQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtFQUNaLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQjs2RUFDMkU7RUFDM0UsVUFBVTtFQUNWLE9BQU87RUFDUCxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNEQUFzRDtFQUN0RCxZQUFZO0FBQ2Q7O0FBSEE7RUFDRSxzREFBc0Q7RUFDdEQsWUFBWTtBQUNkOztBQUhBO0VBQ0Usc0RBQXNEO0VBQ3RELFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osNkRBQTZEO0FBQy9EOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQSxtREFBbUQ7O0FBQ25ELG1EQUFtRDs7QUFDbkQsbURBQW1EOztBQUVuRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSx3RkFBd0Y7O0FBQ3hGO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1oiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ucHJveHtcclxuICBmb250LWZhbWlseTogJ3Byb3hpbWEtbm92YSc7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbn1cclxuXHJcbi5jbGVhciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5sb2cge1xyXG4gIHdpZHRoOiA0MjBweDtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuXHJcbn1cclxuXHJcbi5sb2cgaDIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5sb2cgLmlucHV0LWNvbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICBtYXJnaW46IDAgMjBweCAyMHB4O1xyXG59XHJcblxyXG4ubG9nIC5pbnB1dC1jb250Omxhc3Qtb2YtdHlwZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgXHJcbn1cclxuXHJcbi5sb2cgLmlucHV0LWNvbnQgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIFxyXG59XHJcblxyXG4ubG9nIC5pbnB1dC1jb250IGlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubG9nIC5pbnB1dC1jb250IGxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6ICM5NDhjOGM7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAuM3M7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjNzO1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuLmxvZyAuaW5wdXQtY29udCBpbnB1dDpmb2N1cytsYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC44KTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoLjgpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoLjgpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xyXG4gIGNvbG9yOiAjYmRiZGJkO1xyXG59XHJcblxyXG4ubG9nIC5ib3JkZXIxLCAubG9nIC5ib3JkZXIyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2cgLmJvcmRlcjE6OmFmdGVyLCAubG9nIC5ib3JkZXIxOjpiZWZvcmUsIC5sb2cgLmJvcmRlcjI6OmFmdGVyLCAubG9nIC5ib3JkZXIyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC41cztcclxuICAtbW96LXRyYW5zaXRpb246IC41cztcclxuICAtby10cmFuc2l0aW9uOiAuNXM7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG4ubG9nIC5pbnB1dC1jb250IGlucHV0OmZvY3Vzfi5ib3JkZXIxOjphZnRlciwgLmxvZyAuaW5wdXQtY29udCBpbnB1dDpmb2N1c34uYm9yZGVyMTo6YmVmb3JlLCAubG9nIC5pbnB1dC1jb250IGlucHV0OmZvY3Vzfi5ib3JkZXIyOjphZnRlciwgLmxvZyAuaW5wdXQtY29udCBpbnB1dDpmb2N1c34uYm9yZGVyMjo6YmVmb3JlIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ubG9nIC5jaGVjaywgLmxvZyBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmxvZyAuY2hlY2sge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG5cclxuLmxvZyBmb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvIDIwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI2VkMjU1MztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC41cztcclxuICAtbW96LXRyYW5zaXRpb246IC41cztcclxuICAtby10cmFuc2l0aW9uOiAuNXM7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAvKiBHcmVlbiAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIC8qIEdyZWVuICovXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5cclxuLmZsb2F0aW5nIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIFxyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uZmxvYXRpbmc6aG92ZXIsXHJcbi5mbG9hdGluZzpmb2N1cy13aXRoaW4ge1xyXG4gIFxyXG59XHJcblxyXG4uZmxvYXRpbmdfX2lucHV0IHtcclxuICAvKiBwYWRkaW5nOiAxLjhyZW0gMXJlbSAwLjZyZW07ICovXHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIFxyXG4gIC8qIGNhcmV0LWNvbG9yOiB2YXIoLS1jb2xvcl9fYWNjZW50KTsgKi9cclxufVxyXG5cclxuLmZsb2F0aW5nX19pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG59XHJcblxyXG4uZmxvYXRpbmdfX2xhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uZmxvYXRpbmdfX2xhYmVsOjpiZWZvcmUge1xyXG4gIGNvbG9yOiB2YXIoLS1sYWJlbF9fY29sb3IpO1xyXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1jb250ZW50KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmlsdGVyOiBibHVyKDApO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuICBsZWZ0OiAxcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZsb2F0aW5nX19sYWJlbDo6YWZ0ZXIge1xyXG4gIGJvdHRvbTogMXJlbTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMC4xcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXHJcbiAgICBvcGFjaXR5IDE4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlOyAqL1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogLTAuMXJlbTtcclxuICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMSwgMSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mbG9hdGluZ19faW5wdXQ6Zm9jdXMgKyAuZmxvYXRpbmdfX2xhYmVsOjphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZmxvYXRpbmdfX2lucHV0OnBsYWNlaG9sZGVyLXNob3duICsgLmZsb2F0aW5nX19sYWJlbDo6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yLjJyZW0sIDApIHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZmxvYXRpbmdfX2xhYmVsOjpiZWZvcmUsXHJcbi5mbG9hdGluZ19faW5wdXQ6Zm9jdXMgKyAuZmxvYXRpbmdfX2xhYmVsOjpiZWZvcmUge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zLjEycmVtLCAwKSBzY2FsZTNkKDAuODIsIDAuODIsIDEpO1xyXG59XHJcblxyXG4uZmxvYXRpbmdfX2lucHV0OmZvY3VzICsgLmZsb2F0aW5nX19sYWJlbDo6YmVmb3JlIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3JfX2FjY2VudCk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIC0tICBDb2RlcGVuIHN0eWxlcyAmIHJlc2V0cyAtIG5vdCByZXF1aXJlZCAgLS0gKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcclxuICBtYXgtd2lkdGg6IDQwcmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250X19mYW1pbHkpO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udF9fc2l6ZSk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDNyZW0gMnJlbSAxLjVyZW07XHJcbn1cclxuXHJcbmxlZ2VuZCB7XHJcbiAgcGFkZGluZzogMCAwLjVyZW07XHJcbn1cclxuXHJcbi8qIGFwcGx5IGEgbmF0dXJhbCBib3ggbGF5b3V0IG1vZGVsIHRvIGFsbCBlbGVtZW50cywgYnV0IGFsbG93aW5nIGNvbXBvbmVudHMgdG8gY2hhbmdlICovXHJcbmh0bWwge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZDogIzkwNGU5NTtcclxufVxyXG5cclxuKixcclxuKjpiZWZvcmUsXHJcbio6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5oaWRkZW4tLXZpc3VhbGx5IHtcclxuICBib3JkZXI6IDA7XHJcbiAgY2xpcDogcmVjdCgxcHggMXB4IDFweCAxcHgpO1xyXG4gIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBtYXJnaW46IC0xcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: src_app_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shiprocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shiprocket.service */ "AZme");
/* harmony import */ var _shared_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/topbar/topbar.component */ "usMa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");






class AppComponent {
    constructor(ship) {
        this.ship = ship;
        this.title = 'zeroarmario';
    }
    ngOnInit() {
        this.ship.login();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shiprocket_service__WEBPACK_IMPORTED_MODULE_1__["ShiprocketService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"), "integrity", "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2", "crossorigin", "anonymous"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__["TopbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["@import url(\"https://use.typekit.net/bza3vcv.css\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n    font-family:\"proxima-nova\";\r\n}\r\n\r\n.prox[_ngcontent-%COMP%]{\r\n    font-family: 'proxima-nova';\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{\r\n    font-family: 'proxima-nova';\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtEQUFrRDs7QUFFbEQ7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7Q0FDOUIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2J6YTN2Y3YuY3NzXCIpO1xyXG5cclxuKiB7XHJcbiAgICBmb250LWZhbWlseTpcInByb3hpbWEtbm92YVwiO1xyXG59XHJcblxyXG4ucHJveHtcclxuICAgIGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhJztcclxufVxyXG5cclxuaDIsIGg0LCBoMSwgaDUsIGg2e1xyXG4gICAgZm9udC1mYW1pbHk6ICdwcm94aW1hLW5vdmEnO1xyXG4gfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _shiprocket_service__WEBPACK_IMPORTED_MODULE_1__["ShiprocketService"] }]; }, null); })();


/***/ }),

/***/ "XHPX":
/*!****************************************************************!*\
  !*** ./src/app/e-manage-address/e-manage-address.component.ts ***!
  \****************************************************************/
/*! exports provided: EManageAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EManageAddressComponent", function() { return EManageAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EManageAddressComponent {
    constructor() { }
    toggle(x) {
        if (x == 1) {
            document.getElementById("selected1").style.borderColor = "green";
            document.getElementById("selected2").style.borderColor = "grey";
        }
        else {
            document.getElementById("selected2").style.borderColor = "green";
            document.getElementById("selected1").style.borderColor = "grey";
        }
    }
    ngOnInit() {
    }
}
EManageAddressComponent.ɵfac = function EManageAddressComponent_Factory(t) { return new (t || EManageAddressComponent)(); };
EManageAddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EManageAddressComponent, selectors: [["app-e-manage-address"]], decls: 53, vars: 0, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("//use.fontawesome.com/releases/v5.0.7/css/all.css")], [1, "edit-address"], [1, "address-left"], [2, "font-size", "24px"], [1, "order"], [1, "logout"], [1, "vl"], [1, "address-right"], [1, "has-text-input"], ["type", "radio", "name", "radios", "value", "alien", 3, "click"], [1, "outside"], [1, "inside"], ["id", "selected1", 2, "border", "3px dashed", "padding-left", "15px", "padding-top", "15px", "padding-bottom", "10px", "width", "100%"], [2, "font-weight", "bold", "font-size", "12px"], [1, "bx", "bx-home", 2, "font-size", "20px", "position", "absolute", "right", "5%", "top", "50%"], ["id", "selected2", 2, "border", "3px dashed", "padding-left", "15px", "padding-top", "15px", "padding-bottom", "10px", "width", "100%"], [1, "bx", "bx-briefcase", 2, "font-size", "20px", "position", "absolute", "right", "5%", "top", "50%"], ["href", "editaddress", 2, "background-color", "#fff", "border", "1px solid #000", "color", "#000", "padding", "10px", "margin-left", "30px"]], template: function EManageAddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "e-edit-profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "MY ACCOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Account information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Select addresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EManageAddressComponent_Template_input_click_18_listener() { return ctx.toggle(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Joseph silly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "368 Kingston road");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Wimbledon chase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "London");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "SW20 8LN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EManageAddressComponent_Template_input_click_34_listener() { return ctx.toggle(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Soorya sukumar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "68, swarnapuri enclave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Race course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Coimbatore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "620165");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Edit your address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".edit-address[_ngcontent-%COMP%]{\r\n    margin-left: 12%;\r\n    margin-top: 10%;\r\n    height: 500px;\r\n    width: 70%;\r\n    \r\n}\r\n.address-left[_ngcontent-%COMP%]{\r\n    width: 33%;\r\n    display: block;\r\n    float: left;\r\n    font-family: 'proxima-nova';\r\n}\r\n.address-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: 'proxima-nova';\r\n    font-weight: bold;\r\n    font-size: 35px;\r\n    padding: 25px 0 20px 0;\r\n}\r\n.address-left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n font-weight: bold;\r\n padding-bottom:15px ;\r\n}\r\n.address-left[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]{\r\n    display: block;\r\n    padding-top: 0px;\r\n    padding-bottom: 15px;\r\n    color: #000;\r\n}\r\n.address-left[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]{\r\n    color: #000;\r\n    border-bottom: 1px solid #000;\r\n    font-weight: bold;\r\n}\r\n.address-right[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n    display: block;\r\n    padding-left: 8%;\r\n    float: left;\r\n}\r\n.address-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-weight: bold;\r\n        padding-bottom: 0px;\r\n    }\r\n.address-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n        outline:none;\r\n        padding: 9px 7px 9px 10px;\r\n        width: 40%;\r\n        margin-top: 35px;\r\n        margin-left: 25px;\r\n        margin-bottom: 20px;\r\n        font-size: 15px;\r\n        color:#f3f3f3;\r\n        border: none;\r\n        background-color: #000;\r\n        }\r\n.vl[_ngcontent-%COMP%]{\r\n    float: left;\r\n    width: 1px;\r\n    height: 300px;\r\n    background-color:#f3f3f3;\r\n}\r\n\r\n@-webkit-keyframes radio-select {\r\n    0% {\r\n      transform: scale(0, 0);\r\n    }\r\n    65% {\r\n      transform: scale(1.1, 1.1);\r\n    }\r\n    100% {\r\n      transform: scale(1, 1);\r\n    }\r\n  }\r\n@keyframes radio-select {\r\n    0% {\r\n      transform: scale(0, 0);\r\n    }\r\n    65% {\r\n      transform: scale(1.1, 1.1);\r\n    }\r\n    100% {\r\n      transform: scale(1, 1);\r\n    }\r\n  }\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 40px;\r\n    cursor: pointer;\r\n    line-height: 1.75em;\r\n  }\r\nlabel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n      font-size: 10px;\r\n      margin-bottom: 0;\r\n      padding-bottom: 0;\r\n      line-height: 17px;\r\n      font-weight: lighter;\r\n  }\r\ninput[type=radio][_ngcontent-%COMP%] {\r\n    height: 1px;\r\n    width: 1px;\r\n    opacity: 0;\r\n  }\r\n.outside[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 50%;\r\n    margin-top: 0px;\r\n    width: 30px;\r\n    height: 30px;\r\n    border: 2px solid #CCCCCC;\r\n    border-radius: 50%;\r\n    box-sizing: border-box;\r\n    background: #F3F3F3;\r\n  }\r\n.inside[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: green;\r\n    left: 3px;\r\n    top: 3px;\r\n    transform: scale(0, 0);\r\n  }\r\n.no-transforms[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%] {\r\n    left: auto;\r\n    top: auto;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\ninput[type=radio][_ngcontent-%COMP%] {\r\n    \r\n  }\r\ninput[type=radio][_ngcontent-%COMP%]:checked    + .outside[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%] {\r\n    -webkit-animation: radio-select 0.1s linear;\r\n            animation: radio-select 0.1s linear;\r\n    transform: scale(1, 1);\r\n  }\r\n.no-transforms[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + .outside[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n@media(max-width: 768px){\r\n    .address-left[_ngcontent-%COMP%]{\r\n        margin-top: 50px;\r\n        width: 100%;\r\n        margin-bottom: 30px;\r\n    }\r\n    .address-right[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        margin-bottom: 50px;\r\n        padding-bottom: 150px;\r\n    }\r\n    .vl[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .address-right[_ngcontent-%COMP%]   .inputbox[_ngcontent-%COMP%]{\r\n     width: 90%;\r\n    }\r\n    .address-right[_ngcontent-%COMP%]   .inputbox-postal[_ngcontent-%COMP%]{\r\n     width: 80%;\r\n    }\r\n    .address-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    font-size: 11px;\r\n    margin-left: 10px;\r\n    padding-right:5px;\r\n    padding-left: 5px;\r\n    }  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtbWFuYWdlLWFkZHJlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFVBQVU7O0FBRWQ7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsV0FBVztJQUNYLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsb0JBQW9CO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFFQTtRQUNRLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7QUFDSjtRQUNRLFlBQVk7UUFDWix5QkFBeUI7UUFDekIsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixhQUFhO1FBQ2IsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QjtBQUNSO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCO0FBRUEsZUFBZTtBQUNmO0lBQ0k7TUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0Usc0JBQXNCO0lBQ3hCO0VBQ0Y7QUFDQTtJQUNFO01BQ0Usc0JBQXNCO0lBQ3hCO0lBQ0E7TUFDRSwwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLHNCQUFzQjtJQUN4QjtFQUNGO0FBQ0EsV0FBVztBQUVYO0lBQ0UsU0FBUztJQUNULGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7QUFFQTtNQUNJLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixvQkFBb0I7RUFDeEI7QUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtFQUNaO0FBR0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsUUFBUTtJQUNSLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztFQUNYO0FBRUE7SUFDRTs7OztRQUlJO0VBQ047QUFDQTtJQUNFLDJDQUEyQztZQUNuQyxtQ0FBbUM7SUFDM0Msc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBRUY7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO0tBQ0MsVUFBVTtJQUNYO0lBQ0E7S0FDQyxVQUFVO0lBQ1g7SUFDQTtJQUNBLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQjtBQUNKIiwiZmlsZSI6ImUtbWFuYWdlLWFkZHJlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LWFkZHJlc3N7XHJcbiAgICBtYXJnaW4tbGVmdDogMTIlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBcclxufVxyXG4uYWRkcmVzcy1sZWZ0e1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogJ3Byb3hpbWEtbm92YSc7XHJcbn1cclxuLmFkZHJlc3MtbGVmdCBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhJztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgcGFkZGluZzogMjVweCAwIDIwcHggMDtcclxufVxyXG4uYWRkcmVzcy1sZWZ0IGxpe1xyXG4gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiBwYWRkaW5nLWJvdHRvbToxNXB4IDtcclxufVxyXG4uYWRkcmVzcy1sZWZ0IC5vcmRlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmFkZHJlc3MtbGVmdCAubG9nb3V0e1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5hZGRyZXNzLXJpZ2h0e1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uYWRkcmVzcy1yaWdodCBwe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbi5hZGRyZXNzLXJpZ2h0IGJ1dHRvbntcclxuICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogOXB4IDdweCA5cHggMTBweDtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6I2YzZjNmMztcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbi52bHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmM2YzZjM7XHJcbn1cclxuXHJcbi8qIGFuaW1hdGlvbnMgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJhZGlvLXNlbGVjdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICA2NSUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHJhZGlvLXNlbGVjdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICA2NSUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKiBzdHlsZXMgKi9cclxuICBcclxuICBsYWJlbCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1ZW07XHJcbiAgfVxyXG5cclxuICBsYWJlbCBwe1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9cmFkaW9dIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5vdXRzaWRlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0NDQ0NDQztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xyXG4gIH1cclxuICBcclxuICAuaW5zaWRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgbGVmdDogM3B4O1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xyXG4gIH1cclxuICAubm8tdHJhbnNmb3JtcyAuaW5zaWRlIHtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1yYWRpb10ge1xyXG4gICAgLyomOmZvY3VzLCAmOmFjdGl2ZSB7XHJcbiAgICAgICAgKyAub3V0c2lkZSB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRhbG1vc3QtYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICB9Ki9cclxuICB9XHJcbiAgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIC5vdXRzaWRlIC5pbnNpZGUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJhZGlvLXNlbGVjdCAwLjFzIGxpbmVhcjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiByYWRpby1zZWxlY3QgMC4xcyBsaW5lYXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gIH1cclxuICAubm8tdHJhbnNmb3JtcyBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLm91dHNpZGUgLmluc2lkZSB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICB9XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAuYWRkcmVzcy1sZWZ0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC5hZGRyZXNzLXJpZ2h0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgLnZse1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYWRkcmVzcy1yaWdodCAuaW5wdXRib3h7XHJcbiAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5hZGRyZXNzLXJpZ2h0IC5pbnB1dGJveC1wb3N0YWx7XHJcbiAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIC5hZGRyZXNzLXJpZ2h0IGJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDo1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH0gIFxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EManageAddressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-e-manage-address',
                templateUrl: './e-manage-address.component.html',
                styleUrls: ['./e-manage-address.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-image-zoom */ "1zy2");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component */ "SBxm");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/signin/signin.component */ "5Fl7");
/* harmony import */ var _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./myorders/myorders.component */ "ZTaa");
/* harmony import */ var _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./myaccount/myaccount.component */ "0JOB");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "q7SO");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _shared_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/topbar/topbar.component */ "usMa");
/* harmony import */ var _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./productlist/productlist.component */ "aPpE");
/* harmony import */ var _checkout_item_checkout_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./checkout-item/checkout-item.component */ "ue+7");
/* harmony import */ var _myorders_lists_myorders_lists_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./myorders-lists/myorders-lists.component */ "zTHT");
/* harmony import */ var _productitem_productitem_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./productitem/productitem.component */ "c3h7");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "55oq");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "x7zu");
/* harmony import */ var _ordersucesspage_ordersucesspage_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ordersucesspage/ordersucesspage.component */ "AJxa");
/* harmony import */ var _salestag_salestag_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./salestag/salestag.component */ "I0nD");
/* harmony import */ var _wishlistitem_wishlistitem_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./wishlistitem/wishlistitem.component */ "yuZI");
/* harmony import */ var _addresspage_item_addresspage_item_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./addresspage-item/addresspage-item.component */ "bgbB");
/* harmony import */ var _addresspage_addresspage_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./addresspage/addresspage.component */ "lPsf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _myorder_item_myorder_item_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./myorder-item/myorder-item.component */ "dJ5B");
/* harmony import */ var _e_manage_address_e_manage_address_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./e-manage-address/e-manage-address.component */ "XHPX");
/* harmony import */ var _e_edit_address_e_edit_address_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./e-edit-address/e-edit-address.component */ "NRAf");
/* harmony import */ var _e_edit_profile_e_edit_profile_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./e-edit-profile/e-edit-profile.component */ "v9X/");
/* harmony import */ var _e_search_e_search_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./e-search/e-search.component */ "lvch");









































//import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_33__["DatePipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestoreModule"],
            //AngularFireAuthModule,
            //AngularFireAuth,
            ngx_image_zoom__WEBPACK_IMPORTED_MODULE_2__["NgxImageZoomModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HttpClientModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
        _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"],
        _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_8__["MyordersComponent"],
        _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_9__["MyaccountComponent"],
        _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"],
        _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_11__["ProductdetailsComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _shared_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_13__["TopbarComponent"],
        _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_14__["ProductlistComponent"],
        _checkout_item_checkout_item_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutItemComponent"],
        _myorders_lists_myorders_lists_component__WEBPACK_IMPORTED_MODULE_16__["MyordersListsComponent"],
        _productitem_productitem_component__WEBPACK_IMPORTED_MODULE_17__["ProductitemComponent"],
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_25__["BreadcrumbComponent"],
        _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_26__["WishlistComponent"],
        _wishlistitem_wishlistitem_component__WEBPACK_IMPORTED_MODULE_29__["WishlistitemComponent"],
        _ordersucesspage_ordersucesspage_component__WEBPACK_IMPORTED_MODULE_27__["OrdersucesspageComponent"],
        _salestag_salestag_component__WEBPACK_IMPORTED_MODULE_28__["SalestagComponent"],
        _addresspage_item_addresspage_item_component__WEBPACK_IMPORTED_MODULE_30__["AddresspageItemComponent"],
        _addresspage_addresspage_component__WEBPACK_IMPORTED_MODULE_31__["AddresspageComponent"],
        _myorder_item_myorder_item_component__WEBPACK_IMPORTED_MODULE_34__["MyorderItemComponent"],
        _e_manage_address_e_manage_address_component__WEBPACK_IMPORTED_MODULE_35__["EManageAddressComponent"],
        _e_edit_address_e_edit_address_component__WEBPACK_IMPORTED_MODULE_36__["EEditAddressComponent"],
        _e_edit_profile_e_edit_profile_component__WEBPACK_IMPORTED_MODULE_37__["EEditProfileComponent"],
        _e_search_e_search_component__WEBPACK_IMPORTED_MODULE_38__["ESearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestoreModule"],
        //AngularFireAuthModule,
        //AngularFireAuth,
        ngx_image_zoom__WEBPACK_IMPORTED_MODULE_2__["NgxImageZoomModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HttpClientModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                    _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"],
                    _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_8__["MyordersComponent"],
                    _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_9__["MyaccountComponent"],
                    _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"],
                    _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_11__["ProductdetailsComponent"],
                    _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                    _shared_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_13__["TopbarComponent"],
                    _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_14__["ProductlistComponent"],
                    _checkout_item_checkout_item_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutItemComponent"],
                    _myorders_lists_myorders_lists_component__WEBPACK_IMPORTED_MODULE_16__["MyordersListsComponent"],
                    _productitem_productitem_component__WEBPACK_IMPORTED_MODULE_17__["ProductitemComponent"],
                    _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_25__["BreadcrumbComponent"],
                    _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_26__["WishlistComponent"],
                    _wishlistitem_wishlistitem_component__WEBPACK_IMPORTED_MODULE_29__["WishlistitemComponent"],
                    _ordersucesspage_ordersucesspage_component__WEBPACK_IMPORTED_MODULE_27__["OrdersucesspageComponent"],
                    _salestag_salestag_component__WEBPACK_IMPORTED_MODULE_28__["SalestagComponent"],
                    _addresspage_item_addresspage_item_component__WEBPACK_IMPORTED_MODULE_30__["AddresspageItemComponent"],
                    _addresspage_addresspage_component__WEBPACK_IMPORTED_MODULE_31__["AddresspageComponent"],
                    _myorder_item_myorder_item_component__WEBPACK_IMPORTED_MODULE_34__["MyorderItemComponent"],
                    _e_manage_address_e_manage_address_component__WEBPACK_IMPORTED_MODULE_35__["EManageAddressComponent"],
                    _e_edit_address_e_edit_address_component__WEBPACK_IMPORTED_MODULE_36__["EEditAddressComponent"],
                    _e_edit_profile_e_edit_profile_component__WEBPACK_IMPORTED_MODULE_37__["EEditProfileComponent"],
                    _e_search_e_search_component__WEBPACK_IMPORTED_MODULE_38__["ESearchComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].firebase),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestoreModule"],
                    //AngularFireAuthModule,
                    //AngularFireAuth,
                    ngx_image_zoom__WEBPACK_IMPORTED_MODULE_2__["NgxImageZoomModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HttpClientModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_33__["DatePipe"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZTaa":
/*!************************************************!*\
  !*** ./src/app/myorders/myorders.component.ts ***!
  \************************************************/
/*! exports provided: MyordersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyordersComponent", function() { return MyordersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products.service */ "jOXV");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication.service */ "18Le");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "55oq");








class MyordersComponent {
    constructor(firestore, route, service, auth, router) {
        this.firestore = firestore;
        this.route = route;
        this.service = service;
        this.auth = auth;
        this.router = router;
        this.OID = "";
        this.UID = "";
        this.mm = "Prepaid";
        this.amounts = [];
        this.sub_total = 0;
        this.total = 0;
        this.deliver_fee = 100;
        this.discount = 0;
    }
    ngOnInit() {
        //this.OID = this.route.snapshot.paramMap.get("oid")||""
        this.firestore.collection('users').ref.limit(1).get().then(e => {
            this.auth.getUID().then(uu => {
                this.UID = uu;
                this.firestore.collection('orders').doc(this.OID).ref.get().then(d => {
                    this.order = d.data();
                    this.products = [];
                    this.order.order_items.forEach((e) => {
                        this.getProduct(e);
                    });
                });
            });
        });
    }
    getProduct(p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var d = yield this.firestore.collection('products').doc(p.sku.replace(p.name, '')).ref.get();
            var pr = Object.assign({ id: d.id }, d.data());
            pr.price = pr.size[p.size] || pr.price;
            this.products.push(pr);
            if (this.items.length == this.amounts.length && this.items.length != 0) {
                this.calculateT();
            }
        });
    }
    calculateT() {
        this.sub_total = this.order.sub_total;
        this.discount = this.order.total_discount;
        this.deliver_fee = this.order.shipping_charges;
        this.total = this.sub_total + this.deliver_fee - this.discount;
    }
}
MyordersComponent.ɵfac = function MyordersComponent_Factory(t) { return new (t || MyordersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MyordersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyordersComponent, selectors: [["app-myorders"]], decls: 103, vars: 0, consts: [[1, "container", 2, "padding-top", "200px"], ["category", "My Account / My Orders"], [1, "row"], [1, "col-lg-1"], [1, "col-lg-2"], [1, "container"], ["href", "#"], [1, "col-lg-9"], [2, "margin-left", "20px"], [1, "col-lg-3"], ["src", "../../assets/images/png/cart/men.png", "alt", ""], [1, "col-lg-4", 2, "padding", "20px"], [1, "text-muted", "float-left"], [1, "text-muted", "float-right"], [1, "float-right"], [1, "btn", "first-btn"], [1, "btn", "btn-block", "second-btn"], [1, "btn", "btn-block", "third-btn"], [1, "btn", "btn-block", "fourth-btn"], ["id", "order-completed", 1, "order-completed"], [1, "btn", "btn-block", "completed-btn"]], template: function MyordersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "my account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Account Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " My orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "my orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Order no: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "09013456");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Estimated delivery: 3 to 5 Business days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "White");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Large/40");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "b", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Rs.899");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Buy it again");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Track order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Order details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Cancel order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Order no: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "09013456");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Estimated delivery: 3 to 5 Business days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "White");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Large/40");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "b", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Rs.899");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Buy it again");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Track order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Order details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Cancel order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"]], styles: [".toplink[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  \r\n  .toplink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  \r\n  img[_ngcontent-%COMP%] {\r\n    border-radius: 2px;\r\n    max-width: 100%;\r\n    width: 100%;\r\n    height: auto;\r\n    text-align: center;\r\n    border: none;\r\n  }\r\n  \r\n  h5[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .first-btn[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .first-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    opacity: 0.7;\r\n  }\r\n  \r\n  .second-btn[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    border: none;\r\n  }\r\n  \r\n  .second-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: green;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    opacity: 0.7;\r\n    border: none;\r\n  }\r\n  \r\n  .third-btn[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    border: none;\r\n  }\r\n  \r\n  .third-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    opacity: 0.7;\r\n    border: none;\r\n  }\r\n  \r\n  .fourth-btn[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .fourth-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .completed-btn[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    opacity: 0.7;\r\n    border: none;\r\n  }\r\n  \r\n  p[_ngcontent-%COMP%] {\r\n    color: green;\r\n    font-size: 13px;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n    color: black;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%]:hover{\r\n   text-decoration: underline;\r\n    color: black;\r\n    opacity: 0.7;\r\n  }\r\n  \r\n  h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{\r\n    font-family: 'proxima-nova';\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15b3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLFlBQVk7RUFDZDs7RUFDQTtHQUNDLDBCQUEwQjtJQUN6QixZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsMkJBQTJCO0NBQzlCIiwiZmlsZSI6Im15b3JkZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wbGluayAuYnJlYWRjcnVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLnRvcGxpbmsgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICBoNSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5maXJzdC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5maXJzdC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWNvbmQtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuc2Vjb25kLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRoaXJkLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRoaXJkLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvdXJ0aC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3VydGgtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICAuY29tcGxldGVkLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgICBcclxuICBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIGE6aG92ZXJ7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuXHJcbiAgaDIsIGg0LCBoMSwgaDUsIGg2LCBoM3tcclxuICAgIGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhJztcclxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyordersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-myorders',
                templateUrl: './myorders.component.html',
                styleUrls: ['./myorders.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "aPpE":
/*!******************************************************!*\
  !*** ./src/app/productlist/productlist.component.ts ***!
  \******************************************************/
/*! exports provided: ProductlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistComponent", function() { return ProductlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/products.service */ "jOXV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "55oq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _productitem_productitem_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../productitem/productitem.component */ "c3h7");










function ProductlistComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProductlistComponent_div_18_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.addColor($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", s_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", s_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", s_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r9, " ");
} }
function ProductlistComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProductlistComponent_div_27_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const s_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.addColor(s_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", s_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", s_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r12, " ");
} }
function ProductlistComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductlistComponent_span_29_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const s_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.addColor(s_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", s_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r15, " ");
} }
function ProductlistComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProductlistComponent_div_38_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const s_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.addSize(s_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", s_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", s_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r18, " ");
} }
function ProductlistComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductlistComponent_span_40_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const s_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.addSize(s_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", s_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r21, " ");
} }
function ProductlistComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProductlistComponent_div_49_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.addOffer($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", s_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", s_r24.replaceAll(" ", ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", s_r24.replaceAll(" ", ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r24, " ");
} }
function ProductlistComponent_span_51_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductlistComponent_span_51_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const s_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.addOffer(s_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", s_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r27, " ");
} }
function ProductlistComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-productitem", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", product_r30);
} }
function ProductlistComponent_li_68_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductlistComponent_li_68_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const page_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.moveTo(page_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r31 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("hoverp ", page_r31 == ctx_r8.current ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r31);
} }
class ProductlistComponent {
    constructor(productService, route, firestore) {
        this.productService = productService;
        this.route = route;
        this.firestore = firestore;
        this.current = 1;
        this.more = true;
        this.recom = false;
        this.pages = [1, 2];
        this.limit = 10;
        this.sizes = ['S', 'M', 'L', 'X', 'XL', 'XXL'];
        this.ss = [];
        this.colors = [];
        this.sc = [];
        this.offers = [];
        this.so = [];
    }
    ngOnInit() {
        this.title = this.route.snapshot.paramMap.get("title");
        this.category = this.route.snapshot.paramMap.get("cat");
        this.firestore.collection('static').doc('data').ref.get().then((d) => {
            this.colors = d.data().colors;
            this.offers = d.data().offers;
        });
        this.getData();
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var q = this.firestore.collection("products").ref;
            if (this.category != "NULL") {
                q.where("category", "array-contains", this.category);
            }
            if (this.ss.length != 0) {
                //q.where("avail", 'array-contains-any', this.ss);
            }
            var idx = this.limit * (this.current - 1) - 1;
            if (idx < 0) {
                idx = 0;
            }
            if (this.docs && idx != 0) {
                var after = this.docs[idx];
                //window.alert(idx);
                var d = yield q.orderBy("name").limit(this.limit).startAfter(after).get();
                d.docs.forEach((e) => {
                    this.docs.push(e);
                });
                this.dic = d.docs;
            }
            else {
                var d = yield q.orderBy("name").limit(this.limit).get();
                this.docs = d.docs;
                this.dic = d.docs;
            }
            if (this.dic.length < this.limit) {
                this.more = false;
                if (this.current == 1) {
                    this.pages.splice(1, 1);
                }
            }
            else {
                this.more = true;
            }
            this.products = this.dic.map((e) => {
                console.log(e.data());
                return Object.assign({ id: e.id }, e.data());
            });
        });
    }
    addOffer(s) {
        if (this.so.includes(s)) {
            this.removeOffer(s);
        }
        else {
            this.so.push(s);
        }
        this.getData();
    }
    toggleRec() {
        this.recom = !this.recom;
        this.getData();
    }
    removeOffer(s) {
        var idx = this.so.indexOf(s);
        this.so.splice(idx, 1);
    }
    addColor(s) {
        if (this.sc.includes(s)) {
            this.removeColor(s);
        }
        else {
            this.sc.push(s);
        }
        this.getData();
    }
    removeColor(s) {
        var idx = this.sc.indexOf(s);
        this.sc.splice(idx, 1);
    }
    addSize(s) {
        if (this.ss.includes(s)) {
            this.removeSize(s);
        }
        else {
            this.ss.push(s);
        }
        this.getData();
    }
    removeSize(s) {
        var idx = this.ss.indexOf(s);
        this.ss.splice(idx, 1);
    }
    moveTo(pageNumber) {
        this.current = pageNumber;
        if (pageNumber < 4) {
            this.pages.splice(3, this.pages.length - 2);
        }
        this.getData();
    }
    next() {
        if (this.current == this.pages.length) {
            this.addMore();
        }
        else {
            this.moveTo(this.current + 1);
        }
    }
    addMore() {
        if (this.more) {
            var e = this.pages[this.pages.length - 1];
            this.pages.push(e + 1);
            this.moveTo(this.pages[this.pages.length - 1]);
        }
    }
}
ProductlistComponent.ɵfac = function ProductlistComponent_Factory(t) { return new (t || ProductlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"])); };
ProductlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductlistComponent, selectors: [["app-productlist"]], decls: 75, vars: 11, consts: [[1, "container", "pr-5", "pl-5", 2, "left", "0px"], [1, "row", 2, "padding-top", "130px"], [1, "container", 2, "left", "0px", "padding", "0px"], [3, "category"], [1, "row", 2, "padding-top", "2%"], [1, "col-lg-2", "col-sm-3"], ["id", "collection", 1, "collection", 2, "margin-bottom", "24px"], ["id", "accordionExample", 1, "accordion", 2, "border-right", "solid 1px rgba(0, 0, 0, 0.137)"], [2, "font-family", "proxima-nova", "font-size", "14px", "font-weight", "bold"], [1, "card"], ["id", "headingOne", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "false", "aria-controls", "collapseOne", 1, "btn-block", "dropdown-toggle2", "text-left"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordionExample", 1, "collapse"], [1, "card-body", 2, "padding-left", "0px"], [1, "form-check", 2, "padding-left", "0px"], ["class", "mk2", 4, "ngFor", "ngForOf"], ["id", "headingTwo", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "btn-block", "dropdown-toggle2", "text-left"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#accordionExample", 1, "collapse"], ["style", "\n                font-size: 12px;\n                margin-right: 12px;\n                color: rgba(0, 0, 0, 0.664);\n              ", "class", "form-check-label", 3, "for", "click", 4, "ngFor", "ngForOf"], ["id", "headingThree", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "btn-block", "dropdown-toggle2", "text-left"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-parent", "#accordionExample", 1, "collapse"], ["data-toggle", "collapse", "data-target", "#collapsefour", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "btn-block", "dropdown-toggle2", "text-left"], ["id", "collapsefour", "aria-labelledby", "headingTwo", "data-parent", "#accordionExample", 1, "collapse"], [1, "col-lg-10", "col-sm-9"], [1, "product"], [1, "btn", "btn-c", 2, "float", "right", 3, "click"], [1, "bx", "bx-down-arrow-alt"], [1, "container", 2, "padding-top", "5%"], [1, "row"], ["class", "col-sm-6 col-lg-3 w-50", "id", "product", 4, "ngFor", "ngForOf"], [2, "border-bottom", "1px solid rgba(0, 0, 0, 0.5)", "padding-bottom", "17px", "width", "fit-content", "padding-left", "4px", "padding-right", "16px"], [1, "paginate", 2, "align-items", "center", "width", "fit-content"], ["aria-label", "..."], [1, "pagination"], [3, "class", 4, "ngFor", "ngForOf"], [1, "hoverp", 2, "height", "4px", "width", "47px", "letter-spacing", "2px", "font-weight", "bold"], [1, "page-link"], [1, "hoverp"], [1, "page-link", 3, "click"], [1, "mk2"], ["type", "checkbox", 1, "form-check-input", 2, "color", "black", 3, "value", "id", "change"], [1, "form-check-label", 3, "for"], ["ng-checked", "sc.includes(s)", "type", "checkbox", 1, "form-check-input", 2, "color", "black", 3, "id", "change"], [1, "form-check-label", 2, "font-size", "12px", "margin-right", "12px", "color", "rgba(0, 0, 0, 0.664)", 3, "for", "click"], ["data-icon", "ic:baseline-close", "data-inline", "false", 1, "iconify", 2, "color", "rgba(0, 0, 0, 0.37)"], ["type", "checkbox", "ng-checked", "ss.includes(s)", 1, "form-check-input", 3, "id", "change"], ["type", "checkbox", "ng-checked", "so.includes(s)", 1, "form-check-input", 2, "color", "black", 3, "value", "id", "change"], ["id", "product", 1, "col-sm-6", "col-lg-3", "w-50"], [3, "data"]], template: function ProductlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " I\u2019m looking for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Sleeve ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProductlistComponent_div_18_Template, 5, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Colour ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ProductlistComponent_div_27_Template, 5, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ProductlistComponent_span_29_Template, 4, 2, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Size ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ProductlistComponent_div_38_Template, 5, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ProductlistComponent_span_40_Template, 3, 2, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Offers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ProductlistComponent_div_49_Template, 5, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ProductlistComponent_span_51_Template, 4, 2, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductlistComponent_Template_button_click_56_listener() { return ctx.toggleRec(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " MOST RECOMMENDED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, ProductlistComponent_div_61_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "nav", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "ul", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, ProductlistComponent_li_68_Template, 3, 4, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductlistComponent_Template_a_click_73_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("category", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.offers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ss);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.offers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.so);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pages);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _productitem_productitem_component__WEBPACK_IMPORTED_MODULE_8__["ProductitemComponent"]], styles: [".toplink[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n.toplink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n.btn-c[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  color: black;\r\n  align-items: center;\r\n  padding: 10px 12px;\r\n  border-color: black;\r\n  text-transform: uppercase;\r\n  border-radius: 0;\r\n  font-size: 11px;\r\n\r\n}\r\n\r\n.btn-c[_ngcontent-%COMP%]:hover{\r\n  background-color: black;\r\n  color: white;\r\n  align-items: center;\r\n  padding: 10px 12px;\r\n  border-color: black;\r\n  text-transform: uppercase;\r\n  border-radius: 0;\r\n\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  color: black;\r\n  align-items: center;\r\n  border-color: black;\r\n  border-radius: 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover{\r\n  background-color: black;\r\n  color: white;\r\n  align-items: center;\r\n  border-color: black;\r\n  border-radius: 0;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  height: 250px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n\r\n  \r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n  border: none;\r\n  padding-left:0px;\r\n  -o-object-fit:contain;\r\n     object-fit:contain;\r\n  \r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%]{\r\n  border: none;\r\n  background-color: white;\r\n}\r\n\r\n.paginate[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{\r\n  background-color: rgba(255, 255, 255, 0);\r\n  color: black;\r\n  border: none;\r\n  text-align: center;\r\n}\r\n\r\n.paginate[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  background-color: rgba(255, 255, 255, 0);\r\n  color: black;\r\n  border: none;\r\n}\r\n\r\n.paginate[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n  background-color: rgba(255, 255, 255, 0);\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n.paginate[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\r\n  \r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .sidemenu[_ngcontent-%COMP%] {\r\n    border-right:solid 1px rgba(255, 255, 255, 0.548);\r\n  }\r\n}\r\n\r\n.custom-dropdown[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.collection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\r\nbackground-color: white;\r\npadding: -30px;\r\npadding-left: 0px;\r\n\r\n}\r\n\r\n.collection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\nbackground-color: white;\r\nborder: none;\r\ntext-transform: capitalize;\r\n}\r\n\r\n.collection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\ntext-decoration: none;\r\ncolor: black;\r\n}\r\n\r\n#product[_ngcontent-%COMP%] {\r\n  height: 400px;\r\n  width: 350px;\r\n  border: none;\r\n  justify-content: space-between;\r\n  \r\n}\r\n\r\n.dropdown-toggle2[_ngcontent-%COMP%]{\r\n  padding-left: 0px;\r\n   border: none;\r\n   position: relative;\r\n   display: inline-block;\r\n   outline: 0;\r\n   font-size: 14px;\r\n   \r\n}\r\n\r\n.dropdown-toggle2[_ngcontent-%COMP%]::before{\r\n  position: absolute;\r\n  top: 0px;\r\n  border: none;\r\n  right: 8px;\r\n  outline: none;\r\n  content: url('https://api.iconify.design/el-chevron-down.svg?height=9');\r\n  align-items: center;\r\n  align-content: center;\r\n  \r\n}\r\n\r\n.dropdown-toggle2[_ngcontent-%COMP%]:active{\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.dropdown-toggle2[_ngcontent-%COMP%]:hover{\r\n  opacity: 0.7;\r\n}\r\n\r\n.dropdown-toggle2[_ngcontent-%COMP%]:focus{\r\n  border: none;\r\n  font-weight: bold;\r\n  \r\n}\r\n\r\n.hov[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  width: 400px;\r\n  height: 2px;\r\n  background-color: rgba(0, 0, 0, 0.589);\r\n}\r\n\r\n.hoverp[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  width: 47px;\r\n  height: 2px;\r\n  display: block;\r\n}\r\n\r\n.hoverp[_ngcontent-%COMP%]::after{\r\n  content: '';\r\n  display: block;\r\n  width: 0px;\r\n  height: 2px;\r\n  background-color: black;\r\n  transition: width .2s;\r\n}\r\n\r\n.hoverp[_ngcontent-%COMP%]::before{\r\n  text-align: center;\r\n  width: 47px;\r\n  height: 2px;\r\n  display: block;\r\n  background-color: rgba(0, 0, 0, 0.753);\r\n}\r\n\r\n.hoverp[_ngcontent-%COMP%]::after:active{\r\n  text-align: center;\r\n  width: 47px;\r\n  height: 2px;\r\n  padding-top: 40px;\r\n  display: block;\r\n  background-color: rgb(0, 0, 0);\r\n  transition: width .2s;\r\n}\r\n\r\n.hoverp[_ngcontent-%COMP%]:hover::after{\r\n  width: 47px;\r\n  transition: width .2s;\r\n}\r\n\r\n.mk2[_ngcontent-%COMP%]{\r\n  margin-bottom: 12px;\r\n  margin-left: 12px;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n  border: 2px solid rgb(0, 0, 0);\r\n  content: \"\\00a0\";\r\n  border-radius: 10px;\r\n  display: inline-block;\r\n  font: 16px/1em sans-serif;\r\n  height: 20px;\r\n  margin: 0 .25em 0 0;\r\n  padding: 0;\r\n  vertical-align: center;\r\n  width: 20px;\r\n}\r\n\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  background: rgb(255, 255, 255);\r\n  color: black;\r\n  content: url('https://api.iconify.design/emojione-monotone:white-heavy-check-mark.svg?height=16');\r\n  text-align: center;\r\n  \r\n  align-content: center;\r\n}\r\n\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\r\n  font-weight: bold;\r\n}\r\n\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]::before {\r\n    outline: rgb(59, 153, 252) auto 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFHQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlOztBQUVqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7O0VBRWxCOzs7OztnQkFLYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQWtCO0tBQWxCLGtCQUFrQjs7QUFFcEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7QUFFQTs7QUFDQTtFQUNFO0lBQ0UsaURBQWlEO0VBQ25EO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUlBO0FBQ0EsdUJBQXVCO0FBQ3ZCLGNBQWM7QUFDZCxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFlBQVk7QUFDWiwwQkFBMEI7QUFDMUI7O0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsWUFBWTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osOEJBQThCOztBQUVoQzs7QUFHQTtFQUNFLGlCQUFpQjtHQUNoQixZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLHFCQUFxQjtHQUNyQixVQUFVO0dBQ1YsZUFBZTs7QUFFbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVFQUF1RTtFQUN2RSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlEQUF5RDtBQUMzRDs7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUlBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixpR0FBaUc7RUFDakcsa0JBQWtCOztFQUVsQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkMiLCJmaWxlIjoicHJvZHVjdGxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BsaW5rIC5icmVhZGNydW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50b3BsaW5rIGF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4gIFxyXG4uYnRuLWN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuXHJcbn1cclxuXHJcbi5idG4tYzpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG59XHJcblxyXG5idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG5cclxuICAvKiBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOm5vbmU7ICovXHJcbn1cclxuXHJcbi5jYXJke1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG4gIG9iamVjdC1maXQ6Y29udGFpbjtcclxuICBcclxufVxyXG4uY2FyZC1mb290ZXJ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFnaW5hdGUgLnBhZ2luYXRpb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGFnaW5hdGUgYXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5wYWdpbmF0ZSAuYWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucGFnaW5hdGUgYS5hY3RpdmV7XHJcbiAgXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNpZGVtZW51IHtcclxuICAgIGJvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OCk7XHJcbiAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWRyb3Bkb3due1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4uY29sbGVjdGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxucGFkZGluZzogLTMwcHg7XHJcbnBhZGRpbmctbGVmdDogMHB4O1xyXG5cclxufSAgXHJcblxyXG4uY29sbGVjdGlvbiBidXR0b24ge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuYm9yZGVyOiBub25lO1xyXG50ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uY29sbGVjdGlvbiBidXR0b246aG92ZXIge1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI3Byb2R1Y3Qge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgXHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlMntcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgYm9yZGVyOiBub25lO1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgb3V0bGluZTogMDtcclxuICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICBcclxufVxyXG4uZHJvcGRvd24tdG9nZ2xlMjo6YmVmb3Jle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcmlnaHQ6IDhweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbnRlbnQ6IHVybCgnaHR0cHM6Ly9hcGkuaWNvbmlmeS5kZXNpZ24vZWwtY2hldnJvbi1kb3duLnN2Zz9oZWlnaHQ9OScpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIC8qIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL3NlYXJjaC5qcGVnXCIpOyAqL1xyXG59XHJcbi5kcm9wZG93bi10b2dnbGUyOmFjdGl2ZXtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTI6aG92ZXJ7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlMjpmb2N1c3tcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgXHJcbn1cclxuXHJcbi5ob3Z7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTg5KTtcclxufVxyXG5cclxuLmhvdmVycHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQ3cHg7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5ob3ZlcnA6OmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggLjJzO1xyXG59XHJcblxyXG4uaG92ZXJwOjpiZWZvcmV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA0N3B4O1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NTMpO1xyXG59XHJcblxyXG4uaG92ZXJwOjphZnRlcjphY3RpdmV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA0N3B4O1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAuMnM7XHJcbn1cclxuXHJcbi5ob3ZlcnA6aG92ZXI6OmFmdGVye1xyXG4gIHdpZHRoOiA0N3B4O1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIC4ycztcclxufVxyXG5cclxuXHJcblxyXG4ubWsye1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbmxhYmVsIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XHJcbiAgY29udGVudDogXCJcXDAwYTBcIjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250OiAxNnB4LzFlbSBzYW5zLXNlcmlmO1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDAgLjI1ZW0gMCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjb250ZW50OiB1cmwoJ2h0dHBzOi8vYXBpLmljb25pZnkuZGVzaWduL2Vtb2ppb25lLW1vbm90b25lOndoaXRlLWhlYXZ5LWNoZWNrLW1hcmsuc3ZnP2hlaWdodD0xNicpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyArIGxhYmVsOjpiZWZvcmUge1xyXG4gICAgb3V0bGluZTogcmdiKDU5LCAxNTMsIDI1MikgYXV0byA1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-productlist",
                templateUrl: "./productlist.component.html",
                styleUrls: ["./productlist.component.css"],
            }]
    }], function () { return [{ type: src_app_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "bgbB":
/*!****************************************************************!*\
  !*** ./src/app/addresspage-item/addresspage-item.component.ts ***!
  \****************************************************************/
/*! exports provided: AddresspageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddresspageItemComponent", function() { return AddresspageItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "18Le");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products.service */ "jOXV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class AddresspageItemComponent {
    constructor(firestore, document, auth, service, router) {
        this.firestore = firestore;
        this.document = document;
        this.auth = auth;
        this.service = service;
        this.router = router;
        this.UID = "";
        this.saved = false;
    }
    ngOnInit() {
        this.initSavedState();
        this.getProduct();
    }
    getProduct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var d = yield this.firestore.collection('products').doc(this.data.pid).ref.get();
            this.product = d.data();
            if (this.data.size) {
                this.price = this.product.size[this.data.size];
            }
            else {
                this.price = this.product.price;
            }
        });
    }
    initSavedState() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firestore.collection("users").doc("9").ref.get();
            this.UID = yield this.auth.getUID();
            if (this.UID) {
                var doc = yield this.firestore
                    .collection("users")
                    .doc(this.UID)
                    .ref.get();
                this.saved = doc.data().saved.includes(this.data.pid);
            }
        });
    }
    eject() {
        this.firestore.collection('users').doc(this.UID).collection('cart').doc(this.data.id).ref.delete();
    }
    move() {
        this.router.navigate(["productdetails/" + this.data.pid]);
        //this.document.location.href = 'https://zeroarmario.web.app/productdetails/' + this.data.id;
    }
    toggleSave() {
        if (this.UID) {
            this.saved = !this.saved;
            this.updateBookmark(this.data.pid);
        }
        else {
        }
        //
    }
    updateBookmark(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var doc = yield this.firestore.collection("users").doc(this.UID).ref.get();
            let saved = doc.data().saved;
            //var saved: String[] = doc.data().saved;
            if (this.saved) {
                saved.push(id);
            }
            else {
                saved.forEach((element, index) => {
                    if (element == id)
                        saved.splice(index, 1);
                });
            }
            this.firestore
                .collection("users")
                .doc(this.UID)
                .set({ saved: saved }, { merge: true });
        });
    }
}
AddresspageItemComponent.ɵfac = function AddresspageItemComponent_Factory(t) { return new (t || AddresspageItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AddresspageItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddresspageItemComponent, selectors: [["app-addresspage-item"]], inputs: { data: "data" }, decls: 13, vars: 4, consts: [[1, "row", "mt-1", 2, "padding-top", "5%"], [1, "col-lg-3", "col-md-3", "col-sm-3"], ["alt", "", 2, "width", "100px", "height", "100px", "object-fit", "cover", 3, "src"], [1, "col-lg-1", "col-md-1", "col-sm-1"], [1, "col-lg-8", "col-md-8", "col-sm-8"], [1, "row"], [1, "col-lg-7", "col-sm-12", 2, "font-weight", "bolder"], [1, "col-lg-1"], [1, "col-lg-2", "col-sm-12"]], template: function AddresspageItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.product.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs.", ctx.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Size: ", ctx.data.size || "None", "");
    } }, styles: ["@import url(\"https://use.typekit.net/bza3vcv.css\");\r\n\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width:120px;\r\n    height:auto;\r\n}\r\n\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    padding-top: 8%;\r\n    font-family:\"proxima-nova\";\r\n}\r\n\r\n\r\n.form-control-lg[_ngcontent-%COMP%]{\r\n    margin-top: 5%;\r\n    width: 100%;\r\n    background-color: none;\r\n    border:1px solid black;\r\n}\r\n\r\n\r\n.container-2[_ngcontent-%COMP%]{\r\n    margin-top: 17%;\r\n}\r\n\r\n\r\n#shipping[_ngcontent-%COMP%]{\r\n    margin-top: 5%;  \r\n}\r\n\r\n\r\n@media (min-width: 992px) { \r\n    #container-2[_ngcontent-%COMP%]{\r\n        margin-top: 17%;\r\n    }\r\n    #ship[_ngcontent-%COMP%]{\r\n        margin-top: 13%;\r\n    }\r\n }\r\n\r\n\r\n@media (min-width: 1200px) { \r\n    #container-2[_ngcontent-%COMP%]{\r\n        margin-top: 7%;\r\n    }\r\n}\r\n\r\n\r\n@media (min-width: 950px ) { \r\n    #container-2[_ngcontent-%COMP%]{\r\n        margin-top: 7%;\r\n    } \r\n    \r\n }\r\n\r\n\r\n.breadcrumb[_ngcontent-%COMP%]{\r\n     color:black;\r\n }\r\n\r\n\r\ninput[type=text][_ngcontent-%COMP%]{\r\n     border-radius: 0px;\r\n     outline: 1px solid;\r\n     font-family: 'proxima-nova';\r\n     font-size: 13px;\r\n }\r\n\r\n\r\nh2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{\r\n    font-family: 'proxima-nova';\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3NwYWdlLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrREFBa0Q7OztBQUdsRDtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7OztBQUNBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7OztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOzs7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtDQUNIOzs7QUFHRDtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKOzs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjs7Q0FFSDs7O0FBRUE7S0FDSSxXQUFXO0NBQ2Y7OztBQUVBO0tBQ0ksa0JBQWtCO0tBQ2xCLGtCQUFrQjtLQUNsQiwyQkFBMkI7S0FDM0IsZUFBZTtDQUNuQjs7O0FBRUE7SUFDRywyQkFBMkI7Q0FDOUIiLCJmaWxlIjoiYWRkcmVzc3BhZ2UtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9iemEzdmN2LmNzc1wiKTtcclxuXHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDoxMjBweDtcclxuICAgIGhlaWdodDphdXRvO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgICBmb250LWZhbWlseTpcInByb3hpbWEtbm92YVwiO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wtbGd7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLmNvbnRhaW5lci0ye1xyXG4gICAgbWFyZ2luLXRvcDogMTclO1xyXG59XHJcbiNzaGlwcGluZ3tcclxuICAgIG1hcmdpbi10b3A6IDUlOyAgXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7IFxyXG4gICAgI2NvbnRhaW5lci0ye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE3JTtcclxuICAgIH1cclxuICAgICNzaGlwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEzJTtcclxuICAgIH1cclxuIH1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7IFxyXG4gICAgI2NvbnRhaW5lci0ye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDclO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTUwcHggKSB7IFxyXG4gICAgI2NvbnRhaW5lci0ye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDclO1xyXG4gICAgfSBcclxuICAgIFxyXG4gfVxyXG5cclxuIC5icmVhZGNydW1ie1xyXG4gICAgIGNvbG9yOmJsYWNrO1xyXG4gfVxyXG5cclxuIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgIG91dGxpbmU6IDFweCBzb2xpZDtcclxuICAgICBmb250LWZhbWlseTogJ3Byb3hpbWEtbm92YSc7XHJcbiAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gfVxyXG5cclxuIGgyLCBoNCwgaDEsIGg1LCBoNntcclxuICAgIGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhJztcclxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AddresspageItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-addresspage-item',
                templateUrl: './addresspage-item.component.html',
                styleUrls: ['./addresspage-item.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "c3h7":
/*!******************************************************!*\
  !*** ./src/app/productitem/productitem.component.ts ***!
  \******************************************************/
/*! exports provided: ProductitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductitemComponent", function() { return ProductitemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "18Le");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products.service */ "jOXV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









class ProductitemComponent {
    constructor(firestore, document, auth, service, router) {
        this.firestore = firestore;
        this.document = document;
        this.auth = auth;
        this.service = service;
        this.router = router;
        this.saved = false;
    }
    ngOnInit() {
        this.initSavedState();
    }
    initSavedState() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firestore.collection('users').doc("9").ref.get();
            this.UID = yield this.auth.getUID();
            if (this.UID) {
                var doc = yield this.firestore
                    .collection("users")
                    .doc(this.UID).ref
                    .get();
                this.saved = doc.data().saved.includes(this.data.id);
            }
        });
    }
    move() {
        this.router.navigate(['productdetails/' + this.data.id]);
    }
    toggleSave() {
        if (this.UID) {
            this.saved = !this.saved;
            this.updateBookmark(this.data.id);
        }
        else {
            this.router.navigate(['signin']);
        }
        //
    }
    updateBookmark(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var doc = yield this.firestore
                .collection("users")
                .doc(this.UID).ref.get();
            let saved = doc.data().saved;
            //var saved: String[] = doc.data().saved;
            if (this.saved) {
                saved.push(id);
            }
            else {
                saved.forEach((element, index) => {
                    if (element == id)
                        saved.splice(index, 1);
                });
            }
            this.firestore
                .collection("users")
                .doc(this.UID)
                .set({ saved: saved }, { merge: true });
        });
    }
}
ProductitemComponent.ɵfac = function ProductitemComponent_Factory(t) { return new (t || ProductitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ProductitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductitemComponent, selectors: [["app-productitem"]], inputs: { data: "data" }, decls: 15, vars: 9, consts: [[1, "card-deck"], [1, "card"], [1, "card-body"], ["alt", "", 1, "card-img-top", 3, "src", "click"], [1, "card-footer", "text-center"], [2, "margin-top", "-20px"], [1, "float-left", 2, "font-weight", "bold"], [1, "float-right"], [3, "click"], [1, "card-footer", 2, "margin-top", "-35px", "background-color", "rgba(255, 255, 255, 0)"], [1, "text-muted", "float-left"]], template: function ProductitemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductitemComponent_Template_img_click_4_listener() { return ctx.move(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductitemComponent_Template_i_click_10_listener() { return ctx.toggleSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.data.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("bx ", ctx.saved ? "bxs-bookmark" : "bx-bookmark", " text-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 6, ctx.data.price, "INR"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".toplink[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  \r\n  .toplink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  \r\n  .btn-c[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    text-transform: uppercase;\r\n    border-radius: 0;\r\n    font-size: 11px;\r\n\r\n  }\r\n  \r\n  .btn-c[_ngcontent-%COMP%]:hover{\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    text-transform: uppercase;\r\n    border-radius: 0;\r\n  \r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    text-transform: uppercase;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]:hover{\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    text-transform: uppercase;\r\n    border-radius: 0;\r\n  \r\n  }\r\n  \r\n  img[_ngcontent-%COMP%] {\r\n    border-radius: 0px;\r\n    max-width: 110%;\r\n    width: 150%;\r\n    height: 100%;\r\n    border: none;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%]{\r\n    border: none;\r\n  }\r\n  \r\n  .card-footer[_ngcontent-%COMP%]{\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paginate[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    border: none;\r\n    text-align: center;\r\n  }\r\n  \r\n  .paginate[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    border: none;\r\n  }\r\n  \r\n  .paginate[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    border: none;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .sidemenu[_ngcontent-%COMP%] {\r\n      border-right:solid 1px rgba(255, 255, 255, 0.10);\r\n    }\r\n    .card-img-top[_ngcontent-%COMP%]{\r\n      width:100%; \r\n      height:400px; \r\n      -o-object-fit:cover; \r\n         object-fit:cover;\r\n    }\r\n    .card[_ngcontent-%COMP%] {\r\n      background-color: white;\r\n      width: 100%;\r\n      height: 500px;\r\n      -o-object-fit: contain;\r\n         object-fit: contain;\r\n    }\r\n  }\r\n  \r\n  .custom-dropdown[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    width: 100%;\r\n    height: auto;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n  }\r\n  \r\n  .collection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  padding: -20px;\r\n  \r\n}\r\n  \r\n  .collection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border: none;\r\n  text-transform: capitalize;\r\n}\r\n  \r\n  .collection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n  color: black;\r\n  \r\n}\r\n  \r\n  .card-img-top[_ngcontent-%COMP%]{\r\n  width:100%; \r\n  height:260px; \r\n  -o-object-fit:cover; \r\n     object-fit:cover;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RpdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7RUFHQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlOztFQUVqQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7O0VBRWxCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFDQTtJQUNFO01BQ0UsZ0RBQWdEO0lBQ2xEO0lBQ0E7TUFDRSxVQUFVO01BQ1YsWUFBWTtNQUNaLG1CQUFnQjtTQUFoQixnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLHVCQUF1QjtNQUN2QixXQUFXO01BQ1gsYUFBYTtNQUNiLHNCQUFtQjtTQUFuQixtQkFBbUI7SUFDckI7RUFDRjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBbUI7T0FBbkIsbUJBQW1CO0VBQ3JCOztFQUdGO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7O0FBRWhCOztFQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7O0VBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTs7QUFFZDs7RUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQWdCO0tBQWhCLGdCQUFnQjs7QUFFbEIiLCJmaWxlIjoicHJvZHVjdGl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BsaW5rIC5icmVhZGNydW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAudG9wbGluayBhe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAgIFxyXG4gIC5idG4tY3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tYzpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDExMCU7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmR7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIC5jYXJkLWZvb3RlcntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAucGFnaW5hdGUgLnBhZ2luYXRpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnBhZ2luYXRlIGF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luYXRlIC5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuc2lkZW1lbnUge1xyXG4gICAgICBib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMCk7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1pbWctdG9we1xyXG4gICAgICB3aWR0aDoxMDAlOyBcclxuICAgICAgaGVpZ2h0OjQwMHB4OyBcclxuICAgICAgb2JqZWN0LWZpdDpjb3ZlcjtcclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWRyb3Bkb3due1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIH1cclxuICBcclxuICBcclxuLmNvbGxlY3Rpb24gLmNhcmQsLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAtMjBweDtcclxuICBcclxufSAgXHJcblxyXG4uY29sbGVjdGlvbiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uY29sbGVjdGlvbiBidXR0b246aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgXHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3B7XHJcbiAgd2lkdGg6MTAwJTsgXHJcbiAgaGVpZ2h0OjI2MHB4OyBcclxuICBvYmplY3QtZml0OmNvdmVyO1xyXG4gIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductitemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-productitem",
                templateUrl: "./productitem.component.html",
                styleUrls: ["./productitem.component.css"],
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "dJ5B":
/*!********************************************************!*\
  !*** ./src/app/myorder-item/myorder-item.component.ts ***!
  \********************************************************/
/*! exports provided: MyorderItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyorderItemComponent", function() { return MyorderItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "18Le");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products.service */ "jOXV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shiprocket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shiprocket.service */ "AZme");










function MyorderItemComponent_div_0_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyorderItemComponent_div_0_div_27_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r5.track(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Track order");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyorderItemComponent_div_0_div_27_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.orderDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Order details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyorderItemComponent_div_0_div_27_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const cursor_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.cancel(cursor_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Cancel order");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMapInterpolate1"]("border-radius: 4px; background-color: ", ctx_r3.track_url ? "green" : "gray", ";");
} }
function MyorderItemComponent_div_0_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Order Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MyorderItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Estimated delivery: 3 to 5 Business days");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyorderItemComponent_div_0_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const cursor_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.addToCart(cursor_r1, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Buy it again");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, MyorderItemComponent_div_0_div_27_Template, 9, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, MyorderItemComponent_div_0_div_28_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cursor_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", cursor_r1.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Order no: ", ctx_r0.data.oid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cursor_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Color: ", cursor_r1.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Size: ", ctx_r0.data.order_items[0].size || ctx_r0.None, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](21, 8, cursor_r1.size[ctx_r0.data.order_items[0].size] || cursor_r1.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.data.cancelled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.data.cancelled);
} }
class MyorderItemComponent {
    constructor(firestore, document, auth, service, router, ship) {
        this.firestore = firestore;
        this.document = document;
        this.auth = auth;
        this.service = service;
        this.router = router;
        this.ship = ship;
        this.products = [];
        this.images = [];
        this.track_url = "";
        this.UID = "";
        this.saved = false;
    }
    ngOnInit() {
        this.data.order_items.forEach(e => { this.getProduct(e); });
        this.ship.trackOrder(this.data.sid, (uae) => {
            this.track_url = uae;
        });
    }
    addToCart(p, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.UID = yield this.auth.getUID();
            if (this.UID) {
                this.firestore.collection("users").doc(this.UID).collection("cart").ref.add({
                    "pid": p.id,
                    "size": this.data.order_items[i].size,
                    "quantity": 1
                }).then((res) => {
                    //window.alert("ITEM ADDED")
                });
            }
            else {
            }
        });
    }
    track() {
        if (this.track_url) {
            window.location.href = this.track_url;
        }
    }
    orderDetails() {
        this.router.navigate(['placed/' + this.data.doc_id]);
    }
    cancel(vr) {
        var oc = 0;
        if (this.data.order_items.length == 1) {
            this.data.cancelled = true;
            this.firestore.collection('orders').doc(this.data.doc_id).update(JSON.parse(JSON.stringify(this.data)));
            this.ship.cancelOrder(this.data);
        }
        else {
            this.data.order_items.forEach((e, i) => {
                if (e.sku.replace(e.name, '') == vr.id) {
                    this.data.order_items.splice(i, 1);
                    this.data.sub_total = this.data.sub_total - (vr.size[e.size] || vr.price);
                    this.data.total_discount = (this.data.sub_total) * (this.data.discount / 100);
                    this.data.amount = this.data.sub_total + this.data.shipping_charges - this.data.total_discount;
                }
            });
            this.firestore.collection('orders').doc(this.data.doc_id).update(JSON.parse(JSON.stringify(this.data)));
            this.ship.placeOrder(this.data, (e) => { });
        }
    }
    getProduct(oi) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var d = yield this.firestore.collection('products').doc(oi.sku.replace(oi.name, '')).ref.get();
            var pr = Object.assign({ id: d.id }, d.data());
            this.products.push(pr);
            console.log(this.images);
            this.images.push(pr.images[0]);
            if (oi.size) {
                //this.price = this.product.size[oi.size]
            }
            else {
                //this.price = this.product.price;
            }
        });
    }
    eject() {
        //this.firestore.collection('users').doc(this.UID).collection('cart').doc(this.data.id).ref.delete()
    }
    move() {
        //this.router.navigate(["productdetails/" + this.data]);
        //this.document.location.href = 'https://zeroarmario.web.app/productdetails/' + this.data.id;
    }
}
MyorderItemComponent.ɵfac = function MyorderItemComponent_Factory(t) { return new (t || MyorderItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shiprocket_service__WEBPACK_IMPORTED_MODULE_7__["ShiprocketService"])); };
MyorderItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MyorderItemComponent, selectors: [["app-myorder-item"]], inputs: { data: "data" }, decls: 1, vars: 1, consts: [["class", "row", "style", "margin-bottom: 32px; padding-left: 0px;", 4, "ngFor", "ngForOf"], [1, "row", 2, "margin-bottom", "32px", "padding-left", "0px"], [1, "col-lg-3", 2, "padding-left", "0px"], ["alt", "", 3, "src"], [1, "col-lg-4", 2, "padding", "20px", "padding-top", "0px"], [1, "float-left"], [1, "text-muted", "float-right"], [2, "font-weight", "bold"], [2, "font-weight", "bold", "color", "black", "font-size", "18px"], [1, "text-muted", "float-left"], [1, "btn", "first-btn", 2, "border-radius", "4px", "margin-top", "12px", 3, "click"], ["class", "col-lg-3", 4, "ngIf"], ["class", "col-lg-3", "style", "padding-top: 0px;", 4, "ngIf"], [1, "col-lg-3"], [1, "btn", "btn-block", "second-btn", 3, "click"], [1, "btn", "btn-block", "third-btn", 2, "border-radius", "4px", 3, "click"], [1, "btn", "btn-block", "fourth-btn", 2, "border-radius", "4px", "font-weight", "bold", "border", "1.5px solid", 3, "click"], [1, "col-lg-3", 2, "padding-top", "0px"], [2, "font-weight", "bold", "color", "red", "font-size", "18px"]], template: function MyorderItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MyorderItemComponent_div_0_Template, 29, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: [".toplink[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  \r\n  .toplink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  \r\n  img[_ngcontent-%COMP%] {\r\n    border-radius: 2px;\r\n    max-width: 100%;\r\n    width: 100%;\r\n    height: auto;\r\n    text-align: center;\r\n    border: none;\r\n  }\r\n  \r\n  h5[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .first-btn[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .first-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    opacity: 0.7;\r\n  }\r\n  \r\n  .second-btn[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    border: none;\r\n  }\r\n  \r\n  .second-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: green;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    opacity: 0.7;\r\n    border: none;\r\n  }\r\n  \r\n  .third-btn[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    border: none;\r\n  }\r\n  \r\n  .third-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    opacity: 0.7;\r\n    border: none;\r\n  }\r\n  \r\n  .fourth-btn[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .fourth-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .completed-btn[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    opacity: 0.7;\r\n    border: none;\r\n  }\r\n  \r\n  p[_ngcontent-%COMP%] {\r\n    color: green;\r\n    font-size: 13px;\r\n    padding-bottom: 0px;\r\n    margin-bottom: 0px;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n    color: black;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%]:hover{\r\n   text-decoration: underline;\r\n    color: black;\r\n    opacity: 0.7;\r\n  }\r\n  \r\n  .img-row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n  \r\n  .img-row[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    height: 25vw;\r\n    flex: 1 0 260px;\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .img-row[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n    left: 0;\r\n  }\r\n  \r\n  .img-row[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\r\n    left: 999px;\r\n  }\r\n  \r\n  .img-row[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%] {\r\n    top: 999px;\r\n  }\r\n  \r\n  .img-row[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 0;\r\n    width: 75%;\r\n    padding: 5px 10px;\r\n    background: rgba(0, 255, 0, 0.4);\r\n    color: rgba(252, 252, 252, 0.75);\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1.5em;\r\n    font-weight: 600;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n  \r\n  .img-row[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 200px;\r\n    width: 100%;\r\n    padding: 5px 10px;\r\n    background: rgba(0, 0, 255, 0.4);\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1.2em;\r\n    font-weight: 400;\r\n    color: rgba(252, 252, 252, 0.75);\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n  \r\n  .img-row[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: -60px;\r\n    left: -60px;\r\n    width: 200%;\r\n    height: auto;\r\n    z-index: -100;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15b3JkZXItaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsWUFBWTtFQUNkOztFQUNBO0dBQ0MsMEJBQTBCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFFRSxhQUFhO0lBRWIsZUFBZTtFQUNqQjs7RUFDQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFDRSxPQUFPO0VBQ1Q7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxVQUFVO0VBQ1o7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0VBQ2xDOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0VBQ2xDOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0VBQ2YiLCJmaWxlIjoibXlvcmRlci1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wbGluayAuYnJlYWRjcnVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLnRvcGxpbmsgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICBoNSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5maXJzdC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5maXJzdC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWNvbmQtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuc2Vjb25kLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRoaXJkLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRoaXJkLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvdXJ0aC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3VydGgtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICAuY29tcGxldGVkLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gICAgXHJcbiAgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBhOmhvdmVye1xyXG4gICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcblxyXG4gIC5pbWctcm93IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgLmltZy1yb3cgLmltZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogMjV2dztcclxuICAgIGZsZXg6IDEgMCAyNjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5pbWctcm93IC5pbWctY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5pbWctcm93IC5pbWctY29udGFpbmVyOmhvdmVyIGgyIHtcclxuICAgIGxlZnQ6IDk5OXB4O1xyXG4gIH1cclxuICAuaW1nLXJvdyAuaW1nLWNvbnRhaW5lcjpob3ZlciBoNCB7XHJcbiAgICB0b3A6IDk5OXB4O1xyXG4gIH1cclxuICAuaW1nLXJvdyAuaW1nLWNvbnRhaW5lciBoMiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuNCk7XHJcbiAgICBjb2xvcjogcmdiYSgyNTIsIDI1MiwgMjUyLCAwLjc1KTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmltZy1yb3cgLmltZy1jb250YWluZXIgaDQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMC40KTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogcmdiYSgyNTIsIDI1MiwgMjUyLCAwLjc1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuaW1nLXJvdyAuaW1nLWNvbnRhaW5lciBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNjBweDtcclxuICAgIGxlZnQ6IC02MHB4O1xyXG4gICAgd2lkdGg6IDIwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB6LWluZGV4OiAtMTAwO1xyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MyorderItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-myorder-item',
                templateUrl: './myorder-item.component.html',
                styleUrls: ['./myorder-item.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _shiprocket_service__WEBPACK_IMPORTED_MODULE_7__["ShiprocketService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "jOXV":
/*!*************************************!*\
  !*** ./src/app/products.service.ts ***!
  \*************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



class ProductsService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getProducts(category) {
        if (category == 'HOME') {
            return this.firestore.collection('products', ref => ref.limit(4)).snapshotChanges();
        }
        else if (category == 'NULL') {
            return this.firestore.collection('products').snapshotChanges();
        }
        else {
            return this.firestore.collection('products', ref => ref.where('category', 'array-contains', category)).snapshotChanges();
        }
    }
    getUID() {
        return localStorage.getItem("UID") || "";
    }
    setUID(UID) {
        localStorage.setItem("UID", UID);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 82, vars: 0, consts: [[1, "footer-bs"], [1, "row"], [1, "col-lg-3", "col-xs-6", "col-sm-6", "col-md-3", "footer-social", "animated", "fadeInDown"], [1, "border"], ["href", "#"], ["href", "myaccount"], [2, "height", "20px"], [1, "input-group"], ["type", "text", "placeholder", "Enter your email", 1, "form-control"], [1, "input-group-btn"], ["type", "button", 1, "btn"], [1, "bx", "bx-envelope"], [1, "social-icons", 2, "justify-content", "space-evenly"], [1, "bx", "bxl-facebook", "bx-xs"], [1, "bx", "bxl-twitter", "bx-xs"], [1, "bx", "bxl-instagram", "bx-xs"], [1, "bx", "bxl-youtube", "bx-xs"], ["id", "pay", 1, "float-left"], ["src", "../../../assets/images/png/pays.png", "width", "60%"], [2, "text-align", "center", "font-size", "12px"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Get to know us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Our pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Let us help you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Returns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cancelation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Track my order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Stay connected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Get alerts about on Zero Armario.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Payment method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u00A9 Spaxe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".row[_ngcontent-%COMP%]{\r\n  padding-left: 12%;\r\n  padding-right: 12%;\r\n  font-size: 10px;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.footer-bs[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    padding-top: 50px;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n    padding-bottom: 1px;\r\n    color: rgb(255, 255, 255);\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%], .footer-bs[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%], .footer-bs[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%], .footer-bs[_ngcontent-%COMP%]   .footer-ns[_ngcontent-%COMP%] {\r\n    padding: 10px 25px;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%], .footer-bs[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%], .footer-bs[_ngcontent-%COMP%]   .footer-ns[_ngcontent-%COMP%] {\r\n    border-color: transparent;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 0px 0px 10px;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 9px;\r\n    color: rgba(255, 255, 255, 0.70);\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   ul.pages[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0px;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   ul.pages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 5px 0px;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   ul.pages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, 1.00);\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   ul.pages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: rgba(255, 255, 255, 0.80);\r\n    text-decoration: none;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 3px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   ul.list[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0px;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   ul.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 5px 0px;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   ul.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, 0.80);\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   ul.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: rgba(255, 255, 255, 0.60);\r\n    text-decoration: none;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0px;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 3px;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 5px 4px;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, 1.00);\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: rgba(255, 255, 255, 0.80);\r\n    text-decoration: none;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-ns[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 3px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .footer-ns[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 19px;\r\n    color: rgba(255, 255, 255, 0.70);\r\n  }\r\n\r\n.border[_ngcontent-%COMP%] {\r\n    height:0.2vh;\r\n    background-color: white;\r\n    width: 100%;\r\n  }\r\n\r\n#newsletter.container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    min-width: 10px;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  \r\n    outline: none;\r\n    color: white;\r\n    background: none;\r\n    border: none;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\r\n  \r\n    outline: none;\r\n    color: white;\r\n    background: none;\r\n    border: none;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  \r\n    outline: none;\r\n    color: white;\r\n    background: none;\r\n    border: none;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\r\n    \r\n    font-size: 40px;\r\n    text-align: left;\r\n    text-decoration: none;\r\n    letter-spacing: 15px;\r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .round2[_ngcontent-%COMP%]{\r\n    border-radius: 5px;\r\n    background: white;\r\n    padding: 9px 12px;\r\n    width: 4px;\r\n    height: 15px;\r\n    margin: 2px 7px;\r\n  \r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .round3[_ngcontent-%COMP%]{\r\n    border-radius: 5px;\r\n    background: white;\r\n    padding: 9px 15px;\r\n    width: 4px;\r\n    height: 19px;\r\n    margin: 2px 7px;\r\n  \r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .round4[_ngcontent-%COMP%]{\r\n    border-radius: 5px;\r\n    background: white;\r\n    padding: 9px 7px;\r\n    width: 4px;\r\n    height: 17px;\r\n    margin: 2px 7px;\r\n  \r\n  }\r\n\r\n.footer-bs[_ngcontent-%COMP%]   .round5[_ngcontent-%COMP%]{\r\n    border-radius: 5px;\r\n    background: white;\r\n    padding: 9px 8px;\r\n    width: 3px;\r\n    height: 15px;\r\n    margin: 2px 7px;\r\n  \r\n  }\r\n\r\n.social-icons[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\r\n    right:0;\r\n    left: 0;\r\n  }\r\n\r\np[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n    color: white;\r\n    font-size: 12px;\r\n    letter-spacing: 5px;\r\n  }\r\n\r\n.pay-icon[_ngcontent-%COMP%]{\r\n    -o-object-fit: cover;\r\n       object-fit: cover; height: 20px; width: auto;\r\n  }\r\n\r\n.round[_ngcontent-%COMP%]{\r\n    border-radius: 5px;\r\n    background: white;\r\n    padding: 9px 8px;\r\n    width: 60px;\r\n    height: 20px;\r\n    margin: 2px 7px;\r\n  \r\n  }\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: rgba(255, 255, 255, 0.80);;\r\n    font-size: 12px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixnQ0FBZ0M7RUFDbEM7O0FBR0E7SUFDRSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztBQUVBOztJQUVFLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7QUFFQTs7SUFFRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0FBRUE7O0lBRUUsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTs7RUFFakI7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7O0VBRWpCOztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlOztFQUVqQjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTs7RUFFakI7O0FBRUE7SUFDRSxPQUFPO0lBQ1AsT0FBTztFQUNUOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0Usb0JBQWlCO09BQWpCLGlCQUFpQixFQUFFLFlBQVksRUFBRSxXQUFXO0VBQzlDOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlOztFQUVqQjs7QUFFQTtJQUNFLGdDQUFnQztJQUNoQyxlQUFlO0VBQ2pCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICBwYWRkaW5nLWxlZnQ6IDEyJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMiU7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZm9vdGVyLWJzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYnMgLmZvb3Rlci1icmFuZCwgLmZvb3Rlci1icyAuZm9vdGVyLW5hdiwgLmZvb3Rlci1icyAuZm9vdGVyLXNvY2lhbCwgLmZvb3Rlci1icyAuZm9vdGVyLW5zIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1icyAuZm9vdGVyLW5hdiwgLmZvb3Rlci1icyAuZm9vdGVyLXNvY2lhbCwgLmZvb3Rlci1icyAuZm9vdGVyLW5zIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYnMgLmZvb3Rlci1icmFuZCBoMiB7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1icyAuZm9vdGVyLWJyYW5kIHAge1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwKTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1icyAuZm9vdGVyLW5hdiB1bC5wYWdlcyB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWJzIC5mb290ZXItbmF2IHVsLnBhZ2VzIGxpIHtcclxuICAgIHBhZGRpbmc6IDVweCAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYnMgLmZvb3Rlci1uYXYgdWwucGFnZXMgYSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxLjAwKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1icyAuZm9vdGVyLW5hdiB1bC5wYWdlcyBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODApO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWJzIC5mb290ZXItbmF2IGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1icyAuZm9vdGVyLW5hdiB1bC5saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYnMgLmZvb3Rlci1uYXYgdWwubGlzdCBsaSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWJzIC5mb290ZXItbmF2IHVsLmxpc3QgYSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgwKTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1icyAuZm9vdGVyLW5hdiB1bC5saXN0IGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MCk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYnMgLmZvb3Rlci1zb2NpYWwgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1icyAuZm9vdGVyLXNvY2lhbCBoNCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1icyAuZm9vdGVyLXNvY2lhbCBsaSB7XHJcbiAgICBwYWRkaW5nOiA1cHggNHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWJzIC5mb290ZXItc29jaWFsIGEge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMS4wMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYnMgLmZvb3Rlci1zb2NpYWwgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgwKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1icyAuZm9vdGVyLW5zIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1icyAuZm9vdGVyLW5zIHAge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MCk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5ib3JkZXIge1xyXG4gICAgaGVpZ2h0OjAuMnZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI25ld3NsZXR0ZXIuY29udGFpbmVyIGkge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWluLXdpZHRoOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWJzIC5pbnB1dC1ncm91cCBpbnB1dCB7XHJcbiAgXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1icyAuaW5wdXQtZ3JvdXAgaW5wdXQ6aG92ZXIge1xyXG4gIFxyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYnMgLmlucHV0LWdyb3VwIC5idG4ge1xyXG4gIFxyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYnMgLnNvY2lhbC1pY29ucyB7XHJcbiAgICAvKiBwYWRkaW5nOiAxMHB4IDIwcHg7ICovXHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYnMgIC5yb3VuZDJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDlweCAxMnB4O1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIG1hcmdpbjogMnB4IDdweDtcclxuICBcclxuICB9XHJcbiAgLmZvb3Rlci1icyAgLnJvdW5kM3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOXB4IDE1cHg7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgbWFyZ2luOiAycHggN3B4O1xyXG4gIFxyXG4gIH1cclxuICAuZm9vdGVyLWJzICAucm91bmQ0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA5cHggN3B4O1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIG1hcmdpbjogMnB4IDdweDtcclxuICBcclxuICB9XHJcbiAgLmZvb3Rlci1icyAgLnJvdW5kNXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOXB4IDhweDtcclxuICAgIHdpZHRoOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW46IDJweCA3cHg7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAuc29jaWFsLWljb25zIC5pY29ucyB7XHJcbiAgICByaWdodDowO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgcHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgLnBheS1pY29ue1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7IGhlaWdodDogMjBweDsgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAucm91bmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDlweCA4cHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogMnB4IDdweDtcclxuICBcclxuICB9XHJcblxyXG4gIGF7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgwKTs7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lFR4":
/*!***************************************!*\
  !*** ./src/app/window-ref.service.ts ***!
  \***************************************/
/*! exports provided: WindowRefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRefService", function() { return WindowRefService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function _window() {
    // return the global native browser window object
    return window;
}
class WindowRefService {
    constructor(platformId) {
        this.platformId = platformId;
    }
    get nativeWindow() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            return _window();
        }
    }
}
WindowRefService.ɵfac = function WindowRefService_Factory(t) { return new (t || WindowRefService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
WindowRefService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowRefService, factory: WindowRefService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowRefService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "lPsf":
/*!******************************************************!*\
  !*** ./src/app/addresspage/addresspage.component.ts ***!
  \******************************************************/
/*! exports provided: AddresspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddresspageComponent", function() { return AddresspageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _address_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../address.model */ "x9Az");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "18Le");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shiprocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shiprocket.service */ "AZme");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rozorpay_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rozorpay.service */ "F70D");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "55oq");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _addresspage_item_addresspage_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../addresspage-item/addresspage-item.component */ "bgbB");













function AddresspageComponent_app_addresspage_item_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-addresspage-item", 46);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", item_r1);
} }
class AddresspageComponent {
    constructor(firestore, auth, datepipe, ship, router, razor) {
        this.firestore = firestore;
        this.auth = auth;
        this.datepipe = datepipe;
        this.ship = ship;
        this.router = router;
        this.razor = razor;
        this.UID = "";
        this.mm = "Prepaid";
        this.address = new _address_model__WEBPACK_IMPORTED_MODULE_2__["Address"]();
        this.amounts = [];
        this.sub_total = 0;
        this.total = 0;
        this.deliver_fee = 100;
        this.discount = 0;
        this.expired = false;
        this.invalid = false;
    }
    pay(v) {
        this.mm = v.value;
    }
    deploy() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.firestore.collection('users').doc(this.UID).collection('address').add(JSON.parse(JSON.stringify(this.address)));
            var its = [];
            for (let i = 0; i < this.items.length; i++) {
                var ci = this.items[i];
                var pi = this.products[i];
                var or = new _address_model__WEBPACK_IMPORTED_MODULE_2__["OrderItem"]();
                or.selling_price = pi.size[ci.size] || pi.price;
                or.name = pi.name;
                or.sku = pi.id + "" + pi.name;
                or.units = ci.quantity;
                or.size = ci.size;
                its.push(or);
            }
            var order = new _address_model__WEBPACK_IMPORTED_MODULE_2__["Order"]();
            var date = new Date();
            order.order_id = Date.now().toString();
            order.billing_address = this.address.door + " " + this.address.address;
            order.billing_address_2 = this.address.address_2;
            order.billing_city = this.address.city;
            order.billing_country = this.address.country;
            order.billing_customer_name = this.address.customer_name;
            order.billing_email = this.address.email;
            order.billing_last_name = this.address.last_name;
            order.billing_phone = this.address.phone;
            order.billing_pincode = this.address.pincode;
            order.billing_state = this.address.state;
            order.billing_country = "India";
            order.shipping_is_billing = true;
            order.order_date = this.datepipe.transform(date, 'yyyy-MM-dd hh:mm');
            order.pickup_location = "Archaric";
            order.order_items = its;
            order.sub_total = this.sub_total;
            order.total_discount = this.discount;
            order.shipping_charges = this.deliver_fee;
            order.length = 10;
            order.breadth = 10;
            order.height = 10;
            order.weight = 1;
            if (this.coupon) {
                order.discount = this.coupon.offer;
            }
            else {
                this.discount = 0;
            }
            order.payment_method = this.mm;
            order.comment = this.UID;
            if (this.mm == 'Prepaid') {
                this.razor.createRzpayOrder(order, (o) => {
                    this.dono(o);
                });
            }
            else {
                this.dono(order);
            }
        });
    }
    dono(order) {
        order.amount = order.sub_total + order.shipping_charges - order.total_discount;
        this.ship.placeOrder(order, (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var res = e;
            var lavda = JSON.parse(JSON.stringify(order));
            lavda['oid'] = res.order_id;
            lavda['sid'] = res.shipment_id;
            lavda['date'] = new Date();
            var ddd = yield this.firestore.collection('orders').ref.add(lavda);
            this.router.navigate(['placed/' + ddd.id]);
        }));
    }
    ngOnInit() {
        this.firestore.collection('users').ref.limit(1).get().then(e => {
            this.auth.getUID().then((uu) => {
                this.UID = uu;
                this.firestore
                    .collection("users")
                    .doc(uu)
                    .collection("cart")
                    .snapshotChanges()
                    .subscribe((data) => {
                    console.log("AAADDDDDREASASS PAGE");
                    this.items = data.map((eb) => {
                        return Object.assign({ id: eb.payload.doc.id }, (eb.payload.doc.data()));
                    });
                    this.amounts = [];
                    this.products = [];
                    this.items.forEach((p) => {
                        this.getProduct(p);
                    });
                });
            });
        });
    }
    getProduct(p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var d = yield this.firestore.collection('products').doc(p.pid).ref.get();
            var pr = Object.assign({ id: d.id }, d.data());
            this.products.push(pr);
            if (p.size) {
                this.amounts.push(pr.size[p.size]);
            }
            else {
                this.amounts.push(pr.price);
            }
            if (this.items.length == this.amounts.length && this.items.length != 0) {
                if (this.items[0].coupon) {
                    var cc = yield this.firestore.collection('coupon').doc(this.items[0].coupon).ref.get();
                    this.coupon = Object.assign({ id: cc.id }, cc.data());
                    this.invalid = false;
                    var o = this.coupon.expire.toDate();
                    //console.log( typeof(o), o , o.getTime(), Date.now())
                    if (o.getTime() < Date.now()) {
                        //window.alert('EXPIRED')
                        this.expired = true;
                        this.coupon = null;
                    }
                    else {
                        this.expired = false;
                    }
                }
                this.calculateT();
            }
        });
    }
    calculateT() {
        this.sub_total = 0;
        this.amounts.forEach((e) => {
            this.sub_total = this.sub_total + e;
        });
        if (this.coupon) {
            this.discount = this.sub_total * (this.coupon.offer / 100);
        }
        else {
            this.discount = 0;
        }
        this.total = this.sub_total + this.deliver_fee - this.discount;
    }
    couponie(c) {
        this.coupon = null;
        this.firestore.collection('coupon').ref.where('code', '==', c.toUpperCase()).limit(1).get().then((d) => {
            if (d.docs.length == 1) {
                this.coupon = Object.assign({ id: d.docs[0].id }, d.docs[0].data());
                this.invalid = false;
                var o = this.coupon.expire.toDate();
                //console.log( typeof(o), o , o.getTime(), Date.now())
                if (o.getTime() < Date.now()) {
                    //window.alert('EXPIRED')
                    this.expired = true;
                    this.coupon = null;
                }
                else {
                    this.expired = false;
                }
            }
            else {
                this.invalid = true;
            }
            this.calculateT();
            this.items.forEach((e) => {
                window.alert(this.coupon.id + "UIDD" + this.UID + "CART" + e.id);
                this.firestore.collection('users').doc(this.UID).collection('cart').doc(e.id).ref.update({ 'coupon': this.coupon.id });
            });
        });
    }
}
AddresspageComponent.ɵfac = function AddresspageComponent_Factory(t) { return new (t || AddresspageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shiprocket_service__WEBPACK_IMPORTED_MODULE_6__["ShiprocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rozorpay_service__WEBPACK_IMPORTED_MODULE_8__["RozorpayService"])); };
AddresspageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddresspageComponent, selectors: [["app-addresspage"]], decls: 101, vars: 17, consts: [[1, "container", 2, "padding-top", "150px"], ["category", "Shopping Bag / Address"], [1, "row"], [1, "col-lg-4", "col-md-12", "col-sm-12"], [2, "font-weight", "bold"], ["routerLink", "/checkout", 2, "color", "blue", "font-size", "14px"], [1, "liness"], [3, "data", 4, "ngFor", "ngForOf"], [1, "col-4"], [1, "col-5"], [1, "col-3"], [1, "new1"], [1, "col-4", 2, "font-weight", "bolder"], [1, "col-lg-1"], [1, "col-lg-7"], ["id", "ship", 1, "row"], [1, "col-lg-6", "col-md-12", "col-sm-12"], ["id", "email", "type", "text", "placeholder", "Email", 1, "form-control-lg", 3, "value", "input"], ["type", "text", "placeholder", "First Name", 1, "form-control-lg", 3, "value", "input"], ["type", "text", "placeholder", "Adress line 1", 1, "form-control-lg", 3, "value", "input"], ["type", "text", "placeholder", "Address line 2", 1, "form-control-lg", 3, "value", "input"], ["type", "text", "placeholder", "State", 1, "form-control-lg", 3, "value", "input"], ["id", "container-2", 1, "col-lg-6", "col-md-12", "col-sm-12"], ["type", "text", "placeholder", "Phone no", 1, "form-control-lg", 3, "value", "input"], ["type", "text", "placeholder", "Last Name", 1, "form-control-lg", 3, "value", "input"], ["type", "text", "placeholder", "House No.", 1, "form-control-lg", 3, "value", "input"], ["type", "text", "placeholder", "City", 1, "form-control-lg", 3, "value", "input"], ["type", "text", "placeholder", "Pincode No.", 1, "form-control-lg", 3, "value", "input"], ["id", "shipping", 1, "row"], [1, "col-lg-5", "col-md-12", "col-sm-12"], [2, "font-weight", "bolder"], ["value", "1", 2, "font-size", "15px", "font-family", "proxima-nova", 3, "checked"], [1, "col-2", 2, "font-size", "15px", "font-family", "proxima-nova"], [2, "font-size", "12px"], [1, "col-1"], ["aria-label", "Select an option", 3, "change"], [1, "col-lg-5", "col-md-12", "col-sm-12", 2, "padding-left", "0px", "padding-right", "0px"], ["value", "Prepaid", 2, "width", "100%", "font-size", "15px", "font-family", "proxima-nova"], [1, "liness", 2, "width", "220px", "height", "1px"], ["value", "COD", 2, "width", "100%", "font-size", "15px", "font-family", "proxima-nova"], [1, "col-6", 2, "font-weight", "bold", "color", "gray"], [1, "col-2", 2, "font-weight", "bolder"], [1, "row", 2, "align-content", "center"], ["type", "checkbox", 1, "col-1", 2, "border-radius", "50%", "font-weight", "bold"], [1, "col-11"], [1, "btn", "btn-dark", 2, "padding", "12px", "margin", "12px", "font-weight", "bold", "border-radius", "0px", "background-color", "black", "font-size", "14px", 3, "click"], [3, "data"]], template: function AddresspageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Product in Checkout Bag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Edit Bag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddresspageComponent_app_addresspage_item_12_Template, 1, 1, "app-addresspage-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Shipping Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddresspageComponent_Template_input_input_40_listener($event) { return ctx.address.email = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddresspageComponent_Template_input_input_41_listener($event) { return ctx.address.customer_name = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddresspageComponent_Template_input_input_42_listener($event) { return ctx.address.address = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddresspageComponent_Template_input_input_43_listener($event) { return ctx.address.address_2 = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddresspageComponent_Template_input_input_44_listener($event) { return ctx.address.state = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddresspageComponent_Template_input_input_46_listener($event) { return ctx.address.phone = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddresspageComponent_Template_input_input_47_listener($event) { return ctx.address.last_name = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddresspageComponent_Template_input_input_48_listener($event) { return ctx.address.door = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddresspageComponent_Template_input_input_49_listener($event) { return ctx.address.city = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddresspageComponent_Template_input_input_50_listener($event) { return ctx.address.pincode = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Shipping Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-radio-button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Standard Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " \u2713 Order before 18:00 to received bettween 1 to 3 Working days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " \u2713 Pay With Google pay,paytm, Mstercard, Visa, Paypal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\u2713 Shipping Only in india");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " \u2713 Order can be returned within 7 Days. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Payment Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-radio-group", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddresspageComponent_Template_mat_radio_group_change_76_listener($event) { return ctx.pay($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mat-radio-button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Pay Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "hr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mat-radio-button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Pay On Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Grand Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " I accept the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " and Privacy Statement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddresspageComponent_Template_button_click_99_listener() { return ctx.deploy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " Confrim Your Order ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs.", ctx.sub_total, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs.", ctx.deliver_fee, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs.", ctx.total, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.address.email || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.address.customer_name || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.address.address || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.address.address_2 || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.address.state || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.address.phone || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.address.last_name || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.address.door || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.address.city || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.address.pincode || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs.", ctx.deliver_fee, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs.", ctx.total, "");
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioButton"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioGroup"], _addresspage_item_addresspage_item_component__WEBPACK_IMPORTED_MODULE_11__["AddresspageItemComponent"]], styles: ["@import url(\"https://use.typekit.net/bza3vcv.css\");\n\n\nimg[_ngcontent-%COMP%]{\n    width:120px;\n    height:auto;\n}\n\n\n.container[_ngcontent-%COMP%]{\n    padding-top: 8%;\n    font-family:\"proxima-nova\";\n}\n\n\n.form-control-lg[_ngcontent-%COMP%]{\n    margin-top: 5%;\n    width: 100%;\n    background-color: none;\n    border:1px solid black;\n}\n\n\n.container-2[_ngcontent-%COMP%]{\n    margin-top: 17%;\n}\n\n\n#shipping[_ngcontent-%COMP%]{\n    margin-top: 5%;  \n}\n\n\n@media (min-width: 992px) { \n    #container-2[_ngcontent-%COMP%]{\n        margin-top: 17%;\n    }\n    #ship[_ngcontent-%COMP%]{\n        margin-top: 13%;\n    }\n }\n\n\n@media (min-width: 1200px) { \n    #container-2[_ngcontent-%COMP%]{\n        margin-top: 7%;\n    }\n}\n\n\n@media (min-width: 950px ) { \n    #container-2[_ngcontent-%COMP%]{\n        margin-top: 7%;\n    } \n    \n }\n\n\n.breadcrumb[_ngcontent-%COMP%]{\n     color:black;\n }\n\n\ninput[type=text][_ngcontent-%COMP%]{\n     border-radius: 0px;\n     outline: 1px solid;\n     font-family: 'proxima-nova';\n     font-size: 13px;\n }\n\n\nh2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{\n    font-family: 'proxima-nova';\n }\n\n\n.lines[_ngcontent-%COMP%]{\n     height: 0.1%;\n     width: 100%;\n     border: none;\n     outline: none;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3NwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQWtEOzs7QUFHbEQ7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmOzs7QUFDQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7OztBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOzs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7OztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7O0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7Q0FDSDs7O0FBR0Q7SUFDSTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7O0NBRUg7OztBQUVBO0tBQ0ksV0FBVztDQUNmOzs7QUFFQTtLQUNJLGtCQUFrQjtLQUNsQixrQkFBa0I7S0FDbEIsMkJBQTJCO0tBQzNCLGVBQWU7Q0FDbkI7OztBQUVBO0lBQ0csMkJBQTJCO0NBQzlCOzs7QUFFQTtLQUNJLFlBQVk7S0FDWixXQUFXO0tBQ1gsWUFBWTtLQUNaLGFBQWE7Q0FDakIiLCJmaWxlIjoiYWRkcmVzc3BhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYnphM3Zjdi5jc3NcIik7XG5cblxuaW1ne1xuICAgIHdpZHRoOjEyMHB4O1xuICAgIGhlaWdodDphdXRvO1xufVxuLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nLXRvcDogOCU7XG4gICAgZm9udC1mYW1pbHk6XCJwcm94aW1hLW5vdmFcIjtcbn1cbi5mb3JtLWNvbnRyb2wtbGd7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xufVxuLmNvbnRhaW5lci0ye1xuICAgIG1hcmdpbi10b3A6IDE3JTtcbn1cbiNzaGlwcGluZ3tcbiAgICBtYXJnaW4tdG9wOiA1JTsgIFxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7IFxuICAgICNjb250YWluZXItMntcbiAgICAgICAgbWFyZ2luLXRvcDogMTclO1xuICAgIH1cbiAgICAjc2hpcHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTMlO1xuICAgIH1cbiB9XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyBcbiAgICAjY29udGFpbmVyLTJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDclO1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk1MHB4ICkgeyBcbiAgICAjY29udGFpbmVyLTJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDclO1xuICAgIH0gXG4gICAgXG4gfVxuXG4gLmJyZWFkY3J1bWJ7XG4gICAgIGNvbG9yOmJsYWNrO1xuIH1cblxuIGlucHV0W3R5cGU9dGV4dF17XG4gICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgb3V0bGluZTogMXB4IHNvbGlkO1xuICAgICBmb250LWZhbWlseTogJ3Byb3hpbWEtbm92YSc7XG4gICAgIGZvbnQtc2l6ZTogMTNweDtcbiB9XG5cbiBoMiwgaDQsIGgxLCBoNSwgaDYsIGgze1xuICAgIGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhJztcbiB9XG5cbiAubGluZXN7XG4gICAgIGhlaWdodDogMC4xJTtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGJvcmRlcjogbm9uZTtcbiAgICAgb3V0bGluZTogbm9uZTtcbiB9XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddresspageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-addresspage',
                templateUrl: './addresspage.component.html',
                styleUrls: ['./addresspage.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }, { type: _shiprocket_service__WEBPACK_IMPORTED_MODULE_6__["ShiprocketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _rozorpay_service__WEBPACK_IMPORTED_MODULE_8__["RozorpayService"] }]; }, null); })();


/***/ }),

/***/ "lvch":
/*!************************************************!*\
  !*** ./src/app/e-search/e-search.component.ts ***!
  \************************************************/
/*! exports provided: ESearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESearchComponent", function() { return ESearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "jOXV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "55oq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _productitem_productitem_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../productitem/productitem.component */ "c3h7");










function ESearchComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ESearchComponent_div_18_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.addColor($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", s_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", s_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", s_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r8, " ");
} }
function ESearchComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ESearchComponent_div_27_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const s_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.addColor(s_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", s_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", s_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r11, " ");
} }
function ESearchComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ESearchComponent_span_29_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const s_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.addColor(s_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", s_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r14, " ");
} }
function ESearchComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ESearchComponent_div_38_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const s_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.addSize(s_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", s_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", s_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r17, " ");
} }
function ESearchComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ESearchComponent_span_40_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const s_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.addSize(s_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", s_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r20, " ");
} }
function ESearchComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ESearchComponent_div_49_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.addOffer($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", s_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", s_r23.replaceAll(" ", ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", s_r23.replaceAll(" ", ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r23, " ");
} }
function ESearchComponent_span_51_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ESearchComponent_span_51_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const s_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.addOffer(s_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", s_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r26, " ");
} }
function ESearchComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-productitem", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", product_r29);
} }
class ESearchComponent {
    constructor(productService, route, firestore) {
        this.productService = productService;
        this.route = route;
        this.firestore = firestore;
        this.current = 1;
        this.more = true;
        this.recom = false;
        this.pages = [1, 2];
        this.limit = 10;
        this.sizes = ['S', 'M', 'L', 'X', 'XL', 'XXL'];
        this.ss = [];
        this.colors = [];
        this.sc = [];
        this.offers = [];
        this.so = [];
    }
    ngOnInit() {
        this.title = this.route.snapshot.paramMap.get("title");
        this.category = this.route.snapshot.paramMap.get("cat");
        this.firestore.collection('static').doc('data').ref.get().then((d) => {
            this.colors = d.data().colors;
            this.offers = d.data().offers;
        });
        this.getData();
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var q = this.firestore.collection("products").ref;
            if (this.category != "NULL") {
                q.where("category", "array-contains", this.category);
            }
            if (this.ss.length != 0) {
                //q.where("avail", 'array-contains-any', this.ss);
            }
            var idx = this.limit * (this.current - 1) - 1;
            if (idx < 0) {
                idx = 0;
            }
            if (this.docs && idx != 0) {
                var after = this.docs[idx];
                //window.alert(idx);
                var d = yield q.orderBy("name").limit(this.limit).startAfter(after).get();
                d.docs.forEach((e) => {
                    this.docs.push(e);
                });
                this.dic = d.docs;
            }
            else {
                var d = yield q.orderBy("name").limit(this.limit).get();
                this.docs = d.docs;
                this.dic = d.docs;
            }
            if (this.dic.length < this.limit) {
                this.more = false;
                if (this.current == 1) {
                    this.pages.splice(1, 1);
                }
            }
            else {
                this.more = true;
            }
            this.products = this.dic.map((e) => {
                console.log(e.data());
                return Object.assign({ id: e.id }, e.data());
            });
        });
    }
    addOffer(s) {
        if (this.so.includes(s)) {
            this.removeOffer(s);
        }
        else {
            this.so.push(s);
        }
        this.getData();
    }
    toggleRec() {
        this.recom = !this.recom;
        this.getData();
    }
    removeOffer(s) {
        var idx = this.so.indexOf(s);
        this.so.splice(idx, 1);
    }
    addColor(s) {
        if (this.sc.includes(s)) {
            this.removeColor(s);
        }
        else {
            this.sc.push(s);
        }
        this.getData();
    }
    removeColor(s) {
        var idx = this.sc.indexOf(s);
        this.sc.splice(idx, 1);
    }
    addSize(s) {
        if (this.ss.includes(s)) {
            this.removeSize(s);
        }
        else {
            this.ss.push(s);
        }
        this.getData();
    }
    removeSize(s) {
        var idx = this.ss.indexOf(s);
        this.ss.splice(idx, 1);
    }
    moveTo(pageNumber) {
        this.current = pageNumber;
        if (pageNumber < 4) {
            this.pages.splice(3, this.pages.length - 2);
        }
        this.getData();
    }
    next() {
        if (this.current == this.pages.length) {
            this.addMore();
        }
        else {
            this.moveTo(this.current + 1);
        }
    }
    addMore() {
        if (this.more) {
            var e = this.pages[this.pages.length - 1];
            this.pages.push(e + 1);
            this.moveTo(this.pages[this.pages.length - 1]);
        }
    }
}
ESearchComponent.ɵfac = function ESearchComponent_Factory(t) { return new (t || ESearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"])); };
ESearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ESearchComponent, selectors: [["app-e-search"]], decls: 65, vars: 10, consts: [[1, "container", 2, "left", "0px"], [1, "row", 2, "padding-top", "130px"], [1, "container", 2, "left", "0px", "padding", "0px"], [3, "category"], [1, "row", 2, "padding-top", "2%"], [1, "col-lg-2", "col-sm-3"], ["id", "collection", 1, "collection", 2, "margin-bottom", "24px"], ["id", "accordionExample", 1, "accordion", 2, "border-right", "solid 1px rgba(0, 0, 0, 0.137)"], [2, "font-family", "proxima-nova", "font-size", "14px", "font-weight", "bold"], [1, "card"], ["id", "headingOne", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "false", "aria-controls", "collapseOne", 1, "btn-block", "dropdown-toggle2", "text-left"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordionExample", 1, "collapse"], [1, "card-body", 2, "padding-left", "0px"], [1, "form-check", 2, "padding-left", "0px"], ["class", "mk2", 4, "ngFor", "ngForOf"], ["id", "headingTwo", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "btn-block", "dropdown-toggle2", "text-left"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#accordionExample", 1, "collapse"], ["style", "\n                  font-size: 12px;\n                  margin-right: 12px;\n                  color: rgba(0, 0, 0, 0.664);\n                ", "class", "form-check-label", 3, "for", "click", 4, "ngFor", "ngForOf"], ["id", "headingThree", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "btn-block", "dropdown-toggle2", "text-left"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-parent", "#accordionExample", 1, "collapse"], ["data-toggle", "collapse", "data-target", "#collapsefour", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "btn-block", "dropdown-toggle2", "text-left"], ["id", "collapsefour", "aria-labelledby", "headingTwo", "data-parent", "#accordionExample", 1, "collapse"], [1, "col-lg-10", "col-sm-9"], [1, "product"], [1, "btn", "btn-c", 2, "float", "right"], [1, "bx", "bx-down-arrow-alt"], [1, "container", 2, "padding-top", "5%"], [1, "row"], ["class", "col-sm-6 col-lg-3", "id", "product", 4, "ngFor", "ngForOf"], [2, "border-bottom", "1px solid rgba(0, 0, 0, 0.5)", "padding-bottom", "17px", "width", "fit-content", "padding-left", "4px", "padding-right", "16px"], [1, "mk2"], ["type", "checkbox", 1, "form-check-input", 2, "color", "black", 3, "value", "id", "change"], [1, "form-check-label", 3, "for"], ["ng-checked", "sc.includes(s)", "type", "checkbox", 1, "form-check-input", 2, "color", "black", 3, "id", "change"], [1, "form-check-label", 2, "font-size", "12px", "margin-right", "12px", "color", "rgba(0, 0, 0, 0.664)", 3, "for", "click"], ["data-icon", "ic:baseline-close", "data-inline", "false", 1, "iconify", 2, "color", "rgba(0, 0, 0, 0.37)"], ["type", "checkbox", "ng-checked", "ss.includes(s)", 1, "form-check-input", 3, "id", "change"], ["type", "checkbox", "ng-checked", "so.includes(s)", 1, "form-check-input", 2, "color", "black", 3, "value", "id", "change"], ["id", "product", 1, "col-sm-6", "col-lg-3"], [3, "data"]], template: function ESearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " I\u2019m looking for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Sleeve ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ESearchComponent_div_18_Template, 5, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Colour ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ESearchComponent_div_27_Template, 5, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ESearchComponent_span_29_Template, 4, 2, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Size ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ESearchComponent_div_38_Template, 5, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ESearchComponent_span_40_Template, 3, 2, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Offers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ESearchComponent_div_49_Template, 5, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ESearchComponent_span_51_Template, 4, 2, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " MOST RECOMMENDED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, ESearchComponent_div_61_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("category", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.offers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ss);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.offers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.so);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _productitem_productitem_component__WEBPACK_IMPORTED_MODULE_8__["ProductitemComponent"]], styles: [".toplink[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  \r\n  .toplink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  \r\n  .btn-c[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    text-transform: uppercase;\r\n    border-radius: 0;\r\n    font-size: 11px;\r\n  \r\n  }\r\n  \r\n  .btn-c[_ngcontent-%COMP%]:hover{\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    text-transform: uppercase;\r\n    border-radius: 0;\r\n  \r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    align-items: center;\r\n    border-color: black;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]:hover{\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    border-color: black;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  img[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    height: 250px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n  \r\n    \r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%]{\r\n    border: none;\r\n    padding-left:0px;\r\n    -o-object-fit:contain;\r\n       object-fit:contain;\r\n    \r\n  }\r\n  \r\n  .card-footer[_ngcontent-%COMP%]{\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n  \r\n  .paginate[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{\r\n    background-color: rgba(255, 255, 255, 0);\r\n    color: black;\r\n    border: none;\r\n    text-align: center;\r\n  }\r\n  \r\n  .paginate[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    background-color: rgba(255, 255, 255, 0);\r\n    color: black;\r\n    border: none;\r\n  }\r\n  \r\n  .paginate[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color: rgba(255, 255, 255, 0);\r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .paginate[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\r\n    \r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .sidemenu[_ngcontent-%COMP%] {\r\n      border-right:solid 1px rgba(255, 255, 255, 0.548);\r\n    }\r\n  }\r\n  \r\n  .custom-dropdown[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .collection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  padding: -30px;\r\n  padding-left: 0px;\r\n  \r\n  }\r\n  \r\n  .collection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border: none;\r\n  text-transform: capitalize;\r\n  }\r\n  \r\n  .collection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n  color: black;\r\n  }\r\n  \r\n  #product[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    width: 350px;\r\n    border: none;\r\n    justify-content: space-between;\r\n    \r\n  }\r\n  \r\n  .dropdown-toggle2[_ngcontent-%COMP%]{\r\n    padding-left: 0px;\r\n     border: none;\r\n     position: relative;\r\n     display: inline-block;\r\n     outline: 0;\r\n     font-size: 14px;\r\n     \r\n  }\r\n  \r\n  .dropdown-toggle2[_ngcontent-%COMP%]::before{\r\n    position: absolute;\r\n    top: 0px;\r\n    border: none;\r\n    right: 8px;\r\n    outline: none;\r\n    content: url('https://api.iconify.design/el-chevron-down.svg?height=9');\r\n    align-items: center;\r\n    align-content: center;\r\n    \r\n  }\r\n  \r\n  .dropdown-toggle2[_ngcontent-%COMP%]:active{\r\n    border: none;\r\n    outline: none;\r\n  }\r\n  \r\n  .dropdown-toggle2[_ngcontent-%COMP%]:hover{\r\n    opacity: 0.7;\r\n  }\r\n  \r\n  .dropdown-toggle2[_ngcontent-%COMP%]:focus{\r\n    border: none;\r\n    font-weight: bold;\r\n    \r\n  }\r\n  \r\n  .hov[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    width: 400px;\r\n    height: 2px;\r\n    background-color: rgba(0, 0, 0, 0.589);\r\n  }\r\n  \r\n  .hoverp[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    width: 47px;\r\n    height: 2px;\r\n    display: block;\r\n  }\r\n  \r\n  .hoverp[_ngcontent-%COMP%]::after{\r\n    content: '';\r\n    display: block;\r\n    width: 0px;\r\n    height: 2px;\r\n    background-color: black;\r\n    transition: width .2s;\r\n  }\r\n  \r\n  .hoverp[_ngcontent-%COMP%]::before{\r\n    text-align: center;\r\n    width: 47px;\r\n    height: 2px;\r\n    display: block;\r\n    background-color: rgba(0, 0, 0, 0.753);\r\n  }\r\n  \r\n  .hoverp[_ngcontent-%COMP%]::after:active{\r\n    text-align: center;\r\n    width: 47px;\r\n    height: 2px;\r\n    padding-top: 40px;\r\n    display: block;\r\n    background-color: rgb(0, 0, 0);\r\n    transition: width .2s;\r\n  }\r\n  \r\n  .hoverp[_ngcontent-%COMP%]:hover::after{\r\n    width: 47px;\r\n    transition: width .2s;\r\n  }\r\n  \r\n  .mk2[_ngcontent-%COMP%]{\r\n    margin-bottom: 12px;\r\n    margin-left: 12px;\r\n    width: 100%;\r\n  }\r\n  \r\n  input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n  }\r\n  \r\n  label[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n    border: 2px solid rgb(0, 0, 0);\r\n    content: \"\\00a0\";\r\n    border-radius: 10px;\r\n    display: inline-block;\r\n    font: 16px/1em sans-serif;\r\n    height: 20px;\r\n    margin: 0 .25em 0 0;\r\n    padding: 0;\r\n    vertical-align: center;\r\n    width: 20px;\r\n  }\r\n  \r\n  input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n    background: rgb(255, 255, 255);\r\n    color: black;\r\n    content: url('https://api.iconify.design/emojione-monotone:white-heavy-check-mark.svg?height=16');\r\n    text-align: center;\r\n    \r\n    align-content: center;\r\n  }\r\n  \r\n  input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\r\n    font-weight: bold;\r\n  }\r\n  \r\n  input[type=\"checkbox\"][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]::before {\r\n      outline: rgb(59, 153, 252) auto 5px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7RUFHQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlOztFQUVqQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2IsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7O0lBRWxCOzs7OztrQkFLYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIscUJBQWtCO09BQWxCLGtCQUFrQjs7RUFFcEI7O0VBQ0E7SUFDRSxZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0Usd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx3Q0FBd0M7SUFDeEMsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTs7RUFFQTs7RUFDQTtJQUNFO01BQ0UsaURBQWlEO0lBQ25EO0VBQ0Y7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIscUJBQXFCO0VBQ3ZCOztFQUlBO0VBQ0EsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxpQkFBaUI7O0VBRWpCOztFQUVBO0VBQ0EsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUI7O0VBQ0E7RUFDQSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osOEJBQThCOztFQUVoQzs7RUFHQTtJQUNFLGlCQUFpQjtLQUNoQixZQUFZO0tBQ1osa0JBQWtCO0tBQ2xCLHFCQUFxQjtLQUNyQixVQUFVO0tBQ1YsZUFBZTs7RUFFbEI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLHVFQUF1RTtJQUN2RSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlEQUF5RDtFQUMzRDs7RUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCOztFQUVuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLDhCQUE4QjtJQUM5QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gscUJBQXFCO0VBQ3ZCOztFQUlBO0lBQ0UsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsV0FBVztFQUNiOztFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixpR0FBaUc7SUFDakcsa0JBQWtCOztJQUVsQixxQkFBcUI7RUFDdkI7O0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7TUFDSSxtQ0FBbUM7RUFDdkMiLCJmaWxlIjoiZS1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BsaW5rIC5icmVhZGNydW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAudG9wbGluayBhe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gICAgXHJcbiAgLmJ0bi1je1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuYnRuLWM6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgXHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjpub25lOyAqL1xyXG4gIH1cclxuICBcclxuICAuY2FyZHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDowcHg7XHJcbiAgICBvYmplY3QtZml0OmNvbnRhaW47XHJcbiAgICBcclxuICB9XHJcbiAgLmNhcmQtZm9vdGVye1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0ZSAucGFnaW5hdGlvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wYWdpbmF0ZSBhe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luYXRlIC5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0ZSBhLmFjdGl2ZXtcclxuICAgIFxyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zaWRlbWVudSB7XHJcbiAgICAgIGJvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tZHJvcGRvd257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLmNvbGxlY3Rpb24gLmNhcmQgLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAtMzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBcclxuICB9ICBcclxuICBcclxuICAuY29sbGVjdGlvbiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbiAgLmNvbGxlY3Rpb24gYnV0dG9uOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAjcHJvZHVjdCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5kcm9wZG93bi10b2dnbGUye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgb3V0bGluZTogMDtcclxuICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgXHJcbiAgfVxyXG4gIC5kcm9wZG93bi10b2dnbGUyOjpiZWZvcmV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29udGVudDogdXJsKCdodHRwczovL2FwaS5pY29uaWZ5LmRlc2lnbi9lbC1jaGV2cm9uLWRvd24uc3ZnP2hlaWdodD05Jyk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgLyogY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zdmcvc2VhcmNoLmpwZWdcIik7ICovXHJcbiAgfVxyXG4gIC5kcm9wZG93bi10b2dnbGUyOmFjdGl2ZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi10b2dnbGUyOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tdG9nZ2xlMjpmb2N1c3tcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Z7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41ODkpO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQ3cHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJwOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIC4ycztcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVycDo6YmVmb3Jle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQ3cHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1Myk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3ZlcnA6OmFmdGVyOmFjdGl2ZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0N3B4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjJzO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJwOmhvdmVyOjphZnRlcntcclxuICAgIHdpZHRoOiA0N3B4O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjJzO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAubWsye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIGxhYmVsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWw6YmVmb3JlIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAwKTtcclxuICAgIGNvbnRlbnQ6IFwiXFwwMGEwXCI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udDogMTZweC8xZW0gc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogMCAuMjVlbSAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBjb250ZW50OiB1cmwoJ2h0dHBzOi8vYXBpLmljb25pZnkuZGVzaWduL2Vtb2ppb25lLW1vbm90b25lOndoaXRlLWhlYXZ5LWNoZWNrLW1hcmsuc3ZnP2hlaWdodD0xNicpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyArIGxhYmVsOjpiZWZvcmUge1xyXG4gICAgICBvdXRsaW5lOiByZ2IoNTksIDE1MywgMjUyKSBhdXRvIDVweDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ESearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-e-search',
                templateUrl: './e-search.component.html',
                styleUrls: ['./e-search.component.css']
            }]
    }], function () { return [{ type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "q7SO":
/*!************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.ts ***!
  \************************************************************/
/*! exports provided: ProductdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function() { return ProductdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products.service */ "jOXV");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication.service */ "18Le");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "55oq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _productitem_productitem_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../productitem/productitem.component */ "c3h7");











function ProductdetailsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_7_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const imgf_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.setImage(imgf_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgf_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](imgf_r6 === ctx_r0.currentimage ? "" : "border");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", imgf_r6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProductdetailsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_div_14_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const imgf_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.setImage(imgf_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgf_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](imgf_r9 === ctx_r1.currentimage ? "" : "border");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", imgf_r9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProductdetailsComponent_b_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r12);
} }
function ProductdetailsComponent_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", s_r13.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r13.key);
} }
function ProductdetailsComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", s_r14.key, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r14.value);
} }
function ProductdetailsComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-productitem", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", product_r15);
} }
class ProductdetailsComponent {
    constructor(firestore, route, service, auth, router) {
        this.firestore = firestore;
        this.route = route;
        this.service = service;
        this.auth = auth;
        this.router = router;
        this.pid = "E4ugSgKIdkpPFNXnJNhw";
        this.UID = "";
        this.size = "";
    }
    ngOnInit() {
        this.getuid();
        this.pid = this.route.snapshot.paramMap.get("animal");
        this.firestore.collection('products').doc(this.pid).ref.get().then((doc) => {
            this.product = Object.assign({ id: doc.id }, doc.data());
            this.product2 = this.product;
            this.currentimage = this.product.images[0];
            this.price = this.product.price;
        });
        this.getstaticdata();
        this.firestore.collection('products').ref.limit(4).get().then((doc) => {
            this.liked = doc.docs.map(e => {
                return Object.assign({ id: e.id }, e.data());
            });
        });
    }
    getuid() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.UID = yield this.auth.getUID();
        });
    }
    addToCart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.UID = yield this.auth.getUID();
            //window.alert(this.UID)
            if (this.UID) {
                this.firestore.collection("users").doc(this.UID).collection("cart").ref.add({
                    "pid": this.product.id,
                    "size": this.size,
                    "quantity": 1
                }).then((res) => {
                    //window.alert("ITEM ADDED")
                });
            }
            else {
                this.router.navigate(["signin"]);
            }
        });
    }
    getstaticdata() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var datas = yield this.firestore.collection('static').doc('data').ref.get();
            var d = datas.data();
            this.deliverytime = d.delivery_days;
            this.deliveryfee = d.delivery_fee;
            this.returntime = d.return_days;
        });
    }
    setImage(u) {
        this.currentimage = u;
    }
    setSize(s) {
        if (s == '') {
            this.price = this.product.price;
        }
        else {
            this.price = this.product.size[s];
        }
        this.size = s;
    }
}
ProductdetailsComponent.ɵfac = function ProductdetailsComponent_Factory(t) { return new (t || ProductdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProductdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductdetailsComponent, selectors: [["app-productdetails"]], decls: 88, vars: 17, consts: [[1, "container", 2, "padding-top", "80px"], [3, "data"], [1, "row"], [1, "col-lg-3", "col-md-3", "col-sm-6", "col-xs-12"], ["class", "preview hide-me", 4, "ngFor", "ngForOf"], [1, "col-lg-9"], [1, "container"], [1, "col-lg-5", "col-md-12", 2, "margin-bottom", "16px"], ["alt", "", 3, "src"], [1, "col-lg-1", "col-md-12", "hide-me-1", 2, "border", "none", "overflow-x", "scroll", "overflow-y", "hidden", "padding", "20px", "display", "flex", "width", "3000px"], ["class", "row", "style", "margin-right: 12px;", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-12"], [2, "font-size", "24px"], [1, "float-left"], [1, "size", "float-right"], [1, "available_size", "btn-block"], ["class", "available_size", 4, "ngFor", "ngForOf"], ["id", "d_size", 1, "d_size"], [1, "d_size-1"], ["tabindex", "1", 1, "select", "btn-block", 2, "height", "47px"], [1, "custom-select", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "button", "btn-block", "btn", 3, "click"], [2, "font-size", "22px", "margin-bottom", "100px"], [2, "margin-left", "16px"], [2, "height", "16px"], ["style", "margin-top: 8px; margin-bottom: 8px;", 4, "ngFor", "ngForOf"], [1, "info"], ["href", "#"], [1, "col-lg-6"], ["src", "../../assets/images/svg/deliver.svg", 2, "width", "24px"], [2, "font-size", "14px", "margin-top", "16px"], [1, "text-muted"], ["src", "../../assets/images/svg/lock.svg", 2, "height", "24px", "width", "24px"], ["id", "bestproduct", 1, "bestproduct"], [2, "font-size", "16px"], ["class", "col-md-6 col-lg-3", "style", "padding: 0px;", "id", "product", 4, "ngFor", "ngForOf"], [1, "preview", "hide-me"], [1, "col-lg-12", "col-xs-6", "col-sm-6", "col-md-6", "col-sm-6", "col-xs-12"], ["alt", "", 2, "height", "100px", "width", "100px", "object-fit", "cover", "border", "solid 1.5px black", 3, "src", "click"], [1, "row", 2, "margin-right", "12px"], ["id", "hide-me-1", "alt", "", 2, "height", "100px", "width", "100px", "object-fit", "cover", "border", "solid 1.5px black", 3, "src", "click"], [1, "available_size"], [3, "value"], [2, "margin-top", "8px", "margin-bottom", "8px"], [1, "float-left", "l-1", 2, "width", "100px", "font-size", "14px"], [1, "text-muted", 2, "font-size", "12px"], ["id", "product", 1, "col-md-6", "col-lg-3", 2, "padding", "0px"]], template: function ProductdetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProductdetailsComponent_div_7_Template, 4, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProductdetailsComponent_div_14_Template, 3, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "/inc.tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Available Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Size chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ProductdetailsComponent_b_31_Template, 2, 1, "b", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProductdetailsComponent_Template_select_change_37_listener($event) { return ctx.setSize($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Select Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ProductdetailsComponent_option_40_Template, 2, 2, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductdetailsComponent_Template_button_click_43_listener() { return ctx.addToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "b", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ProductdetailsComponent_div_51_Template, 6, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](52, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "More information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "b", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Order Today, Delivers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "small", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "b", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Only in India");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "small", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Delivery / Return +");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "section", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h6", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "You may also like");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, ProductdetailsComponent_div_87_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.product.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.currentimage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.product.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs.", ctx.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.product.avail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 13, ctx.product.size));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](52, 15, ctx.product.description));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.deliverytime, " Business Days - ", ctx.deliveryfee, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Return and exchanges with ", ctx.returntime, " days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.liked);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _productitem_productitem_component__WEBPACK_IMPORTED_MODULE_9__["ProductitemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["KeyValuePipe"]], styles: [".toplink[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n\n.toplink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n\n.preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 40%;\n  height: auto;\n  text-align: right;\n  border: none;\n  margin-left: 200px;\n}\n\n\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  border: none;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.size[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  color: #e9103b;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  align-items: left;\n  text-align: left;\n  padding: 8px 12px;\n  border-color: black;\n  border-radius: 0;\n  border: 2px solid black;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: black;\n  color: white;\n  align-items: left;\n  text-align: left;\n  padding: 8px 12px;\n  border-color: black;\n  border-radius: 0;\n}\n\n.info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  color: black;\n}\n\n.d_size[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  display:flex;\n  flex-direction: column;\n  position:relative;\n  height:40px;\n}\n\n.d_size[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  padding:0 30px 0 10px;\n  min-height:40px;\n  display:flex;\n  align-items:center;\n  background:white;\n  position:absolute;\n  top:0;\n  width: 100%;\n  pointer-events:none;\n  order:2;\n  z-index:1;\n  box-sizing:border-box;\n  overflow:hidden;\n  white-space:nowrap;\n  margin-top: -10px;\n  \n}\n\n.d_size[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n.show-me[_ngcontent-%COMP%]{\n  display: block;\n}\n\n\n\n.hide-me-1[_ngcontent-%COMP%]::-webkit-scrollbar{\n  display: none;\n  }\n\n\n\n.d_size[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]:focus   .option[_ngcontent-%COMP%] {\n  position:relative;\n  pointer-events:all;\n}\n\n.d_size[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity:0;\n  position:absolute;\n  left:-99999px;\n}\n\n.d_size[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  order: 1;\n  z-index:2;\n  background:white;\n  border-top:none;\n  position:relative;\n}\n\n.d_size[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  content:'';\n  width: 0; \n  height: 0; \n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid white;\n  position:absolute;\n  right:10px;\n  pointer-events:none;\n  z-index:3;\n}\n\n.d_size[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\n  position:absolute;\n  right:0;\n  height: 40px;\n  width: 30px;\n  content: '';\n  background:black;\n}\n\n.available_size[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  margin-right: 30px; \n}\n\n@media (min-width: 100px) and (max-width: 991.98px) {\n  .preview[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n}\n\n@media (min-width: 991.98px) and (max-width: 2000px) {\n  #hide-me-1[_ngcontent-%COMP%]{\n    display: none;\n  } \n}\n\n#bestproduct[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  max-width: 100%;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  border: none;\n}\n\n#bestproduct[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n}\n\n#bestproduct[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  border: none;\n  background-color: white;\n}\n\n#bestproduct[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\n  text-align: left;\n  font-weight: bolder;\n}\n\n.l-1[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n  color: black;\n}\n\n.custom-select[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: black; \n  color: #ffffff;\n  height: 100px;\n  border-radius: 0px;\n  background-image: url('plus.svg');  \n}\n\n.custom-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  display: none; \n  \n}\n\n.select-selected[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n\n\n.select-selected[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  top: 14px;\n  right: 10px;\n  width: 0;\n  height: 0;\n  border: 6px solid transparent;\n  border-color: #fff transparent transparent transparent;\n}\n\n\n\n.select-selected.select-arrow-active[_ngcontent-%COMP%]:after {\n  border-color: transparent transparent #fff transparent;\n  top: 7px;\n}\n\n\n\n.select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .select-selected[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 8px 16px;\n  border: 1px solid transparent;\n  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;\n  cursor: pointer;\n}\n\n\n\n.select-items[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 8px 16px;\n  background-color: white;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 99;\n}\n\n\n\n.select-hide[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.select-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover, .same-as-selected[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOztHQUVHOztBQUNIO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixLQUFLO0VBQ0wsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsU0FBUztFQUNULHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsYUFBYTtFQUNiOztBQUVGOzs7Ozs7O0dBT0c7O0FBSUg7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztBQUVGOztBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUNBQXlEO0FBQzNEOztBQUVBO0VBQ0UsYUFBYSxFQUFFLGlDQUFpQzs7QUFFbEQ7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsK0NBQStDOztBQUMvQztFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULDZCQUE2QjtFQUM3QixzREFBc0Q7QUFDeEQ7O0FBRUEsa0VBQWtFOztBQUNsRTtFQUNFLHNEQUFzRDtFQUN0RCxRQUFRO0FBQ1Y7O0FBRUEsNERBQTREOztBQUM1RDtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLG9FQUFvRTtFQUNwRSxlQUFlO0FBQ2pCOztBQUVBLDJCQUEyQjs7QUFDM0I7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUEsa0RBQWtEOztBQUNsRDtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InByb2R1Y3RkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wbGluayAuYnJlYWRjcnVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50b3BsaW5rIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucHJldmlldyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xufVxuXG4vKiAucHJldmlldzo6LXdlYmtpdC1zY3JvbGxiYXJ7XG5kaXNwbGF5OiBub25lO1xufSAqL1xuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuaDUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zaXplIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjZTkxMDNiO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBhbGlnbi1pdGVtczogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uaW5mbyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmRfc2l6ZSAuc2VsZWN0IHtcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgaGVpZ2h0OjQwcHg7XG59XG5cbi5kX3NpemUgLm9wdGlvbiB7XG4gIHBhZGRpbmc6MCAzMHB4IDAgMTBweDtcbiAgbWluLWhlaWdodDo0MHB4O1xuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDowO1xuICB3aWR0aDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6bm9uZTtcbiAgb3JkZXI6MjtcbiAgei1pbmRleDoxO1xuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgXG59XG5cbi5kX3NpemUgLm9wdGlvbjpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNob3ctbWV7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiAuaGlkZS1tZXtcbiAgZGlzcGxheTogbm9uZTtcbn0gKi9cblxuLmhpZGUtbWUtMTo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuLyogQG1lZGlhKG1pbi13aWR0aDogNzIwcHggKXtcbiAgLnNob3ctbWV7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGlkZS1tZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSAqL1xuXG5cblxuLmRfc2l6ZSAuc2VsZWN0OmZvY3VzIC5vcHRpb24ge1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgcG9pbnRlci1ldmVudHM6YWxsO1xufVxuXG4uZF9zaXplIGlucHV0IHtcbiAgb3BhY2l0eTowO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgbGVmdDotOTk5OTlweDtcbn1cblxuLmRfc2l6ZSBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xuICBvcmRlcjogMTtcbiAgei1pbmRleDoyO1xuICBiYWNrZ3JvdW5kOndoaXRlO1xuICBib3JkZXItdG9wOm5vbmU7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4uZF9zaXplIGlucHV0OmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6Jyc7XG4gIHdpZHRoOiAwOyBcbiAgaGVpZ2h0OiAwOyBcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCB3aGl0ZTtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHJpZ2h0OjEwcHg7XG4gIHBvaW50ZXItZXZlbnRzOm5vbmU7XG4gIHotaW5kZXg6Mztcbn1cblxuLmRfc2l6ZSBpbnB1dDpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHJpZ2h0OjA7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kOmJsYWNrO1xufVxuXG4uYXZhaWxhYmxlX3NpemV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1yaWdodDogMzBweDsgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5wcmV2aWV3IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MS45OHB4KSBhbmQgKG1heC13aWR0aDogMjAwMHB4KSB7XG4gICNoaWRlLW1lLTF7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSBcbn1cblxuXG4jYmVzdHByb2R1Y3QgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4jYmVzdHByb2R1Y3QgLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG59XG4jYmVzdHByb2R1Y3QgLmNhcmQtZm9vdGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiNiZXN0cHJvZHVjdCBoNntcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmwtMSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmN1c3RvbS1zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zdmcvcGx1cy5zdmdcIik7ICBcbn1cblxuLmN1c3RvbS1zZWxlY3Qgc2VsZWN0IHtcbiAgZGlzcGxheTogbm9uZTsgLypoaWRlIG9yaWdpbmFsIFNFTEVDVCBlbGVtZW50OiAqL1xuICBcbn1cblxuLnNlbGVjdC1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4vKiBTdHlsZSB0aGUgYXJyb3cgaW5zaWRlIHRoZSBzZWxlY3QgZWxlbWVudDogKi9cbi5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMTRweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi8qIFBvaW50IHRoZSBhcnJvdyB1cHdhcmRzIHdoZW4gdGhlIHNlbGVjdCBib3ggaXMgb3BlbiAoYWN0aXZlKTogKi9cbi5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudDtcbiAgdG9wOiA3cHg7XG59XG5cbi8qIHN0eWxlIHRoZSBpdGVtcyAob3B0aW9ucyksIGluY2x1ZGluZyB0aGUgc2VsZWN0ZWQgaXRlbTogKi9cbi5zZWxlY3QtaXRlbXMgZGl2LC5zZWxlY3Qtc2VsZWN0ZWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoMCwgMCwgMCwgMC4xKSB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBTdHlsZSBpdGVtcyAob3B0aW9ucyk6ICovXG4uc2VsZWN0LWl0ZW1zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4vKiBIaWRlIHRoZSBpdGVtcyB3aGVuIHRoZSBzZWxlY3QgYm94IGlzIGNsb3NlZDogKi9cbi5zZWxlY3QtaGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VsZWN0LWl0ZW1zIGRpdjpob3ZlciwgLnNhbWUtYXMtc2VsZWN0ZWQge1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductdetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-productdetails',
                templateUrl: './productdetails.component.html',
                styleUrls: ['./productdetails.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "ue+7":
/*!**********************************************************!*\
  !*** ./src/app/checkout-item/checkout-item.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckoutItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutItemComponent", function() { return CheckoutItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "18Le");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products.service */ "jOXV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class CheckoutItemComponent {
    constructor(firestore, document, auth, service, router) {
        this.firestore = firestore;
        this.document = document;
        this.auth = auth;
        this.service = service;
        this.router = router;
        this.UID = "";
        this.saved = false;
    }
    ngOnInit() {
        this.initSavedState();
        this.getProduct();
    }
    getProduct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var d = yield this.firestore.collection('products').doc(this.data.pid).ref.get();
            this.product = d.data();
            if (this.data.size) {
                this.price = this.product.size[this.data.size];
            }
            else {
                this.price = this.product.price;
            }
        });
    }
    initSavedState() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firestore.collection("users").doc("9").ref.get();
            this.UID = yield this.auth.getUID();
            if (this.UID) {
                var doc = yield this.firestore
                    .collection("users")
                    .doc(this.UID)
                    .ref.get();
                this.saved = doc.data().saved.includes(this.data.pid);
            }
        });
    }
    eject() {
        this.firestore.collection('users').doc(this.UID).collection('cart').doc(this.data.id).ref.delete();
    }
    move() {
        this.router.navigate(["productdetails/" + this.data.pid]);
        //this.document.location.href = 'https://zeroarmario.web.app/productdetails/' + this.data.id;
    }
    toggleSave() {
        if (this.UID) {
            this.saved = !this.saved;
            this.updateBookmark(this.data.pid);
        }
        else {
        }
        //
    }
    updateBookmark(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var doc = yield this.firestore.collection("users").doc(this.UID).ref.get();
            let saved = doc.data().saved;
            //var saved: String[] = doc.data().saved;
            if (this.saved) {
                saved.push(id);
            }
            else {
                saved.forEach((element, index) => {
                    if (element == id)
                        saved.splice(index, 1);
                });
            }
            this.firestore
                .collection("users")
                .doc(this.UID)
                .set({ saved: saved }, { merge: true });
        });
    }
}
CheckoutItemComponent.ɵfac = function CheckoutItemComponent_Factory(t) { return new (t || CheckoutItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
CheckoutItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CheckoutItemComponent, selectors: [["app-checkout-item"]], inputs: { data: "data" }, decls: 26, vars: 8, consts: [[1, "row", 2, "margin-bottom", "32px"], [1, "col-lg-3"], ["alt", "", 2, "object-fit", "cover", "height", "200px", "width", "200px", "margin-bottom", "8px", 3, "src", "click"], [1, "col-lg-4", 2, "padding-left", "20px"], [2, "font-size", "18px"], [1, "text-muted", "float-left"], [2, "height", "15px"], [2, "font-size", "15px", "font-weight", "bold", "text-decoration", "underline", "color", "black", 3, "click"], [1, "col-6", "col-lg-3"], [1, "col-6", "col-lg-2", 3, "click"], [1, "bx", "bx-x", "float-right"]], template: function CheckoutItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutItemComponent_Template_img_click_2_listener() { return ctx.move(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutItemComponent_Template_p_click_19_listener() { return ctx.toggleSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutItemComponent_Template_div_click_24_listener() { return ctx.eject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.category[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Color: ", ctx.product.color, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Size: ", ctx.data.size || "None", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs.", ctx.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.saved ? "Remove from wishlist" : "Add to wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Quantity: ", ctx.data.quantity, "");
    } }, styles: ["h6[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n}\r\n.toplink[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n.toplink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\nborder-radius: 2px;\r\nmax-width: 100%;\r\nwidth: 100%;\r\nheight: auto;\r\ntext-align: center;\r\nborder: none;\r\n}\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: underline;\r\n  background-color: white;\r\n  color: black;\r\n}\r\na[_ngcontent-%COMP%]:hover{\r\n  text-decoration: underline;\r\n  background-color: white;\r\n  color: black;\r\n  opacity: 0.7;\r\n}\r\np[_ngcontent-%COMP%]{\r\n  color: green;\r\n}\r\n.button[_ngcontent-%COMP%]{\r\n  background-color: green;\r\n  color: white;\r\n  align-items: center;\r\n  padding: 10px 12px;\r\n  border-radius: 0;\r\n  border: none;\r\n}\r\n.button[_ngcontent-%COMP%]:hover{\r\n  background-color: green;\r\n  color: white;\r\n  align-items: center;\r\n  padding: 10px 12px;\r\n  border-color: black;\r\n  border-radius: 0;\r\n  opacity: 0.7;\r\n  border: none;\r\n\r\n}\r\n.bottom-btn[_ngcontent-%COMP%]   .button1[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  color: black;\r\n  align-items: center;\r\n  padding: 10px 12px;\r\n  border-color: black;\r\n  border-radius: 0;\r\n\r\n}\r\n.bottom-btn[_ngcontent-%COMP%]   .button1[_ngcontent-%COMP%]:hover{\r\n  background-color: black;\r\n  color: white;\r\n  align-items: center;\r\n  padding: 10px 12px;\r\n  border-color: black;\r\n  border-radius: 0;\r\n}\r\n.bottom-btn[_ngcontent-%COMP%]   .button2[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n  color: white;\r\n  align-items: center;\r\n  padding: 10px 12px;\r\n  border-color: black;\r\n  border-radius: 0;\r\n\r\n}\r\n.bottom-btn[_ngcontent-%COMP%]   .button2[_ngcontent-%COMP%]:hover{\r\n  background-color: white;\r\n  color: black;\r\n  align-items: center;\r\n  padding: 10px 12px;\r\n  border-color: black;\r\n  border-radius: 0;\r\n\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  color: black;\r\n  align-items: center;\r\n  padding: 10px 12px;\r\n  border-color: black;\r\n  border-radius: 0;\r\n  height: auto;\r\n\r\n}\r\n.checkout-content[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\nh2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{\r\n  font-family: 'proxima-nova';\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsZUFBZTtBQUNmLFdBQVc7QUFDWCxZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWjtBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7O0FBRWQ7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCOztBQUVsQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFHQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCOztBQUVsQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7O0FBRWxCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZOztBQUVkO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJjaGVja291dC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNntcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi50b3BsaW5rIC5icmVhZGNydW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50b3BsaW5rIGF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaW1nIHtcclxuYm9yZGVyLXJhZGl1czogMnB4O1xyXG5tYXgtd2lkdGg6IDEwMCU7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IGF1dG87XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5hOmhvdmVye1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbnB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG59XHJcblxyXG4uYm90dG9tLWJ0biAuYnV0dG9uMXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxufVxyXG5cclxuLmJvdHRvbS1idG4gLmJ1dHRvbjE6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuXHJcbi5ib3R0b20tYnRuIC5idXR0b24ye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG59XHJcblxyXG4uYm90dG9tLWJ0biAuYnV0dG9uMjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxufVxyXG5pbnB1dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbn1cclxuLmNoZWNrb3V0LWNvbnRlbnR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMiwgaDQsIGgxLCBoNSwgaDZ7XHJcbiAgZm9udC1mYW1pbHk6ICdwcm94aW1hLW5vdmEnO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CheckoutItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: "app-checkout-item",
                templateUrl: "./checkout-item.component.html",
                styleUrls: ["./checkout-item.component.css"],
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "usMa":
/*!***************************************************!*\
  !*** ./src/app/shared/topbar/topbar.component.ts ***!
  \***************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var src_app_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/products.service */ "jOXV");
/* harmony import */ var src_app_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/authentication.service */ "18Le");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function TopbarComponent_li_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("href", "productlists/", cat_r8, "/", cat_r8, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r8);
} }
function TopbarComponent_li_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("href", "productlists/", cat_r9, "/", cat_r9, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r9);
} }
function TopbarComponent_li_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("href", "productlists/", cat_r10, "/", cat_r10, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r10);
} }
function TopbarComponent_li_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("href", "productlists/", cat_r11, "/", cat_r11, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r11);
} }
function TopbarComponent_li_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("href", "productlists/", cat_r12, "/", cat_r12, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r12);
} }
function TopbarComponent_li_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("href", "productlists/", cat_r13, "/", cat_r13, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r13);
} }
function TopbarComponent_li_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("href", "productlists/", cat_r14, "/", cat_r14, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r14);
} }
function TopbarComponent_li_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("href", "productlists/", cat_r15, "/", cat_r15, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r15);
} }
class TopbarComponent {
    constructor(firestore, service, auth) {
        this.firestore = firestore;
        this.service = service;
        this.auth = auth;
        this.cart_count = 0;
    }
    setCurrent(s) {
        switch (s) {
            case "Men":
                this.current = this.men;
                break;
            case "Women":
                this.current = this.women;
                break;
            case "Children":
                this.current = this.children;
                break;
            default:
                break;
        }
    }
    ngOnInit() {
        this.logo = localStorage.getItem('LOGO');
        this.firestore
            .collection("static")
            .doc("data")
            .ref.get()
            .then((doc) => {
            this.logo = doc.data().logo;
            localStorage.setItem('LOGO', this.logo);
            this.toptext = doc.data().top_text;
            console.log(doc.data());
            this.auth.getUID().then((uu) => {
                console.log("UIII", uu);
                this.firestore
                    .collection("users")
                    .doc(uu) //'SC6XLQ8i04ynJ5YYOsp5')//this.service.getUID())
                    .collection("cart")
                    .snapshotChanges()
                    .subscribe((data) => {
                    var _a, _b;
                    this.cart_count = (_b = (_a = data.map((e) => e)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
                    console.log('CART: ', uu, this.cart_count);
                });
            });
        });
        this.firestore
            .collection("navigation")
            .ref.get()
            .then((docs) => {
            docs.docs.forEach((e) => {
                switch (e.id) {
                    case "Men":
                        this.men = e.data();
                        break;
                    case "Women":
                        this.women = e.data();
                        break;
                    case "Children":
                        this.children = e.data();
                        break;
                    default:
                        break;
                }
                this.current = this.men;
            });
        });
    }
    listenCart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var uu = yield this.auth.getUID();
            console.log("UIII", uu);
            this.firestore
                .collection("users")
                .doc(uu) //'SC6XLQ8i04ynJ5YYOsp5')//this.service.getUID())
                .collection("cart")
                .snapshotChanges()
                .subscribe((data) => {
                var _a, _b;
                this.cart_count = (_b = (_a = data.map((e) => e)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
                console.log('CART: ', uu, this.cart_count);
            });
        });
    }
}
TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], decls: 193, vars: 20, consts: [[1, "header", "fixed-top"], [1, "top-bar"], [1, "navbar", "navbar-expand-lg", "navbar-light", "navbar-color"], [1, "container"], ["width", "150px", 1, "logo-image", "s-img-4", 3, "src"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "position", "absolute", "left", "15px", "top", "12px"], [1, "navbar-toggler-icon"], ["id", "formobdiv"], ["id", "formob", 1, "navbar-nav", "ml-auto", "d-flex", "flex-row"], ["href", "", "data-toggle", "dropdown", 1, "nav-link"], ["src", "../../../assets/images/svg/Search.svg", 1, "s-left", "s-img-1", 2, "width", "15px"], ["id", "search", 1, "dropdown-menu", "megamenu"], ["id", "search-1", "type", "text", "placeholder", "Search", 1, "form-control"], [1, "nav-item", "dropdown", "position-relative"], ["href", "myaccount", "id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "hover2"], ["src", "../../../assets/images/svg/Person.svg", 1, "s-left", "s-img-2", 2, "width", "15px"], ["aria-labelledby", "navbarDropdownMenuLink", "id", "wish", 1, "dropdown-menu"], ["href", "wishlist", 1, "dropdown-item"], ["href", "myaccount", 1, "dropdown-item"], ["href", "checkout", 1, "nav-link"], [1, "badge", "badge-danger", "s-img-3"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "nn", 2, "font-size", "14px", "font-weight", "500"], [1, "nav-item", "dropdown", "has-megamenu", "dropdown1"], ["data-toggle", "dropdown", 1, "nav-link", "hover", 2, "color", "black"], [1, "dropdown-menu", "megamenu", "dropdown-menu1"], [1, "custom-drop-down"], [1, "row"], [1, "col-1"], [1, "col-3"], [4, "ngFor", "ngForOf"], [1, "col-5"], [1, "nav-item", "dropdown", "has-megamenu", "dropdown2"], ["data-toggle", "dropdown", 1, "nav-link", "hover1", 2, "color", "black", 3, "click"], [1, "dropdown-menu", "megamenu", "dropdown-menu2"], [1, "nav-item", "dropdown", "has-megamenu", "dropdown3"], ["data-toggle", "dropdown", 1, "nav-link", "hover", 2, "color", "black", 3, "click"], [1, "dropdown-menu", "megamenu", "dropdown-menu3"], [1, "nav-item", "dropdown", "has-megamenu"], ["data-toggle", "dropdown", 1, "nav-link", 2, "color", "black", 3, "click"], [1, "dropdown-menu", "megamenu"], ["id", "forweb", 1, "navbar-nav", "ml-auto", "d-flex", "flex-row"], [1, "nav-item", "dropdown", "dropdown4"], ["href", "", "data-toggle", "dropdown", 1, "nav-link", "dropdown4"], ["src", "../../../assets/images/svg/Search.svg", 1, "s-left", 2, "width", "15px"], ["id", "search", 1, "dropdown-menu", "megamenu", "dropdown-menu4", 2, "padding-top", "100px", "text-align", "center", "width", "1536px", "position", "absolute", "left", "-1220px"], ["id", "search-1", "type", "text", "placeholder", "Search", 1, "form-control", 2, "width", "50%", "margin-left", "25%"], [1, "nav-item", "dropdown", "dropdown5"], ["src", "../../../assets/images/svg/Person.svg", 1, "s-left", 2, "width", "15px"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-menu5"], [1, "badge", "badge-danger"], [2, "color", "black", 3, "href"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Women ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "New arrivals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "New In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "On Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Shop by Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Dimdension 2044");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Monogram");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Love from Boo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, TopbarComponent_li_54_Template, 3, 3, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, TopbarComponent_li_58_Template, 3, 3, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Stationary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopbarComponent_Template_a_click_66_listener() { return ctx.setCurrent("Men"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Men ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "New arrivals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "New In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "On Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Shop by Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Dimdension 2044");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Monogram");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Love from Boo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, TopbarComponent_li_91_Template, 3, 3, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, TopbarComponent_li_95_Template, 3, 3, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Stationary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopbarComponent_Template_a_click_103_listener() { return ctx.setCurrent("Children"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " Children ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "New arrivals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "New In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "On Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Shop by Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Dimdension 2044");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Monogram");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Love from Boo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, TopbarComponent_li_128_Template, 3, 3, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](132, TopbarComponent_li_132_Template, 3, 3, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Stationary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopbarComponent_Template_a_click_140_listener() { return ctx.setCurrent("Children"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "New arrivals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "New In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "On Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Shop by Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Dimdension 2044");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Monogram");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Love from Boo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](165, TopbarComponent_li_165_Template, 3, 3, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](169, TopbarComponent_li_169_Template, 3, 3, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Stationary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "ul", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.toptext);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cart_count);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.current == null ? null : ctx.current.t1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.current == null ? null : ctx.current.topwear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.current == null ? null : ctx.current.t2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.current == null ? null : ctx.current.bottomwear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.current == null ? null : ctx.current.t1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.current == null ? null : ctx.current.topwear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.current == null ? null : ctx.current.t2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.current == null ? null : ctx.current.bottomwear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.current == null ? null : ctx.current.t1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.current == null ? null : ctx.current.topwear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.current == null ? null : ctx.current.t2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.current == null ? null : ctx.current.bottomwear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.current == null ? null : ctx.current.t1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.current == null ? null : ctx.current.topwear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.current == null ? null : ctx.current.t2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.current == null ? null : ctx.current.bottomwear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cart_count);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n  font-family: \"proxima-nova\";\r\n}\r\n\r\n.top-bar[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n  width: 100%;\r\n  height: 38px;\r\n}\r\n\r\n.top-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  color: #FFFFFF;\r\n  font-size: 13px;\r\n  line-height: 38px;\r\n  text-align: center;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]{\r\n  height: 60px;\r\n}\r\n\r\n#navbarResponsive[_ngcontent-%COMP%]{\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.navbar-color[_ngcontent-%COMP%] {\r\n  background: #FFFFFF;\r\n  box-shadow: 0px 3px 6px #00000029;\r\n  \r\n  color: black;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n}\r\n\r\n.nav-items-color[_ngcontent-%COMP%] {\r\n  color: #000000;\r\n}\r\n\r\n.custom-drop-down[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n.navbar-toggler-icon[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .navbar[_ngcontent-%COMP%] {\r\n    padding-top: 0%;\r\n    padding-bottom: 0;\r\n  }\r\n\r\n\r\n  .navbar[_ngcontent-%COMP%]   .has-megamenu[_ngcontent-%COMP%] {\r\n    position: static !important;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%]   .megamenu[_ngcontent-%COMP%] {\r\n    top: 95%;\r\n    width: 100%;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    padding-top: 20px;\r\n    padding-bottom: 50px;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    padding-top: 1rem;\r\n    padding-bottom: 1rem;\r\n  }\r\n}\r\n\r\n.nn[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  margin-right: 15px;\r\n  margin-left: 15px;\r\n}\r\n\r\n.s-left[_ngcontent-%COMP%] {\r\n  width: 10px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .s-img-4[_ngcontent-%COMP%]{\r\n    width: 120px;\r\n    left: 40px;\r\n  }\r\n  .s-left[_ngcontent-%COMP%] {\r\n\r\n    float: center;\r\n    margin-right: 15px;\r\n    margin-left: 15px;\r\n  }\r\n}\r\n\r\n.badge-danger[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  padding-left: 6px;\r\n  padding-right: 6px;\r\n  border-radius: 12px;\r\n}\r\n\r\n\r\n\r\n#search[_ngcontent-%COMP%]{\r\nheight: 300px;\r\nalign-items: center;\r\npadding-top: 10%;\r\npadding-left: 35%;\r\n}\r\n\r\n#search-1[_ngcontent-%COMP%]{\r\n  width: 65%;\r\n  font-size: 18px;\r\n  padding-left: 0px;\r\n  background-color: transparent;\r\n    color: black;\r\n    outline: none;\r\n    outline-style: none;\r\n    border-top: none;\r\n    border-left: none;\r\n    border-right: none;\r\n    border-bottom: solid #00000093 2px;\r\n    border-radius: 0px;\r\n  \r\n}\r\n\r\n@media (max-width: 768px) {\r\n  #search[_ngcontent-%COMP%]{\r\n    height: 300px;\r\n    align-items: center;\r\n    padding-top: 10%;\r\n    padding-left: 25%;\r\n    }\r\n \r\n}\r\n\r\n.hover[_ngcontent-%COMP%]::after{\r\n  content: '';\r\n  display: block;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: black;\r\n  transition: width .2s;\r\n}\r\n\r\n.hover[_ngcontent-%COMP%]:hover::after{\r\n  width: 47px;\r\n  transition: width .2s;\r\n}\r\n\r\n.hover1[_ngcontent-%COMP%]::after{\r\n  content: '';\r\n  display: block;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: black;\r\n  transition: width .2s;\r\n}\r\n\r\n.hover1[_ngcontent-%COMP%]:hover::after{\r\n  width: 28px;\r\n  transition: width .2s;\r\n}\r\n\r\n.hover2[_ngcontent-%COMP%]::after{\r\n  content: '';\r\n  display: block;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: black;\r\n  transition: width .2s;\r\n}\r\n\r\n.hover2[_ngcontent-%COMP%]:hover::after{\r\n  width: 14px;\r\n  transition: width .2s;\r\n}\r\n\r\n#formobdiv[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n#formob[_ngcontent-%COMP%]{\r\n  opacity: 0;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\r\n\r\n.dropdown1[_ngcontent-%COMP%]:hover   .dropdown-menu1[_ngcontent-%COMP%] {display: block;}\r\n\r\n.dropdown2[_ngcontent-%COMP%]:hover   .dropdown-menu2[_ngcontent-%COMP%] {display: block;}\r\n\r\n.dropdown3[_ngcontent-%COMP%]:hover   .dropdown-menu3[_ngcontent-%COMP%] {display: block;}\r\n\r\n@media(max-width:768px){\r\n  .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    padding: 0 5px;\r\n  }\r\n  .logo-image[_ngcontent-%COMP%]{\r\n    position:relative;\r\n  }\r\n  #formobdiv[_ngcontent-%COMP%]{\r\n    display: block;\r\n  }\r\n  #formob[_ngcontent-%COMP%]{\r\n    opacity: 1;\r\n  }\r\n  \r\n  #forweb[_ngcontent-%COMP%]{\r\n    display: none !important;\r\n    opacity: 0;\r\n  }\r\n  #search[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-top: 20px;\r\n    margin-left: 5%;\r\n    border:none;\r\n    position: absolute;\r\n    padding-bottom: 0px;\r\n    height: 100px;\r\n    padding-top: 20px;\r\n    outline: 0;\r\n  }\r\n  #search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding-left: 0;\r\n    margin-left: -60px;\r\n  }\r\n  #wish[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    position: absolute;\r\n \r\n  }\r\n  \r\n  .s-img-1[_ngcontent-%COMP%]{\r\n    margin-left: 0;\r\n    \r\n  }\r\n  \r\n  .s-img-2[_ngcontent-%COMP%]{\r\n    margin-left: -10px;\r\n    \r\n  }\r\n\r\n  .s-img-3[_ngcontent-%COMP%]{\r\n    margin-left: -10px;\r\n    \r\n  }\r\n\r\n  \r\n  .navbar[_ngcontent-%COMP%]{\r\n    padding: 0px 30px;\r\n  }\r\n  \r\n}\r\n\r\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='black' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2.5' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\r\n}\r\n\r\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n  color: #000000;\r\n  border-color: transparent;\r\n}\r\n\r\n@media (min-width: 992px){\r\n  .navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: -50px;\r\n    text-align: center;\r\n    min-width: 150px;\r\n}\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBS0E7RUFDRTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7OztFQUdBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsUUFBUTtJQUNSLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUlBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaO0VBQ0E7O0lBRUUsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFHQTs7OztHQUlHOztBQUVIO0FBQ0EsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNkJBQTZCO0lBQzNCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxrQkFBa0I7O0FBRXRCOztBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakI7O0FBRUo7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFFBQVE7RUFDUixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFFBQVE7RUFDUixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFFBQVE7RUFDUixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUdBLGtDQUFrQyxjQUFjLENBQUM7O0FBQ2pELGtDQUFrQyxjQUFjLENBQUM7O0FBQ2pELGtDQUFrQyxjQUFjLENBQUM7O0FBQ2pEO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7RUFFcEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Q7Ozs7S0FJQztFQUNIOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCOzs7O0tBSUM7RUFDSDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQjs7OztLQUlDO0VBQ0g7OztFQUdBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVGOztBQUVBO0VBQ0Usb1FBQW9RO0FBQ3RROztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFJQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOzs7QUFHQSIsImZpbGUiOiJ0b3BiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcInByb3hpbWEtbm92YVwiO1xyXG59XHJcblxyXG4udG9wLWJhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbn1cclxuXHJcbi50b3AtYmFyIHB7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmJhcntcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuI25hdmJhclJlc3BvbnNpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG4ubmF2YmFyLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAvKiBvcGFjaXR5OiAwLjk1OyAqL1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uZHJvcGRvd24tbWVudSBwe1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubmF2LWl0ZW1zLWNvbG9yIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLmN1c3RvbS1kcm9wLWRvd24gcCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAubmF2YmFyIHtcclxuICAgIHBhZGRpbmctdG9wOiAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcblxyXG4gIC5uYXZiYXIgLmhhcy1tZWdhbWVudSB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIC5tZWdhbWVudSB7XHJcbiAgICB0b3A6IDk1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciAubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5ubiAubmF2LWxpbmsge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLnMtbGVmdCB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnMtaW1nLTR7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG4gIH1cclxuICAucy1sZWZ0IHtcclxuXHJcbiAgICBmbG9hdDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFkZ2UtZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuXHJcbi8qIC5jb250YWluZXItMXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6MTAwJTtcclxufSAqL1xyXG5cclxuI3NlYXJjaHtcclxuaGVpZ2h0OiAzMDBweDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxucGFkZGluZy10b3A6IDEwJTtcclxucGFkZGluZy1sZWZ0OiAzNSU7XHJcbn1cclxuI3NlYXJjaC0xe1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAjMDAwMDAwOTMgMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIFxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICNzZWFyY2h7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcclxuICAgIH1cclxuIFxyXG59XHJcbi5ob3Zlcjo6YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggLjJzO1xyXG59XHJcbi5ob3Zlcjpob3Zlcjo6YWZ0ZXJ7XHJcbiAgd2lkdGg6IDQ3cHg7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggLjJzO1xyXG59XHJcbi5ob3ZlcjE6OmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIC4ycztcclxufVxyXG4uaG92ZXIxOmhvdmVyOjphZnRlcntcclxuICB3aWR0aDogMjhweDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAuMnM7XHJcbn1cclxuXHJcbi5ob3ZlcjI6OmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIC4ycztcclxufVxyXG4uaG92ZXIyOmhvdmVyOjphZnRlcntcclxuICB3aWR0aDogMTRweDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAuMnM7XHJcbn1cclxuI2Zvcm1vYmRpdntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiNmb3Jtb2J7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uZHJvcGRvd24tbWVudXtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24xOmhvdmVyIC5kcm9wZG93bi1tZW51MSB7ZGlzcGxheTogYmxvY2s7fVxyXG4uZHJvcGRvd24yOmhvdmVyIC5kcm9wZG93bi1tZW51MiB7ZGlzcGxheTogYmxvY2s7fVxyXG4uZHJvcGRvd24zOmhvdmVyIC5kcm9wZG93bi1tZW51MyB7ZGlzcGxheTogYmxvY2s7fVxyXG5AbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgfVxyXG4gIC5sb2dvLWltYWdle1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgfVxyXG4gICNmb3Jtb2JkaXZ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgI2Zvcm1vYntcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gICNmb3J3ZWJ7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAjc2VhcmNoe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcbiAgI3NlYXJjaCBpbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xyXG4gIH1cclxuICAjd2lzaHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiBcclxuICB9XHJcbiAgXHJcbiAgLnMtaW1nLTF7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIC8qXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogNTVweDtcclxuICAgIHRvcDogNjBweDtcclxuICAgICovXHJcbiAgfVxyXG4gIFxyXG4gIC5zLWltZy0ye1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgLypcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgKi9cclxuICB9XHJcblxyXG4gIC5zLWltZy0ze1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgLypcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgKi9cclxuICB9XHJcblxyXG4gIFxyXG4gIC5uYXZiYXJ7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCclM2UlM2NwYXRoIHN0cm9rZT0nYmxhY2snIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzIuNScgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-topbar",
                templateUrl: "./topbar.component.html",
                styleUrls: ["./topbar.component.css"],
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: src_app_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: src_app_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "v9X/":
/*!************************************************************!*\
  !*** ./src/app/e-edit-profile/e-edit-profile.component.ts ***!
  \************************************************************/
/*! exports provided: EEditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EEditProfileComponent", function() { return EEditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EEditProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
EEditProfileComponent.ɵfac = function EEditProfileComponent_Factory(t) { return new (t || EEditProfileComponent)(); };
EEditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EEditProfileComponent, selectors: [["app-e-edit-profile"]], decls: 27, vars: 0, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("//use.fontawesome.com/releases/v5.0.7/css/all.css")], [1, "edit-address"], [1, "address-left"], [2, "font-size", "24px"], [1, "order"], [1, "logout"], [1, "vl"], [1, "address-right"], ["type", "text", "name", "adress1", "placeholder", "First name", 1, "inputbox"], ["type", "text", "name", "adress1", "placeholder", "Last name", 1, "inputbox"], ["type", "text", "name", "adress1", "placeholder", "Email address", 1, "inputbox"], ["type", "text", "name", "adress1", "placeholder", "Phone no.", 1, "inputbox"]], template: function EEditProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "e-edit-profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "MY ACCOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Account information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".edit-address[_ngcontent-%COMP%]{\r\n    margin-left: 12%;\r\n    margin-top: 10%;\r\n    height: 500px;\r\n    width: 70%;\r\n    \r\n}\r\n.address-left[_ngcontent-%COMP%]{\r\n    width: 33%;\r\n    display: block;\r\n    float: left;\r\n    font-family: 'proxima-nova';\r\n}\r\n.address-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: 'proxima-nova';\r\n    font-weight: bold;\r\n    font-size: 35px;\r\n    padding: 25px 0 20px 0;\r\n}\r\n.address-left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n font-weight: bold;\r\n padding-bottom:15px ;\r\n}\r\n.address-left[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]{\r\n    display: block;\r\n    padding-top: 0px;\r\n    padding-bottom: 15px;\r\n    color: #000;\r\n}\r\n.address-left[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]{\r\n    color: #000;\r\n    border-bottom: 1px solid #000;\r\n    font-weight: bold;\r\n}\r\n.address-right[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n    display: block;\r\n    padding-left: 8%;\r\n    float: left;\r\n}\r\n.address-right[_ngcontent-%COMP%]   .inputbox[_ngcontent-%COMP%]{\r\noutline:none;\r\nborder:none;\r\nborder-bottom: 1px solid #000;\r\npadding: 7px 7px 7px 10px;\r\nwidth: 70%;\r\nmargin-bottom: 20px;\r\nfont-size: 15px;\r\ncolor:#000;\r\n}\r\n.address-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-weight: bold;\r\n        padding-bottom: 20px;\r\n    }\r\n.address-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n        outline:none;\r\n        padding: 9px 7px 9px 10px;\r\n        width: 40%;\r\n        margin-top: 30px;\r\n        margin-bottom: 20px;\r\n        font-size: 15px;\r\n        color:#f3f3f3;\r\n        border: none;\r\n        background-color: #000;\r\n        }\r\n.vl[_ngcontent-%COMP%]{\r\n    float: left;\r\n    width: 3px;\r\n    height: 300px;\r\n    background-color:#f3f3f3;\r\n}\r\n@media(max-width: 768px){\r\n    .address-left[_ngcontent-%COMP%]{\r\n        margin-top: 50px;\r\n        width: 100%;\r\n        margin-bottom: 30px;\r\n    }\r\n    .address-right[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        margin-bottom: 50px;\r\n        padding-bottom: 150px;\r\n    }\r\n    .vl[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .address-right[_ngcontent-%COMP%]   .inputbox[_ngcontent-%COMP%]{\r\n     width: 90%;\r\n    }\r\n    .address-right[_ngcontent-%COMP%]   .inputbox-postal[_ngcontent-%COMP%]{\r\n     width: 80%;\r\n    }\r\n    .address-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n    }  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixVQUFVOztBQUVkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLG9CQUFvQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7QUFDQSxZQUFZO0FBQ1osV0FBVztBQUNYLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIsVUFBVTtBQUNWLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2YsVUFBVTtBQUNWO0FBRUE7UUFDUSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCO0FBQ0o7UUFDUSxZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixhQUFhO1FBQ2IsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QjtBQUNSO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO0tBQ0MsVUFBVTtJQUNYO0lBQ0E7S0FDQyxVQUFVO0lBQ1g7SUFDQTtJQUNBLFVBQVU7SUFDVjtBQUNKIiwiZmlsZSI6ImUtZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1hZGRyZXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyJTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgXHJcbn1cclxuLmFkZHJlc3MtbGVmdHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdwcm94aW1hLW5vdmEnO1xyXG59XHJcbi5hZGRyZXNzLWxlZnQgaDF7XHJcbiAgICBmb250LWZhbWlseTogJ3Byb3hpbWEtbm92YSc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHBhZGRpbmc6IDI1cHggMCAyMHB4IDA7XHJcbn1cclxuLmFkZHJlc3MtbGVmdCBsaXtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gcGFkZGluZy1ib3R0b206MTVweCA7XHJcbn1cclxuLmFkZHJlc3MtbGVmdCAub3JkZXJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5hZGRyZXNzLWxlZnQgLmxvZ291dHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYWRkcmVzcy1yaWdodHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uYWRkcmVzcy1yaWdodCAuaW5wdXRib3h7XHJcbm91dGxpbmU6bm9uZTtcclxuYm9yZGVyOm5vbmU7XHJcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xyXG5wYWRkaW5nOiA3cHggN3B4IDdweCAxMHB4O1xyXG53aWR0aDogNzAlO1xyXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5mb250LXNpemU6IDE1cHg7XHJcbmNvbG9yOiMwMDA7XHJcbn1cclxuXHJcbi5hZGRyZXNzLXJpZ2h0IHB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbi5hZGRyZXNzLXJpZ2h0IGJ1dHRvbntcclxuICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogOXB4IDdweCA5cHggMTBweDtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6I2YzZjNmMztcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbi52bHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmM2YzZjM7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLmFkZHJlc3MtbGVmdHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuYWRkcmVzcy1yaWdodHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcclxuICAgIH1cclxuICAgIC52bHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmFkZHJlc3MtcmlnaHQgLmlucHV0Ym94e1xyXG4gICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAuYWRkcmVzcy1yaWdodCAuaW5wdXRib3gtcG9zdGFse1xyXG4gICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAuYWRkcmVzcy1yaWdodCBidXR0b257XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgfSAgXHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EEditProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-e-edit-profile',
                templateUrl: './e-edit-profile.component.html',
                styleUrls: ['./e-edit-profile.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/home/home.component */ "9vUh");
/* harmony import */ var _app_productlist_productlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/productlist/productlist.component */ "aPpE");
/* harmony import */ var _app_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/productdetails/productdetails.component */ "q7SO");
/* harmony import */ var _app_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/checkout/checkout.component */ "IiZn");
/* harmony import */ var _app_myorders_lists_myorders_lists_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/myorders-lists/myorders-lists.component */ "zTHT");
/* harmony import */ var _app_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/myaccount/myaccount.component */ "0JOB");
/* harmony import */ var _app_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/auth/signin/signin.component */ "5Fl7");
/* harmony import */ var _app_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/auth/signup/signup.component */ "SBxm");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "x7zu");
/* harmony import */ var _ordersucesspage_ordersucesspage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ordersucesspage/ordersucesspage.component */ "AJxa");
/* harmony import */ var _addresspage_addresspage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./addresspage/addresspage.component */ "lPsf");
/* harmony import */ var _e_manage_address_e_manage_address_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./e-manage-address/e-manage-address.component */ "XHPX");
/* harmony import */ var _e_edit_address_e_edit_address_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./e-edit-address/e-edit-address.component */ "NRAf");
/* harmony import */ var _e_edit_profile_e_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./e-edit-profile/e-edit-profile.component */ "v9X/");
/* harmony import */ var _e_search_e_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./e-search/e-search.component */ "lvch");



















const routes = [
    { path: '', component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'productlists/:cat/:title', component: _app_productlist_productlist_component__WEBPACK_IMPORTED_MODULE_3__["ProductlistComponent"] },
    { path: 'productdetails/:animal', component: _app_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_4__["ProductdetailsComponent"] },
    { path: 'checkout', component: _app_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutComponent"] },
    { path: 'myorders', component: _app_myorders_lists_myorders_lists_component__WEBPACK_IMPORTED_MODULE_6__["MyordersListsComponent"] },
    { path: 'myaccount', component: _app_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_7__["MyaccountComponent"] },
    { path: 'signup', component: _app_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"] },
    { path: 'signin', component: _app_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"] },
    { path: 'wishlist', component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_10__["WishlistComponent"] },
    { path: 'placed/:oid', component: _ordersucesspage_ordersucesspage_component__WEBPACK_IMPORTED_MODULE_11__["OrdersucesspageComponent"] },
    { path: 'address', component: _addresspage_addresspage_component__WEBPACK_IMPORTED_MODULE_12__["AddresspageComponent"] },
    { path: 'search', component: _e_search_e_search_component__WEBPACK_IMPORTED_MODULE_16__["ESearchComponent"] },
    { path: 'manageaddress', component: _e_manage_address_e_manage_address_component__WEBPACK_IMPORTED_MODULE_13__["EManageAddressComponent"] },
    { path: 'editaddress', component: _e_edit_address_e_edit_address_component__WEBPACK_IMPORTED_MODULE_14__["EEditAddressComponent"] },
    { path: 'editprofile', component: _e_edit_profile_e_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__["EEditProfileComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "x7zu":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.service */ "jOXV");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "18Le");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "55oq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _wishlistitem_wishlistitem_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wishlistitem/wishlistitem.component */ "yuZI");










function WishlistComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-wishlistitem", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pid", product_r1);
} }
class WishlistComponent {
    constructor(firestore, service, auth) {
        this.firestore = firestore;
        this.service = service;
        this.auth = auth;
        this.UID = "SC6XLQ8i04ynJ5YYOsp5";
    }
    ngOnInit() {
        //this.UID = this.service.getUID()
        this.initSavedState();
    }
    initSavedState() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firestore.collection('users').doc("9").ref.get();
            this.UID = yield this.auth.getUID();
            if (this.UID.length != 0) {
                this.firestore
                    .collection("users")
                    .doc(this.UID).snapshotChanges().subscribe((d) => {
                    this.saved = d.payload.data().saved;
                });
            }
        });
    }
}
WishlistComponent.ɵfac = function WishlistComponent_Factory(t) { return new (t || WishlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
WishlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WishlistComponent, selectors: [["app-wishlist"]], decls: 13, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-11", 2, "padding-top", "5%"], ["category", "Wishlist"], [2, "font-weight", "bold"], ["class", "card col-lg-3 col-md-6 md-1 col-sm-12", 4, "ngFor", "ngForOf"], [1, "row-2", "text-center"], [2, "font-family", "proxima-nova", "font-size", "13px"], ["routerLink", "/productlists/NULL/All Products", 1, "btn", "btn-info", 2, "border-radius", "0px", "font-size", "12px", "font-family", "proxima-nova"], [1, "card", "col-lg-3", "col-md-6", "md-1", "col-sm-12"], [3, "pid"]], template: function WishlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, WishlistComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Surf for More Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "View More Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.saved);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _wishlistitem_wishlistitem_component__WEBPACK_IMPORTED_MODULE_8__["WishlistitemComponent"]], styles: [".container[_ngcontent-%COMP%]{\n    padding-top: 8%;\n}\n\n.row[_ngcontent-%COMP%]{\n    justify-content:first baseline;\n    flex-wrap: wrap;\n}\n\n.card[_ngcontent-%COMP%]{\n    border:none;\n    vertical-align: 10%;\n    padding-top: 3%;\n}\n\n.row-2[_ngcontent-%COMP%]{\n    padding-top: 15%;\n}\n\n\n\nh2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{\n    font-family: 'proxima-nova';\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpc2hsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBSUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0RHOztBQUVIO0lBQ0ksMkJBQTJCO0NBQzlCIiwiZmlsZSI6Indpc2hsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIHBhZGRpbmctdG9wOiA4JTtcbn1cblxuLnJvd3tcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Zmlyc3QgYmFzZWxpbmU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2FyZHtcbiAgICBib3JkZXI6bm9uZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogMTAlO1xuICAgIHBhZGRpbmctdG9wOiAzJTtcbn1cblxuXG5cbi5yb3ctMntcbiAgICBwYWRkaW5nLXRvcDogMTUlO1xufVxuXG5cblxuXG4vKiAuY29udGFpbmVye1xuICAgIHBhZGRpbmctdG9wOiA4JTtcbn1cbi5jYXJkLWltZy10b3Age1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbn1cbi5yb3d7XG4gICAganVzdGlmeS1jb250ZW50OmZpcnN0IGJhc2VsaW5lO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jYXJke1xuICAgIGJvcmRlcjpub25lO1xuICAgIHZlcnRpY2FsLWFsaWduOiAxMCU7XG4gICAgcGFkZGluZy10b3A6IDMlO1xufVxuXG4uYnRuLWRhcmt7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDpjb3ZlcjtcbiAgICBoZWlnaHQ6IDEwJTsgICBcbn1cblxuLnJvdy0ye1xuICAgIHBhZGRpbmctdG9wOiAxNSU7XG59XG5cbi5idG4tMntcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB3aWR0aDogOCU7XG4gICAgaGVpZ2h0OiA4JTtcbiAgICBsZWZ0Ojc4JTtcbiAgICB0b3A6IDEwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMiU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6bGlnaHRzbGF0ZWdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgXG59XG4uYnRuLTI6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcblxufVxuLm1hdGVyaWFsLWljb25ze1xuY29sb3I6IHJnYigxNDgsIDkzLCA5Myk7XG5oZWlnaHQ6IGF1dG87XG53aWR0aDogYXV0bztcbn0gKi9cblxuaDIsIGg0LCBoMSwgaDUsIGg2e1xuICAgIGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhJztcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WishlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-wishlist',
                templateUrl: './wishlist.component.html',
                styleUrls: ['./wishlist.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "x9Az":
/*!**********************************!*\
  !*** ./src/app/address.model.ts ***!
  \**********************************/
/*! exports provided: Address, OrderItem, Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
class Address {
}
class OrderItem {
}
class Order {
}


/***/ }),

/***/ "yuZI":
/*!********************************************************!*\
  !*** ./src/app/wishlistitem/wishlistitem.component.ts ***!
  \********************************************************/
/*! exports provided: WishlistitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistitemComponent", function() { return WishlistitemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.service */ "jOXV");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "18Le");






class WishlistitemComponent {
    constructor(firestore, service, auth) {
        this.firestore = firestore;
        this.service = service;
        this.auth = auth;
        this.UID = "";
    }
    ngOnInit() {
        this.firestore.collection('products').doc(this.pid).ref.get().then((d) => {
            this.data = Object.assign({ id: d.id }, d.data());
        });
    }
    addToCart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.UID = yield this.auth.getUID();
            //window.alert(this.UID)
            if (this.UID) {
                //window.alert("INCOMING")
                this.firestore.collection("users").doc(this.UID).collection("cart").ref.add({
                    "pid": this.data.id,
                    "size": this.data.size[0] || '',
                    "quantity": 1
                }).then((res) => {
                    //window.alert("ITEM ADDED")
                });
            }
            else {
            }
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.UID = yield this.auth.getUID();
            var doc = yield this.firestore
                .collection("users")
                .doc(this.UID).ref.get();
            let saved = doc.data().saved;
            //var saved: String[] = doc.data().saved;
            saved.forEach((element, index) => {
                if (element == id)
                    saved.splice(index, 1);
            });
            this.firestore
                .collection("users")
                .doc(this.UID)
                .set({ saved: saved }, { merge: true });
        });
    }
}
WishlistitemComponent.ɵfac = function WishlistitemComponent_Factory(t) { return new (t || WishlistitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
WishlistitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WishlistitemComponent, selectors: [["app-wishlistitem"]], inputs: { pid: "pid" }, decls: 9, vars: 3, consts: [["alt", "", 1, "card-img-top", 3, "src"], [1, "btn-2", 2, "margin", "12px", 3, "click"], ["src", "../../assets/Recycle Bin Full@2x.png", "width", "24px", "height", "24px"], [2, "font-weight", "bold", "font-family", "proxima-nova", "padding-top", "12px", "margin-bottom", "4px"], [2, "font-family", "proxima-nova", "padding-top", "0px", "margin-top", "0px"], [1, "btn", "btn-dark", 2, "border-radius", "0px", "font-size", "12px", "font-family", "proxima-nova", "background-color", "#1C1C1C", 3, "click"]], template: function WishlistitemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WishlistitemComponent_Template_a_click_1_listener() { return ctx.delete(ctx.pid); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WishlistitemComponent_Template_button_click_7_listener() { return ctx.addToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Add To Cart\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.data.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.name, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Rs.", ctx.data.price, "\n");
    } }, styles: [".card-img-top[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 300px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    padding-top: 5%;\r\n}\r\n\r\n\r\n.btn-2[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    left:72%;\r\n    top: 10%;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    border-color: transparent;\r\n    background-color: #f2f2f2;\r\n    padding: 5px;\r\n}\r\n\r\n\r\n.material-icons[_ngcontent-%COMP%]{\r\n    color: rgb(102, 11, 11);\r\n    height: auto;\r\n    width: auto;\r\n    }\r\n\r\n\r\n.btn-dark[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        -o-object-fit:cover;\r\n           object-fit:cover;\r\n        height: 10%;   \r\n}\r\n\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    border:none;\r\n    vertical-align: 10%;\r\n    padding-top: 3%;\r\n}\r\n\r\n\r\nh2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{\r\n    font-family: 'proxima-nova';\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpc2hsaXN0aXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOzs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYOzs7QUFDSjtRQUNRLFdBQVc7UUFDWCxtQkFBZ0I7V0FBaEIsZ0JBQWdCO1FBQ2hCLFdBQVc7QUFDbkI7OztBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLDJCQUEyQjtDQUM5QiIsImZpbGUiOiJ3aXNobGlzdGl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWltZy10b3Age1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuXHJcblxyXG4uYnRuLTJ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6NzIlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4ubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICBjb2xvcjogcmdiKDEwMiwgMTEsIDExKTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4uYnRuLWRhcmt7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDpjb3ZlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwJTsgICBcclxufVxyXG4uY2FyZHtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgdmVydGljYWwtYWxpZ246IDEwJTtcclxuICAgIHBhZGRpbmctdG9wOiAzJTtcclxufVxyXG5cclxuaDIsIGg0LCBoMSwgaDUsIGg2e1xyXG4gICAgZm9udC1mYW1pbHk6ICdwcm94aW1hLW5vdmEnO1xyXG4gfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WishlistitemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-wishlistitem',
                templateUrl: './wishlistitem.component.html',
                styleUrls: ['./wishlistitem.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, { pid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "zTHT":
/*!************************************************************!*\
  !*** ./src/app/myorders-lists/myorders-lists.component.ts ***!
  \************************************************************/
/*! exports provided: MyordersListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyordersListsComponent", function() { return MyordersListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products.service */ "jOXV");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication.service */ "18Le");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "55oq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _myorder_item_myorder_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../myorder-item/myorder-item.component */ "dJ5B");










function MyordersListsComponent_app_myorder_item_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-myorder-item", 12);
} if (rf & 2) {
    const o_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", o_r1);
} }
class MyordersListsComponent {
    constructor(firestore, route, service, auth, router) {
        this.firestore = firestore;
        this.route = route;
        this.service = service;
        this.auth = auth;
        this.router = router;
        this.OID = "";
        this.UID = "";
        this.mm = "Prepaid";
        this.amounts = [];
        this.sub_total = 0;
        this.total = 0;
        this.deliver_fee = 100;
        this.discount = 0;
    }
    ngOnInit() {
        //this.OID = this.route.snapshot.paramMap.get("oid")||""
        this.firestore.collection('users').ref.limit(1).get().then(e => {
            this.auth.getUID().then(uu => {
                this.UID = uu;
                this.firestore.collection('orders', ref => ref.orderBy('order_date', 'desc').where('comment', '==', this.UID)).snapshotChanges().subscribe(d => {
                    this.orders = d.map((e) => (Object.assign({ doc_id: e.payload.doc.id }, e.payload.doc.data())));
                });
            });
        });
    }
    getProduct(p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var d = yield this.firestore.collection('products').doc(p.sku.replace(p.name, '')).ref.get();
            var pr = Object.assign({ id: d.id }, d.data());
            pr.price = pr.size[p.size] || pr.price;
            this.products.push(pr);
            if (this.items.length == this.amounts.length && this.items.length != 0) {
                this.calculateT();
            }
        });
    }
    calculateT() {
        this.sub_total = this.order.sub_total;
        this.discount = this.order.total_discount;
        this.deliver_fee = this.order.shipping_charges;
        this.total = this.sub_total + this.deliver_fee - this.discount;
    }
    logout() {
    }
}
MyordersListsComponent.ɵfac = function MyordersListsComponent_Factory(t) { return new (t || MyordersListsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MyordersListsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyordersListsComponent, selectors: [["app-myorders-lists"]], decls: 25, vars: 1, consts: [[1, "container", 2, "padding-top", "140px"], ["category", "My Account / My Orders"], [2, "height", "24px"], [1, "row"], [1, "col-lg-3"], [1, "container-1"], [2, "font-family", "proxima-nova", "font-size", "24px"], ["routerLink", "/myaccount"], [3, "click"], [1, "col-lg-9"], [1, "container"], [3, "data", 4, "ngFor", "ngForOf"], [3, "data"]], template: function MyordersListsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "my account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Account Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyordersListsComponent_Template_a_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, MyordersListsComponent_app_myorder_item_24_Template, 1, 1, "app-myorder-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orders);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _myorder_item_myorder_item_component__WEBPACK_IMPORTED_MODULE_8__["MyorderItemComponent"]], styles: [".toplink[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  \r\n  .toplink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  \r\n  img[_ngcontent-%COMP%] {\r\n    border-radius: 2px;\r\n    max-width: 100%;\r\n    width: 100%;\r\n    height: auto;\r\n    text-align: center;\r\n    border: none;\r\n  }\r\n  \r\n  h5[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .first-btn[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .first-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    opacity: 0.7;\r\n  }\r\n  \r\n  .second-btn[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    border: none;\r\n  }\r\n  \r\n  .second-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: green;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    opacity: 0.7;\r\n    border: none;\r\n  }\r\n  \r\n  .third-btn[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    border: none;\r\n  }\r\n  \r\n  .third-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    opacity: 0.7;\r\n    border: none;\r\n  }\r\n  \r\n  .fourth-btn[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .fourth-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .completed-btn[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    color: white;\r\n    align-items: center;\r\n    padding: 10px 12px;\r\n    border-color: black;\r\n    border-radius: 0;\r\n    opacity: 0.7;\r\n    border: none;\r\n  }\r\n  \r\n  p[_ngcontent-%COMP%] {\r\n    color: green;\r\n    font-size: 13px;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n    color: black;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%]:hover{\r\n   text-decoration: underline;\r\n    color: black;\r\n    opacity: 0.7;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15b3JkZXJzLWxpc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLFlBQVk7RUFDZDs7RUFDQTtHQUNDLDBCQUEwQjtJQUN6QixZQUFZO0lBQ1osWUFBWTtFQUNkIiwiZmlsZSI6Im15b3JkZXJzLWxpc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wbGluayAuYnJlYWRjcnVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLnRvcGxpbmsgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICBoNSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5maXJzdC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5maXJzdC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWNvbmQtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuc2Vjb25kLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRoaXJkLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRoaXJkLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvdXJ0aC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3VydGgtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICAuY29tcGxldGVkLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgICBcclxuICBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIGE6aG92ZXJ7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyordersListsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-myorders-lists',
                templateUrl: './myorders-lists.component.html',
                styleUrls: ['./myorders-lists.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map