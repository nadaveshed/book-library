(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-dialog/add-dialog.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-dialog/add-dialog.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n}\r\n\r\n.buttons {\r\n    width: 100%;\r\n    /* height: 400px; */\r\n    /* border: 1px solid black; */\r\n    margin-top:20%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.container {\r\n    font-family:Georgia;\r\n    font-size: 20px;\r\n}\r\n\r\n.btn{\r\n    margin:5%;\r\n    font-size: 25px;\r\n}"

/***/ }),

/***/ "./src/app/add-dialog/add-dialog.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-dialog/add-dialog.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>Add new book</p>\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">  \n\n    <div class=\"form-group\">\n      <label>Enter book id</label>\n      <input \n        type=\"text\" \n        formControlName=\"id\" \n        class=\"form-control\" \n        [ngClass]=\"{ 'is-invalid': submitted && f.id.errors }\" \n        placeholder=\"Enter book id\"\n        [(ngModel)]=\"data.id\"\n      />\n      <div *ngIf=\"submitted && !!f.id.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"!!f.id.errors.required\">Book id is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>What's your author?</label>\n      <input \n        type=\"text\" \n        formControlName=\"author\" \n        class=\"form-control\" \n        [ngClass]=\"{ 'is-invalid': submitted && f.author.errors }\" \n        placeholder=\"Enter author name\"\n        [(ngModel)]=\"data['Author Name']\"\n      />\n      <div *ngIf=\"submitted && !!f.author.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"!!f.author.errors.required\">Author name is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>What's the published date?</label>\n      <input \n            matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" \n            \n            [(ngModel)]=\"data['Published Date']\"\n            [max]=\"maxDate\"\n            [min]=\"minDate\"\n            formControlName=\"date\" \n            class=\"form-control\" \n            [ngClass]=\"{ 'is-invalid': submitted && f.date.errors }\"\n      >\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n      <div *ngIf=\"submitted && !!f.date.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"!!f.date.errors.required\">Published date is required</div>\n          <div *ngIf=\"!!f.date.errors.min && !!f.date.errors.max\">Published date is out</div>\n          <div *ngIf=\"!!f.date.errors.minlength\">Published date is short</div>\n      </div>\n    </div>\n  \n    <div class=\"form-group\">\n      <label for=\"title\">What's your book title?</label>\n      <input \n        type=\"text\" \n        formControlName=\"title\" \n        class=\"form-control\" \n        [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" \n        [(ngModel)]=\"data['Book Title']\"\n        placeholder=\"Enter book title\"\n      >\n        <div *ngIf=\"submitted && !!f.title.errors\" class=\"invalid-feedback\" >\n            <div *ngIf=\"!!f.title.errors.required\">Book title is required</div>\n        </div> \n    </div>\n  </form>    \n  \n  <div class=\"buttons\">\n    <button class=\"btn btn-primary btn-lg\" (click)=\"onSubmit()\">Save</button>\n    <button class=\"btn btn-basic btn-lg\" (click)=\"onCloseNo()\">Cancel</button>\n  </div>\n</div>\n  \n  <!-- <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" formControlName=\"Name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f['Author Name'].errors }\" />\n        <div *ngIf=\"submitted && f['Author Name'].errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f['Author Name'].errors.required\">Email is required</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n    </div>  \n  </form> -->\n\n\n  <!-- <div mat-dialog-actions>\n    <button mat-button (click)=\"onCloseNo()\">Cancel</button>\n    <button mat-button (click)=\"onCloseOk()\" [disabled]=\"author.errors\">Save</button>\n  </div> -->"

/***/ }),

/***/ "./src/app/add-dialog/add-dialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-dialog/add-dialog.component.ts ***!
  \****************************************************/
/*! exports provided: AddDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDialogComponent", function() { return AddDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AddDialogComponent = /** @class */ (function () {
    function AddDialogComponent(dialogRef, formBuilder, datepipe, data) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.datepipe = datepipe;
        this.data = data;
        this.submitted = false;
        this.maxDate = new Date(2020, 0, 1);
        this.minDate = new Date(1810, 0, 1);
        this.CloneData = data, console.log("the data ", this.data);
    }
    AddDialogComponent.prototype.onCloseNo = function () {
        console.log("clicked cancel");
        this.dialogRef.close(null);
    };
    AddDialogComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9A-Z ]+')]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1800)]]
            //   password: ['', [Validators.required, Validators.minLength(6)]]
        });
    };
    Object.defineProperty(AddDialogComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddDialogComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log("clicked save");
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.dialogRef.close(this.data);
        alert('SUCCESS!!');
    };
    AddDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-dialog',
            template: __webpack_require__(/*! ./add-dialog.component.html */ "./src/app/add-dialog/add-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-dialog.component.css */ "./src/app/add-dialog/add-dialog.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], Object])
    ], AddDialogComponent);
    return AddDialogComponent;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.getJSON().subscribe(function (data) {
            // this.getPosts().subscribe(data => {
            console.log(data);
        });
    }
    ApiService.prototype.getJSON = function () {
        return this.http.get("./assets/data/books.json");
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    text-align: center;\r\n}\r\nbutton{\r\n    text-align: center;\r\n    margin: 5px;\r\n}\r\n.table {\r\n    border-collapse: collapse;\r\n    margin: 15px;\r\n    border: 1px solid grey;\r\n}\r\ntd {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 25px;\r\n    border: 1px solid gray;\r\n}\r\nth{\r\n    font-size: 30px;\r\n    padding: 15px;\r\n    border: 1px solid gainsboro;\r\n}\r\ntr:nth-child(even) {background-color: #f2f2f2;}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">ID</th>\n          <th class=\"text-center\">Author Name</th>\n          <th class=\"text-center\">Published Date</th>\n          <th class=\"text-center\">Book Title</th>\n          <th class=\"text-center\"><button mat-raised-button class=\"btn btn-success\" (click)=\"addDialog()\"><mat-icon>add</mat-icon></button></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let folder of mydata?.books; let i=index;\">\n\n          <td>{{folder.id}}</td>\n          <td>{{folder[\"Author Name\"]}}</td>\n          <td>{{folder['Published Date']}}</td>\n          <td>{{removeReg(folder['Book Title']) | titlecase}}</td>\n          <button mat-raised-button class=\"btn btn-primary\" (click)=\"editDialog(folder)\"><mat-icon>edit</mat-icon></button>          \n          <button mat-raised-button class=\"btn btn-danger\" (click)=\"deleteDialog(i)\"><mat-icon>delete</mat-icon></button>\n          </tr>\n          \n        </tbody>\n\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-dialog/edit-dialog.component */ "./src/app/edit-dialog/edit-dialog.component.ts");
/* harmony import */ var _delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete-dialog/delete-dialog.component */ "./src/app/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-dialog/add-dialog.component */ "./src/app/add-dialog/add-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(apiSerivce, dialog, datepipe) {
        this.apiSerivce = apiSerivce;
        this.dialog = dialog;
        this.datepipe = datepipe;
        this.title = 'book library';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiSerivce.getJSON().subscribe(function (data) {
            return _this.mydata = data;
        });
        // this.mydata = JSON.parse(localStorage.getItem('key')) || [];
    };
    AppComponent.prototype.editDialog = function (folder) {
        console.log(folder);
        var dialogRef = this.dialog.open(_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditDialogComponent"], {
            width: '350px',
            height: '620px',
            data: JSON.parse(JSON.stringify(folder))
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if ((result != null) && (result.id != null) && (result['Author Name'] != null) && (result['Published Date'] != null) && (result['Book Title'] != null)) {
                folder.id = result.id;
                folder['Author Name'] = result['Author Name'];
                folder['Published Date'] = result['Published Date'];
                folder['Book Title'] = result['Book Title'];
            }
            console.log('The dialog was closed');
        });
    };
    AppComponent.prototype.deleteDialog = function (i) {
        var _this = this;
        this.index = i;
        console.log(i);
        var dialogRef = this.dialog.open(_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteDialogComponent"], {
            width: '320px',
            height: '400px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.mydata.books.splice(i, 0);
            }
            console.log('The dialog was closed');
        });
    };
    AppComponent.prototype.addDialog = function () {
        var _this = this;
        console.log("index: ", this.mydata.books.length + 1);
        var dialogRef = this.dialog.open(_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddDialogComponent"], {
            width: '350px',
            height: '650px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.mydata.books.push((_a = {
                    id: result.id
                },
                _a['Author Name'] = result['Author Name'],
                _a['Published Date'] = _this.mydate(result['Published Date']),
                _a['Book Title'] = result['Book Title'],
                _a));
            var _a;
        });
    };
    AppComponent.prototype.removeReg = function (word) {
        if (!word)
            return word;
        return word.replace(/[|&/:;$%@#^-_="*!.`~<>()+,]/g, '');
    };
    AppComponent.prototype.mydate = function (word) {
        this.date = new Date(word);
        var newdate = this.datepipe.transform(word, 'dd/MM/yyyy');
        return newdate;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-dialog/edit-dialog.component */ "./src/app/edit-dialog/edit-dialog.component.ts");
/* harmony import */ var _delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./delete-dialog/delete-dialog.component */ "./src/app/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-dialog/add-dialog.component */ "./src/app/add-dialog/add-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_11__["EditDialogComponent"],
                _delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DeleteDialogComponent"],
                _add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_13__["AddDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"]
            ],
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
            entryComponents: [
                _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_11__["EditDialogComponent"],
                _delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DeleteDialogComponent"],
                _add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_13__["AddDialogComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/delete-dialog/delete-dialog.component.css":
/*!***********************************************************!*\
  !*** ./src/app/delete-dialog/delete-dialog.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.buttons {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 17px;\r\n  }\r\n\r\n.container {\r\n    font-family:Georgia;\r\n    font-size: 20px;\r\n}\r\n\r\n.btn {\r\n    margin: 10%;\r\n    font-size: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/delete-dialog/delete-dialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/delete-dialog/delete-dialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>\n    Are you want to delete this book?\n  </p>\n  <div>\n    <div mat-dialog-actions class=\"col-md-12 text-right\">\n      <div class=\"buttons\">\n\n        <button mat-raised-button class=\"btn btn-primary btn-lg\" type=\"button\" (click)=\"onCloseOk()\">Ok</button>\n        <button mat-raised-button class=\"btn btn-basic btn-lg\" type=\"button\" (click)=\"onCloseNo()\">Cancel</button>\n        \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/delete-dialog/delete-dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/delete-dialog/delete-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteDialogComponent.prototype.onCloseNo = function () {
        console.log("clicked cancel");
        this.dialogRef.close(false);
    };
    DeleteDialogComponent.prototype.onCloseOk = function () {
        // console.log(this.CloneData)
        console.log("clicked OK");
        // alert("alert")
        this.dialogRef.close(true);
    };
    DeleteDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-dialog',
            template: __webpack_require__(/*! ./delete-dialog.component.html */ "./src/app/delete-dialog/delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-dialog.component.css */ "./src/app/delete-dialog/delete-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/edit-dialog/edit-dialog.component.css":
/*!*******************************************************!*\
  !*** ./src/app/edit-dialog/edit-dialog.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    margin: 10px;\r\n}\r\n\r\n.buttons {\r\n    width: 100%;\r\n    /* height: 400px; */\r\n    /* border: 1px solid black; */\r\n    margin-top:20%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.container {\r\n    font-family:Georgia;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    margin: 5%;\r\n}\r\n\r\n.btn{\r\n    margin:5%;\r\n    font-size: 25px;\r\n}"

/***/ }),

/***/ "./src/app/edit-dialog/edit-dialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-dialog/edit-dialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n  <p>Book id: {{data.id}}</p>\n  \n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">  \n\n    <div class=\"form-group\">\n      <label>Edit book id:</label>\n      <input \n        type=\"text\" \n        formControlName=\"id\" \n        class=\"form-control\" \n        [ngClass]=\"{ 'is-invalid': submitted && f.id.errors }\" \n        placeholder=\"Enter book id\"\n        [(ngModel)]=\"data.id\"\n      />\n      <div *ngIf=\"submitted && !!f.id.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"!!f.id.errors.required\">Book id is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Edit author name:</label>\n      <input \n        type=\"text\" \n        formControlName=\"author\" \n        class=\"form-control\" \n        [ngClass]=\"{ 'is-invalid': submitted && f.author.errors }\" \n        [(ngModel)]=\"data['Author Name']\"\n      />\n      <div *ngIf=\"submitted && !!f.author.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"!!f.author.errors.required\">Author name is required</div>\n      </div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label>Edit published date:</label>\n      <input \n        type=\"text\" \n        formControlName=\"date\" \n        class=\"form-control\" \n        [ngClass]=\"{ 'is-invalid': submitted && f.date.errors }\" \n        [(ngModel)]=\"data['Published Date']\"\n      >\n\n      <div *ngIf=\"submitted && !!f.date.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"!!f.date.errors.required\">Published date is required</div>\n          <div *ngIf=\"!!f.date.errors.pattern\">Published date is wrong</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"title\">Edit book title:</label>\n      <input \n        type=\"text\" \n        formControlName=\"title\" \n        class=\"form-control\" \n        [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" \n        [(ngModel)]=\"data['Book Title']\"\n      />\n        <div *ngIf=\"submitted && !!f.title.errors\" class=\"invalid-feedback\" >\n            <div *ngIf=\"!!f.title.errors.required\">Book title is required</div>\n            <div *ngIf=\"!!f.title.errors.pattern\">Book title can contain only letters or numbers</div>\n        </div> \n    </div>\n  </form>    \n\n  <div class=\"buttons\">\n    <button class=\"btn btn-primary btn-lg\" (click)=\"onSubmit()\">Save</button>\n    <button class=\"btn btn-basic btn-lg\" (click)=\"onCloseNo()\">Cancel</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit-dialog/edit-dialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-dialog/edit-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(dialogRef, formBuilder, data) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.data = data;
        this.submitted = false;
        this.maxDate = new Date(2020, 0, 1);
        this.minDate = new Date(1810, 0, 1);
        this.CloneData = data, console.log("the data ", this.data);
    }
    EditDialogComponent.prototype.onCloseNo = function () {
        console.log("clicked cancel");
        console.log(this.data);
        this.dialogRef.close(null);
    };
    EditDialogComponent.prototype.onCloseOk = function () {
        console.log("clicked save");
        this.dialogRef.close(this.CloneData);
    };
    EditDialogComponent.prototype.update = function (e) {
        return e.target.value;
    };
    EditDialogComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9A-Z ]+')]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9][0-9][./-][0-9][0-9][./-][1-9][0-9][0-9][0-9]')]]
        });
    };
    Object.defineProperty(EditDialogComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditDialogComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log("clicked save");
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.data);
        this.dialogRef.close(this.data);
    };
    EditDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-dialog',
            template: __webpack_require__(/*! ./edit-dialog.component.html */ "./src/app/edit-dialog/edit-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-dialog.component.css */ "./src/app/edit-dialog/edit-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], Object])
    ], EditDialogComponent);
    return EditDialogComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], { preserveWhitespaces: false })
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nadav\Desktop\book library\book-library\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map