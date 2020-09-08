(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _shared_layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/layouts/login-layout/login-layout.component */ "./src/app/shared/layouts/login-layout/login-layout.component.ts");
/* harmony import */ var _shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/classes/auth.guard */ "./src/app/shared/classes/auth.guard.ts");
/* harmony import */ var _shared_classes_moderator_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/classes/moderator.guard */ "./src/app/shared/classes/moderator.guard.ts");
/* harmony import */ var _shared_layouts_people_layout_people_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/layouts/people-layout/people-layout.component */ "./src/app/shared/layouts/people-layout/people-layout.component.ts");
/* harmony import */ var _friends_page_friends_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./friends-page/friends-page.component */ "./src/app/friends-page/friends-page.component.ts");
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-page/search-page.component */ "./src/app/search-page/search-page.component.ts");
/* harmony import */ var _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings-page/settings-page.component */ "./src/app/settings-page/settings-page.component.ts");
/* harmony import */ var _shared_layouts_chat_layout_chat_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/layouts/chat-layout/chat-layout.component */ "./src/app/shared/layouts/chat-layout/chat-layout.component.ts");
/* harmony import */ var _chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat-page/chat-page.component */ "./src/app/chat-page/chat-page.component.ts");
/* harmony import */ var _shared_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/layouts/admin-layout/admin-layout.component */ "./src/app/shared/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _users_page_users_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users-page/users-page.component */ "./src/app/users-page/users-page.component.ts");
/* harmony import */ var _users_page_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./users-page/users-form/users-form.component */ "./src/app/users-page/users-form/users-form.component.ts");
/* harmony import */ var _pictures_page_pictures_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pictures-page/pictures-page.component */ "./src/app/pictures-page/pictures-page.component.ts");
/* harmony import */ var _pictures_page_pictures_form_pictures_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pictures-page/pictures-form/pictures-form.component */ "./src/app/pictures-page/pictures-form/pictures-form.component.ts");
/* harmony import */ var _institutions_page_institutions_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./institutions-page/institutions-page.component */ "./src/app/institutions-page/institutions-page.component.ts");
/* harmony import */ var _institutions_page_institutions_form_institutions_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./institutions-page/institutions-form/institutions-form.component */ "./src/app/institutions-page/institutions-form/institutions-form.component.ts");
/* harmony import */ var _institutions_page_institutions_delete_institutions_delete_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./institutions-page/institutions-delete/institutions-delete.component */ "./src/app/institutions-page/institutions-delete/institutions-delete.component.ts");






















const routes = [
    {
        path: '', component: _shared_layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_3__["LoginLayoutComponent"], children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"] }
        ]
    },
    {
        path: '', component: _shared_layouts_people_layout_people_layout_component__WEBPACK_IMPORTED_MODULE_6__["PeopleLayoutComponent"], canActivate: [_shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], children: [
            { path: 'people', redirectTo: '/people/friends', pathMatch: 'full' },
            { path: 'people/friends', component: _friends_page_friends_page_component__WEBPACK_IMPORTED_MODULE_7__["FriendsPageComponent"] },
            { path: 'people/search', component: _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_8__["SearchPageComponent"] },
            { path: 'people/settings', component: _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_9__["SettingsPageComponent"] }
        ]
    },
    {
        path: '', component: _shared_layouts_chat_layout_chat_layout_component__WEBPACK_IMPORTED_MODULE_10__["ChatLayoutComponent"], canActivate: [_shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], children: [
            { path: 'chat/:id', component: _chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_11__["ChatPageComponent"] }
        ]
    },
    {
        path: '', component: _shared_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__["AdminLayoutComponent"], canActivate: [_shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _shared_classes_moderator_guard__WEBPACK_IMPORTED_MODULE_5__["ModeratorGuard"]], children: [
            { path: 'manage', redirectTo: '/manage/users', pathMatch: 'full' },
            { path: 'manage/users', component: _users_page_users_page_component__WEBPACK_IMPORTED_MODULE_13__["UsersPageComponent"] },
            { path: 'manage/users/:id', component: _users_page_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_14__["UsersFormComponent"] },
            { path: 'manage/pictures', redirectTo: '/manage/pictures/5f12ff8cc06cd105437d84e3', pathMatch: 'full' },
            { path: 'manage/pictures/:_id', component: _pictures_page_pictures_page_component__WEBPACK_IMPORTED_MODULE_15__["PicturesPageComponent"] },
            { path: 'manage/pictures/:do/:many/:folder/:_id', component: _pictures_page_pictures_form_pictures_form_component__WEBPACK_IMPORTED_MODULE_16__["PicturesFormComponent"] },
            { path: 'manage/institutions', component: _institutions_page_institutions_page_component__WEBPACK_IMPORTED_MODULE_17__["InstitutionsPageComponent"] },
            { path: 'manage/institutions/:do', component: _institutions_page_institutions_form_institutions_form_component__WEBPACK_IMPORTED_MODULE_18__["InstitutionsFormComponent"] },
            { path: 'manage/institutions/delete/:id', component: _institutions_page_institutions_delete_institutions_delete_component__WEBPACK_IMPORTED_MODULE_19__["InstitutionsDeleteComponent"] }
        ]
    }
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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        const potentialToken = localStorage.getItem('auth-token');
        if (potentialToken !== null) {
            this.auth.setToken(potentialToken);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: '<router-outlet></router-outlet>'
            }]
    }], function () { return [{ type: _shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_services_socketio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/socketio.service */ "./src/app/shared/services/socketio.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _shared_layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/layouts/login-layout/login-layout.component */ "./src/app/shared/layouts/login-layout/login-layout.component.ts");
/* harmony import */ var _shared_layouts_people_layout_people_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/layouts/people-layout/people-layout.component */ "./src/app/shared/layouts/people-layout/people-layout.component.ts");
/* harmony import */ var _shared_layouts_chat_layout_chat_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/layouts/chat-layout/chat-layout.component */ "./src/app/shared/layouts/chat-layout/chat-layout.component.ts");
/* harmony import */ var _shared_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/layouts/admin-layout/admin-layout.component */ "./src/app/shared/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/classes/token.interceptor */ "./src/app/shared/classes/token.interceptor.ts");
/* harmony import */ var _friends_page_friends_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./friends-page/friends-page.component */ "./src/app/friends-page/friends-page.component.ts");
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search-page/search-page.component */ "./src/app/search-page/search-page.component.ts");
/* harmony import */ var _chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chat-page/chat-page.component */ "./src/app/chat-page/chat-page.component.ts");
/* harmony import */ var _users_page_users_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./users-page/users-page.component */ "./src/app/users-page/users-page.component.ts");
/* harmony import */ var _pictures_page_pictures_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pictures-page/pictures-page.component */ "./src/app/pictures-page/pictures-page.component.ts");
/* harmony import */ var _institutions_page_institutions_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./institutions-page/institutions-page.component */ "./src/app/institutions-page/institutions-page.component.ts");
/* harmony import */ var _pictures_page_pictures_form_pictures_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pictures-page/pictures-form/pictures-form.component */ "./src/app/pictures-page/pictures-form/pictures-form.component.ts");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _users_page_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./users-page/users-form/users-form.component */ "./src/app/users-page/users-form/users-form.component.ts");
/* harmony import */ var _institutions_page_institutions_form_institutions_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./institutions-page/institutions-form/institutions-form.component */ "./src/app/institutions-page/institutions-form/institutions-form.component.ts");
/* harmony import */ var _institutions_page_institutions_delete_institutions_delete_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./institutions-page/institutions-delete/institutions-delete.component */ "./src/app/institutions-page/institutions-delete/institutions-delete.component.ts");
/* harmony import */ var _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./settings-page/settings-page.component */ "./src/app/settings-page/settings-page.component.ts");
/* harmony import */ var _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/pipes/filter.pipe */ "./src/app/shared/pipes/filter.pipe.ts");
/* harmony import */ var _shared_components_delete_picture_delete_picture_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/components/delete-picture/delete-picture.component */ "./src/app/shared/components/delete-picture/delete-picture.component.ts");
/* harmony import */ var _shared_components_delete_one_message_delete_one_message_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/components/delete-one-message/delete-one-message.component */ "./src/app/shared/components/delete-one-message/delete-one-message.component.ts");
/* harmony import */ var _shared_components_delete_all_message_delete_all_message_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/components/delete-all-message/delete-all-message.component */ "./src/app/shared/components/delete-all-message/delete-all-message.component.ts");
/* harmony import */ var _shared_components_picture_zoom_picture_zoom_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/components/picture-zoom/picture-zoom.component */ "./src/app/shared/components/picture-zoom/picture-zoom.component.ts");
/* harmony import */ var _shared_components_record_audio_record_audio_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/components/record-audio/record-audio.component */ "./src/app/shared/components/record-audio/record-audio.component.ts");
/* harmony import */ var _shared_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/directive/easy-lang.directive */ "./src/app/shared/directive/easy-lang.directive.ts");
/* harmony import */ var _shared_components_answers_answers_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/components/answers/answers.component */ "./src/app/shared/components/answers/answers.component.ts");



































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            multi: true,
            useClass: _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"]
        },
        _shared_services_socketio_service__WEBPACK_IMPORTED_MODULE_5__["SocketioService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"],
        _shared_layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_9__["LoginLayoutComponent"],
        _shared_layouts_people_layout_people_layout_component__WEBPACK_IMPORTED_MODULE_10__["PeopleLayoutComponent"],
        _shared_layouts_chat_layout_chat_layout_component__WEBPACK_IMPORTED_MODULE_11__["ChatLayoutComponent"],
        _shared_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__["AdminLayoutComponent"],
        _friends_page_friends_page_component__WEBPACK_IMPORTED_MODULE_14__["FriendsPageComponent"],
        _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_15__["SearchPageComponent"],
        _chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_16__["ChatPageComponent"],
        _users_page_users_page_component__WEBPACK_IMPORTED_MODULE_17__["UsersPageComponent"],
        _pictures_page_pictures_page_component__WEBPACK_IMPORTED_MODULE_18__["PicturesPageComponent"],
        _institutions_page_institutions_page_component__WEBPACK_IMPORTED_MODULE_19__["InstitutionsPageComponent"],
        _pictures_page_pictures_form_pictures_form_component__WEBPACK_IMPORTED_MODULE_20__["PicturesFormComponent"],
        _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__["LoaderComponent"],
        _users_page_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_22__["UsersFormComponent"],
        _institutions_page_institutions_form_institutions_form_component__WEBPACK_IMPORTED_MODULE_23__["InstitutionsFormComponent"],
        _institutions_page_institutions_delete_institutions_delete_component__WEBPACK_IMPORTED_MODULE_24__["InstitutionsDeleteComponent"],
        _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_25__["SettingsPageComponent"],
        _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_26__["FilterPipe"],
        _shared_components_delete_picture_delete_picture_component__WEBPACK_IMPORTED_MODULE_27__["DeletePictureComponent"],
        _shared_components_delete_one_message_delete_one_message_component__WEBPACK_IMPORTED_MODULE_28__["DeleteOneMessageComponent"],
        _shared_components_delete_all_message_delete_all_message_component__WEBPACK_IMPORTED_MODULE_29__["DeleteAllMessageComponent"],
        _shared_components_picture_zoom_picture_zoom_component__WEBPACK_IMPORTED_MODULE_30__["PictureZoomComponent"],
        _shared_components_record_audio_record_audio_component__WEBPACK_IMPORTED_MODULE_31__["RecordAudioComponent"],
        _shared_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_32__["EasyLangDirective"],
        _shared_components_answers_answers_component__WEBPACK_IMPORTED_MODULE_33__["AnswersComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"],
                    _shared_layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_9__["LoginLayoutComponent"],
                    _shared_layouts_people_layout_people_layout_component__WEBPACK_IMPORTED_MODULE_10__["PeopleLayoutComponent"],
                    _shared_layouts_chat_layout_chat_layout_component__WEBPACK_IMPORTED_MODULE_11__["ChatLayoutComponent"],
                    _shared_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__["AdminLayoutComponent"],
                    _friends_page_friends_page_component__WEBPACK_IMPORTED_MODULE_14__["FriendsPageComponent"],
                    _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_15__["SearchPageComponent"],
                    _chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_16__["ChatPageComponent"],
                    _users_page_users_page_component__WEBPACK_IMPORTED_MODULE_17__["UsersPageComponent"],
                    _pictures_page_pictures_page_component__WEBPACK_IMPORTED_MODULE_18__["PicturesPageComponent"],
                    _institutions_page_institutions_page_component__WEBPACK_IMPORTED_MODULE_19__["InstitutionsPageComponent"],
                    _pictures_page_pictures_form_pictures_form_component__WEBPACK_IMPORTED_MODULE_20__["PicturesFormComponent"],
                    _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__["LoaderComponent"],
                    _users_page_users_form_users_form_component__WEBPACK_IMPORTED_MODULE_22__["UsersFormComponent"],
                    _institutions_page_institutions_form_institutions_form_component__WEBPACK_IMPORTED_MODULE_23__["InstitutionsFormComponent"],
                    _institutions_page_institutions_delete_institutions_delete_component__WEBPACK_IMPORTED_MODULE_24__["InstitutionsDeleteComponent"],
                    _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_25__["SettingsPageComponent"],
                    _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_26__["FilterPipe"],
                    _shared_components_delete_picture_delete_picture_component__WEBPACK_IMPORTED_MODULE_27__["DeletePictureComponent"],
                    _shared_components_delete_one_message_delete_one_message_component__WEBPACK_IMPORTED_MODULE_28__["DeleteOneMessageComponent"],
                    _shared_components_delete_all_message_delete_all_message_component__WEBPACK_IMPORTED_MODULE_29__["DeleteAllMessageComponent"],
                    _shared_components_picture_zoom_picture_zoom_component__WEBPACK_IMPORTED_MODULE_30__["PictureZoomComponent"],
                    _shared_components_record_audio_record_audio_component__WEBPACK_IMPORTED_MODULE_31__["RecordAudioComponent"],
                    _shared_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_32__["EasyLangDirective"],
                    _shared_components_answers_answers_component__WEBPACK_IMPORTED_MODULE_33__["AnswersComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        multi: true,
                        useClass: _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"]
                    },
                    _shared_services_socketio_service__WEBPACK_IMPORTED_MODULE_5__["SocketioService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chat-page/chat-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-page/chat-page.component.ts ***!
  \**************************************************/
/*! exports provided: ChatPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageComponent", function() { return ChatPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/chat.service */ "./src/app/shared/services/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/nav.service */ "./src/app/shared/services/nav.service.ts");
/* harmony import */ var _shared_services_socketio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/socketio.service */ "./src/app/shared/services/socketio.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/directive/easy-lang.directive */ "./src/app/shared/directive/easy-lang.directive.ts");
/* harmony import */ var _shared_components_delete_picture_delete_picture_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/delete-picture/delete-picture.component */ "./src/app/shared/components/delete-picture/delete-picture.component.ts");
/* harmony import */ var _shared_components_delete_all_message_delete_all_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/components/delete-all-message/delete-all-message.component */ "./src/app/shared/components/delete-all-message/delete-all-message.component.ts");
/* harmony import */ var _shared_components_record_audio_record_audio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/components/record-audio/record-audio.component */ "./src/app/shared/components/record-audio/record-audio.component.ts");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");















function ChatPageComponent_div_0_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_img_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.wantDeleteChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatPageComponent_div_0_img_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_img_5_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.changeSentence(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatPageComponent_div_0_img_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_img_6_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.changeSentence(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatPageComponent_div_0_img_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_img_7_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.newColor("grey"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatPageComponent_div_0_img_8_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_img_8_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.newColor("color"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatPageComponent_div_0_img_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_img_9_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.wantRecordAudio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatPageComponent_div_0_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatPageComponent_div_0_div_11_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("sentence-in dark-", ctx_r30.session.secondColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatPageComponent_div_0_div_11_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("sentence-in dark-", ctx_r31.session.secondColor, "-border sentence-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r28, " ");
} }
function ChatPageComponent_div_0_div_11_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatPageComponent_div_0_div_11_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatPageComponent_div_0_div_11_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0414\u041E\u041A\u0423\u041C\u0415\u041D\u0422");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("sentence-in dark-", ctx_r34.session.secondColor, "-border");
} }
function ChatPageComponent_div_0_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatPageComponent_div_0_div_11_div_3_div_1_Template, 2, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatPageComponent_div_0_div_11_div_3_div_2_Template, 3, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatPageComponent_div_0_div_11_div_3_div_3_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatPageComponent_div_0_div_11_div_3_div_4_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatPageComponent_div_0_div_11_div_3_div_5_Template, 5, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r29 = ctx.index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.types[i_r29] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.types[i_r29] == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.types[i_r29] == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.types[i_r29] == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.types[i_r29] == 5);
} }
function ChatPageComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u0420\u0415\u0414\u041B\u041E\u0416\u0415\u041D\u0418\u0415");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatPageComponent_div_0_div_11_div_3_Template, 6, 5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_div_11_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.clearSentence(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_div_11_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.sendSentence(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("sentence dark-", ctx_r10.session.secondColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.messages);
} }
function ChatPageComponent_div_0_span_12_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 46);
} if (rf & 2) {
    const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r42.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatPageComponent_div_0_span_12_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 47);
} }
function ChatPageComponent_div_0_span_12_div_1_p_5_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_span_12_div_1_p_5_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.newFolder(picture_r42._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("libraryName tc dark-", ctx_r50.session.secondColor, "-border green-cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", picture_r42.textInHTML, " ");
} }
function ChatPageComponent_div_0_span_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_span_12_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.newFolder(picture_r42._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatPageComponent_div_0_span_12_div_1_img_3_Template, 1, 1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatPageComponent_div_0_span_12_div_1_img_4_Template, 1, 0, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatPageComponent_div_0_span_12_div_1_p_5_Template, 2, 4, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r42.src);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !picture_r42.src);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r42.textInHTML);
} }
function ChatPageComponent_div_0_span_12_div_2_p_2_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_span_12_div_2_p_2_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r62.makeMessage(2, picture_r42.textInHTML); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pictatext tc dark-", ctx_r60.session.secondColor, "-border green-cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", picture_r42.textInHTML, " ");
} }
function ChatPageComponent_div_0_span_12_div_2_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_span_12_div_2_span_3_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r66.wantDeletePicture(picture_r42.src, picture_r42._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatPageComponent_div_0_span_12_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_span_12_div_2_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r69.makeMessage(1, picture_r42.src); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatPageComponent_div_0_span_12_div_2_p_2_Template, 2, 4, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatPageComponent_div_0_span_12_div_2_span_3_Template, 1, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", picture_r42._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pict dark-", ctx_r44.session.secondColor, "-border green-cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r42.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r42.textInHTML && ctx_r44.session.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r42.parent == "5f1309e3962c2f062467f854");
} }
function ChatPageComponent_div_0_span_12_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("audiotext dark-", ctx_r73.session.secondColor, "-border file-", picture_r42.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](picture_r42.textInHTML);
} }
function ChatPageComponent_div_0_span_12_div_3_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_span_12_div_3_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r77.wantDeletePicture("audioDelete", picture_r42._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatPageComponent_div_0_span_12_div_3_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_span_12_div_3_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r80.wantDeletePicture("voteDelete", picture_r42._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatPageComponent_div_0_span_12_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatPageComponent_div_0_span_12_div_3_p_1_Template, 2, 5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "audio", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatPageComponent_div_0_span_12_div_3_span_4_Template, 1, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatPageComponent_div_0_span_12_div_3_span_5_Template, 1, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_span_12_div_3_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r83.makeMessage(3, picture_r42.src); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", picture_r42._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r42.textInHTML);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r42.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r42.parent == "5f130a00962c2f062467f856");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r42.parent == "5f5486f982194ca1fb21ff6d");
} }
function ChatPageComponent_div_0_span_12_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_span_12_div_4_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r87.wantDeletePicture("videoDelete", picture_r42._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_span_12_div_4_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r90.makeMessage(4, picture_r42.src); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", picture_r42._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("video dark-", ctx_r46.session.secondColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r42.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatPageComponent_div_0_span_12_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_span_12_div_5_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r93.wantDeletePicture("documentDelete", picture_r42._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_span_12_div_5_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r96.makeMessage(5, picture_r42.src); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", picture_r42._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", picture_r42.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("download", picture_r42.textInHTML);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("pict dark-", ctx_r47.session.secondColor, "-border file-", picture_r42.color, " green-cursor");
} }
function ChatPageComponent_div_0_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatPageComponent_div_0_span_12_div_1_Template, 6, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatPageComponent_div_0_span_12_div_2_Template, 4, 7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatPageComponent_div_0_span_12_div_3_Template, 7, 5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatPageComponent_div_0_span_12_div_4_Template, 5, 5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatPageComponent_div_0_span_12_div_5_Template, 5, 7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r42.folder && picture_r42.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !picture_r42.folder && picture_r42.show && picture_r42.src && picture_r42.parent != "5f1309f1962c2f062467f855" && picture_r42.parent != "5f130a00962c2f062467f856" && picture_r42.parent != "5f130a0d962c2f062467f857" && picture_r42.parent != "5f5486f982194ca1fb21ff6d");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r42.parent == "5f130a00962c2f062467f856" || picture_r42.parent == "5f5486f982194ca1fb21ff6d");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r42.parent == "5f1309f1962c2f062467f855");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r42.parent == "5f130a0d962c2f062467f857");
} }
function ChatPageComponent_div_0_app_delete_picture_14_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-delete-picture", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("result", function ChatPageComponent_div_0_app_delete_picture_14_Template_app_delete_picture_result_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r99.fromDeletePicture($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx_r12.image);
} }
function ChatPageComponent_div_0_app_delete_all_message_15_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-delete-all-message", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("result", function ChatPageComponent_div_0_app_delete_all_message_15_Template_app_delete_all_message_result_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r101.fromDeleteChat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatPageComponent_div_0_app_record_audio_16_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-record-audio", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("audio", function ChatPageComponent_div_0_app_record_audio_16_Template_app_record_audio_audio_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r103.newVote($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChatPageComponent_div_0_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.onFileUpload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatPageComponent_div_0_img_4_Template, 1, 0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatPageComponent_div_0_img_5_Template, 1, 0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatPageComponent_div_0_img_6_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatPageComponent_div_0_img_7_Template, 1, 0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatPageComponent_div_0_img_8_Template, 1, 0, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatPageComponent_div_0_img_9_Template, 1, 0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChatPageComponent_div_0_label_10_Template, 2, 0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ChatPageComponent_div_0_div_11_Template, 6, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatPageComponent_div_0_span_12_Template, 6, 5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatPageComponent_div_0_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.cross(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChatPageComponent_div_0_app_delete_picture_14_Template, 1, 1, "app-delete-picture", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChatPageComponent_div_0_app_delete_all_message_15_Template, 1, 0, "app-delete-all-message", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChatPageComponent_div_0_app_record_audio_16_Template, 1, 0, "app-record-audio", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("all dark-", ctx_r0.session.secondColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@all", ctx_r0.allState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@button", ctx_r0.buttonsState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pictureAndFolder.folder.parent != "5f12ff8cc06cd105437d84e3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.sentenceToggle && ctx_r0.session.sentence);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sentenceToggle && ctx_r0.session.sentence);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.queryC == "color" && ctx_r0.session.change && ctx_r0.pictureAndFolder.folder.many != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.queryC == "grey" && ctx_r0.session.change && ctx_r0.pictureAndFolder.folder.many != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.session.vote);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pictureAndFolder.folder._id == "5f130939962c2f062467f853");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sentenceToggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pictureAndFolder.pictures);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@button", ctx_r0.buttonsState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deletePicture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deleteChat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.record);
} }
function ChatPageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class ChatPageComponent {
    constructor(chatService, route, router, navService, socketService) {
        this.chatService = chatService;
        this.route = route;
        this.router = router;
        this.navService = navService;
        this.socketService = socketService;
        this.newMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allState = 'nosentence';
        this.buttonsState = 'nosentence';
        this.queryF = '';
        this.queryC = '';
        this.reloading = false;
        this.deletePicture = false;
        this.image = '';
        this.deletingElement = '';
        this.sentenceToggle = false;
        this.types = [];
        this.messages = [];
        this.deleteChat = false;
        this.record = false;
        this.navService.textMessage.subscribe(message => {
            this.makeMessage(message[1], message[0]);
        });
    }
    ngOnInit() {
        this.reloading = true;
        this.route.firstChild.params.subscribe((params) => {
            this.id = params.id;
            this.interlocutor = this.chatService.getInterlocutor(this.id).subscribe(user => {
                this.interlocutorSex = user.sex;
                this.interlocutorID = user._id;
                this.route.queryParams.subscribe((queryParam) => {
                    this.queryC = queryParam.color;
                    this.queryF = queryParam.folder;
                    this.oSub = this.chatService.getPictures(this.queryF).subscribe(pictureAndFolder => {
                        this.pictureAndFolder = pictureAndFolder;
                        this.navService.sendMany(this.pictureAndFolder.folder.many);
                        this.sortPictures();
                    });
                });
            });
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            files: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    }
    sortPictures() {
        for (let picture of this.pictureAndFolder.pictures) {
            if (picture.invisible === picture.exceptions.includes(this.session._id)) {
                picture.show = true;
                if (picture._id == '5f130939962c2f062467f853') {
                    picture.src = this.session.photo;
                    if (picture.text)
                        picture.textInHTML = picture.text;
                    else if (picture.textForGirls)
                        picture.textInHTML = picture.textForGirls;
                }
                else {
                    if (this.pictureAndFolder.folder.many == 0) {
                        picture.src = picture.boysGreyPicture;
                        if (picture.text)
                            picture.textInHTML = picture.text;
                    }
                    else if (this.pictureAndFolder.folder.many == 1) {
                        if (this.session.sex == 1) {
                            if (picture.text)
                                picture.textInHTML = picture.text;
                            else if (picture.textForGirls)
                                picture.textInHTML = picture.textForGirls;
                            if (this.queryC == 'grey') {
                                if (picture.boysGreyPicture)
                                    picture.src = picture.boysGreyPicture;
                                else if (picture.girlsGreyPicture)
                                    picture.src = picture.girlsGreyPicture;
                                else if (picture.boysColorPicture)
                                    picture.src = picture.boysColorPicture;
                                else if (picture.girlsColorPicture)
                                    picture.src = picture.girlsColorPicture;
                            }
                            else {
                                if (picture.boysColorPicture)
                                    picture.src = picture.boysColorPicture;
                                else if (picture.girlsColorPicture)
                                    picture.src = picture.girlsColorPicture;
                                else if (picture.boysGreyPicture)
                                    picture.src = picture.boysGreyPicture;
                                else if (picture.girlsGreyPicture)
                                    picture.src = picture.girlsGreyPicture;
                            }
                        }
                        else {
                            if (picture.textForGirls)
                                picture.textInHTML = picture.textForGirls;
                            else if (picture.text)
                                picture.textInHTML = picture.text;
                            if (this.queryC == 'grey') {
                                if (picture.girlsGreyPicture)
                                    picture.src = picture.girlsGreyPicture;
                                else if (picture.boysGreyPicture)
                                    picture.src = picture.boysGreyPicture;
                                else if (picture.girlsColorPicture)
                                    picture.src = picture.girlsColorPicture;
                                else if (picture.boysColorPicture)
                                    picture.src = picture.boysColorPicture;
                            }
                            else {
                                if (picture.girlsColorPicture)
                                    picture.src = picture.girlsColorPicture;
                                else if (picture.boysColorPicture)
                                    picture.src = picture.boysColorPicture;
                                else if (picture.girlsGreyPicture)
                                    picture.src = picture.girlsGreyPicture;
                                else if (picture.boysGreyPicture)
                                    picture.src = picture.boysGreyPicture;
                            }
                        }
                    }
                    else {
                        if (this.interlocutorSex == 1) {
                            if (picture.text)
                                picture.textInHTML = picture.text;
                            else if (picture.textForGirls)
                                picture.textInHTML = picture.textForGirls;
                            if (this.queryC == 'grey') {
                                if (picture.boysGreyPicture)
                                    picture.src = picture.boysGreyPicture;
                                else if (picture.girlsGreyPicture)
                                    picture.src = picture.girlsGreyPicture;
                                else if (picture.boysColorPicture)
                                    picture.src = picture.boysColorPicture;
                                else if (picture.girlsColorPicture)
                                    picture.src = picture.girlsColorPicture;
                            }
                            else {
                                if (picture.boysColorPicture)
                                    picture.src = picture.boysColorPicture;
                                else if (picture.girlsColorPicture)
                                    picture.src = picture.girlsColorPicture;
                                else if (picture.boysGreyPicture)
                                    picture.src = picture.boysGreyPicture;
                                else if (picture.girlsGreyPicture)
                                    picture.src = picture.girlsGreyPicture;
                            }
                        }
                        else {
                            if (picture.textForGirls)
                                picture.textInHTML = picture.textForGirls;
                            else if (picture.text)
                                picture.textInHTML = picture.text;
                            if (this.queryC == 'grey') {
                                if (picture.girlsGreyPicture)
                                    picture.src = picture.girlsGreyPicture;
                                else if (picture.boysGreyPicture)
                                    picture.src = picture.boysGreyPicture;
                                else if (picture.girlsColorPicture)
                                    picture.src = picture.girlsColorPicture;
                                else if (picture.boysColorPicture)
                                    picture.src = picture.boysColorPicture;
                            }
                            else {
                                if (picture.girlsColorPicture)
                                    picture.src = picture.girlsColorPicture;
                                else if (picture.boysColorPicture)
                                    picture.src = picture.boysColorPicture;
                                else if (picture.girlsGreyPicture)
                                    picture.src = picture.girlsGreyPicture;
                                else if (picture.boysGreyPicture)
                                    picture.src = picture.boysGreyPicture;
                            }
                        }
                    }
                }
            }
        }
        this.reloading = false;
    }
    makeMessage(type, message) {
        if (this.sentenceToggle) {
            this.types.push(type);
            this.messages.push(message);
        }
        else {
            const types = [type];
            const messages = [message];
            this.chatService.sendMessage(this.interlocutorID, messages, types).subscribe(message => {
                if (this.interlocutorID != this.session._id) {
                    this.socketService.sendMessage(this.interlocutorID, message);
                }
                this.newMessage.emit(message);
            }, error => console.log(error));
        }
    }
    sendSentence() {
        if (this.messages != []) {
            this.chatService.sendMessage(this.interlocutorID, this.messages, this.types).subscribe(message => {
                if (this.interlocutorID != this.session._id) {
                    this.socketService.sendMessage(this.interlocutorID, message);
                }
                this.newMessage.emit(message);
                this.messages = [];
                this.types = [];
            }, error => console.log(error));
        }
    }
    cross() {
        if (this.queryF == '5f12ff8cc06cd105437d84e3') {
            this.router.navigate(['/people/friends']);
        }
        else {
            this.router.navigate([], { queryParams: { 'folder': this.pictureAndFolder.folder.parent, 'color': this.queryC } });
        }
    }
    newFolder(id) {
        this.router.navigate([], { queryParams: { 'folder': id, 'color': this.queryC } });
    }
    newColor(color) {
        this.router.navigate([], { queryParams: { 'folder': this.queryF, 'color': color } });
    }
    changeSentence() {
        if (this.sentenceToggle) {
            this.sentenceToggle = false;
            this.allState = 'nosentence';
            this.buttonsState = 'nosentence';
        }
        else {
            this.allState = 'sentence';
            this.buttonsState = 'sentence';
            this.sentenceToggle = true;
        }
    }
    onFileUpload(event) {
        const files = event.target.files;
        this.form.disable();
        this.chatService.newFiles(files).subscribe(message => this.form.enable(), error => {
            console.log(error.error.message);
            this.form.enable();
        });
    }
    fromDeletePicture(result) {
        if (result) {
            this.chatService.deletePicture(this.deletingElement).subscribe(message => {
                document.getElementById(this.deletingElement).remove();
                this.deletingElement = '';
                this.deletePicture = false;
            }, error => {
                console.log(error);
                this.deletePicture = false;
            });
        }
        else {
            this.deletePicture = false;
        }
    }
    fromDeleteChat(result) {
        if (result) {
            this.chatService.deleteAllMessages(this.interlocutorID).subscribe(message => {
                this.deleteAll.emit(true);
            });
        }
        this.deleteChat = false;
    }
    wantDeletePicture(src, id) {
        this.image = src;
        this.deletingElement = id;
        this.deletePicture = true;
    }
    wantDeleteChat() {
        this.deleteChat = true;
    }
    wantRecordAudio() {
        this.record = true;
    }
    clearSentence() {
        this.messages = [];
        this.types = [];
    }
    newVote(audio) {
        this.record = false;
        if (audio[0]) {
            if (audio[1]) {
                this.makeMessage(3, audio[2].boysGreyPicture);
            }
            if (this.queryF == '5f5486f982194ca1fb21ff6d') {
                audio[2].textInHTML = audio[2].text;
                audio[2].src = audio[2].boysGreyPicture;
                this.pictureAndFolder.pictures.unshift(audio[2]);
            }
        }
    }
    ngOnDestroy() {
        this.interlocutor.unsubscribe();
        this.oSub.unsubscribe();
    }
}
ChatPageComponent.ɵfac = function ChatPageComponent_Factory(t) { return new (t || ChatPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_nav_service__WEBPACK_IMPORTED_MODULE_5__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_socketio_service__WEBPACK_IMPORTED_MODULE_6__["SocketioService"])); };
ChatPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatPageComponent, selectors: [["app-chat-page"]], inputs: { session: "session" }, outputs: { newMessage: "newMessage", deleteAll: "deleteAll" }, decls: 3, vars: 2, consts: [[3, "class", 4, "ngIf", "ngIfElse"], ["loader", ""], ["hidden", "", 3, "formGroup"], ["type", "file", "formControlName", "files", "id", "files", "multiple", "", 3, "change"], [1, "chat-menu"], ["class", "menu-icon green-cursor", "src", "/uploads/images/musorka.png", 3, "click", 4, "ngIf"], ["class", "menu-icon green-cursor", "src", "/uploads/images/left_pointing.png", 3, "click", 4, "ngIf"], ["class", "menu-icon green-cursor", "src", "/uploads/images/right_pointing.png", 3, "click", 4, "ngIf"], ["class", "menu-icon green-cursor", "src", "/uploads/images/bw.png", 3, "click", 4, "ngIf"], ["class", "menu-icon green-cursor", "src", "/uploads/images/color.png", 3, "click", 4, "ngIf"], ["class", "menu-icon green-cursor", "src", "/uploads/images/microphone.png", 3, "click", 4, "ngIf"], ["for", "files", 4, "ngIf"], [3, "class", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "exit", "green-cursor", 3, "click"], [3, "image", "result", 4, "ngIf"], [3, "result", 4, "ngIf"], [3, "audio", 4, "ngIf"], ["src", "/uploads/images/musorka.png", 1, "menu-icon", "green-cursor", 3, "click"], ["src", "/uploads/images/left_pointing.png", 1, "menu-icon", "green-cursor", 3, "click"], ["src", "/uploads/images/right_pointing.png", 1, "menu-icon", "green-cursor", 3, "click"], ["src", "/uploads/images/bw.png", 1, "menu-icon", "green-cursor", 3, "click"], ["src", "/uploads/images/color.png", 1, "menu-icon", "green-cursor", 3, "click"], ["src", "/uploads/images/microphone.png", 1, "menu-icon", "green-cursor", 3, "click"], ["for", "files"], ["src", "/uploads/images/downloads.png", 1, "menu-icon", "green-cursor"], ["appEasyLang", "", 1, "sent"], [1, "sentDelete", "green-cursor", 3, "click"], [1, "sentLetter", "green-cursor", 3, "click"], ["class", "sent-m", 4, "ngIf"], [4, "ngIf"], [1, "sent-m"], [3, "src"], ["appEasyLang", ""], ["controls", "", 1, "sentence-audio"], ["controls", "", 1, "sentence-in"], ["src", "/uploads/images/docs.png", 1, "sentence-doument"], ["class", "pictaandtext", 4, "ngIf"], ["class", "pictaandtext", 3, "id", 4, "ngIf"], ["class", "video-audio-box", 3, "id", 4, "ngIf"], [1, "pictaandtext"], [1, "picta", "folder"], [1, "downloads-picture", "green-cursor", 3, "click"], ["class", "downloads", 3, "src", 4, "ngIf"], ["class", "downloads", "src", "/uploads/images/clean.png", 4, "ngIf"], ["appEasyLang", "", 3, "class", "click", 4, "ngIf"], [1, "downloads", 3, "src"], ["src", "/uploads/images/clean.png", 1, "downloads"], ["appEasyLang", "", 3, "click"], [1, "pictaandtext", 3, "id"], [3, "src", "click"], ["class", "file-delete green-cursor", 3, "click", 4, "ngIf"], [1, "file-delete", "green-cursor", 3, "click"], [1, "video-audio-box", 3, "id"], ["controls", "", 1, "audio"], [1, "file-letter", "green-cursor", 3, "click"], ["controls", ""], [3, "href", "download"], ["src", "/uploads/images/docs.png"], [3, "image", "result"], [3, "result"], [3, "audio"]], template: function ChatPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatPageComponent_div_0_Template, 17, 19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatPageComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reloading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_8__["EasyLangDirective"], _shared_components_delete_picture_delete_picture_component__WEBPACK_IMPORTED_MODULE_9__["DeletePictureComponent"], _shared_components_delete_all_message_delete_all_message_component__WEBPACK_IMPORTED_MODULE_10__["DeleteAllMessageComponent"], _shared_components_record_audio_record_audio_component__WEBPACK_IMPORTED_MODULE_11__["RecordAudioComponent"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"]], styles: [".video-audio-box[_ngcontent-%COMP%] {\n    width: 40%;\n    height: auto;\n    margin-left: 3%;\n    margin-top: 3%;\n    margin-bottom: 3%; \n    display: inline-block;\n}\n\n.video[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    max-height: 15rem;\n    max-width: 100%;\n    border-style: solid;\n    border-width: 3px;\n    border-radius: 10px;\n}\n\n.audio[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    width: 80%;\n}\n\n.audiotext[_ngcontent-%COMP%] {\n    width: 80%;\n    position: relative;\n    word-wrap: break-word;\n    text-align: center;\n    font-size: 0.45cm;\n    font-family: Arial, sans-serif;\n    border-style: solid;\n    border-width: 3px;\n    border-radius: 10px;\n    padding: 0.1cm;\n    margin-bottom: 0.2cm;\n    height: auto;\n}\n\n.file-letter[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    display: inline-block;\n    margin-top: 5px;\n    width: 100px;\n    height: 50px;\n    background-image: url('/uploads/images/letter.png');\n    background-size: 100% 100%;\n}\n\n.file-delete[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-top: 5px;\n    width: 50px;\n    height: 50px;\n    background-image: url('/uploads/images/musorka.png');\n    background-size: 100% 100%;\n}\n\n.sentence[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 5%;\n    bottom: 5%;\n    right: 1.5%;\n    width: 15%;\n    background-color: white;\n    border-width: 3px;\n    border-style: solid;\n    border-radius: 10px;\n    z-index: 2;\n    padding-bottom: 60px;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.sent[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    text-align: center;\n}\n\n.sentLetter[_ngcontent-%COMP%] {\n    position: fixed;\n    height: 50px;\n    width: 5%;\n    right: 3%;\n    bottom: 6%;\n    background-image: url('/uploads/images/letter.png'); \n    background-size: 100% 100%;\n    display: block;\n}\n\n.sentDelete[_ngcontent-%COMP%] {\n    position: fixed;\n    height: 50px;\n    width: 50px;\n    right: 10%;\n    bottom: 6%;\n    background-image: url('/uploads/images/musorka.png'); \n    background-size: 100% 100%;\n    display: block;\n}\n\n.sentence-in[_ngcontent-%COMP%] {\n    width: 80%;\n    height: auto;\n    border-width: 2px;\n    border-style: solid;\n    border-radius: 10px;\n    margin-left: 9%;\n    text-align: left;\n    word-wrap: break-word;\n}\n\n.sent-m[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    width: 100%;\n    position: relative;\n}\n\n.sentence-text[_ngcontent-%COMP%] {\n    padding: 3px;\n}\n\n.sentence-audio[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-left: 9%;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.sentence-doument[_ngcontent-%COMP%] {\n    height: 45px;\n    width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1wYWdlL2NoYXQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osbURBQW1EO0lBQ25ELDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixvREFBb0Q7SUFDcEQsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0lBQ1YsbURBQW1EO0lBQ25ELDBCQUEwQjtJQUMxQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDVixvREFBb0Q7SUFDcEQsMEJBQTBCO0lBQzFCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jaGF0LXBhZ2UvY2hhdC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8tYXVkaW8tYm94IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7IFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnZpZGVvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LWhlaWdodDogMTVyZW07XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmF1ZGlvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuLmF1ZGlvdGV4dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuNDVjbTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAuMWNtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMmNtO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmZpbGUtbGV0dGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvdXBsb2Fkcy9pbWFnZXMvbGV0dGVyLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4uZmlsZS1kZWxldGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3VwbG9hZHMvaW1hZ2VzL211c29ya2EucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5zZW50ZW5jZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNSU7XG4gICAgYm90dG9tOiA1JTtcbiAgICByaWdodDogMS41JTtcbiAgICB3aWR0aDogMTUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci13aWR0aDogM3B4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uc2VudCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlbnRMZXR0ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUlO1xuICAgIHJpZ2h0OiAzJTtcbiAgICBib3R0b206IDYlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3VwbG9hZHMvaW1hZ2VzL2xldHRlci5wbmcnKTsgXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZW50RGVsZXRlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHJpZ2h0OiAxMCU7XG4gICAgYm90dG9tOiA2JTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy91cGxvYWRzL2ltYWdlcy9tdXNvcmthLnBuZycpOyBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlbnRlbmNlLWluIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDklO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uc2VudC1tIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlbnRlbmNlLXRleHQge1xuICAgIHBhZGRpbmc6IDNweDtcbn1cblxuLnNlbnRlbmNlLWF1ZGlvIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiA5JTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc2VudGVuY2UtZG91bWVudCB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiBhdXRvO1xufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('all', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('nosentence', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    width: '98%',
                    fontSize: '0.7cm'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('sentence', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    width: '75%',
                    fontSize: '0.525cm'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('nosentence <=> sentence', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('button', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('nosentence', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    right: '2%',
                    position: 'fixed'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('sentence', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    right: '19%',
                    position: 'fixed'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('nosentence <=> sentence', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-page',
                templateUrl: './chat-page.component.html',
                styleUrls: ['./chat-page.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('all', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('nosentence', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            width: '98%',
                            fontSize: '0.7cm'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('sentence', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            width: '75%',
                            fontSize: '0.525cm'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('nosentence <=> sentence', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('button', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('nosentence', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            right: '2%',
                            position: 'fixed'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('sentence', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            right: '19%',
                            position: 'fixed'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('nosentence <=> sentence', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500))
                    ])
                ]
            }]
    }], function () { return [{ type: _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _shared_services_nav_service__WEBPACK_IMPORTED_MODULE_5__["NavService"] }, { type: _shared_services_socketio_service__WEBPACK_IMPORTED_MODULE_6__["SocketioService"] }]; }, { session: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/friends-page/friends-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/friends-page/friends-page.component.ts ***!
  \********************************************************/
/*! exports provided: FriendsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPageComponent", function() { return FriendsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _shared_services_people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/people.service */ "./src/app/shared/services/people.service.ts");
/* harmony import */ var _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/chat.service */ "./src/app/shared/services/chat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/directive/easy-lang.directive */ "./src/app/shared/directive/easy-lang.directive.ts");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");








function FriendsPageComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsPageComponent_div_0_div_1_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.goToChat(user_r5._id, ctx_r9.session.defaultColor, "5f3bfe9255ba364d9f2edfac"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { notincat: a0, inchat: a1 }; };
function FriendsPageComponent_div_0_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsPageComponent_div_0_div_1_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.goToChat(user_r5._id, ctx_r12.session.defaultColor); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, user_r5.onlineStatus != ctx_r7.session._id, user_r5.onlineStatus == ctx_r7.session._id));
} }
function FriendsPageComponent_div_0_div_1_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.surname);
} }
function FriendsPageComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FriendsPageComponent_div_0_div_1_div_1_Template, 1, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsPageComponent_div_0_div_1_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const user_r5 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.goToChat(user_r5._id, ctx_r17.session.defaultColor); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsPageComponent_div_0_div_1_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const user_r5 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.goToChat(user_r5._id, ctx_r19.session.defaultColor); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FriendsPageComponent_div_0_div_1_div_6_Template, 1, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsPageComponent_div_0_div_1_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const user_r5 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.goToChat(user_r5._id, ctx_r20.session.defaultColor); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FriendsPageComponent_div_0_div_1_span_11_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 11, user_r5.birthDate, "MM.dd") == _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 14, ctx_r3.today, "MM.dd") && ctx_r3.session.birthdays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("friendAvatar dark-", ctx_r3.session.firstColor, "-border green-cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r5.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r5.onlineStatus != "-1" && ctx_r3.session.online);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("friendName tc dark-", ctx_r3.session.firstColor, "-border green-cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.session.surnameView);
} }
function FriendsPageComponent_div_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsPageComponent_div_0_div_2_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const user_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.goToChat(user_r21._id, ctx_r25.session.defaultColor, "5f3bfe9255ba364d9f2edfac"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FriendsPageComponent_div_0_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsPageComponent_div_0_div_2_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const user_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.goToChat(user_r21._id, ctx_r28.session.defaultColor); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, user_r21.onlineStatus != ctx_r23.session._id, user_r21.onlineStatus == ctx_r23.session._id));
} }
function FriendsPageComponent_div_0_div_2_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r21.surname);
} }
function FriendsPageComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FriendsPageComponent_div_0_div_2_div_1_Template, 1, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsPageComponent_div_0_div_2_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const user_r21 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.goToChat(user_r21._id, ctx_r33.session.defaultColor); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FriendsPageComponent_div_0_div_2_div_5_Template, 1, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsPageComponent_div_0_div_2_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const user_r21 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.goToChat(user_r21._id, ctx_r35.session.defaultColor); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FriendsPageComponent_div_0_div_2_span_10_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r21 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 11, user_r21.birthDate, "MM.dd") == _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 14, ctx_r4.today, "MM.dd") && ctx_r4.session.birthdays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("friendAvatar dark-", ctx_r4.session.firstColor, "-border green-cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r21.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r21.onlineStatus != "-1" && ctx_r4.session.online);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("friendName tc dark-", ctx_r4.session.firstColor, "-border green-cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.session.surnameView);
} }
function FriendsPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FriendsPageComponent_div_0_div_1_Template, 12, 17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FriendsPageComponent_div_0_div_2_Template, 11, 17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.users.withMessageUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.users.withoutMessageUsers);
} }
function FriendsPageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class FriendsPageComponent {
    constructor(loginService, peopleService, chatService) {
        this.loginService = loginService;
        this.peopleService = peopleService;
        this.chatService = chatService;
        this.reloading = false;
        this.today = new Date();
    }
    ngOnInit() {
        this.reloading = true;
        this.obs$ = this.loginService.getUser().subscribe(user => {
            this.session = user;
            this.users$ = this.peopleService.fetchFriends().subscribe(users => {
                this.users = users;
                this.reloading = false;
            });
        });
    }
    goToChat(id, color, folder) {
        this.chatService.goToChat(id, color, folder);
    }
    ngOnDestroy() {
        this.obs$.unsubscribe();
        this.users$.unsubscribe();
    }
}
FriendsPageComponent.ɵfac = function FriendsPageComponent_Factory(t) { return new (t || FriendsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"])); };
FriendsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FriendsPageComponent, selectors: [["app-friends-page"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["reloader", ""], ["class", "box-friend", 4, "ngFor", "ngForOf"], [1, "box-friend"], ["class", "birthday green-cursor", 3, "click", 4, "ngIf"], [3, "src", "click"], [1, "letter", "green-cursor", 3, "click"], ["class", "online green-cursor", 3, "ngClass", "click", 4, "ngIf"], [3, "click"], ["appEasyLang", ""], ["appEasyLang", "", 4, "ngIf"], [1, "birthday", "green-cursor", 3, "click"], [1, "online", "green-cursor", 3, "ngClass", "click"]], template: function FriendsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FriendsPageComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FriendsPageComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reloading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_5__["EasyLangDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZHMtcGFnZS9mcmllbmRzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FriendsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-friends-page',
                templateUrl: './friends-page.component.html',
                styleUrls: ['./friends-page.component.css']
            }]
    }], function () { return [{ type: _shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _shared_services_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"] }, { type: _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/institutions-page/institutions-delete/institutions-delete.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/institutions-page/institutions-delete/institutions-delete.component.ts ***!
  \****************************************************************************************/
/*! exports provided: InstitutionsDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionsDeleteComponent", function() { return InstitutionsDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_institutions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/institutions.service */ "./src/app/shared/services/institutions.service.ts");
/* harmony import */ var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");










function InstitutionsDeleteComponent_form_0_select_13_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const institution_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", institution_r7._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", institution_r7._id == ctx_r6.thisID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", institution_r7.name, " ");
} }
function InstitutionsDeleteComponent_form_0_select_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InstitutionsDeleteComponent_form_0_select_13_option_1_Template, 2, 3, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const institutions_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", institutions_r5);
} }
function InstitutionsDeleteComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function InstitutionsDeleteComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041D\u0430\u0437\u0430\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435, \u043A\u0443\u0434\u0430 \u043F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u043B\u044E\u0434\u0435\u0439 \u0438\u0437 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InstitutionsDeleteComponent_form_0_select_13_Template, 2, 1, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("institution dark-", session_r3.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inst-edit inst-right middle-", session_r3.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inst-edit inst-right middle-", session_r3.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0412\u044B \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0435 ", ctx_r0.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inst-span dark-", session_r3.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 15, ctx_r0.institutions$));
} }
function InstitutionsDeleteComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class InstitutionsDeleteComponent {
    constructor(route, institutionsService, router, loginService) {
        this.route = route;
        this.institutionsService = institutionsService;
        this.router = router;
        this.loginService = loginService;
    }
    ngOnInit() {
        this.session$ = this.loginService.getUser();
        this.institutions$ = this.institutionsService.fetch();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            newID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => {
            this.thisID = params['id'];
            return this.institutionsService.getById(this.thisID);
        }))
            .subscribe((institution) => {
            if (institution) {
                this.name = institution.name;
            }
        });
    }
    onSubmit() {
        this.institutionsService.delete(this.thisID, this.form.value.newID)
            .subscribe(response => { }, error => { console.log(error.error.message); }, () => this.router.navigate([`/manage/institutions`]));
    }
}
InstitutionsDeleteComponent.ɵfac = function InstitutionsDeleteComponent_Factory(t) { return new (t || InstitutionsDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_institutions_service__WEBPACK_IMPORTED_MODULE_4__["InstitutionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"])); };
InstitutionsDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstitutionsDeleteComponent, selectors: [["app-institutions-delete"]], decls: 4, vars: 4, consts: [[3, "class", "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], ["loader", ""], [3, "formGroup", "ngSubmit"], ["id", "submit_button", "type", "submit", "hidden", ""], ["for", "submit_button"], ["routerLink", "/manage/institutions"], [1, "inst-span"], ["formControlName", "newID", 4, "ngIf"], ["formControlName", "newID"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"]], template: function InstitutionsDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InstitutionsDeleteComponent_form_0_Template, 15, 17, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InstitutionsDeleteComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.session$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RpdHV0aW9ucy1wYWdlL2luc3RpdHV0aW9ucy1kZWxldGUvaW5zdGl0dXRpb25zLWRlbGV0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstitutionsDeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-institutions-delete',
                templateUrl: './institutions-delete.component.html',
                styleUrls: ['./institutions-delete.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_shared_services_institutions_service__WEBPACK_IMPORTED_MODULE_4__["InstitutionsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/institutions-page/institutions-form/institutions-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/institutions-page/institutions-form/institutions-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: InstitutionsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionsFormComponent", function() { return InstitutionsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_institutions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/institutions.service */ "./src/app/shared/services/institutions.service.ts");
/* harmony import */ var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");











function InstitutionsFormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function InstitutionsFormComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041D\u0430\u0437\u0430\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("institution dark-", session_r3.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inst-edit inst-right middle-", session_r3.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inst-edit inst-right middle-", session_r3.firstColor, "-bg-hover");
} }
function InstitutionsFormComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class InstitutionsFormComponent {
    constructor(route, institutionsService, router, loginService) {
        this.route = route;
        this.institutionsService = institutionsService;
        this.router = router;
        this.loginService = loginService;
        this.whatDo = '';
        this.iName = '';
    }
    ngOnInit() {
        this.session$ = this.loginService.getUser();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.form.disable();
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => {
            this.whatDo = params['do'];
            if (this.whatDo !== 'new') {
                return this.institutionsService.getById(this.whatDo);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }))
            .subscribe((institution) => {
            if (institution) {
                this.iName = institution.name;
                this.form.patchValue({
                    name: institution.name
                });
            }
        });
        this.form.enable();
    }
    onSubmit() {
        if (this.iName != this.form.value.name) {
            let obs$;
            this.form.disable();
            if (this.whatDo == 'new') {
                obs$ = this.institutionsService.create(this.form.value.name);
            }
            else {
                obs$ = this.institutionsService.update(this.whatDo, this.form.value.name);
            }
            obs$.subscribe(institution => {
                this.form.enable();
                if (this.whatDo === 'new') {
                    this.router.navigate([`/manage/institution`]);
                }
            }, error => {
                console.log(error.error.message);
                this.form.enable();
            });
        }
    }
}
InstitutionsFormComponent.ɵfac = function InstitutionsFormComponent_Factory(t) { return new (t || InstitutionsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_institutions_service__WEBPACK_IMPORTED_MODULE_5__["InstitutionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"])); };
InstitutionsFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstitutionsFormComponent, selectors: [["app-institutions-form"]], decls: 4, vars: 4, consts: [[3, "class", "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], ["loader", ""], [3, "formGroup", "ngSubmit"], ["id", "submit_button", "hidden", "", "type", "submit"], ["for", "submit_button"], ["routerLink", "/manage/institutions"], ["type", "text", "formControlName", "name", 1, "inst-span"]], template: function InstitutionsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InstitutionsFormComponent_form_0_Template, 7, 10, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InstitutionsFormComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.session$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RpdHV0aW9ucy1wYWdlL2luc3RpdHV0aW9ucy1mb3JtL2luc3RpdHV0aW9ucy1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstitutionsFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-institutions-form',
                templateUrl: './institutions-form.component.html',
                styleUrls: ['./institutions-form.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_shared_services_institutions_service__WEBPACK_IMPORTED_MODULE_5__["InstitutionsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/institutions-page/institutions-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/institutions-page/institutions-page.component.ts ***!
  \******************************************************************/
/*! exports provided: InstitutionsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionsPageComponent", function() { return InstitutionsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_institutions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/institutions.service */ "./src/app/shared/services/institutions.service.ts");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");







const _c0 = function (a1) { return ["/manage/institutions/delete", a1]; };
function InstitutionsPageComponent_div_0_div_1_div_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const institution_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inst-edit inst-right middle-", session_r3.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, institution_r8._id));
} }
const _c1 = function (a1) { return ["/manage/institutions", a1]; };
function InstitutionsPageComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InstitutionsPageComponent_div_0_div_1_div_1_a_3_Template, 2, 6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const institution_r8 = ctx.$implicit;
    const institutions_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("institution dark-", session_r3.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inst-edit inst-right middle-", session_r3.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, institution_r8._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", institutions_r6.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](institution_r8.name);
} }
function InstitutionsPageComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InstitutionsPageComponent_div_0_div_1_div_1_Template, 6, 11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const institutions_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", institutions_r6);
} }
const _c2 = function () { return ["/manage/institutions", "new"]; };
function InstitutionsPageComponent_div_0_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-admin middle-", session_r3.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
} }
function InstitutionsPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InstitutionsPageComponent_div_0_div_1_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InstitutionsPageComponent_div_0_a_3_Template, 2, 5, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r0.institutions$))("ngIfElse", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", session_r3.levelStatus == 1);
} }
function InstitutionsPageComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class InstitutionsPageComponent {
    constructor(institutionsService, loginService) {
        this.institutionsService = institutionsService;
        this.loginService = loginService;
    }
    ngOnInit() {
        this.session$ = this.loginService.getUser();
        this.institutions$ = this.institutionsService.fetch();
    }
}
InstitutionsPageComponent.ɵfac = function InstitutionsPageComponent_Factory(t) { return new (t || InstitutionsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_institutions_service__WEBPACK_IMPORTED_MODULE_1__["InstitutionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
InstitutionsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstitutionsPageComponent, selectors: [["app-institutions-page"]], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["loader", ""], ["id", "add_institution", 3, "class", "routerLink", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [3, "routerLink"], [3, "class", "routerLink", 4, "ngIf"], [1, "inst-span"], ["id", "add_institution", 3, "routerLink"]], template: function InstitutionsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InstitutionsPageComponent_div_0_Template, 4, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InstitutionsPageComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.session$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RpdHV0aW9ucy1wYWdlL2luc3RpdHV0aW9ucy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstitutionsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-institutions-page',
                templateUrl: './institutions-page.component.html',
                styleUrls: ['./institutions-page.component.css']
            }]
    }], function () { return [{ type: _shared_services_institutions_service__WEBPACK_IMPORTED_MODULE_1__["InstitutionsService"] }, { type: _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/directive/easy-lang.directive */ "./src/app/shared/directive/easy-lang.directive.ts");







class LoginPageComponent {
    constructor(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.route.queryParams.subscribe((params) => {
            if (params['registered']) {
                //MaterialService.toast('Теперь вы можете зайти в систему используя свои данные')
            }
            else if (params['accessDenied']) {
                //MaterialService.toast('Для начала авторизуйтесь в системе')
            }
            else if (params['sessionFailed']) {
                //MaterialService.toast('Пожалуйста войдите в систему заного')
            }
        });
    }
    ngOnDestroy() {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    }
    onSubmit() {
        this.form.disable();
        this.aSub = this.auth.login(this.form.value).subscribe(() => this.router.navigate(['/people/friends']), error => {
            console.log(error);
            this.form.enable();
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 16, vars: 2, consts: [[1, "form"], [3, "formGroup", "ngSubmit"], ["appEasyLang", "", 1, "entrance", "tc", "notadmin"], ["formControlName", "login", "value", "", 1, "entrance", "text-cursor"], ["appEasyLang", "", 1, "entrance", "tc", "entrance_password", "notadmin"], ["formControlName", "password", "value", "", 1, "entrance", "text-cursor"], ["id", "bottom_entrance_hidden", "type", "submit", "hidden", "", 1, "entrance", 3, "disabled"], ["for", "bottom_entrance_hidden", "id", "bottom_entrance", "appEasyLang", "", 1, "tc", "green-cursor"], ["id", "emoPicture", "src", "uploads/images/emo.png"], ["id", "emoText", "appEasyLang", "", 1, "tc"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0412\u0425\u041E\u0414 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u042D\u041C\u041E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.form.disabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_4__["EasyLangDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.css']
            }]
    }], function () { return [{ type: _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pictures-page/pictures-form/pictures-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pictures-page/pictures-form/pictures-form.component.ts ***!
  \************************************************************************/
/*! exports provided: PicturesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicturesFormComponent", function() { return PicturesFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_pictures_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/pictures.service */ "./src/app/shared/services/pictures.service.ts");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/users.service */ "./src/app/shared/services/users.service.ts");
/* harmony import */ var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");












function PicturesFormComponent_form_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u041F\u0430\u043F\u043A\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043F\u0438\u043A\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u043C\u0435\u044E\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0414\u0430, \u043F\u043E\u043B \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u0430\u043F\u043A\u0438 \"\u043E\u0442\u0432\u0435\u0442\u044B\")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0414\u0430, \u043F\u043E\u043B \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043D\u0438\u043A\u043E\u043C (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u0430\u043F\u043A\u0438 \"\u0432\u043E\u043F\u0440\u043E\u0441\u044B\") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u041D\u0435\u0442, \u0443 \u0432\u0441\u0435\u0445 \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A \u0431\u0443\u0434\u0435\u0442 \u043E\u0434\u0438\u043D \u0432\u0430\u0440\u0438\u0430\u043D\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dark-", ctx_r8.session.firstColor, "-color");
} }
function PicturesFormComponent_form_0_div_1_div_2_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.image1Preview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PicturesFormComponent_form_0_div_1_div_2_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PicturesFormComponent_form_0_div_1_div_2_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r14.image2Preview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PicturesFormComponent_form_0_div_1_div_2_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PicturesFormComponent_form_0_div_1_div_2_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r16.image3Preview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PicturesFormComponent_form_0_div_1_div_2_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PicturesFormComponent_form_0_div_1_div_2_img_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r18.image4Preview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PicturesFormComponent_form_0_div_1_div_2_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PicturesFormComponent_form_0_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0415\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u0431\u044B\u043B\u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435, \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u043E\u0434\u043D\u0443 \u0432\u043E \u0432\u0441\u0435 \u043F\u043E\u043B\u044F. \u0415\u0441\u043B\u0438 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u043D\u0443\u0436\u043D\u043E\u0439 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u043D\u0443\u0436\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u0430, \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0430 \u0434\u0440\u0443\u0433\u0430\u044F \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u0435: 1) \u0422\u043E\u0439 \u0436\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438, \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u043E\u043B\u043E\u0436\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u0430; 2) \u041F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u043E\u043B\u043E\u0436\u043D\u043E\u0439 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438, \u043D\u0443\u0436\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u0430; 3) \u041F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u043E\u043B\u043E\u0436\u043D\u043E\u0439 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438, \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u043F\u043E\u043B\u043E\u0436\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u0430. \u0415\u0441\u043B\u0438 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430 \u043D\u0438 \u043E\u0434\u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430, \u0442\u043E \u0435\u0441\u043B\u0438 \u044D\u0442\u043E \u043F\u0430\u043F\u043A\u0430, \u043E\u043D\u0430 \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0441\u044F \u0431\u0435\u0437 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438, \u0430 \u0435\u0441\u043B\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430, \u0442\u043E \u043D\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0441\u044F. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0427\u0451\u0440\u043D\u043E-\u0431\u0435\u043B\u0430\u044F \u043F\u0438\u043A\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0434\u043B\u044F \u043C\u0430\u043B\u044C\u0447\u0438\u043A\u043E\u0432:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PicturesFormComponent_form_0_div_1_div_2_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.onFile1Upload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PicturesFormComponent_form_0_div_1_div_2_img_8_Template, 1, 1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PicturesFormComponent_form_0_div_1_div_2_span_9_Template, 5, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0427\u0451\u0440\u043D\u043E-\u0431\u0435\u043B\u0430\u044F \u043F\u0438\u043A\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0434\u043B\u044F \u0434\u0435\u0432\u043E\u0447\u0435\u043A:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PicturesFormComponent_form_0_div_1_div_2_Template_input_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.onFile2Upload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PicturesFormComponent_form_0_div_1_div_2_img_14_Template, 1, 1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PicturesFormComponent_form_0_div_1_div_2_span_15_Template, 5, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0426\u0432\u0435\u0442\u043D\u0430\u044F \u043F\u0438\u043A\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0434\u043B\u044F \u043C\u0430\u043B\u044C\u0447\u0438\u043A\u043E\u0432:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PicturesFormComponent_form_0_div_1_div_2_Template_input_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r23.onFile3Upload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PicturesFormComponent_form_0_div_1_div_2_img_20_Template, 1, 1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PicturesFormComponent_form_0_div_1_div_2_span_21_Template, 5, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0426\u0432\u0435\u0442\u043D\u0430\u044F \u043F\u0438\u043A\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0434\u043B\u044F \u0434\u0435\u0432\u043E\u0447\u0435\u043A:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PicturesFormComponent_form_0_div_1_div_2_Template_input_change_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.onFile4Upload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PicturesFormComponent_form_0_div_1_div_2_img_26_Template, 1, 1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PicturesFormComponent_form_0_div_1_div_2_span_27_Template, 5, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0439\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043C\u0430\u043B\u044C\u0447\u0438\u043A\u043E\u0432.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043C\u0430\u043B\u044C\u0447\u0438\u043A\u043E\u0432:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0434\u0435\u0432\u043E\u0447\u0435\u043A:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r9.session.firstColor, "-color info-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r9.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.image1Preview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.image1Preview !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r9.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.image2Preview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.image2Preview !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r9.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.image3Preview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.image3Preview !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r9.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.image4Preview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.image4Preview !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r9.session.firstColor, "-color info-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r9.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r9.session.firstColor, "-color");
} }
function PicturesFormComponent_form_0_div_1_div_3_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r25.image1Preview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PicturesFormComponent_form_0_div_1_div_3_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PicturesFormComponent_form_0_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PicturesFormComponent_form_0_div_1_div_3_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r27.onFile1Upload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PicturesFormComponent_form_0_div_1_div_3_img_5_Template, 1, 1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PicturesFormComponent_form_0_div_1_div_3_span_6_Template, 5, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0422\u0435\u043A\u0441\u0442:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r10.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.image1Preview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.image1Preview !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r10.session.firstColor, "-color");
} }
function PicturesFormComponent_form_0_div_1_div_4_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PicturesFormComponent_form_0_div_1_div_4_div_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const pictureAndFolder_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r33.answerChange(true, pictureAndFolder_r30.folder.parent); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0430\u0437\u0430\u0434 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PicturesFormComponent_form_0_div_1_div_4_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PicturesFormComponent_form_0_div_1_div_4_div_3_div_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const picture_r36 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r37.answerChange(picture_r36.folder, picture_r36._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PicturesFormComponent_form_0_div_1_div_4_div_3_div_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const picture_r36 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r39.checkAnswer(picture_r36._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r36 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("answer dark-", ctx_r32.session.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("answer_div dark-", ctx_r32.session.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r36.boysGreyPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](picture_r36.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.answers.includes(picture_r36._id) ? "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C" : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C");
} }
function PicturesFormComponent_form_0_div_1_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PicturesFormComponent_form_0_div_1_div_4_div_3_button_1_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PicturesFormComponent_form_0_div_1_div_4_div_3_div_3_Template, 7, 9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pictureAndFolder_r30 = ctx.ngIf;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("answers_box dark-", ctx_r29.session.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pictureAndFolder_r30.folder._id !== "5f12ff8cc06cd105437d84e3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pictureAndFolder_r30.pictures);
} }
function PicturesFormComponent_form_0_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0442\u0432\u0435\u0442\u044B:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PicturesFormComponent_form_0_div_1_div_4_div_3_Template, 4, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r11.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r11.picturesAndFolder$));
} }
function PicturesFormComponent_form_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PicturesFormComponent_form_0_div_1_div_1_Template, 12, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PicturesFormComponent_form_0_div_1_div_2_Template, 37, 32, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PicturesFormComponent_form_0_div_1_div_3_Template, 10, 8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PicturesFormComponent_form_0_div_1_div_4_Template, 5, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0414\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u041D\u0435\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.whatDo == "newfolder" || ctx_r3.whatDo == "edittrue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.many != "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.many == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.whatDo === "editfalse" || ctx_r3.whatDo === "newpicture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r3.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0421\u0434\u0435\u043B\u0430\u0442\u044C ", ctx_r3.whatDo === "editfalse" || ctx_r3.whatDo === "newpicture" ? "\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443" : "\u043F\u0430\u043F\u043A\u0443", " \u0441\u043A\u0440\u044B\u0442\u043E\u0439?");
} }
function PicturesFormComponent_form_0_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r4.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \u042D\u0442\u043E ", ctx_r4.invisible ? "\u0441\u043A\u0440\u044B\u0442\u0430\u044F" : "\u043E\u0442\u043A\u0440\u044B\u0442\u0430\u044F", " ", ctx_r4.whatDo === "editfalse" || ctx_r4.whatDo === "newpicture" ? "\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430" : "\u043F\u0430\u043F\u043A\u0430", " ");
} }
function PicturesFormComponent_form_0_div_5_select_1_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const institution_r43 = ctx.$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", institution_r43._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", institution_r43._id == ctx_r42.session.institution);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", institution_r43.name, " ");
} }
function PicturesFormComponent_form_0_div_5_select_1_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PicturesFormComponent_form_0_div_5_select_1_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r44.changeInstitution(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PicturesFormComponent_form_0_div_5_select_1_option_1_Template, 2, 3, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const institutions_r41 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", institutions_r41);
} }
function PicturesFormComponent_form_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PicturesFormComponent_form_0_div_5_select_1_Template, 2, 1, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r5.institutions$));
} }
function PicturesFormComponent_form_0_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PicturesFormComponent_form_0_div_6_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const user_r48 = ctx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r49.checkUser(user_r48._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r48 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r47.exceptions.includes(user_r48._id) ? "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C" : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", user_r48.name, " ", user_r48.surname, ", ", user_r48.login, " ");
} }
function PicturesFormComponent_form_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PicturesFormComponent_form_0_div_6_div_1_Template, 4, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r46 = ctx.ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("answers_box dark-", ctx_r6.session.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", users_r46);
} }
function PicturesFormComponent_form_0_label_16_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PicturesFormComponent_form_0_label_16_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r51.deletePicture(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("new_user_button form_picture_button middle-", ctx_r7.session.firstColor, "-bg-hover");
} }
const _c0 = function (a1) { return ["/manage/pictures", a1]; };
function PicturesFormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PicturesFormComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PicturesFormComponent_form_0_div_1_Template, 13, 8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PicturesFormComponent_form_0_p_2_Template, 2, 5, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PicturesFormComponent_form_0_div_5_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PicturesFormComponent_form_0_div_6_Template, 2, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041D\u0430\u0437\u0430\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PicturesFormComponent_form_0_label_16_Template, 2, 3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dark-", ctx_r0.session.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.session.levelStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.session.levelStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0418\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F (\u0442\u0435, \u043A\u0442\u043E \u0432\u0438\u0434\u0438\u0442 ", ctx_r0.whatDo === "editfalse" || ctx_r0.whatDo === "newpicture" ? "\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443" : "\u043F\u0430\u043F\u043A\u0443", ", \u0435\u0441\u043B\u0438 \u043E\u043D\u0430 \u0441\u043A\u0440\u044B\u0442\u0430\u044F, \u0438\u043B\u0438 \u043D\u0435 \u0432\u0438\u0434\u0438\u0442, \u0435\u0441\u043B\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u0430\u044F): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.session.levelStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 20, ctx_r0.users$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-admin form_picture_button middle-", ctx_r0.session.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx_r0.folder));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("new_user_button form_picture_button middle-", ctx_r0.session.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.whatDo === "edittrue" || ctx_r0.whatDo === "editfalse") && !ctx_r0.system && ctx_r0.session.levelStatus == 1);
} }
function PicturesFormComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class PicturesFormComponent {
    constructor(route, picturesService, usersService, router, loginService) {
        this.route = route;
        this.picturesService = picturesService;
        this.usersService = usersService;
        this.router = router;
        this.loginService = loginService;
        this.whatDo = '';
        this.many = '';
        this.folder = '';
        this.id = '';
        this.system = false;
        this.image1Preview = '';
        this.image2Preview = '';
        this.image3Preview = '';
        this.image4Preview = '';
        this.answers = [];
        this.exceptions = [];
        this.queryF = '';
        this.queryI = '';
        this.reloading = false;
    }
    ngOnInit() {
        this.reloading = true;
        this.oSub = this.loginService.getUser().subscribe(user => {
            this.session = user;
            this.reloading = false;
            this.route.queryParams.subscribe((queryParam) => {
                this.users$ = this.picturesService.users(queryParam.institution);
                this.queryI = queryParam.institution;
            });
        });
        this.institutions$ = this.usersService.getInstitutions();
        this.route.queryParams.subscribe((queryParam) => {
            this.picturesAndFolder$ = this.picturesService.fetch(queryParam.folder);
            this.queryF = queryParam.folder;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            many: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('0', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            boysGreyPicture: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            girlsGreyPicture: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            boysColorPicture: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            girlsColorPicture: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            textForGirls: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            invisible: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('false'),
            clean1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            clean2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            clean3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            clean4: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            institution: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
        this.form.disable();
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => {
            this.whatDo = params['do'];
            this.many = params['many'];
            this.folder = params['folder'];
            this.id = params['_id'];
            if (this.id !== 'null') {
                return this.picturesService.getById(this.id);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }))
            .subscribe((picture) => {
            if (picture) {
                this.picture = picture;
                this.form.patchValue({
                    text: picture.text,
                    textForGirls: picture.textForGirls,
                    invisible: picture.invisible === true ? 'true' : 'false',
                });
                if (picture.many)
                    this.form.patchValue({ many: picture.many.toString() });
                this.image1Preview = picture.boysGreyPicture;
                this.image2Preview = picture.girlsGreyPicture;
                this.image3Preview = picture.boysColorPicture;
                this.image4Preview = picture.girlsColorPicture;
                this.answers = picture.answers;
                this.exceptions = picture.exceptions;
                this.invisible = picture.invisible;
                if (picture.system === true)
                    this.system = true;
            }
            this.form.enable();
        }, error => { });
    }
    ngOnDestroy() {
        this.oSub.unsubscribe();
    }
    answerChange(folder, id) {
        if (folder &&
            id !== '5f1309e3962c2f062467f854' &&
            id !== '5f1309f1962c2f062467f855' &&
            id !== '5f130a00962c2f062467f856' &&
            id !== '5f130a0d962c2f062467f857') {
            this.router.navigate([], { queryParams: { 'folder': id, 'institution': this.queryI } });
            this.queryF = id;
        }
    }
    checkAnswer(id) {
        if (this.answers.includes(id)) {
            let index = this.answers.indexOf(id, 0);
            this.answers.splice(index, 1);
        }
        else {
            this.answers.push(id);
        }
    }
    changeInstitution() {
        let id = this.form.value.institution;
        this.router.navigate([], { queryParams: { 'folder': this.queryF, 'institution': id } });
        this.queryI = id;
    }
    checkUser(id) {
        if (this.exceptions.includes(id)) {
            let index = this.exceptions.indexOf(id, 0);
            this.exceptions.splice(index, 1);
        }
        else {
            this.exceptions.push(id);
        }
    }
    deletePicture() {
        let type = '';
        if (this.picture.folder === true)
            type = 'папку';
        else
            type = 'картинку';
        const decision = window.confirm(`Вы уверены, что хотите удалить ${type}?`);
        if (decision) {
            this.picturesService.delete(this.picture._id)
                .subscribe(response => { }, error => { }, () => this.router.navigate([`/manage/pictures/${this.folder}`]));
        }
    }
    onFile1Upload(event) {
        const file = event.target.files[0];
        this.image1 = file;
        const reader = new FileReader();
        reader.onload = () => {
            this.image1Preview = reader.result.toString();
        };
        reader.readAsDataURL(file);
    }
    onFile2Upload(event) {
        const file = event.target.files[0];
        this.image2 = file;
        const reader = new FileReader();
        reader.onload = () => {
            this.image2Preview = reader.result.toString();
        };
        reader.readAsDataURL(file);
    }
    onFile3Upload(event) {
        const file = event.target.files[0];
        this.image3 = file;
        const reader = new FileReader();
        reader.onload = () => {
            this.image3Preview = reader.result.toString();
        };
        reader.readAsDataURL(file);
    }
    onFile4Upload(event) {
        const file = event.target.files[0];
        this.image4 = file;
        const reader = new FileReader();
        reader.onload = () => {
            this.image4Preview = reader.result.toString();
        };
        reader.readAsDataURL(file);
    }
    onSubmit() {
        let obs$;
        this.form.disable();
        if (this.whatDo === 'edittrue' || this.whatDo === 'editfalse') {
            obs$ = this.picturesService.update(this.picture._id, this.form.value.invisible, this.whatDo === 'edittrue' ? true : false, this.form.value.text, this.form.value.many, this.form.value.textForGirls, this.form.value.clean1, this.form.value.clean2, this.form.value.clean3, this.form.value.clean4, this.image1, this.image2, this.image3, this.image4, this.answers, this.exceptions);
        }
        else {
            obs$ = this.picturesService.create(this.folder, this.form.value.invisible, this.whatDo === 'newfolder' ? true : false, false, this.form.value.many, this.form.value.textForGirls, this.form.value.clean1, this.form.value.clean2, this.form.value.clean3, this.form.value.clean4, this.form.value.text ? this.form.value.text : '', this.image1, this.image2, this.image3, this.image4, this.answers, this.exceptions);
        }
        obs$.subscribe(picture => {
            this.picture = picture;
            this.form.enable();
            if (this.whatDo === 'newfolder' || this.whatDo === 'newpicture') {
                this.router.navigate([`/manage/pictures/${this.folder}`]);
            }
        }, error => {
            console.log(error.error.message);
            this.form.enable();
        });
    }
}
PicturesFormComponent.ɵfac = function PicturesFormComponent_Factory(t) { return new (t || PicturesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_pictures_service__WEBPACK_IMPORTED_MODULE_5__["PicturesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"])); };
PicturesFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PicturesFormComponent, selectors: [["app-pictures-form"]], decls: 3, vars: 2, consts: [["id", "edit_picture_or_folder", 3, "formGroup", "class", "ngSubmit", 4, "ngIf", "ngIfElse"], ["loader", ""], ["id", "edit_picture_or_folder", 3, "formGroup", "ngSubmit"], [4, "ngIf"], [3, "class", 4, "ngIf"], [3, "routerLink"], ["id", "submit_button", "type", "submit", "hidden", ""], ["for", "submit_button"], ["id", "delete_button", "type", "button", "hidden", ""], ["for", "delete_button", 3, "class", "click", 4, "ngIf"], ["name", "invisible", "type", "radio", "formControlName", "invisible", "value", "true"], ["name", "invisible", "type", "radio", "formControlName", "invisible", "value", "false"], ["name", "many", "type", "radio", "formControlName", "many", "value", "1"], ["name", "many", "type", "radio", "formControlName", "many", "value", "2"], ["name", "many", "type", "radio", "formControlName", "many", "value", "0"], ["type", "file", "formControlName", "boysGreyPicture", 3, "change"], ["class", "now_img", 3, "src", 4, "ngIf"], ["type", "file", "formControlName", "girlsGreyPicture", 3, "change"], ["type", "file", "formControlName", "boysColorPicture", 3, "change"], ["type", "file", "formControlName", "girlsColorPicture", 3, "change"], ["type", "text", "formControlName", "text", 1, "text-input"], ["type", "text", "formControlName", "textForGirls", 1, "text-input"], [1, "now_img", 3, "src"], ["formControlName", "clean1", "type", "checkbox"], ["formControlName", "clean2", "type", "checkbox"], ["formControlName", "clean3", "type", "checkbox"], ["formControlName", "clean4", "type", "checkbox"], [3, "click", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [3, "click"], [1, "picta_answer", 3, "src"], [1, "p_text"], ["type", "button", 3, "click"], ["formControlName", "institution", 3, "change", 4, "ngIf"], ["formControlName", "institution", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"], [4, "ngFor", "ngForOf"], ["for", "delete_button", 3, "click"]], template: function PicturesFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PicturesFormComponent_form_0_Template, 17, 24, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PicturesFormComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reloading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".answers_box[_ngcontent-%COMP%] {\n    border-width: 2px;\n    border-style: solid;\n    border-radius: 3px;\n    position: relative;\n    width: 96%;\n    margin: auto;\n    margin-top: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 2.5%;\n    padding-right: 2.5%;\n    height: auto;\n    max-height: 500px;\n    overflow: auto;\n}\n\n.answer[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 18.5%;\n    margin: 2%;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 3px;\n    padding: 5px;\n    height: 150px;\n    overflow: auto;\n}\n\n.answer_div[_ngcontent-%COMP%] {\n    position: relative;\n    width: 96%;\n    height: 100px;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 3px;\n    margin: auto;\n}\n\n.picta_answer[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    max-height: 96px;\n    max-width: 96%;\n    width: auto;\n    height: auto;\n    margin: auto;\n}\n\n.text-input[_ngcontent-%COMP%] {\n    width: 500px;\n}\n\n.info-text[_ngcontent-%COMP%] {\n    text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGljdHVyZXMtcGFnZS9waWN0dXJlcy1mb3JtL3BpY3R1cmVzLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGljdHVyZXMtcGFnZS9waWN0dXJlcy1mb3JtL3BpY3R1cmVzLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbnN3ZXJzX2JveCB7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA5NiU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjUlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIuNSU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uYW5zd2VyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE4LjUlO1xuICAgIG1hcmdpbjogMiU7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5hbnN3ZXJfZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDk2JTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnBpY3RhX2Fuc3dlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC1oZWlnaHQ6IDk2cHg7XG4gICAgbWF4LXdpZHRoOiA5NiU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnRleHQtaW5wdXQge1xuICAgIHdpZHRoOiA1MDBweDtcbn1cblxuLmluZm8tdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PicturesFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pictures-form',
                templateUrl: './pictures-form.component.html',
                styleUrls: ['./pictures-form.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_shared_services_pictures_service__WEBPACK_IMPORTED_MODULE_5__["PicturesService"] }, { type: src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pictures-page/pictures-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pictures-page/pictures-page.component.ts ***!
  \**********************************************************/
/*! exports provided: PicturesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicturesPageComponent", function() { return PicturesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_pictures_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/pictures.service */ "./src/app/shared/services/pictures.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");







function PicturesPageComponent_div_0_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pictureAndFolder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("folderTitle dark-", session_r3.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pictureAndFolder_r5.folder.text, " ");
} }
function PicturesPageComponent_div_0_div_1_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("p_border dark-", session_r3.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r16.boysGreyPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("p_border dark-", session_r3.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r16.girlsGreyPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("p_border dark-", session_r3.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r16.boysColorPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("p_border dark-", session_r3.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r16.girlsColorPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PicturesPageComponent_div_0_div_1_div_1_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("p_border_one dark-", session_r3.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r16.boysGreyPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PicturesPageComponent_div_0_div_1_div_1_div_2_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "[\u0431\u0435\u0437 \u0442\u0435\u043A\u0441\u0442\u0430]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PicturesPageComponent_div_0_div_1_div_1_div_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](picture_r16.text);
} }
const _c0 = function (a1) { return ["/manage/pictures", a1]; };
function PicturesPageComponent_div_0_div_1_div_1_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u041F\u0435\u0440\u0435\u0439\u0442\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-admin middle-", session_r3.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, picture_r16._id));
} }
const _c1 = function (a1, a2, a3, a4) { return ["/manage/pictures", a1, a2, a3, a4]; };
const _c2 = function (a1) { return { "folder": "5f12ff8cc06cd105437d84e3", "institution": a1 }; };
function PicturesPageComponent_div_0_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PicturesPageComponent_div_0_div_1_div_1_div_2_div_3_Template, 9, 16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PicturesPageComponent_div_0_div_1_div_1_div_2_div_4_Template, 3, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PicturesPageComponent_div_0_div_1_div_1_div_2_i_7_Template, 2, 0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PicturesPageComponent_div_0_div_1_div_1_div_2_span_8_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PicturesPageComponent_div_0_div_1_div_1_div_2_div_12_Template, 3, 6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r16 = ctx.$implicit;
    const pictureAndFolder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("picture dark-", session_r3.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("p_text dark-", session_r3.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", picture_r16.invisible ? "\u0421\u041A\u0420\u042B\u0422\u0410\u042F " : "", "", picture_r16.folder ? "\u041F\u0410\u041F\u041A\u0410" : "\u041A\u0410\u0420\u0422\u0418\u041D\u041A\u0410", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pictureAndFolder_r5.folder.many !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pictureAndFolder_r5.folder.many === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", picture_r16.p_sort, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !picture_r16.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r16.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-admin middle-", session_r3.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](19, _c1, "edit" + picture_r16.folder, pictureAndFolder_r5.folder.many, pictureAndFolder_r5.folder._id, picture_r16._id))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c2, session_r3.institution));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r16.folder && pictureAndFolder_r5.folder._id !== "5f130939962c2f062467f853");
} }
function PicturesPageComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PicturesPageComponent_div_0_div_1_div_1_div_1_Template, 2, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PicturesPageComponent_div_0_div_1_div_1_div_2_Template, 13, 26, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pictureAndFolder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pictureAndFolder_r5.folder.text !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pictureAndFolder_r5.pictures);
} }
function PicturesPageComponent_div_0_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " \u042D\u0442\u0430 \u043F\u0430\u043F\u043A\u0430 \u043F\u0443\u0441\u0442\u0430 ");
} }
const _c3 = function (a2, a3) { return ["/manage/pictures", "newpicture", a2, a3, "null"]; };
function PicturesPageComponent_div_0_div_1_label_5_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0440\u0438\u043D\u043A\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pictureAndFolder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-admin middle-", session_r3.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c3, pictureAndFolder_r5.folder.many, pictureAndFolder_r5.folder._id))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, session_r3.institution));
} }
function PicturesPageComponent_div_0_div_1_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PicturesPageComponent_div_0_div_1_label_5_a_1_Template, 2, 10, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", session_r3.levelStatus == 1);
} }
const _c4 = function (a2, a3) { return ["/manage/pictures", "newfolder", a2, a3, "null"]; };
function PicturesPageComponent_div_0_div_1_label_7_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0430\u043F\u043A\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pictureAndFolder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-admin middle-", session_r3.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c4, pictureAndFolder_r5.folder.many, pictureAndFolder_r5.folder._id))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, session_r3.institution));
} }
function PicturesPageComponent_div_0_div_1_label_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PicturesPageComponent_div_0_div_1_label_7_a_1_Template, 2, 10, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", session_r3.levelStatus == 1);
} }
function PicturesPageComponent_div_0_div_1_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u041D\u0430\u0437\u0430\u0434 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pictureAndFolder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-admin middle-", session_r3.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, pictureAndFolder_r5.folder.parent));
} }
function PicturesPageComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PicturesPageComponent_div_0_div_1_div_1_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PicturesPageComponent_div_0_div_1_ng_template_2_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PicturesPageComponent_div_0_div_1_label_5_Template, 2, 1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PicturesPageComponent_div_0_div_1_label_7_Template, 2, 1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PicturesPageComponent_div_0_div_1_label_9_Template, 3, 6, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pictureAndFolder_r5 = ctx.ngIf;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pictureAndFolder_r5.pictures.length !== 0)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", session_r3.levelStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", session_r3.levelStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pictureAndFolder_r5.folder._id !== "5f12ff8cc06cd105437d84e3");
} }
function PicturesPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PicturesPageComponent_div_0_div_1_Template, 10, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r0.picturesAndFolder$))("ngIfElse", _r1);
} }
function PicturesPageComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class PicturesPageComponent {
    constructor(picturesService, route, loginService) {
        this.picturesService = picturesService;
        this.route = route;
        this.loginService = loginService;
    }
    ngOnInit() {
        this.session$ = this.loginService.getUser();
        this.route.params.subscribe((params) => {
            this.picturesAndFolder$ = this.picturesService.fetch(params._id);
        });
    }
}
PicturesPageComponent.ɵfac = function PicturesPageComponent_Factory(t) { return new (t || PicturesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_pictures_service__WEBPACK_IMPORTED_MODULE_1__["PicturesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
PicturesPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PicturesPageComponent, selectors: [["app-pictures-page"]], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["loader", ""], ["class", "pictures", 4, "ngIf", "ngIfElse"], [1, "pictures"], ["empty", ""], ["id", "add_picture_botton", "hidden", ""], ["for", "add_picture_botton", "id", "add_picture", 4, "ngIf"], ["id", "folder_picture_botton", "hidden", ""], ["for", "folder_picture_botton", "id", "add_folder", 4, "ngIf"], ["id", "back_picture_botton", "hidden", ""], ["for", "back_picture_botton", "id", "back_picture", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "p_text"], [1, "button", "edit-picture"], [3, "routerLink", "queryParams"], ["class", "button edit-picture", 4, "ngIf"], [1, "picta-pictures", 3, "src"], [1, "picta_one", 3, "src"], [3, "routerLink"], ["for", "add_picture_botton", "id", "add_picture"], [3, "class", "routerLink", "queryParams", 4, "ngIf"], ["for", "folder_picture_botton", "id", "add_folder"], ["for", "back_picture_botton", "id", "back_picture"]], template: function PicturesPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PicturesPageComponent_div_0_Template, 3, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PicturesPageComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.session$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".folderTitle[_ngcontent-%COMP%] {\n    font-size: 28px;\n    text-align: center;\n    width: 100%;\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGljdHVyZXMtcGFnZS9waWN0dXJlcy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9waWN0dXJlcy1wYWdlL3BpY3R1cmVzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb2xkZXJUaXRsZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PicturesPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pictures-page',
                templateUrl: './pictures-page.component.html',
                styleUrls: ['./pictures-page.component.css']
            }]
    }], function () { return [{ type: _shared_services_pictures_service__WEBPACK_IMPORTED_MODULE_1__["PicturesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _shared_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/search-page/search-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-page/search-page.component.ts ***!
  \******************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _shared_services_people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/people.service */ "./src/app/shared/services/people.service.ts");
/* harmony import */ var _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/chat.service */ "./src/app/shared/services/chat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/directive/easy-lang.directive */ "./src/app/shared/directive/easy-lang.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/pipes/filter.pipe */ "./src/app/shared/pipes/filter.pipe.ts");










function SearchPageComponent_div_0_select_2_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const institution_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", institution_r10._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](institution_r10.name);
} }
function SearchPageComponent_div_0_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SearchPageComponent_div_0_select_2_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.newInstitution(); })("ngModelChange", function SearchPageComponent_div_0_select_2_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.institution = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchPageComponent_div_0_select_2_option_1_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const institutions_r8 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.institution);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", institutions_r8);
} }
function SearchPageComponent_div_0_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0424\u0410\u041C\u0418\u041B\u0418\u042F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPageComponent_div_0_span_8_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.surname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.surname);
} }
function SearchPageComponent_div_0_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPageComponent_div_0_div_10_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const user_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.goToChat(user_r16._id, ctx_r21.session.defaultColor, "5f3bfe9255ba364d9f2edfac"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchPageComponent_div_0_div_10_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPageComponent_div_0_div_10_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const user_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.goToChat(user_r16._id, ctx_r24.session.defaultColor); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { notincat: a0, inchat: a1 }; };
function SearchPageComponent_div_0_div_10_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPageComponent_div_0_div_10_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const user_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.goToChat(user_r16._id, ctx_r27.session.defaultColor); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, user_r16.onlineStatus != ctx_r19.session._id, user_r16.onlineStatus == ctx_r19.session._id));
} }
function SearchPageComponent_div_0_div_10_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r16.surname);
} }
function SearchPageComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchPageComponent_div_0_div_10_div_1_Template, 1, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPageComponent_div_0_div_10_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const user_r16 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.goToChat(user_r16._id, ctx_r32.session.defaultColor); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchPageComponent_div_0_div_10_div_5_Template, 1, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchPageComponent_div_0_div_10_div_6_Template, 1, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPageComponent_div_0_div_10_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const user_r16 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.goToChat(user_r16._id, ctx_r34.session.defaultColor); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchPageComponent_div_0_div_10_span_11_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r16 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 12, user_r16.birthDate, "MM.dd") == _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 15, ctx_r5.today, "MM.dd") && ctx_r5.session.birthdays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("friendAvatar dark-", ctx_r5.session.firstColor, "-border green-cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r16.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r16.letter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r16.onlineStatus != "-1" && ctx_r5.session.online);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("friendName tc dark-", ctx_r5.session.firstColor, "-border green-cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.session.surnameView);
} }
function SearchPageComponent_div_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader");
} }
function SearchPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchPageComponent_div_0_select_2_Template, 2, 2, "select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0418\u041C\u042F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPageComponent_div_0_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchPageComponent_div_0_span_8_Template, 4, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchPageComponent_div_0_div_10_Template, 12, 18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SearchPageComponent_div_0_ng_template_13_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("header light-", ctx_r0.session.secondColor, "-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx_r0.institutions$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.session.surnameView);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 13, ctx_r0.users, ctx_r0.name, "name"), ctx_r0.surname, "surname"));
} }
function SearchPageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class SearchPageComponent {
    constructor(loginService, peopleService, chatService) {
        this.loginService = loginService;
        this.peopleService = peopleService;
        this.chatService = chatService;
        this.reloading = false;
        this.today = new Date();
    }
    ngOnInit() {
        this.reloading = true;
        this.obs$ = this.loginService.getUser().subscribe(user => {
            this.session = user;
            this.institution = user.institution;
            this.users$ = this.peopleService.fetchAll(user.institution).subscribe(users => {
                this.users = users;
                this.reloading = false;
            });
        });
        this.institutions$ = this.peopleService.getInstitutions();
    }
    ngOnDestroy() {
        this.obs$.unsubscribe();
        this.users$.unsubscribe();
    }
    goToChat(id, color, folder) {
        this.chatService.goToChat(id, color, folder);
    }
    newInstitution() {
        this.users$ = this.peopleService.fetchAll(this.institution).subscribe(users => {
            this.users = users;
        });
    }
}
SearchPageComponent.ɵfac = function SearchPageComponent_Factory(t) { return new (t || SearchPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"])); };
SearchPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchPageComponent, selectors: [["app-search-page"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["reloader", ""], ["class", "inheader green-cursor", 3, "ngModel", "change", "ngModelChange", 4, "ngIf"], [1, "pNotAdmin"], ["appEasyLang", ""], ["type", "text", 1, "inheader", "text-cursor", 3, "ngModel", "ngModelChange"], ["class", "pNotAdmin", 4, "ngIf"], [1, "search"], ["class", "box-friend", 4, "ngFor", "ngForOf"], ["loader", ""], [1, "inheader", "green-cursor", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "box-friend"], ["class", "birthday green-cursor", 3, "click", 4, "ngIf"], [3, "src", "click"], ["class", "letter green-cursor", 3, "click", 4, "ngIf"], ["class", "online green-cursor", 3, "ngClass", "click", 4, "ngIf"], [3, "click"], ["appEasyLang", "", 4, "ngIf"], [1, "birthday", "green-cursor", 3, "click"], [1, "letter", "green-cursor", 3, "click"], [1, "online", "green-cursor", 3, "ngClass", "click"], [1, "loader"]], template: function SearchPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchPageComponent_div_0_Template, 15, 17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchPageComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reloading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_5__["EasyLangDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".header[_ngcontent-%COMP%] {\n    width: 79%;\n    height: 0.9cm;\n    top: 0;\n    position: fixed;\n    padding: 0.2cm;\n    z-index: 2;\n    overflow: hidden;\n}\n.search[_ngcontent-%COMP%] {\n    margin-top: 1.1cm;\n}\n.inheader[_ngcontent-%COMP%] {\n    width: 18%;\n    margin-right: 2%;\n    height: 0.8cm;\n    font-size: 0.7cm;\n    margin-bottom: 1cm;\n}\nselect.inheader[_ngcontent-%COMP%] {\n    font-size: 0.5cm;\n    width: 25%;\n}\n.loader[_ngcontent-%COMP%] {\n    height: 1.5cm;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXBhZ2Uvc2VhcmNoLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsTUFBTTtJQUNOLGVBQWU7SUFDZixjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXBhZ2Uvc2VhcmNoLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIHdpZHRoOiA3OSU7XG4gICAgaGVpZ2h0OiAwLjljbTtcbiAgICB0b3A6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBhZGRpbmc6IDAuMmNtO1xuICAgIHotaW5kZXg6IDI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zZWFyY2gge1xuICAgIG1hcmdpbi10b3A6IDEuMWNtO1xufVxuLmluaGVhZGVyIHtcbiAgICB3aWR0aDogMTglO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgaGVpZ2h0OiAwLjhjbTtcbiAgICBmb250LXNpemU6IDAuN2NtO1xuICAgIG1hcmdpbi1ib3R0b206IDFjbTtcbn1cbnNlbGVjdC5pbmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAwLjVjbTtcbiAgICB3aWR0aDogMjUlO1xufVxuLmxvYWRlciB7XG4gICAgaGVpZ2h0OiAxLjVjbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-page',
                templateUrl: './search-page.component.html',
                styleUrls: ['./search-page.component.css']
            }]
    }], function () { return [{ type: _shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _shared_services_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"] }, { type: _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/settings-page/settings-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/settings-page/settings-page.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function() { return SettingsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _shared_services_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/nav.service */ "./src/app/shared/services/nav.service.ts");
/* harmony import */ var _shared_services_people_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/people.service */ "./src/app/shared/services/people.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/directive/easy-lang.directive */ "./src/app/shared/directive/easy-lang.directive.ts");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");










const _c0 = function (a0) { return { checkedColor: a0 }; };
function SettingsPageComponent_form_0_div_1_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "f", color_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", color_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "f", color_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("color-div light-", color_r9, "-bg green-cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r7.form.value.first == color_r9));
} }
function SettingsPageComponent_form_0_div_1_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r10 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "s", color_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", color_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "s", color_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("color-div light-", color_r10, "-bg green-cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r8.form.value.second == color_r10));
} }
function SettingsPageComponent_form_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u0435\u0440\u0432\u044B\u0439 \u0446\u0432\u0435\u0442:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SettingsPageComponent_form_0_div_1_td_5_Template, 4, 9, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0412\u0442\u043E\u0440\u043E\u0439 \u0446\u0432\u0435\u0442:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SettingsPageComponent_form_0_div_1_td_10_Template, 4, 9, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.colors);
} }
const _c1 = function (a0) { return { checked: a0 }; };
function SettingsPageComponent_form_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u043D\u043B\u0430\u0439\u043D\u044B:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E \u043B\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0424\u0430\u043C\u0438\u043B\u0438\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043A \u043E\u0442\u0432\u0435\u0442\u0430\u043C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u0421\u043C\u0435\u043D\u0430 \u0446\u0432\u0435\u0442\u043D\u044B\u0445 \u0438 \u0447\u0451\u0440\u043D\u043E-\u0431\u0435\u043B\u044B\u0445 \u043F\u0438\u043A\u0442\u043E\u0433\u0440\u0430\u043C\u043C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u041F\u0438\u043A\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u0418\u043C\u0435\u043D\u0438\u043D\u043D\u0438\u043A\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, ctx_r4.form.value.online == "true"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, ctx_r4.form.value.online == "false"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx_r4.form.value.Text == "true"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c1, ctx_r4.form.value.Text == "false"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c1, ctx_r4.form.value.read == "true"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c1, ctx_r4.form.value.read == "false"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c1, ctx_r4.form.value.surnameView == "true"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c1, ctx_r4.form.value.surnameView == "false"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c1, ctx_r4.form.value.vote == "true"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c1, ctx_r4.form.value.vote == "false"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c1, ctx_r4.form.value.sentence == "true"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c1, ctx_r4.form.value.sentence == "false"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c1, ctx_r4.form.value.answers == "true"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c1, ctx_r4.form.value.answers == "false"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c1, ctx_r4.form.value.change == "true"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c1, ctx_r4.form.value.change == "false"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c1, ctx_r4.form.value.defaultColor == "grey"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c1, ctx_r4.form.value.defaultColor == "color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c1, ctx_r4.form.value.birthdays == "true"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c1, ctx_r4.form.value.birthdays == "false"));
} }
function SettingsPageComponent_form_0_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn tc dark-", ctx_r5.session.firstColor, "-border green-cursor");
} }
function SettingsPageComponent_form_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsPageComponent_form_0_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.newRole("3"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0421\u0442\u0430\u0442\u044C \u043F\u043E\u0434\u043E\u043F\u0435\u0447\u043D\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsPageComponent_form_0_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.newRole("5"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0421\u0442\u0430\u0442\u044C \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn tc dark-", ctx_r6.session.firstColor, "-border green-cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn tc dark-", ctx_r6.session.firstColor, "-border green-cursor");
} }
function SettingsPageComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SettingsPageComponent_form_0_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsPageComponent_form_0_div_1_Template, 11, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SettingsPageComponent_form_0_div_2_Template, 91, 60, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SettingsPageComponent_form_0_button_3_Template, 2, 3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SettingsPageComponent_form_0_div_4_Template, 5, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.session.setting > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.session.setting == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.session.setting != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.session.levelStatus == 4);
} }
function SettingsPageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class SettingsPageComponent {
    constructor(loginService, navService, peopleService) {
        this.loginService = loginService;
        this.navService = navService;
        this.peopleService = peopleService;
        this.reloading = false;
        this.colors = [];
    }
    ngOnInit() {
        this.reloading = true;
        this.oSub = this.loginService.getUser().subscribe(user => {
            this.session = user;
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                online: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.session.online.toString()),
                Text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.session.text.toString()),
                read: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.session.read.toString()),
                surnameView: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.session.surnameView.toString()),
                vote: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.session.vote.toString()),
                sentence: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.session.sentence.toString()),
                answers: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.session.answers.toString()),
                change: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.session.change.toString()),
                defaultColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.session.defaultColor),
                birthdays: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.session.birthdays.toString()),
                first: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.session.firstColor.toString()),
                second: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.session.secondColor.toString())
            });
            this.reloading = false;
        });
        for (let i = 1; i < 8; i++) {
            this.colors.push(i);
        }
    }
    ngOnDestroy() {
        this.oSub.unsubscribe();
    }
    sendToParent(color1, color2, online, color) {
        this.navService.sendToPeople(color1, color2, online, color);
    }
    newRole(role) {
        let str;
        if (role == '5')
            str = 'взрослым';
        else
            str = 'подопечным';
        const decision = window.confirm(`Вы уверены, что хотите стать ${str}?`);
        if (decision) {
            this.peopleService.newRole(role)
                .subscribe(user => {
                this.session = user;
                this.form.enable();
            }, error => {
                console.log(error.error.message);
                this.form.enable();
            });
        }
    }
    onSubmit() {
        this.form.disable();
        let obs$;
        obs$ = this.peopleService.update(this.form.value.online, this.form.value.Text, this.form.value.read, this.form.value.first, this.form.value.second, this.form.value.surnameView, this.form.value.vote, this.form.value.sentence, this.form.value.answers, this.form.value.change, this.form.value.defaultColor, this.form.value.birthdays);
        obs$.subscribe(user => {
            this.session = user;
            this.sendToParent(this.form.value.first, this.form.value.second, this.form.value.online, this.form.value.defaultColor);
            this.form.enable();
        }, error => {
            console.log(error.error.message);
            this.form.enable();
        });
    }
}
SettingsPageComponent.ɵfac = function SettingsPageComponent_Factory(t) { return new (t || SettingsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_people_service__WEBPACK_IMPORTED_MODULE_4__["PeopleService"])); };
SettingsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsPageComponent, selectors: [["app-settings-page"]], decls: 3, vars: 2, consts: [["id", "setting_form", 3, "formGroup", "submit", 4, "ngIf", "ngIfElse"], ["reloader", ""], ["id", "setting_form", 3, "formGroup", "submit"], [4, "ngIf"], ["type", "submit", "appEasyLang", "", 3, "class", 4, "ngIf"], ["appEasyLang", "", 1, "pNotAdmin"], [4, "ngFor", "ngForOf"], ["name", "first", "type", "radio", "formControlName", "first", "hidden", "", 1, "inline-blok", 3, "id", "value"], [3, "for"], [3, "ngClass"], ["name", "second", "type", "radio", "formControlName", "second", "hidden", "", 1, "inline-blok", 3, "id", "value"], [1, "radio", 3, "ngClass"], ["name", "online", "type", "radio", "value", "true", "formControlName", "online", "hidden", ""], [1, "yes", "green-cursor"], [1, "radio_yes"], ["name", "online", "type", "radio", "value", "false", "formControlName", "online", "hidden", ""], [1, "no", "green-cursor"], ["name", "Text", "type", "radio", "value", "true", "formControlName", "Text", "hidden", ""], ["name", "Text", "type", "radio", "value", "false", "formControlName", "Text", "hidden", ""], ["name", "read", "type", "radio", "value", "true", "formControlName", "read", "hidden", ""], ["name", "read", "type", "radio", "value", "false", "formControlName", "read", "hidden", ""], ["name", "surnameView", "type", "radio", "value", "true", "formControlName", "surnameView", "hidden", ""], ["name", "surnameView", "type", "radio", "value", "false", "formControlName", "surnameView", "hidden", ""], ["name", "vote", "type", "radio", "value", "true", "formControlName", "vote", "hidden", ""], ["name", "vote", "type", "radio", "value", "false", "formControlName", "vote", "hidden", ""], ["name", "sentence", "type", "radio", "value", "true", "formControlName", "sentence", "hidden", ""], ["name", "sentence", "type", "radio", "value", "false", "formControlName", "sentence", "hidden", ""], ["name", "answers", "type", "radio", "value", "true", "formControlName", "answers", "hidden", ""], ["name", "answers", "type", "radio", "value", "false", "formControlName", "answers", "hidden", ""], ["name", "change", "type", "radio", "value", "true", "formControlName", "change", "hidden", ""], ["name", "change", "type", "radio", "value", "false", "formControlName", "change", "hidden", ""], ["name", "defaultColor", "type", "radio", "value", "grey", "formControlName", "defaultColor", "hidden", ""], [1, "grey", "green-cursor"], ["name", "defaultColor", "type", "radio", "value", "color", "formControlName", "defaultColor", "hidden", ""], [1, "color", "green-cursor"], ["name", "birthdays", "type", "radio", "value", "true", "formControlName", "birthdays", "hidden", ""], ["name", "birthdays", "type", "radio", "value", "false", "formControlName", "birthdays", "hidden", ""], ["type", "submit", "appEasyLang", ""], ["type", "button", "appEasyLang", "", 3, "click"]], template: function SettingsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SettingsPageComponent_form_0_Template, 5, 5, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsPageComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reloading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_6__["EasyLangDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"]], styles: ["#setting_form[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: auto;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n.color-div[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 60px;\n    border: 1px solid white;\n    border-radius: 10px;\n}\n.checkedColor[_ngcontent-%COMP%] {\n    border: 3px solid black;\n}\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n}\ntd[_ngcontent-%COMP%] {\n    width: 14%;\n    vertical-align: middle;\n}\n.pNotAdmin[_ngcontent-%COMP%] {\n    margin-top: 1cm;\n    margin-bottom: 0.3cm;\n}\n.yes[_ngcontent-%COMP%] {\n    height: 70px;\n    width: 70px;\n    background: url('/uploads/images/tick.png');\n    background-size: 100% 100%;\n}\n.no[_ngcontent-%COMP%] {\n    height: 70px;\n    width: 70px;\n    background: url('/uploads/images/cross.png');\n    background-size: 100% 100%;\n}\n.grey[_ngcontent-%COMP%] {\n    height: 70px;\n    width: 70px;\n    background: url('/uploads/images/bw.png');\n    background-size: 100% 100%;\n}\n.color[_ngcontent-%COMP%] {\n    height: 70px;\n    width: 70px;\n    background: url('/uploads/images/color.png');\n    background-size: 100% 100%;\n}\nlabel.radio[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n.radio_yes[_ngcontent-%COMP%] {\n    width: 60px;\n    display: inline-block;\n}\n.checked[_ngcontent-%COMP%]{\n    outline: 3px black solid;\n}\n.btn[_ngcontent-%COMP%] {\n    margin-top: 1cm;\n    margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MtcGFnZS9zZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkNBQTJDO0lBQzNDLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCw0Q0FBNEM7SUFDNUMsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlDQUF5QztJQUN6QywwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsNENBQTRDO0lBQzVDLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy1wYWdlL3NldHRpbmdzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZXR0aW5nX2Zvcm0ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jb2xvci1kaXYge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY2hlY2tlZENvbG9yIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbn1cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbnRkIHtcbiAgICB3aWR0aDogMTQlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ucE5vdEFkbWluIHtcbiAgICBtYXJnaW4tdG9wOiAxY207XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zY207XG59XG4ueWVzIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvdXBsb2Fkcy9pbWFnZXMvdGljay5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbi5ubyB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgnL3VwbG9hZHMvaW1hZ2VzL2Nyb3NzLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuLmdyZXkge1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy91cGxvYWRzL2ltYWdlcy9idy5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbi5jb2xvciB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgnL3VwbG9hZHMvaW1hZ2VzL2NvbG9yLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxubGFiZWwucmFkaW8ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5yYWRpb195ZXMge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jaGVja2Vke1xuICAgIG91dGxpbmU6IDNweCBibGFjayBzb2xpZDtcbn1cbi5idG4ge1xuICAgIG1hcmdpbi10b3A6IDFjbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings-page',
                templateUrl: './settings-page.component.html',
                styleUrls: ['./settings-page.component.css']
            }]
    }], function () { return [{ type: _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _shared_services_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"] }, { type: _shared_services_people_service__WEBPACK_IMPORTED_MODULE_4__["PeopleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/classes/auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/classes/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.auth.isAuthenticated()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    accessDenied: true
                }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
        }
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/classes/moderator.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/classes/moderator.guard.ts ***!
  \***************************************************/
/*! exports provided: ModeratorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorGuard", function() { return ModeratorGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class ModeratorGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const thisuser = yield this.auth.getUser().toPromise();
            this.role = thisuser.levelStatus;
            if (this.role == 1 || this.role == 2) {
                return (true);
            }
            else {
                this.router.navigate(['/people/friends']);
                return (false);
            }
        });
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
}
ModeratorGuard.ɵfac = function ModeratorGuard_Factory(t) { return new (t || ModeratorGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ModeratorGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ModeratorGuard, factory: ModeratorGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModeratorGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/classes/token.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/classes/token.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class TokenInterceptor {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    intercept(req, next) {
        if (this.auth.isAuthenticated()) {
            req = req.clone({
                setHeaders: {
                    Authorization: this.auth.getToken()
                }
            });
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => this.handleAuthError(error)));
    }
    handleAuthError(error) {
        if (error.status === 401) {
            this.router.navigate(['/login'], {
                queryParams: {
                    sessionFailed: true
                }
            });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/answers/answers.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/answers/answers.component.ts ***!
  \****************************************************************/
/*! exports provided: AnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersComponent", function() { return AnswersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/shared/services/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/nav.service */ "./src/app/shared/services/nav.service.ts");
/* harmony import */ var _directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directive/easy-lang.directive */ "./src/app/shared/directive/easy-lang.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");








function AnswersComponent_div_5_span_1_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const picture_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r4.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AnswersComponent_div_5_span_1_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} }
function AnswersComponent_div_5_span_1_div_1_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", picture_r4.textInHTML, " ");
} }
function AnswersComponent_div_5_span_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswersComponent_div_5_span_1_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const picture_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.checkAnswer(picture_r4._id, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AnswersComponent_div_5_span_1_div_1_img_3_Template, 1, 1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AnswersComponent_div_5_span_1_div_1_img_4_Template, 1, 0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AnswersComponent_div_5_span_1_div_1_p_5_Template, 2, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r4.src);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !picture_r4.src);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r4.textInHTML);
} }
function AnswersComponent_div_5_span_1_div_2_p_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswersComponent_div_5_span_1_div_2_p_2_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const picture_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.checkAnswer(picture_r4.textInHTML, false, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", picture_r4.textInHTML, " ");
} }
function AnswersComponent_div_5_span_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswersComponent_div_5_span_1_div_2_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const picture_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.checkAnswer(picture_r4.src, false, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AnswersComponent_div_5_span_1_div_2_p_2_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r4.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r4.textInHTML && ctx_r6.session.text);
} }
function AnswersComponent_div_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnswersComponent_div_5_span_1_div_1_Template, 6, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AnswersComponent_div_5_span_1_div_2_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", picture_r4.folder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !picture_r4.folder && picture_r4.src);
} }
function AnswersComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnswersComponent_div_5_span_1_Template, 3, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.answers);
} }
function AnswersComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class AnswersComponent {
    constructor(chatService, route, navService) {
        this.chatService = chatService;
        this.route = route;
        this.navService = navService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.meta = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reloading = false;
        this.queryC = '';
        this.navService.manyFolder.subscribe(many => {
            this.many = many;
        });
    }
    ngOnInit() {
        this.reloading = true;
        let path = this.src.split('/');
        let picture = path[1].split('.');
        this.route.firstChild.params.subscribe((params) => {
            this.id = params.id;
            this.interlocutor = this.chatService.getInterlocutor(this.id).subscribe(user => {
                this.interlocutorSex = user.sex;
                this.route.queryParams.subscribe((queryParam) => {
                    this.queryC = queryParam.color;
                    this.$answers = this.chatService.getAnswers(picture[0], picture[1]).subscribe(answers => {
                        this.answers = answers.answers;
                        this.sortAnswers();
                    });
                });
            });
        });
    }
    sortAnswers() {
        console.log(this.many);
        for (let picture of this.answers) {
            if (picture._id == '5f130939962c2f062467f853') {
                picture.src = this.session.photo;
                if (picture.text)
                    picture.textInHTML = picture.text;
                else if (picture.textForGirls)
                    picture.textInHTML = picture.textForGirls;
            }
            else {
                if (this.session.sex == 1) {
                    if (picture.text)
                        picture.textInHTML = picture.text;
                    else if (picture.textForGirls)
                        picture.textInHTML = picture.textForGirls;
                    if (this.queryC == 'grey') {
                        if (picture.boysGreyPicture)
                            picture.src = picture.boysGreyPicture;
                        else if (picture.girlsGreyPicture)
                            picture.src = picture.girlsGreyPicture;
                        else if (picture.boysColorPicture)
                            picture.src = picture.boysColorPicture;
                        else if (picture.girlsColorPicture)
                            picture.src = picture.girlsColorPicture;
                    }
                    else {
                        if (picture.boysColorPicture)
                            picture.src = picture.boysColorPicture;
                        else if (picture.girlsColorPicture)
                            picture.src = picture.girlsColorPicture;
                        else if (picture.boysGreyPicture)
                            picture.src = picture.boysGreyPicture;
                        else if (picture.girlsGreyPicture)
                            picture.src = picture.girlsGreyPicture;
                    }
                }
                else {
                    if (picture.textForGirls)
                        picture.textInHTML = picture.textForGirls;
                    else if (picture.text)
                        picture.textInHTML = picture.text;
                    if (this.queryC == 'grey') {
                        if (picture.girlsGreyPicture)
                            picture.src = picture.girlsGreyPicture;
                        else if (picture.boysGreyPicture)
                            picture.src = picture.boysGreyPicture;
                        else if (picture.girlsColorPicture)
                            picture.src = picture.girlsColorPicture;
                        else if (picture.boysColorPicture)
                            picture.src = picture.boysColorPicture;
                    }
                    else {
                        if (picture.girlsColorPicture)
                            picture.src = picture.girlsColorPicture;
                        else if (picture.boysColorPicture)
                            picture.src = picture.boysColorPicture;
                        else if (picture.girlsGreyPicture)
                            picture.src = picture.girlsGreyPicture;
                        else if (picture.boysGreyPicture)
                            picture.src = picture.boysGreyPicture;
                    }
                }
            }
        }
        this.reloading = false;
    }
    closeModal(ans) {
        this.close.emit(ans);
    }
    checkAnswer(id, folder, type) {
        if (type)
            this.meta.emit([id, folder, type]);
        else
            this.meta.emit([id, folder]);
    }
    ngOnDestroy() {
        this.interlocutor.unsubscribe();
        this.$answers.unsubscribe();
    }
}
AnswersComponent.ɵfac = function AnswersComponent_Factory(t) { return new (t || AnswersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"])); };
AnswersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnswersComponent, selectors: [["app-answers"]], inputs: { src: "src", session: "session" }, outputs: { close: "close", meta: "meta" }, decls: 9, vars: 2, consts: [[1, "backdrop"], [1, "tablo_msg"], ["appEasyLang", "", 1, "tc", "vtablo"], ["id", "delete_id"], ["class", "answers-in-modal", 4, "ngIf", "ngIfElse"], ["id", "cross_msg", 1, "green-cursor", 3, "click"], ["reloader", ""], [1, "answers-in-modal"], [4, "ngFor", "ngForOf"], ["class", "answers-box green-cursor", 3, "click", 4, "ngIf"], ["class", "answers-box green-cursor", 4, "ngIf"], [1, "answers-box", "green-cursor", 3, "click"], [1, "picta", "folder"], [1, "downloads-picture"], ["class", "downloads", 3, "src", 4, "ngIf"], ["class", "downloads", "src", "/uploads/images/clean.png", 4, "ngIf"], ["class", "libraryName tc green-cursor", "appEasyLang", "", 4, "ngIf"], [1, "downloads", 3, "src"], ["src", "/uploads/images/clean.png", 1, "downloads"], ["appEasyLang", "", 1, "libraryName", "tc", "green-cursor"], [1, "answers-box", "green-cursor"], [1, "pict", 3, "src", "click"], ["class", "pictatext tc green-cursor", "appEasyLang", "", 3, "click", 4, "ngIf"], ["appEasyLang", "", 1, "pictatext", "tc", "green-cursor", 3, "click"]], template: function AnswersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AnswersComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswersComponent_Template_div_click_6_listener() { return ctx.closeModal(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AnswersComponent_ng_template_7_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reloading)("ngIfElse", _r1);
    } }, directives: [_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_4__["EasyLangDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"]], styles: [".answers-in-modal[_ngcontent-%COMP%] {\n    max-height: 80%;\n    height: auto;\n    width: auto;\n    overflow: auto;\n    margin-top: 1%;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    max-width: 90%;\n}\n\n.answers-box[_ngcontent-%COMP%] {\n  width: 20%;     \n  height: auto;\n  display: inline-block;\n  margin-left: 10%;\n  margin-top: 3%;\n  margin-bottom: 3%;   \n  vertical-align: top;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYW5zd2Vycy9hbnN3ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYW5zd2Vycy9hbnN3ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5zd2Vycy1pbi1tb2RhbCB7XG4gICAgbWF4LWhlaWdodDogODAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG59XG5cbi5hbnN3ZXJzLWJveCB7XG4gIHdpZHRoOiAyMCU7ICAgICBcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tYm90dG9tOiAzJTsgICBcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnswersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-answers',
                templateUrl: './answers.component.html',
                styleUrls: ['./answers.component.css']
            }]
    }], function () { return [{ type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"] }]; }, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], session: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], meta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/delete-all-message/delete-all-message.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/delete-all-message/delete-all-message.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DeleteAllMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAllMessageComponent", function() { return DeleteAllMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directive/easy-lang.directive */ "./src/app/shared/directive/easy-lang.directive.ts");



class DeleteAllMessageComponent {
    constructor() {
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    checked(ans) {
        this.result.emit(ans);
    }
}
DeleteAllMessageComponent.ɵfac = function DeleteAllMessageComponent_Factory(t) { return new (t || DeleteAllMessageComponent)(); };
DeleteAllMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteAllMessageComponent, selectors: [["app-delete-all-message"]], outputs: { result: "result" }, decls: 11, vars: 0, consts: [[1, "backdrop"], [1, "tablo"], ["appEasyLang", "", 1, "tc", "vtablo"], [1, "ontablo", "start-ontablo"], ["id", "avatar", "src", "/uploads/images/dialog.png"], ["id", "strelka", 1, "ontablo"], ["id", "musorka", 1, "ontablo"], ["id", "question", 1, "ontablo"], ["id", "cross", 1, "green-cursor", 3, "click"], ["id", "tick", 1, "green-cursor", 3, "click"]], template: function DeleteAllMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0447\u0430\u0442?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteAllMessageComponent_Template_div_click_9_listener() { return ctx.checked(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteAllMessageComponent_Template_div_click_10_listener() { return ctx.checked(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_1__["EasyLangDirective"]], styles: [".start-ontablo[_ngcontent-%COMP%] {\n    margin-left: 10%;\n}\n\n#avatar[_ngcontent-%COMP%] {\n    bottom: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGVsZXRlLWFsbC1tZXNzYWdlL2RlbGV0ZS1hbGwtbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RlbGV0ZS1hbGwtbWVzc2FnZS9kZWxldGUtYWxsLW1lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFydC1vbnRhYmxvIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4jYXZhdGFyIHtcbiAgICBib3R0b206IDEwcmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteAllMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-all-message',
                templateUrl: './delete-all-message.component.html',
                styleUrls: ['./delete-all-message.component.css']
            }]
    }], null, { result: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/delete-one-message/delete-one-message.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/delete-one-message/delete-one-message.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DeleteOneMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteOneMessageComponent", function() { return DeleteOneMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directive/easy-lang.directive */ "./src/app/shared/directive/easy-lang.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function DeleteOneMessageComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteOneMessageComponent_div_6_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.openZoom(message_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DeleteOneMessageComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r1, " ");
} }
function DeleteOneMessageComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DeleteOneMessageComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DeleteOneMessageComponent_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0414\u041E\u041A\u0423\u041C\u0415\u041D\u0422");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", message_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DeleteOneMessageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeleteOneMessageComponent_div_6_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DeleteOneMessageComponent_div_6_div_2_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DeleteOneMessageComponent_div_6_div_3_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DeleteOneMessageComponent_div_6_div_4_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DeleteOneMessageComponent_div_6_div_5_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.letter.type[i_r2] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.letter.type[i_r2] == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.letter.type[i_r2] == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.letter.type[i_r2] == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.letter.type[i_r2] == 5);
} }
class DeleteOneMessageComponent {
    constructor() {
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    checked(ans) {
        this.result.emit(ans);
    }
}
DeleteOneMessageComponent.ɵfac = function DeleteOneMessageComponent_Factory(t) { return new (t || DeleteOneMessageComponent)(); };
DeleteOneMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteOneMessageComponent, selectors: [["app-delete-one-message"]], inputs: { letter: "letter" }, outputs: { result: "result" }, decls: 12, vars: 1, consts: [[1, "backdrop"], [1, "tablo_msg"], ["appEasyLang", "", 1, "tc", "vtablo"], ["id", "delete_id"], [1, "ontablo", "start-tablo"], ["class", "div-in-li", 4, "ngFor", "ngForOf"], ["id", "strelka_msg", 1, "ontablo"], ["id", "musorka_msg", 1, "ontablo"], ["id", "question_msg", 1, "ontablo"], ["id", "cross_msg", 1, "green-cursor", 3, "click"], ["id", "tick_msg", 1, "green-cursor", 3, "click"], [1, "div-in-li"], ["class", "div-in-li", 4, "ngIf"], ["class", "div-in-li", "appEasyLang", "", 4, "ngIf"], [1, "div-img", 3, "src", "click"], ["appEasyLang", "", 1, "div-in-li"], ["controls", "", 1, "div-audio"], [3, "src"], ["controls", "", 1, "div-img"], ["download", "", 1, "div-in-li", 3, "href"], ["src", "/uploads/images/docs.png", 1, "div-doument"], ["appEasyLang", "", 1, "docs"]], template: function DeleteOneMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DeleteOneMessageComponent_div_6_Template, 6, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteOneMessageComponent_Template_div_click_10_listener() { return ctx.checked(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteOneMessageComponent_Template_div_click_11_listener() { return ctx.checked(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.letter.message);
    } }, directives: [_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_1__["EasyLangDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".start-tablo[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    font-family: Arial, sans-serif;\n    overflow-x: hidden;\n    overflow-y: auto;\n    border: 1px red solid;\n    border-radius: 10px;\n}\n\n.div-in-li[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: auto;\n    margin-top: 8px;\n    margin-bottom: 8px;\n}\n\n.div-img[_ngcontent-%COMP%] {\n    max-width: 100%;\n}\n\n.div-audio[_ngcontent-%COMP%] {\n    max-width: 100%;\n}\n\n.message[_ngcontent-%COMP%] {\n     height: auto;\n     max-width: 60%;\n     display: inline-block;\n     padding: 10px;\n     margin-top: 10px;\n     margin-bottom: 10px;\n     border-width: 3px;\n     border-style: solid;\n     border-radius: 10px;\n     width: auto;\n }\n\n.div-doument[_ngcontent-%COMP%] {\n     height: 3rem;\n     width: 3rem;\n     vertical-align: middle;     \n }\n\n.docs[_ngcontent-%COMP%] {\n    color: black;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGVsZXRlLW9uZS1tZXNzYWdlL2RlbGV0ZS1vbmUtbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQztLQUNJLFlBQVk7S0FDWixjQUFjO0tBQ2QscUJBQXFCO0tBQ3JCLGFBQWE7S0FDYixnQkFBZ0I7S0FDaEIsbUJBQW1CO0tBQ25CLGlCQUFpQjtLQUNqQixtQkFBbUI7S0FDbkIsbUJBQW1CO0tBQ25CLFdBQVc7Q0FDZjs7QUFFQTtLQUNJLFlBQVk7S0FDWixXQUFXO0tBQ1gsc0JBQXNCO0NBQzFCOztBQUVBO0lBQ0csWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGVsZXRlLW9uZS1tZXNzYWdlL2RlbGV0ZS1vbmUtbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJ0LXRhYmxvIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZGl2LWluLWxpIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5kaXYtaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uZGl2LWF1ZGlvIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbiAubWVzc2FnZSB7XG4gICAgIGhlaWdodDogYXV0bztcbiAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgcGFkZGluZzogMTBweDtcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgIHdpZHRoOiBhdXRvO1xuIH1cblxuIC5kaXYtZG91bWVudCB7XG4gICAgIGhlaWdodDogM3JlbTtcbiAgICAgd2lkdGg6IDNyZW07XG4gICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICAgICBcbiB9XG5cbiAuZG9jcyB7XG4gICAgY29sb3I6IGJsYWNrO1xuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteOneMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-one-message',
                templateUrl: './delete-one-message.component.html',
                styleUrls: ['./delete-one-message.component.css']
            }]
    }], null, { letter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], result: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/delete-picture/delete-picture.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/delete-picture/delete-picture.component.ts ***!
  \******************************************************************************/
/*! exports provided: DeletePictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePictureComponent", function() { return DeletePictureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directive/easy-lang.directive */ "./src/app/shared/directive/easy-lang.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function DeletePictureComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class DeletePictureComponent {
    constructor() {
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    checkedDelete(ans) {
        this.result.emit(ans);
    }
}
DeletePictureComponent.ɵfac = function DeletePictureComponent_Factory(t) { return new (t || DeletePictureComponent)(); };
DeletePictureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeletePictureComponent, selectors: [["app-delete-picture"]], inputs: { image: "image" }, outputs: { result: "result" }, decls: 12, vars: 4, consts: [[1, "backdrop"], [1, "tablo_pict"], ["appEasyLang", "", 1, "tc", "vtablo"], ["id", "delete_pict_id", "hidden", ""], ["id", "delete_pict", 3, "src", 4, "ngIf"], ["id", "strelka", 1, "ontablo"], ["id", "musorka", 1, "ontablo"], ["id", "question", 1, "ontablo"], ["id", "cross_pict", 1, "green-cursor", 3, "click"], ["id", "tick_pict", 1, "green-cursor", 3, "click"], ["id", "delete_pict", 3, "src"]], template: function DeletePictureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0430\u0439\u043B?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DeletePictureComponent_img_6_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeletePictureComponent_Template_div_click_10_listener() { return ctx.checkedDelete(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeletePictureComponent_Template_div_click_11_listener() { return ctx.checkedDelete(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ontablo ", ctx.image, " start-ontablo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image != "documentDelete" && ctx.image != "videoDelete" && ctx.image != "audioDelete" && ctx.image != "voteDelete");
    } }, directives: [_directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_1__["EasyLangDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".audioDelete[_ngcontent-%COMP%] {\n    background-image: url('/uploads/images/vote.png');\n    background-size: 100% 100%;\n}\n\n.videoDelete[_ngcontent-%COMP%] {\n    background-image: url('/uploads/images/camera.png');\n    background-size: 100% 100%;\n}\n\n.documentDelete[_ngcontent-%COMP%] {\n    background-image: url('/uploads/images/docs.png');\n    background-size: 100% 100%;\n}\n\n.voteDelete[_ngcontent-%COMP%] {\n    background-image: url('/uploads/images/microphone.png');\n    background-size: 100% 100%;\n}\n\n.start-ontablo[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGVsZXRlLXBpY3R1cmUvZGVsZXRlLXBpY3R1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlEQUFpRDtJQUNqRCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxtREFBbUQ7SUFDbkQsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaURBQWlEO0lBQ2pELDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHVEQUF1RDtJQUN2RCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RlbGV0ZS1waWN0dXJlL2RlbGV0ZS1waWN0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXVkaW9EZWxldGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3VwbG9hZHMvaW1hZ2VzL3ZvdGUucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi52aWRlb0RlbGV0ZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvdXBsb2Fkcy9pbWFnZXMvY2FtZXJhLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4uZG9jdW1lbnREZWxldGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3VwbG9hZHMvaW1hZ2VzL2RvY3MucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi52b3RlRGVsZXRlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy91cGxvYWRzL2ltYWdlcy9taWNyb3Bob25lLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4uc3RhcnQtb250YWJsbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeletePictureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-picture',
                templateUrl: './delete-picture.component.html',
                styleUrls: ['./delete-picture.component.css']
            }]
    }], null, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], result: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 3, vars: 0, consts: [[1, "loader-margin"], [1, "cssload-container"], [1, "cssload-zenith"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".cssload-container[_ngcontent-%COMP%] {\n\twidth: 100%;\n\theight: 49px;\n\ttext-align: center;\n}\n\n.cssload-zenith[_ngcontent-%COMP%] {\n\twidth: 49px;\n\theight: 49px;\n\tmargin: 0 auto;\n\tborder-radius: 50%;\n\tborder-top-color: transparent;\n\tborder-left-color: transparent;\n\tborder-right-color: transparent;\n\tbox-shadow: 3px 3px 1px rgb(0,0,0);\n\tanimation: cssload-spin 690ms infinite linear;\n\t\t-o-animation: cssload-spin 690ms infinite linear;\n\t\t-ms-animation: cssload-spin 690ms infinite linear;\n\t\t-webkit-animation: cssload-spin 690ms infinite linear;\n\t\t-moz-animation: cssload-spin 690ms infinite linear;\n}\n\n@keyframes cssload-spin {\n\t100%{ transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n.loader-margin[_ngcontent-%COMP%] {\n\tmargin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsNkJBQTZCO0NBQzdCLDhCQUE4QjtDQUM5QiwrQkFBK0I7Q0FDL0Isa0NBQWtDO0NBQ2xDLDZDQUE2QztFQUM1QyxnREFBZ0Q7RUFDaEQsaURBQWlEO0VBQ2pELHFEQUFxRDtFQUNyRCxrREFBa0Q7QUFDcEQ7O0FBSUE7Q0FDQyxNQUFNLHlCQUF5QixFQUFFLHlCQUF5QixFQUFFO0FBQzdEOztBQWtCQTtDQUNDLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jc3Nsb2FkLWNvbnRhaW5lciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDQ5cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNzc2xvYWQtemVuaXRoIHtcblx0d2lkdGg6IDQ5cHg7XG5cdGhlaWdodDogNDlweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Ym9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblx0Ym94LXNoYWRvdzogM3B4IDNweCAxcHggcmdiKDAsMCwwKTtcblx0YW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNjkwbXMgaW5maW5pdGUgbGluZWFyO1xuXHRcdC1vLWFuaW1hdGlvbjogY3NzbG9hZC1zcGluIDY5MG1zIGluZmluaXRlIGxpbmVhcjtcblx0XHQtbXMtYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNjkwbXMgaW5maW5pdGUgbGluZWFyO1xuXHRcdC13ZWJraXQtYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNjkwbXMgaW5maW5pdGUgbGluZWFyO1xuXHRcdC1tb3otYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNjkwbXMgaW5maW5pdGUgbGluZWFyO1xufVxuXG5cblxuQGtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xuXHQxMDAleyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbkAtby1rZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcblx0MTAwJXsgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5ALW1zLWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xuXHQxMDAleyAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcblx0MTAwJXsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xuXHQxMDAleyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLmxvYWRlci1tYXJnaW4ge1xuXHRtYXJnaW4tdG9wOiA1MHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/picture-zoom/picture-zoom.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/picture-zoom/picture-zoom.component.ts ***!
  \**************************************************************************/
/*! exports provided: PictureZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureZoomComponent", function() { return PictureZoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PictureZoomComponent {
    constructor() {
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    close() {
        this.result.emit(true);
    }
}
PictureZoomComponent.ɵfac = function PictureZoomComponent_Factory(t) { return new (t || PictureZoomComponent)(); };
PictureZoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictureZoomComponent, selectors: [["app-picture-zoom"]], inputs: { image: "image" }, outputs: { result: "result" }, decls: 4, vars: 1, consts: [[1, "backdrop"], [1, "tablo_uv"], ["id", "ontablo_uv", 3, "src"], ["id", "cross_uv", 1, "green-cursor", 3, "click"]], template: function PictureZoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PictureZoomComponent_Template_div_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BpY3R1cmUtem9vbS9waWN0dXJlLXpvb20uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureZoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-picture-zoom',
                templateUrl: './picture-zoom.component.html',
                styleUrls: ['./picture-zoom.component.css']
            }]
    }], null, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], result: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/record-audio/record-audio.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/record-audio/record-audio.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecordAudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordAudioComponent", function() { return RecordAudioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/shared/services/chat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directive/easy-lang.directive */ "./src/app/shared/directive/easy-lang.directive.ts");





function RecordAudioComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0413\u043E\u0432\u043E\u0440\u0438\u0442\u0435...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecordAudioComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0430\u0443\u0437\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecordAudioComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} }
function RecordAudioComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} }
function RecordAudioComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecordAudioComponent_div_6_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.pause(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecordAudioComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecordAudioComponent_div_6_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.resume(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecordAudioComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecordAudioComponent_div_6_div_1_Template, 1, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RecordAudioComponent_div_6_div_2_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecordAudioComponent_div_6_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.stop(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecordAudioComponent_div_6_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.break(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecordAudioComponent_div_6_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.stop(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.recording);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.recording);
} }
class RecordAudioComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.audio = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.recording = false;
        this.reloading = false;
        this.chunks = [];
    }
    ngOnInit() {
        this.reloading = true;
        this.record();
    }
    record() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const constraints = { audio: true };
            const options = { mimeType: 'audio/webm' };
            this.reloading = false;
            navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
                this.mediaRecorder = new MediaRecorder(stream, options);
                this.mediaRecorder.start(200);
                this.mediaRecorder.ondataavailable = e => this.chunks.push(e.data);
                this.recording = true;
            }, (err) => console.log('The following error occured: ' + err));
        }
        else {
            console.log('getUserMedia not supported on your browser!');
        }
    }
    pause() {
        this.mediaRecorder.pause();
        this.recording = false;
    }
    resume() {
        this.mediaRecorder.resume();
        this.recording = true;
    }
    break() {
        this.mediaRecorder.stop();
        this.recording = false;
        this.audio.emit([false]);
    }
    stop(send) {
        this.mediaRecorder.stop();
        this.recording = false;
        const blob = new Blob(this.chunks, { 'type': 'audio/webm' });
        this.chatService.newVote(blob).subscribe(vote => {
            if (send) {
                this.audio.emit([true, true, vote]);
            }
            else {
                this.audio.emit([true, false, vote]);
            }
        });
    }
}
RecordAudioComponent.ɵfac = function RecordAudioComponent_Factory(t) { return new (t || RecordAudioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"])); };
RecordAudioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecordAudioComponent, selectors: [["app-record-audio"]], outputs: { audio: "audio" }, decls: 7, vars: 5, consts: [[1, "backdrop"], [1, "tablo"], ["class", "tc vtablo", "appEasyLang", "", 4, "ngIf"], ["class", "ontablo_vote", "src", "/uploads/images/listen.png", 4, "ngIf"], ["class", "ontablo_vote", "src", "/uploads/images/notlisten.png", 4, "ngIf"], [4, "ngIf"], ["appEasyLang", "", 1, "tc", "vtablo"], ["src", "/uploads/images/listen.png", 1, "ontablo_vote"], ["src", "/uploads/images/notlisten.png", 1, "ontablo_vote"], ["id", "pause", "class", "green-cursor", 3, "click", 4, "ngIf"], ["id", "resume", "class", "green-cursor", 3, "click", 4, "ngIf"], ["id", "send-vote", 1, "green-cursor", 3, "click"], ["id", "cross", 1, "green-cursor", 3, "click"], ["id", "tick", 1, "green-cursor", 3, "click"], ["id", "pause", 1, "green-cursor", 3, "click"], ["id", "resume", 1, "green-cursor", 3, "click"]], template: function RecordAudioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RecordAudioComponent_p_2_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecordAudioComponent_p_3_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecordAudioComponent_img_4_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RecordAudioComponent_img_5_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecordAudioComponent_div_6_Template, 6, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recording);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.recording);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recording);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.recording);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reloading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_3__["EasyLangDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JlY29yZC1hdWRpby9yZWNvcmQtYXVkaW8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecordAudioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-record-audio',
                templateUrl: './record-audio.component.html',
                styleUrls: ['./record-audio.component.css']
            }]
    }], function () { return [{ type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }]; }, { audio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directive/easy-lang.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directive/easy-lang.directive.ts ***!
  \*********************************************************/
/*! exports provided: EasyLangDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyLangDirective", function() { return EasyLangDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EasyLangDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        let str = this.elementRef.nativeElement.innerText.toUpperCase();
        const newStr = str.replaceAll('А', "<span class = red>А</span>").replaceAll('О', "<span class = red>О</span>")
            .replaceAll('У', "<span class = red>У</span>").replaceAll('Ы', "<span class = red>Ы</span>")
            .replaceAll('Ю', "<span class = red>Ю</span>").replaceAll('Ё', "<span class = red>Ё</span>")
            .replaceAll('Э', "<span class = red>Э</span>").replaceAll('Я', "<span class = red>Я</span>")
            .replaceAll('И', "<span class = red>И</span>").replaceAll('Е', "<span class = red>Е</span>");
        this.elementRef.nativeElement.innerHTML = newStr;
    }
}
EasyLangDirective.ɵfac = function EasyLangDirective_Factory(t) { return new (t || EasyLangDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
EasyLangDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EasyLangDirective, selectors: [["", "appEasyLang", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EasyLangDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appEasyLang]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/layouts/admin-layout/admin-layout.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/admin-layout/admin-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/nav.service */ "./src/app/shared/services/nav.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");







const _c0 = function (a0) { return [a0]; };
function AdminLayoutComponent_div_0_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-admin middle-", ctx_r3.color, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, link_r4.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r4.name, " ");
} }
function AdminLayoutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminLayoutComponent_div_0_li_3_Template, 3, 7, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminLayoutComponent_div_0_Template_a_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0412\u044B\u0445\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav light-", ctx_r0.color, "-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.links);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-admin middle-", ctx_r0.color, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-admin middle-", ctx_r0.color, "-bg-hover");
} }
function AdminLayoutComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class AdminLayoutComponent {
    constructor(auth, router, navService) {
        this.auth = auth;
        this.router = router;
        this.navService = navService;
        this.links = [
            { url: '/manage/users', name: 'Пользователи' },
            { url: '/manage/institutions', name: 'Учреждения' },
            { url: '/manage/pictures', name: 'Пиктограммы' }
        ];
        this.reloading = false;
        this.navService.newColor.subscribe(color => this.color = color);
    }
    ngOnInit() {
        this.reloading = true;
        this.oSub = this.auth.getUser().subscribe(user => {
            this.color = user.firstColor;
            this.reloading = false;
        });
    }
    logout(event) {
        let oSub = this.auth.exit().subscribe();
        oSub.unsubscribe();
        event.preventDefault();
        this.auth.logout();
        this.router.navigate(['/login']);
    }
}
AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) { return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"])); };
AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLayoutComponent, selectors: [["app-admin-layout"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["reloader", ""], ["id", "nav-mobile", 1, ""], ["class", "nav-admin-li", 4, "ngFor", "ngForOf"], [1, "nav-admin-li-right"], ["href", "#", 3, "click"], ["routerLink", "/people/friends"], [1, "content"], [1, "nav-admin-li"], ["routerLinkActive", "manage-active", 3, "routerLink"]], template: function AdminLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminLayoutComponent_div_0_Template, 12, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminLayoutComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reloading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"]], styles: [".content[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%] {\n    cursor: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LCAubmF2IHtcbiAgICBjdXJzb3I6IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-layout',
                templateUrl: './admin-layout.component.html',
                styleUrls: ['./admin-layout.component.css']
            }]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/layouts/chat-layout/chat-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/chat-layout/chat-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChatLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatLayoutComponent", function() { return ChatLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/shared/services/chat.service.ts");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/nav.service */ "./src/app/shared/services/nav.service.ts");
/* harmony import */ var _services_socketio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/socketio.service */ "./src/app/shared/services/socketio.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chat-page/chat-page.component */ "./src/app/chat-page/chat-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directive/easy-lang.directive */ "./src/app/shared/directive/easy-lang.directive.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _components_picture_zoom_picture_zoom_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/picture-zoom/picture-zoom.component */ "./src/app/shared/components/picture-zoom/picture-zoom.component.ts");
/* harmony import */ var _components_delete_one_message_delete_one_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/delete-one-message/delete-one-message.component */ "./src/app/shared/components/delete-one-message/delete-one-message.component.ts");
/* harmony import */ var _components_answers_answers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/answers/answers.component */ "./src/app/shared/components/answers/answers.component.ts");















function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_1_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const message_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r30.openZoom(message_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r23, " ");
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0414\u041E\u041A\u0423\u041C\u0415\u041D\u0422");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", message_r23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_1_div_2_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_1_div_3_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_1_div_4_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_1_div_5_Template, 5, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r24 = ctx.index;
    const letter_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r17.type[i_r24] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r17.type[i_r24] == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r17.type[i_r24] == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r17.type[i_r24] == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r17.type[i_r24] == 5);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 40);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 41);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_1_Template, 6, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_3_Template, 1, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_div_4_Template, 1, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const letter_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r39.openDeleteMessage(letter_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("sender-message message dark-", ctx_r18.session.firstColor, "-border middle-", ctx_r18.session.firstColor, "-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", letter_r17._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", letter_r17.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r17.read && ctx_r18.session.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !letter_r17.read && ctx_r18.session.read);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_div_1_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const message_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r52.openAnswers(message_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const message_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r55.openZoom(message_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_div_1_div_3_Template, 1, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.withAnswers.includes(message_r44) && ctx_r46.session.answers);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r44, " ");
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0414\u041E\u041A\u0423\u041C\u0415\u041D\u0422");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", message_r44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_div_1_Template, 4, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_div_2_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_div_3_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_div_4_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_div_5_Template, 5, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r45 = ctx.index;
    const letter_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r17.type[i_r45] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r17.type[i_r45] == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r17.type[i_r45] == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r17.type[i_r45] == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r17.type[i_r45] == 5);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_div_1_Template, 6, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inter-message message dark-", ctx_r19.session.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", letter_r17._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", letter_r17.message);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_1_Template, 6, 8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatLayoutComponent_div_0_div_2_div_6_div_1_div_2_Template, 2, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r17 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r17.sender == ctx_r13.session._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r17.sender != ctx_r13.session._id);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 44);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_div_1_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const message_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r75.openAnswers(message_r67); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const message_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r78.openZoom(message_r67); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_div_1_div_3_Template, 1, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r67, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r69.withAnswers.includes(message_r67) && ctx_r69.session.answers);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r67, " ");
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r67, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r67, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0414\u041E\u041A\u0423\u041C\u0415\u041D\u0422");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", message_r67, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_div_1_Template, 4, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_div_2_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_div_3_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_div_4_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_div_5_Template, 5, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r68 = ctx.index;
    const letter_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r65.type[i_r68] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r65.type[i_r68] == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r65.type[i_r68] == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r65.type[i_r68] == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r65.type[i_r68] == 5);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatLayoutComponent_div_0_div_2_div_6_div_3_div_2_Template, 6, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r65 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inter-message message dark-", ctx_r15.session.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", letter_r65._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", letter_r65.message);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_1_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const message_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r100.openZoom(message_r93); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r93, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r93, " ");
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r93, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r93, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0414\u041E\u041A\u0423\u041C\u0415\u041D\u0422");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", message_r93, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_1_div_1_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_1_div_2_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_1_div_3_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_1_div_4_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_1_div_5_Template, 5, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r94 = ctx.index;
    const letter_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r87.type[i_r94] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r87.type[i_r94] == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r87.type[i_r94] == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r87.type[i_r94] == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r87.type[i_r94] == 5);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 40);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 41);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_1_Template, 6, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_3_Template, 1, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_div_4_Template, 1, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const letter_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r109.openDeleteMessage(letter_r87); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("sender-message message dark-", ctx_r88.session.firstColor, "-border middle-", ctx_r88.session.firstColor, "-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", letter_r87._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", letter_r87.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r87.read && ctx_r88.session.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !letter_r87.read && ctx_r88.session.read);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_div_1_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); const message_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r122.openAnswers(message_r114); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const message_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r125.openZoom(message_r114); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_div_1_div_3_Template, 1, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r114, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r116.withAnswers.includes(message_r114) && ctx_r116.session.answers);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r114, " ");
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r114, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r114, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0414\u041E\u041A\u0423\u041C\u0415\u041D\u0422");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", message_r114, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_div_1_Template, 4, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_div_2_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_div_3_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_div_4_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_div_5_Template, 5, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r115 = ctx.index;
    const letter_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r87.type[i_r115] == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r87.type[i_r115] == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r87.type[i_r115] == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r87.type[i_r115] == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r87.type[i_r115] == 5);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_div_1_Template, 6, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inter-message message dark-", ctx_r89.session.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", letter_r87._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", letter_r87.message);
} }
function ChatLayoutComponent_div_0_div_2_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_1_Template, 6, 8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatLayoutComponent_div_0_div_2_div_6_div_4_div_2_Template, 2, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const letter_r87 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r87.sender == ctx_r16.session._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", letter_r87.sender != ctx_r16.session._id);
} }
function ChatLayoutComponent_div_0_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatLayoutComponent_div_0_div_2_div_6_div_1_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatLayoutComponent_div_0_div_2_div_6_div_2_Template, 1, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatLayoutComponent_div_0_div_2_div_6_div_3_Template, 3, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatLayoutComponent_div_0_div_2_div_6_div_4_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.letters.messagesRead);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.letters.messagesNotRead.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.letters.messagesNotRead);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.newMessages);
} }
function ChatLayoutComponent_div_0_div_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
function ChatLayoutComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLayoutComponent_div_0_div_2_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); const user_r9 = ctx.ngIf; const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r135.openZoom(user_r9.photo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLayoutComponent_div_0_div_2_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r137.openZoom(ctx_r137.session.photo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatLayoutComponent_div_0_div_2_div_6_Template, 6, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatLayoutComponent_div_0_div_2_ng_template_7_Template, 1, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatLayoutComponent_div_0_div_2_Template_textarea_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r138.textarea = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLayoutComponent_div_0_div_2_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r139.newText(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r9 = ctx.ngIf;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("light-", ctx_r3.session.secondColor, "-bg dark-", ctx_r3.session.secondColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r9.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.session.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("light-", ctx_r3.session.secondColor, "-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.mesloading)("ngIfElse", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("light-", ctx_r3.session.firstColor, "-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.textarea);
} }
function ChatLayoutComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
function ChatLayoutComponent_div_0_app_picture_zoom_8_Template(rf, ctx) { if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-picture-zoom", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("result", function ChatLayoutComponent_div_0_app_picture_zoom_8_Template_app_picture_zoom_result_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r140.closeZoom($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx_r6.image);
} }
function ChatLayoutComponent_div_0_app_delete_one_message_9_Template(rf, ctx) { if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-delete-one-message", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("result", function ChatLayoutComponent_div_0_app_delete_one_message_9_Template_app_delete_one_message_result_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r143); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r142.closeDeleteMessage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("letter", ctx_r7.deleteID);
} }
function ChatLayoutComponent_div_0_app_answers_10_Template(rf, ctx) { if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-answers", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ChatLayoutComponent_div_0_app_answers_10_Template_app_answers_close_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r144.closeAnswers($event); })("meta", function ChatLayoutComponent_div_0_app_answers_10_Template_app_answers_meta_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r146.checkAnswer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.answerFor)("session", ctx_r8.session);
} }
function ChatLayoutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatLayoutComponent_div_0_div_2_Template, 13, 15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatLayoutComponent_div_0_ng_template_4_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-chat-page", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newMessage", function ChatLayoutComponent_div_0_Template_app_chat_page_newMessage_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r147.newMessageFromMe($event); })("deleteAll", function ChatLayoutComponent_div_0_Template_app_chat_page_deleteAll_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r149.clearChat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatLayoutComponent_div_0_app_picture_zoom_8_Template, 1, 1, "app-picture-zoom", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatLayoutComponent_div_0_app_delete_one_message_9_Template, 1, 1, "app-delete-one-message", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChatLayoutComponent_div_0_app_answers_10_Template, 1, 2, "app-answers", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("chat light-", ctx_r0.session.firstColor, "-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 13, ctx_r0.user$))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("library light-", ctx_r0.session.secondColor, "-bg dark-", ctx_r0.session.secondColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("session", ctx_r0.session);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.zoom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deleteMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.answerFor);
} }
function ChatLayoutComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class ChatLayoutComponent {
    constructor(loginService, route, chatService, navService, socketService, router) {
        this.loginService = loginService;
        this.route = route;
        this.chatService = chatService;
        this.navService = navService;
        this.socketService = socketService;
        this.router = router;
        this.reloading = false;
        this.textarea = '';
        this.newMessages = [];
        this.zoom = false;
        this.image = '';
        this.deleteMessage = false;
        this.mesloading = false;
        this.withAnswers = [];
        this.answerFor = '';
        this.socketService.newMessage.subscribe(message => {
            if (message.sender == this.id && message.recipient == this.session._id && !this.newMessages.includes(message)) {
                this.newMessages.push(message);
                for (let src of message.message) {
                    let path = src.split('/');
                    if (path[0] == 'uploads') {
                        let picture = path[1].split('.');
                        this.chatService.getAnswers(picture[0], picture[1]).subscribe(answers => {
                            if (answers.answers.length !== 0 && !this.withAnswers.includes(src))
                                this.withAnswers.push(src);
                        }, error => {
                            console.log(error);
                        });
                    }
                }
                setTimeout(scroll, 200);
                function scroll() {
                    document.getElementById('forScroll').scrollIntoView(false);
                }
            }
        });
        this.socketService.online.subscribe(online => {
            if (online == this.session._id && this.session._id != this.id) {
                for (let message of this.letters.messagesRead) {
                    message.read = true;
                }
                for (let message of this.newMessages) {
                    message.read = true;
                }
            }
        });
    }
    ngOnInit() {
        this.reloading = true;
        this.mesloading = true;
        this.oSub = this.loginService.getUser().subscribe(user => {
            this.session = user;
            this.socketService.setupSocketConnection(user._id, this.id);
            this.reloading = false;
        });
        this.route.firstChild.params.subscribe((params) => {
            this.id = params.id;
            this.user$ = this.chatService.getInterlocutor(this.id);
            this.messages$ = this.chatService.getMessages(this.id).subscribe(messages => {
                this.letters = messages;
                for (let message of messages.messagesRead) {
                    for (let src of message.message) {
                        let path = src.split('/');
                        if (path[0] == 'uploads') {
                            let picture = path[1].split('.');
                            this.chatService.getAnswers(picture[0], picture[1]).subscribe(answers => {
                                if (answers.answers.length !== 0 && !this.withAnswers.includes(src))
                                    this.withAnswers.push(src);
                            }, error => {
                                console.log(error);
                            });
                        }
                    }
                }
                for (let message of messages.messagesNotRead) {
                    for (let src of message.message) {
                        let path = src.split('/');
                        if (path[0] == 'uploads') {
                            let picture = path[1].split('.');
                            this.chatService.getAnswers(picture[0], picture[1]).subscribe(answers => {
                                if (answers.answers.length !== 0 && !this.withAnswers.includes(src))
                                    this.withAnswers.push(src);
                            }, error => {
                                console.log(error);
                            });
                        }
                    }
                }
                this.mesloading = false;
            });
        });
    }
    getAnswers(src) {
        let path = src.split('/');
        let picture = path[1].split('.');
        let ret;
        this.chatService.getAnswers(picture[0], picture[1]).subscribe(answers => {
            console.log(answers);
            if (answers.answers == [])
                ret = false;
            else
                ret = true;
        }, error => {
            console.log(error);
            ret = false;
        });
        return ret;
    }
    ngAfterViewInit() {
        let TimerId = setInterval(scroll, 500);
        function scroll() {
            if (document.getElementById('forScroll')) {
                clearTimeout(TimerId);
                let separator = document.getElementById('separator');
                if (separator)
                    separator.scrollIntoView(true);
                else
                    document.getElementById('forScroll').scrollIntoView(false);
            }
        }
    }
    newText() {
        if (this.textarea.trim()) {
            this.navService.sendTextMessage(this.textarea, 2);
            this.textarea = '';
        }
    }
    newMessageFromMe(message) {
        this.newMessages.push(message);
        setTimeout(scroll, 500);
        function scroll() {
            document.getElementById('forScroll').scrollIntoView(false);
        }
    }
    clearChat(clear) {
        if (clear) {
            this.letters.messagesRead = [];
            this.letters.messagesNotRead = [];
            this.newMessages = [];
        }
    }
    openZoom(src) {
        this.image = src;
        this.zoom = true;
    }
    closeZoom(result) {
        if (result)
            this.zoom = false;
    }
    openDeleteMessage(data) {
        this.deleteID = data;
        this.deleteMessage = true;
    }
    closeDeleteMessage(result) {
        if (result) {
            this.chatService.deleteOneMessage(this.deleteID._id).subscribe(message => {
                document.getElementById(this.deleteID._id).remove();
            });
        }
        this.deleteMessage = false;
    }
    openAnswers(ans) {
        this.answerFor = ans;
    }
    closeAnswers(close) {
        if (close)
            this.answerFor = '';
    }
    checkAnswer(meta) {
        if (meta[1]) {
            this.route.queryParams.subscribe((queryParam) => {
                let queryC = queryParam.color;
                this.router.navigate([], { queryParams: { 'folder': meta[0], 'color': queryC } });
            });
        }
        else {
            this.navService.sendTextMessage(meta[0], meta[2]);
        }
        this.answerFor = '';
    }
    ngOnDestroy() {
        this.socketService.disconnectSocket(this.session._id);
        this.oSub.unsubscribe();
    }
}
ChatLayoutComponent.ɵfac = function ChatLayoutComponent_Factory(t) { return new (t || ChatLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socketio_service__WEBPACK_IMPORTED_MODULE_5__["SocketioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ChatLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatLayoutComponent, selectors: [["app-chat-layout"]], decls: 3, vars: 2, consts: [["class", "body", 4, "ngIf", "ngIfElse"], ["reloader", ""], [1, "body"], [4, "ngIf", "ngIfElse"], ["loader", ""], [3, "session", "newMessage", "deleteAll"], [3, "image", "result", 4, "ngIf"], [3, "letter", "result", 4, "ngIf"], [3, "src", "session", "close", "meta", 4, "ngIf"], ["id", "header"], ["id", "friend", 1, "avatar", "green-cursor", 3, "src", "click"], ["id", "me", 1, "avatar", "green-cursor", 3, "src", "click"], ["id", "section"], ["id", "middle"], ["mesloader", ""], ["id", "chat"], ["id", "plus"], ["id", "tc", 1, "text", "text-cursor", 3, "ngModel", "ngModelChange"], ["id", "footer_letter", 1, "green-cursor", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "separator", "id", "separator", 4, "ngIf"], ["id", "forScroll", 1, "forScroll"], [3, "class", "id", 4, "ngIf"], [3, "id"], ["class", "div-in-li", 4, "ngFor", "ngForOf"], [1, "footer-out"], ["class", "see-message footer", 4, "ngIf"], ["class", "notsee-message footer", 4, "ngIf"], [1, "delete-message-btn", "footer", "green-cursor", 3, "click"], [1, "div-in-li"], ["class", "div-in-li", 4, "ngIf"], ["class", "div-in-li", "appEasyLang", "", 4, "ngIf"], [1, "div-img", "green-cursor", 3, "src", "click"], ["appEasyLang", "", 1, "div-in-li"], ["controls", "", 1, "div-audio"], [3, "src"], ["controls", "", 1, "div-img"], ["download", "", 1, "div-in-li", "green-cursor", 3, "href"], ["src", "/uploads/images/docs.png", 1, "div-doument"], ["appEasyLang", "", 1, "docs"], [1, "see-message", "footer"], [1, "notsee-message", "footer"], ["class", "answers-message-btn footer green-cursor", 3, "click", 4, "ngIf"], [1, "answers-message-btn", "footer", "green-cursor", 3, "click"], ["id", "separator", 1, "separator"], ["class", "div-in-li green-cursor", 4, "ngIf"], [1, "div-in-li", "green-cursor"], ["download", "", 1, "div-in-li", 3, "href"], [3, "image", "result"], [3, "letter", "result"], [3, "src", "session", "close", "meta"]], template: function ChatLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatLayoutComponent_div_0_Template, 11, 15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatLayoutComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reloading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_7__["ChatPageComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_9__["EasyLangDirective"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"], _components_picture_zoom_picture_zoom_component__WEBPACK_IMPORTED_MODULE_11__["PictureZoomComponent"], _components_delete_one_message_delete_one_message_component__WEBPACK_IMPORTED_MODULE_12__["DeleteOneMessageComponent"], _components_answers_answers_component__WEBPACK_IMPORTED_MODULE_13__["AnswersComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".body[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\n\n.div-in-li[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: auto;\n    margin-top: 8px;\n    margin-bottom: 8px;\n}\n\n.div-img[_ngcontent-%COMP%] {\n    max-width: 12rem;\n    margin: auto;\n}\n\n.div-audio[_ngcontent-%COMP%] {\n    width: 14rem;\n}\n\n#middle[_ngcontent-%COMP%] {\n    overflow-y: auto;\n    overflow-x: hidden;\n    width: 94%;\n    margin: 0; \n    padding-left: 3%;\n    padding-right: 3%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    position: absolute;\n    bottom: 60px;\n    top: 70px;\n    display: table-cell;\n    vertical-align: bottom;\n    font-family: Arial, sans-serif;\n    font-size: 0.6cm;\n }\n\n.message[_ngcontent-%COMP%] {\n     height: auto;\n     max-width: 60%;\n     display: inline-block;\n     padding: 10px;\n     margin-top: 10px;\n     margin-bottom: 10px;\n     border-width: 3px;\n     border-style: solid;\n     border-radius: 10px;\n     width: auto;\n }\n\n.section[_ngcontent-%COMP%] {\n     margin: 0;\n }\n\n.sender-message[_ngcontent-%COMP%] {\n     float: right;\n     clear: both;\n }\n\n.inter-message[_ngcontent-%COMP%] {\n     float: left;\n     clear: both;\n     background-color: white;\n }\n\n.div-doument[_ngcontent-%COMP%] {\n     height: 3rem;\n     width: 3rem;\n     vertical-align: middle;     \n }\n\n.docs[_ngcontent-%COMP%] {\n    color: black;\n }\n\n.footer-out[_ngcontent-%COMP%] {\n    width: auto;\n    height: auto;\n    float: right;\n }\n\n.footer[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    margin-left: 5px;\n    margin-right: 5px;\n    display: inline-block;\n }\n\n.delete-message-btn[_ngcontent-%COMP%] {\n     background-image: url('/uploads/images/musorka.png');\n     background-size: 100% 100%;\n }\n\n.see-message[_ngcontent-%COMP%] {\n    background-image: url('/uploads/images/eye_see.png');\n    background-size: 100% 100%;\n}\n\n.notsee-message[_ngcontent-%COMP%] {\n    background-image: url('/uploads/images/eye_notsee.png');\n    background-size: 100% 100%;\n}\n\n.answers-message-btn[_ngcontent-%COMP%] {\n    background-image: url('/uploads/images/question.png');\n    background-size: 100% 100%;\n}\n\n.separator[_ngcontent-%COMP%] {\n    height: 100px;\n    width: 100px;\n    background-image: url('/uploads/images/eye_notsee.png');\n    background-size: 100% 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    clear: both;\n    margin: auto;\n}\n\n.forScroll[_ngcontent-%COMP%] {\n    width: 100%;\n    clear: both;\n    height: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvY2hhdC1sYXlvdXQvY2hhdC1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0NBQ25COztBQUVBO0tBQ0ksWUFBWTtLQUNaLGNBQWM7S0FDZCxxQkFBcUI7S0FDckIsYUFBYTtLQUNiLGdCQUFnQjtLQUNoQixtQkFBbUI7S0FDbkIsaUJBQWlCO0tBQ2pCLG1CQUFtQjtLQUNuQixtQkFBbUI7S0FDbkIsV0FBVztDQUNmOztBQUVBO0tBQ0ksU0FBUztDQUNiOztBQUVBO0tBQ0ksWUFBWTtLQUNaLFdBQVc7Q0FDZjs7QUFFQTtLQUNJLFdBQVc7S0FDWCxXQUFXO0tBQ1gsdUJBQXVCO0NBQzNCOztBQUVBO0tBQ0ksWUFBWTtLQUNaLFdBQVc7S0FDWCxzQkFBc0I7Q0FDMUI7O0FBRUE7SUFDRyxZQUFZO0NBQ2Y7O0FBRUE7SUFDRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7Q0FDZjs7QUFFQTtJQUNHLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7Q0FDeEI7O0FBRUE7S0FDSSxvREFBb0Q7S0FDcEQsMEJBQTBCO0NBQzlCOztBQUVBO0lBQ0csb0RBQW9EO0lBQ3BELDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHVEQUF1RDtJQUN2RCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxREFBcUQ7SUFDckQsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix1REFBdUQ7SUFDdkQsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2NoYXQtbGF5b3V0L2NoYXQtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGl2LWluLWxpIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5kaXYtaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEycmVtO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5kaXYtYXVkaW8ge1xuICAgIHdpZHRoOiAxNHJlbTtcbn1cblxuI21pZGRsZSB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW46IDA7IFxuICAgIHBhZGRpbmctbGVmdDogMyU7XG4gICAgcGFkZGluZy1yaWdodDogMyU7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNjBweDtcbiAgICB0b3A6IDcwcHg7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDAuNmNtO1xuIH0gXG5cbiAubWVzc2FnZSB7XG4gICAgIGhlaWdodDogYXV0bztcbiAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgcGFkZGluZzogMTBweDtcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgIHdpZHRoOiBhdXRvO1xuIH1cblxuIC5zZWN0aW9uIHtcbiAgICAgbWFyZ2luOiAwO1xuIH1cblxuIC5zZW5kZXItbWVzc2FnZSB7XG4gICAgIGZsb2F0OiByaWdodDtcbiAgICAgY2xlYXI6IGJvdGg7XG4gfVxuXG4gLmludGVyLW1lc3NhZ2Uge1xuICAgICBmbG9hdDogbGVmdDtcbiAgICAgY2xlYXI6IGJvdGg7XG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuIH1cblxuIC5kaXYtZG91bWVudCB7XG4gICAgIGhlaWdodDogM3JlbTtcbiAgICAgd2lkdGg6IDNyZW07XG4gICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICAgICBcbiB9XG5cbiAuZG9jcyB7XG4gICAgY29sb3I6IGJsYWNrO1xuIH1cblxuIC5mb290ZXItb3V0IHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxvYXQ6IHJpZ2h0O1xuIH1cblxuIC5mb290ZXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiB9XG5cbiAuZGVsZXRlLW1lc3NhZ2UtYnRuIHtcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvdXBsb2Fkcy9pbWFnZXMvbXVzb3JrYS5wbmcnKTtcbiAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gfVxuXG4gLnNlZS1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy91cGxvYWRzL2ltYWdlcy9leWVfc2VlLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4ubm90c2VlLW1lc3NhZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3VwbG9hZHMvaW1hZ2VzL2V5ZV9ub3RzZWUucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5hbnN3ZXJzLW1lc3NhZ2UtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy91cGxvYWRzL2ltYWdlcy9xdWVzdGlvbi5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLnNlcGFyYXRvciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvdXBsb2Fkcy9pbWFnZXMvZXllX25vdHNlZS5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmZvclNjcm9sbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgaGVpZ2h0OiAxcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-layout',
                templateUrl: './chat-layout.component.html',
                styleUrls: ['./chat-layout.component.css']
            }]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }, { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"] }, { type: _services_socketio_service__WEBPACK_IMPORTED_MODULE_5__["SocketioService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/layouts/login-layout/login-layout.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/login-layout/login-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class LoginLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginLayoutComponent.ɵfac = function LoginLayoutComponent_Factory(t) { return new (t || LoginLayoutComponent)(); };
LoginLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginLayoutComponent, selectors: [["app-login-layout"]], decls: 1, vars: 0, template: function LoginLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2xvZ2luLWxheW91dC9sb2dpbi1sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-layout',
                templateUrl: './login-layout.component.html',
                styleUrls: ['./login-layout.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/layouts/people-layout/people-layout.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/layouts/people-layout/people-layout.component.ts ***!
  \*************************************************************************/
/*! exports provided: PeopleLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleLayoutComponent", function() { return PeopleLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/nav.service */ "./src/app/shared/services/nav.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/shared/services/chat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directive/easy-lang.directive */ "./src/app/shared/directive/easy-lang.directive.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");









function PeopleLayoutComponent_div_0_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("exit-friends tc dark-", ctx_r3.color2, "-border green-cursor");
} }
function PeopleLayoutComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} }
function PeopleLayoutComponent_div_0_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuIMG dark-", ctx_r5.color2, "-border green-cursor");
} }
function PeopleLayoutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PeopleLayoutComponent_div_0_a_4_Template, 3, 3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeopleLayoutComponent_div_0_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goToChat(ctx_r6.id, ctx_r6.color); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PeopleLayoutComponent_div_0_div_7_Template, 1, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeopleLayoutComponent_div_0_Template_p_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.goToChat(ctx_r8.id, ctx_r8.color); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PeopleLayoutComponent_div_0_a_14_Template, 2, 3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeopleLayoutComponent_div_0_Template_a_click_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.logout($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0412\u044B\u0445\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("friends light-", ctx_r0.color1, "-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("menu light-", ctx_r0.color2, "-bg dark-", ctx_r0.color2, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.levelStatus == 1 || ctx_r0.levelStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("myPhotoIMG dark-", ctx_r0.color2, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.online);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("exit-friends tc dark-", ctx_r0.color2, "-border myName green-cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuIMG dark-", ctx_r0.color2, "-border green-cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuIMG dark-", ctx_r0.color2, "-border green-cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.levelStatus == 4 || ctx_r0.setting != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("exit-friends tc dark-", ctx_r0.color2, "-border green-cursor");
} }
function PeopleLayoutComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class PeopleLayoutComponent {
    constructor(router, loginService, auth, navService, chatService) {
        this.router = router;
        this.loginService = loginService;
        this.auth = auth;
        this.navService = navService;
        this.chatService = chatService;
        this.reloading = false;
        this.navService.fColor.subscribe(color => this.color1 = color);
        this.navService.sColor.subscribe(color => this.color2 = color);
        this.navService.newDefColor.subscribe(color => this.color = color);
        this.navService.newOnlane.subscribe(online => {
            this.online = online;
            if (online == 'false')
                this.online = false;
            else
                this.online = true;
        });
    }
    ngOnInit() {
        this.reloading = true;
        this.oSub = this.auth.getUser().subscribe(user => {
            this.color1 = user.firstColor;
            this.color2 = user.secondColor;
            this.online = user.online;
            this.photo = user.photo;
            this.setting = user.setting;
            this.levelStatus = user.levelStatus;
            this.name = user.name;
            this.id = user._id;
            this.color = user.defaultColor;
            this.reloading = false;
        });
    }
    goToChat(id, color) {
        this.chatService.goToChat(id, color);
    }
    logout(event) {
        let oSub = this.loginService.exit().subscribe();
        oSub.unsubscribe();
        event.preventDefault();
        this.loginService.logout();
        this.router.navigate(['/login']);
    }
}
PeopleLayoutComponent.ɵfac = function PeopleLayoutComponent_Factory(t) { return new (t || PeopleLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"])); };
PeopleLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeopleLayoutComponent, selectors: [["app-people-layout"]], decls: 3, vars: 2, consts: [["class", "body", 4, "ngIf", "ngIfElse"], ["loader", ""], [1, "body"], ["routerLink", "/manage", 4, "ngIf"], [1, "myPhoto", "green-cursor", 3, "click"], [3, "src"], ["id", "online_me", 4, "ngIf"], ["appEasyLang", "", 3, "click"], ["routerLink", "/people/friends", "routerLinkActive", "people-active"], ["src", "/uploads/images/dialog.png"], ["routerLink", "/people/search", "routerLinkActive", "people-active"], ["src", "/uploads/images/lupa.png"], ["routerLink", "/people/settings", "routerLinkActive", "people-active", 4, "ngIf"], ["href", "#", 3, "click"], ["appEasyLang", ""], ["routerLink", "/manage"], ["id", "online_me"], ["routerLink", "/people/settings", "routerLinkActive", "people-active"], ["src", "/uploads/images/settings.jpg"]], template: function PeopleLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PeopleLayoutComponent_div_0_Template, 19, 27, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PeopleLayoutComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reloading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _directive_easy_lang_directive__WEBPACK_IMPORTED_MODULE_6__["EasyLangDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"]], styles: [".body[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n}\n.people-active[_ngcontent-%COMP%] {\n    display: none;\n}\n.myPhotoIMG[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    border-style: solid;\n    border-radius: 10px;\n    border-width: 3px;\n}\n.menu[_ngcontent-%COMP%] {\n    z-index: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvcGVvcGxlLWxheW91dC9wZW9wbGUtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xheW91dHMvcGVvcGxlLWxheW91dC9wZW9wbGUtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5wZW9wbGUtYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLm15UGhvdG9JTUcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XG59XG4ubWVudSB7XG4gICAgei1pbmRleDogMztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeopleLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-people-layout',
                templateUrl: './people-layout.component.html',
                styleUrls: ['./people-layout.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"] }, { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FilterPipe {
    transform(users, search = '', field) {
        if (!search.trim()) {
            return users;
        }
        return users.filter(user => {
            if (field == 'surname') {
                return user.surname.toLowerCase().includes(search.toLowerCase());
            }
            else {
                return user.name.toLowerCase().includes(search.toLowerCase());
            }
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/chat.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/chat.service.ts ***!
  \*************************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class ChatService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    goToChat(id, color, folder) {
        var fold = '5f12ff8cc06cd105437d84e3';
        if (folder)
            fold = folder;
        this.router.navigate([`/chat/${id}`], { queryParams: { color: color, folder: fold } });
    }
    getInterlocutor(id) {
        return this.http.get(`/api/chat/interlocutor/${id}`);
    }
    getPictures(id) {
        return this.http.get(`/api/chat/${id}`);
    }
    newFiles(files) {
        const fd = new FormData();
        for (let i = 0; i < files.length; i++) {
            fd.append(`files`, files[i], files[i].name);
        }
        return this.http.post(`/api/chat/picture/new`, fd);
    }
    newVote(blob) {
        let file = new File([blob], 'vote.webm', { type: 'audio/webm' });
        const fd = new FormData();
        fd.append('file', file, file.name);
        return this.http.post(`/api/chat/vote/new`, fd);
    }
    deletePicture(id) {
        return this.http.delete(`/api/manage/pictures/${id}`);
    }
    sendMessage(friend, message, type) {
        const fd = { message, type };
        let json = JSON.stringify(fd);
        const myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post(`/api/chat/${friend}`, json, { headers: myHeaders });
    }
    getMessages(friend) {
        return this.http.get(`/api/chat/message/${friend}`);
    }
    deleteOneMessage(id) {
        return this.http.delete(`/api/chat/${id}`);
    }
    deleteAllMessages(friend) {
        return this.http.delete(`/api/chat/all/${friend}`);
    }
    getAnswers(picture, type) {
        return this.http.get(`/api/chat/answers/${picture}/${type}`);
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/institutions.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/institutions.service.ts ***!
  \*********************************************************/
/*! exports provided: InstitutionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionsService", function() { return InstitutionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class InstitutionsService {
    constructor(http) {
        this.http = http;
    }
    fetch() {
        return this.http.get('/api/manage/institutions');
    }
    getById(id) {
        return this.http.get(`/api/manage/institutions/${id}`);
    }
    create(name) {
        const fd = { name: name };
        let json = JSON.stringify(fd);
        const myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post(`/api/manage/institutions`, json, { headers: myHeaders });
    }
    update(id, name) {
        const fd = { name: name };
        let json = JSON.stringify(fd);
        const myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.patch(`/api/manage/institutions/${id}`, json, { headers: myHeaders });
    }
    delete(id, newID) {
        return this.http.delete(`/api/manage/institutions/${id}/${newID}`);
    }
}
InstitutionsService.ɵfac = function InstitutionsService_Factory(t) { return new (t || InstitutionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
InstitutionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InstitutionsService, factory: InstitutionsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstitutionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/login.service.ts ***!
  \**************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class LoginService {
    constructor(http) {
        this.http = http;
        this.token = null;
    }
    login(user) {
        return this.http.post('/api/login', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(({ token }) => {
            localStorage.setItem('auth-token', token);
            this.setToken(token);
        }));
    }
    getUser() {
        return this.http.get('/api/people');
    }
    setToken(token) {
        this.token = token;
    }
    getToken() {
        return this.token;
    }
    isAuthenticated() {
        return !!this.token;
    }
    logout() {
        this.setToken(null);
        localStorage.clear();
    }
    exit() {
        return this.http.delete('/api/people');
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/nav.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/nav.service.ts ***!
  \************************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavService {
    constructor() {
        this.newColor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fColor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sColor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newOnlane = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newDefColor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.textMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.manyFolder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    sendColor(color) {
        this.newColor.emit(color);
    }
    sendToPeople(color1, color2, online, color) {
        this.fColor.emit(color1);
        this.sColor.emit(color2);
        this.newOnlane.emit(online);
        this.newDefColor.emit(color);
    }
    sendTextMessage(message, type) {
        this.textMessage.emit([message, type]);
    }
    sendMany(many) {
        this.manyFolder.emit(many);
    }
}
NavService.ɵfac = function NavService_Factory(t) { return new (t || NavService)(); };
NavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavService, factory: NavService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/people.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/people.service.ts ***!
  \***************************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PeopleService {
    constructor(http) {
        this.http = http;
    }
    update(online, text, read, firstColor, secondColor, surnameView, vote, sentence, answers, change, defaultColor, birthdays) {
        let obj = {
            online,
            text,
            read,
            firstColor,
            secondColor,
            surnameView,
            vote,
            sentence,
            answers,
            change,
            defaultColor,
            birthdays
        };
        let json = JSON.stringify(obj);
        const myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.patch(`/api/people`, json, { headers: myHeaders });
    }
    newRole(levelStatus) {
        let obj = {
            levelStatus
        };
        let json = JSON.stringify(obj);
        const myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.patch(`/api/people`, json, { headers: myHeaders });
    }
    fetchAll(id) {
        return this.http.get(`/api/people/search/${id}`);
    }
    fetchFriends() {
        return this.http.get(`/api/people/friends`);
    }
    getInstitutions() {
        return this.http.get(`/api/manage/institutions/search`);
    }
}
PeopleService.ɵfac = function PeopleService_Factory(t) { return new (t || PeopleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PeopleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PeopleService, factory: PeopleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeopleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/pictures.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/pictures.service.ts ***!
  \*****************************************************/
/*! exports provided: PicturesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicturesService", function() { return PicturesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class PicturesService {
    constructor(http) {
        this.http = http;
    }
    getById(_id) {
        return this.http.get(`/api/manage/pictures/one/${_id}`);
    }
    fetch(_id) {
        return this.http.get(`/api/manage/pictures/${_id}`);
    }
    create(parent, invisible, folder, system, many, textForGirls, clean1, clean2, clean3, clean4, text, boysGreyPicture, girlsGreyPicture, boysColorPicture, girlsColorPicture, answers, exceptions) {
        const fd = new FormData();
        if (boysGreyPicture && !clean1)
            fd.append('boysGreyPicture', boysGreyPicture, boysGreyPicture.name);
        if (girlsGreyPicture && !clean2)
            fd.append('girlsGreyPicture', girlsGreyPicture, girlsGreyPicture.name);
        if (boysColorPicture && !clean3)
            fd.append('boysColorPicture', boysColorPicture, boysColorPicture.name);
        if (girlsColorPicture && !clean4)
            fd.append('girlsColorPicture', girlsColorPicture, girlsColorPicture.name);
        if (answers && answers !== [])
            fd.append('answers', answers.toString());
        if (exceptions && exceptions !== [])
            fd.append('exceptions', exceptions.toString());
        fd.append('text', text);
        if (textForGirls)
            fd.append('textForGirls', textForGirls);
        if (many && folder)
            fd.append('many', many);
        fd.append('invisible', invisible.toString());
        fd.append('folder', folder.toString());
        fd.append('system', system.toString());
        return this.http.post(`/api/manage/pictures/${parent}`, fd);
    }
    update(id, invisible, folder, text, many, textForGirls, clean1, clean2, clean3, clean4, boysGreyPicture, girlsGreyPicture, boysColorPicture, girlsColorPicture, answers, exceptions) {
        const fd = new FormData();
        if (boysGreyPicture && !clean1)
            fd.append('boysGreyPicture', boysGreyPicture, boysGreyPicture.name);
        if (girlsGreyPicture && !clean2)
            fd.append('girlsGreyPicture', girlsGreyPicture, girlsGreyPicture.name);
        if (boysColorPicture && !clean3)
            fd.append('boysColorPicture', boysColorPicture, boysColorPicture.name);
        if (girlsColorPicture && !clean4)
            fd.append('girlsColorPicture', girlsColorPicture, girlsColorPicture.name);
        if (answers && answers !== [])
            fd.append('answers', answers.toString());
        if (exceptions && exceptions !== [])
            fd.append('exceptions', exceptions.toString());
        if (clean1)
            fd.append('boysGreyPicture', '');
        if (clean2)
            fd.append('girlsGreyPicture', '');
        if (clean3)
            fd.append('boysColorPicture', '');
        if (clean4)
            fd.append('girlsColorPicture', '');
        fd.append('text', text);
        if (textForGirls)
            fd.append('textForGirls', textForGirls);
        fd.append('invisible', invisible.toString());
        if (many && folder)
            fd.append('many', many);
        return this.http.patch(`/api/manage/pictures/${id}`, fd);
    }
    delete(id) {
        return this.http.delete(`/api/manage/pictures/${id}`);
    }
    users(id) {
        return this.http.get(`/api/people/toPictures/${id}`);
    }
}
PicturesService.ɵfac = function PicturesService_Factory(t) { return new (t || PicturesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PicturesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PicturesService, factory: PicturesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PicturesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/socketio.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/socketio.service.ts ***!
  \*****************************************************/
/*! exports provided: SocketioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketioService", function() { return SocketioService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "../node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




class SocketioService {
    constructor() {
        this.newMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.online = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0__(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SOCKET_ENDPOINT);
    }
    setupSocketConnection(id, interlocutor) {
        this.socket.emit('in-chat', id);
        this.socket.emit('online', interlocutor);
        this.socket.on('new message', (data) => {
            this.newMessage.emit(data.message);
        });
        this.socket.on('online', (id) => {
            this.online.emit(id);
        });
    }
    sendMessage(id, message) {
        this.socket.emit('new message', { id, message });
    }
    disconnectSocket(id) {
        this.socket.emit('leave room', id);
    }
}
SocketioService.ɵfac = function SocketioService_Factory(t) { return new (t || SocketioService)(); };
SocketioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SocketioService, factory: SocketioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SocketioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/users.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/users.service.ts ***!
  \**************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UsersService {
    constructor(http) {
        this.http = http;
    }
    fetch(params) {
        return this.http.get(`/api/manage/users`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: params
            })
        });
    }
    getInstitutions() {
        return this.http.get(`/api/manage/institutions`);
    }
    getById(id) {
        return this.http.get(`/api/manage/users/${id}`);
    }
    create(login, name, surname, sex, institution, levelStatus, password, birthDate, photo, online, text, read, firstColor, secondColor, surnameView, setting, vote, sentence, answers, change, defaultColor, birthdays) {
        const fd = new FormData();
        if (photo)
            fd.append('image', photo, photo.name);
        if (birthDate)
            fd.append('birthDate', birthDate.toString());
        fd.append('login', login);
        fd.append('password', password);
        fd.append('surname', surname);
        fd.append('name', name);
        fd.append('sex', sex.toString());
        fd.append('institution', institution);
        fd.append('levelStatus', levelStatus.toString());
        if (online)
            fd.append('online', online.toString());
        if (text)
            fd.append('text', text.toString());
        if (read)
            fd.append('read', read.toString());
        if (firstColor)
            fd.append('firstColor', firstColor.toString());
        if (secondColor)
            fd.append('secondColor', secondColor.toString());
        if (surnameView)
            fd.append('surnameView', surnameView.toString());
        if (setting)
            fd.append('setting', setting.toString());
        if (vote)
            fd.append('vote', vote.toString());
        if (sentence)
            fd.append('sentence', sentence.toString());
        if (answers)
            fd.append('answers', answers.toString());
        if (change)
            fd.append('change', change.toString());
        if (defaultColor)
            fd.append('defaultColor', defaultColor);
        if (birthdays)
            fd.append('birthdays', birthdays.toString());
        return this.http.post(`/api/manage/users`, fd);
    }
    update(id, changeL, login, name, surname, sex, institution, levelStatus, password, birthDate, photo, imageText, online, text, read, firstColor, secondColor, surnameView, setting, vote, sentence, answers, change, defaultColor, birthdays) {
        const fd = new FormData();
        if (photo)
            fd.append('image', photo, photo.name);
        if (imageText)
            fd.append('photo', imageText);
        if (birthDate)
            fd.append('birthDate', birthDate.toString());
        if (changeL)
            fd.append('login', login);
        if (password)
            fd.append('password', password);
        fd.append('surname', surname);
        fd.append('name', name);
        fd.append('sex', sex.toString());
        fd.append('institution', institution);
        fd.append('levelStatus', levelStatus.toString());
        if (online)
            fd.append('online', online.toString());
        if (text)
            fd.append('text', text.toString());
        if (read)
            fd.append('read', read.toString());
        if (firstColor)
            fd.append('firstColor', firstColor.toString());
        if (secondColor)
            fd.append('secondColor', secondColor.toString());
        if (surnameView)
            fd.append('surnameView', surnameView.toString());
        if (setting)
            fd.append('setting', setting.toString());
        if (vote)
            fd.append('vote', vote.toString());
        if (sentence)
            fd.append('sentence', sentence.toString());
        if (answers)
            fd.append('answers', answers.toString());
        if (change)
            fd.append('change', change.toString());
        if (defaultColor)
            fd.append('defaultColor', defaultColor);
        if (birthdays)
            fd.append('birthdays', birthdays.toString());
        return this.http.patch(`/api/manage/users/${id}`, fd);
    }
    delete(id) {
        return this.http.delete(`/api/manage/users/${id}`);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/users-page/users-form/users-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/users-page/users-form/users-form.component.ts ***!
  \***************************************************************/
/*! exports provided: UsersFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersFormComponent", function() { return UsersFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/users.service */ "./src/app/shared/services/users.service.ts");
/* harmony import */ var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var src_app_shared_services_nav_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/nav.service */ "./src/app/shared/services/nav.service.ts");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");













function UsersFormComponent_form_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("edit-avatar right dark-", ctx_r3.session.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UsersFormComponent_form_0_div_16_select_3_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const institution_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", institution_r13._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", institution_r13._id === ctx_r12.userInstitution && ctx_r12.whatDo !== "new" || ctx_r12.whatDo == "new" && institution_r13._id == ctx_r12.session.institution);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", institution_r13.name, " ");
} }
function UsersFormComponent_form_0_div_16_select_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersFormComponent_form_0_div_16_select_3_option_1_Template, 2, 3, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const institutions_r11 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", institutions_r11);
} }
function UsersFormComponent_form_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0423\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UsersFormComponent_form_0_div_16_select_3_Template, 2, 1, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r4.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r4.institutions$));
} }
function UsersFormComponent_form_0_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", day_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r14);
} }
function UsersFormComponent_form_0_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", month_r15.num);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](month_r15.name);
} }
function UsersFormComponent_form_0_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersFormComponent_form_0_td_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "f", color_r16, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", color_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "f", color_r16, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("color-div light-", color_r16, "-bg");
} }
function UsersFormComponent_form_0_td_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "s", color_r17, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", color_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "s", color_r17, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("color-div light-", color_r17, "-bg");
} }
const _c0 = function () { return ["/manage/users"]; };
function UsersFormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersFormComponent_form_0_img_1_Template, 1, 4, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041B\u043E\u0433\u0438\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0418\u043C\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UsersFormComponent_form_0_div_16_Template, 5, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u0414\u0435\u043D\u044C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UsersFormComponent_form_0_option_23_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u041C\u0435\u0441\u044F\u0446: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UsersFormComponent_form_0_option_28_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0413\u043E\u0434: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041F\u043E\u043B:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UsersFormComponent_form_0_Template_input_change_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.changeSex(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UsersFormComponent_form_0_Template_input_change_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.changeSex(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0420\u043E\u043B\u044C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, UsersFormComponent_form_0_div_41_Template, 4, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u041F\u043E\u0434\u043E\u043F\u0435\u0447\u043D\u044B\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u0412\u0437\u0440\u043E\u0441\u043B\u044B\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u0413\u043E\u0441\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0424\u043E\u0442\u043E (\u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0439\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UsersFormComponent_form_0_Template_input_change_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onFileUpload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043E\u043D\u043B\u0430\u0439\u043D\u044B:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u0414\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " \u041D\u0435\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u043F\u043E\u0434 \u043F\u0438\u043A\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u0430\u043C\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " \u0414\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " \u041D\u0435\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E \u043B\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " \u0414\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " \u041D\u0435\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0444\u0430\u043C\u0438\u043B\u0438\u0438 (\u0442\u0430\u043A\u0436\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u0438\u0441\u043A \u043F\u043E \u0444\u0430\u043C\u0438\u043B\u0438\u0438):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " \u0414\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " \u041D\u0435\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " \u0414\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " \u041D\u0435\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " \u0414\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " \u041D\u0435\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u0412\u0438\u0434\u043D\u044B \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043A \u043E\u0442\u0432\u0435\u0442\u0430\u043C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " \u0414\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " \u041D\u0435\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0441\u043C\u0435\u043D\u0430 \u0446\u0432\u0435\u0442\u043D\u044B\u0445 \u0438 \u0447\u0451\u0440\u043D\u043E-\u0431\u0435\u043B\u044B\u0445 \u043F\u0438\u043A\u0442\u043E\u0433\u0440\u0430\u043C\u043C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " \u0414\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " \u041D\u0435\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u041F\u0438\u043A\u0442\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " \u0427\u0451\u0440\u043D\u043E-\u0431\u0435\u043B\u044B\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " \u0426\u0432\u0435\u0442\u043D\u044B\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\u0412\u044B\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u0438\u043C\u0435\u043D\u0438\u043D\u043D\u0438\u043A\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " \u0414\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " \u041D\u0435\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\u041C\u043E\u0436\u0435\u0442 \u043B\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " \u041C\u043E\u0436\u0435\u0442 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " \u041C\u043E\u0436\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0432\u0435\u0442\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " \u041D\u0435\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "\u041F\u0435\u0440\u0432\u044B\u0439 \u0446\u0432\u0435\u0442:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](155, UsersFormComponent_form_0_td_155_Template, 4, 6, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\u0412\u0442\u043E\u0440\u043E\u0439 \u0446\u0432\u0435\u0442:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](160, UsersFormComponent_form_0_td_160_Template, 4, 6, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "\u041D\u0430\u0437\u0430\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersFormComponent_form_0_Template_button_click_164_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dark-", ctx_r0.session.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.imagePreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041F\u0430\u0440\u043E\u043B\u044C", ctx_r0.whatDo !== "new" ? " (\u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435, \u0435\u0441\u043B\u0438 \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C)" : "", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.session.levelStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.months);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.session.levelStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_new_user dark-", ctx_r0.session.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-admin form_picture_button middle-", ctx_r0.session.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](88, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("new_user_button middle-", ctx_r0.session.firstColor, "-bg-hover");
} }
function UsersFormComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class UsersFormComponent {
    constructor(route, usersService, loginService, router, datePipe, navService) {
        this.route = route;
        this.usersService = usersService;
        this.loginService = loginService;
        this.router = router;
        this.datePipe = datePipe;
        this.navService = navService;
        this.whatDo = '';
        this.imagePreview = '';
        this.userInstitution = '';
        this.startL = '';
        this.endL = '';
        this.months = [
            { num: '1', name: 'январь' },
            { num: '2', name: 'февраль' },
            { num: '3', name: 'март' },
            { num: '4', name: 'апрель' },
            { num: '5', name: 'май' },
            { num: '6', name: 'июнь' },
            { num: '7', name: 'июль' },
            { num: '8', name: 'август' },
            { num: '9', name: 'сентябрь' },
            { num: '10', name: 'октябрь' },
            { num: '11', name: 'ноябрь' },
            { num: '12', name: 'декабрь' }
        ];
        this.days = [];
        this.colors = [];
        this.dateFromServer = [];
        this.imageText = '';
        this.reloading = false;
    }
    ngOnInit() {
        for (let i = 1; i < 32; i++) {
            this.days.push(i);
        }
        for (let i = 1; i < 8; i++) {
            this.colors.push(i);
        }
        this.route.params.subscribe(() => {
            this.institutions$ = this.usersService.getInstitutions();
        });
        this.reloading = true;
        this.oSub = this.loginService.getUser().subscribe(user => {
            this.session = user;
            this.id = user._id;
            this.reloading = false;
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                sex: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1'),
                status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('3'),
                photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
                institution: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.session.institution, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                online: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('false'),
                Text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('false'),
                read: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('false'),
                surnameView: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('false'),
                setting: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1'),
                vote: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('false'),
                sentence: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('false'),
                answers: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('false'),
                change: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('true'),
                defaultColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('grey'),
                birthdays: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('false'),
                first: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('5'),
                second: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1'),
                day: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('0'),
                month: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('0'),
                year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4)])
            });
            this.imagePreview = '/uploads/images/boy.png';
            this.form.disable();
            this.route.params
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((params) => {
                this.whatDo = params['id'];
                if (this.whatDo !== 'new') {
                    return this.usersService.getById(this.whatDo);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }))
                .subscribe((user) => {
                if (user) {
                    this.user = user;
                    this.form.patchValue({
                        login: user.login,
                        name: user.name,
                        surname: user.surname,
                        text: user.text,
                        sex: user.sex.toString(),
                        status: user.levelStatus.toString(),
                        institution: user.institution,
                        online: user.online.toString(),
                        Text: user.text.toString(),
                        read: user.read.toString(),
                        surnameView: user.surnameView.toString(),
                        setting: user.setting.toString(),
                        vote: user.vote.toString(),
                        sentence: user.sentence.toString(),
                        answers: user.answers.toString(),
                        change: user.change.toString(),
                        defaultColor: user.defaultColor,
                        birthdays: user.birthdays.toString(),
                        first: user.firstColor.toString(),
                        second: user.secondColor.toString()
                    });
                    this.startL = user.login;
                    this.imagePreview = user.photo;
                    this.first = +user.firstColor;
                    if (this.imagePreview == '/uploads/images/boy.png')
                        this.imageText = '/uploads/images/boy.png';
                    if (this.imagePreview == '/uploads/images/girl.png')
                        this.imageText = '/uploads/images/girl.png';
                    this.userInstitution = user.institution.toString();
                    if (user.birthDate) {
                        let date = this.datePipe.transform(user.birthDate, "dd,MM,yyyy");
                        this.dateFromServer = date.split(',');
                        let day = +this.dateFromServer[0];
                        let month = +this.dateFromServer[1];
                        this.form.patchValue({
                            day: day.toString(),
                            month: month.toString(),
                            year: this.dateFromServer[2].toString()
                        });
                    }
                }
                this.form.enable();
            }, error => { console.log(error); });
        });
    }
    ngOnDestroy() {
        this.oSub.unsubscribe();
    }
    changeSex() {
        if ((this.imagePreview == '/uploads/images/boy.png') || (this.imagePreview == '/uploads/images/girl.png')) {
            if (this.form.value.sex == '1') {
                this.imagePreview = '/uploads/images/boy.png';
                this.imageText = '/uploads/images/boy.png';
            }
            else {
                this.imagePreview = '/uploads/images/girl.png';
                this.imageText = '/uploads/images/girl.png';
            }
        }
    }
    onFileUpload(event) {
        const file = event.target.files[0];
        this.image = file;
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result.toString();
        };
        reader.readAsDataURL(file);
    }
    validationDate() {
        if ((this.form.value.day == '0') || (this.form.value.month == '0') || (this.form.value.year == '')) {
            return true;
        }
        else {
            if (+this.form.value.year > 1910) {
                let date = this.form.value.year + '-' + this.form.value.month + '-' + this.form.value.day;
                let dateFromUser = new Date(date);
                if (dateFromUser) {
                    let now = new Date();
                    return now > dateFromUser;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
    }
    sendToParent(color) {
        this.navService.sendColor(color);
    }
    onSubmit() {
        this.form.disable();
        const valid = this.validationDate();
        if (valid) {
            if ((this.form.value.day != null) && (this.form.value.month != null) && (this.form.value.year != '')) {
                let date = this.form.value.year + '-' + this.form.value.month + '-' + this.form.value.day;
                this.birthday = new Date(date);
            }
            let obs$;
            if (this.whatDo === 'new') {
                obs$ = this.usersService.create(this.form.value.login, this.form.value.name, this.form.value.surname, this.form.value.sex, this.form.value.institution, this.form.value.status, this.form.value.password, this.birthday, this.image, this.form.value.online, this.form.value.Text, this.form.value.read, this.form.value.first, this.form.value.second, this.form.value.surnameView, this.form.value.setting, this.form.value.vote, this.form.value.sentence, this.form.value.answers, this.form.value.change, this.form.value.defaultColor, this.form.value.birthdays);
            }
            else {
                this.endL = this.form.value.login;
                let changeL;
                if (this.endL == this.startL)
                    changeL = false;
                else
                    changeL = true;
                if (this.image)
                    this.imageText = '';
                obs$ = this.usersService.update(this.whatDo, changeL, this.form.value.login, this.form.value.name, this.form.value.surname, this.form.value.sex, this.form.value.institution, this.form.value.status, this.form.value.password, this.birthday, this.image, this.imageText, this.form.value.online, this.form.value.Text, this.form.value.read, this.form.value.first, this.form.value.second, this.form.value.surnameView, this.form.value.setting, this.form.value.vote, this.form.value.sentence, this.form.value.answers, this.form.value.change, this.form.value.defaultColor, this.form.value.birthdays);
            }
            obs$.subscribe(user => {
                this.user = user;
                this.form.enable();
                if (this.first != +this.form.value.first && this.id == this.whatDo) {
                    this.sendToParent(this.form.value.first);
                }
                this.router.navigate([`/manage/users`]);
            }, error => {
                console.log(error.error.message);
                this.form.enable();
            }, () => { this.form.enable(); });
        }
        else {
            console.log('Неверная дата');
            this.form.enable();
        }
    }
}
UsersFormComponent.ɵfac = function UsersFormComponent_Factory(t) { return new (t || UsersFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_nav_service__WEBPACK_IMPORTED_MODULE_8__["NavService"])); };
UsersFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersFormComponent, selectors: [["app-users-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])], decls: 3, vars: 2, consts: [["id", "edit_user", 3, "class", "formGroup", 4, "ngIf", "ngIfElse"], ["reloader", ""], ["id", "edit_user", 3, "formGroup"], [3, "class", "src", 4, "ngIf"], ["type", "text", "formControlName", "login"], ["type", "text", "formControlName", "password"], ["type", "text", "formControlName", "name"], ["type", "text", "formControlName", "surname"], [4, "ngIf"], ["formControlName", "day", 1, "inline-blok"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "month", 1, "inline-blok"], ["type", "text", "formControlName", "year", 1, "inline-blok", "w40"], ["name", "sex", "type", "radio", "value", "1", "formControlName", "sex", 3, "change"], ["name", "sex", "type", "radio", "value", "2", "formControlName", "sex", 3, "change"], ["name", "status", "type", "radio", "value", "2", "formControlName", "status"], ["name", "status", "type", "radio", "value", "3", "formControlName", "status"], ["name", "status", "type", "radio", "value", "5", "formControlName", "status"], ["name", "status", "type", "radio", "value", "4", "formControlName", "status"], ["type", "file", "formControlName", "photo", 3, "change"], ["name", "online", "type", "radio", "value", "true", "formControlName", "online"], ["name", "online", "type", "radio", "value", "false", "formControlName", "online"], ["name", "Text", "type", "radio", "value", "true", "formControlName", "Text"], ["name", "Text", "type", "radio", "value", "false", "formControlName", "Text"], ["name", "read", "type", "radio", "value", "true", "formControlName", "read"], ["name", "read", "type", "radio", "value", "false", "formControlName", "read"], ["name", "surnameView", "type", "radio", "value", "true", "formControlName", "surnameView"], ["name", "surnameView", "type", "radio", "value", "false", "formControlName", "surnameView"], ["name", "vote", "type", "radio", "value", "true", "formControlName", "vote"], ["name", "vote", "type", "radio", "value", "false", "formControlName", "vote"], ["name", "sentence", "type", "radio", "value", "true", "formControlName", "sentence"], ["name", "sentence", "type", "radio", "value", "false", "formControlName", "sentence"], ["name", "answers", "type", "radio", "value", "true", "formControlName", "answers"], ["name", "answers", "type", "radio", "value", "false", "formControlName", "answers"], ["name", "change", "type", "radio", "value", "true", "formControlName", "change"], ["name", "change", "type", "radio", "value", "false", "formControlName", "change"], ["name", "defaultColor", "type", "radio", "value", "grey", "formControlName", "defaultColor"], ["name", "defaultColor", "type", "radio", "value", "color", "formControlName", "defaultColor"], ["name", "birthdays", "type", "radio", "value", "true", "formControlName", "birthdays"], ["name", "birthdays", "type", "radio", "value", "false", "formControlName", "birthdays"], ["name", "setting", "type", "radio", "value", "2", "formControlName", "setting"], ["name", "setting", "type", "radio", "value", "1", "formControlName", "setting"], ["name", "setting", "type", "radio", "value", "0", "formControlName", "setting"], [4, "ngFor", "ngForOf"], [3, "routerLink"], ["id", "submit_button", "type", "submit", "hidden", "", 3, "click"], ["for", "submit_button"], [3, "src"], ["formControlName", "institution", 4, "ngIf"], ["formControlName", "institution"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"], [3, "value"], ["name", "status", "type", "radio", "value", "1", "formControlName", "status"], ["name", "first", "type", "radio", "formControlName", "first", 1, "inline-blok", 3, "id", "value"], [3, "for"], ["name", "second", "type", "radio", "formControlName", "second", 1, "inline-blok", 3, "id", "value"]], template: function UsersFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UsersFormComponent_form_0_Template, 167, 89, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersFormComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reloading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".inline-block[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n.w40[_ngcontent-%COMP%] {\n    width: 40px;\n}\n.color-div[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMtcGFnZS91c2Vycy1mb3JtL3VzZXJzLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzLXBhZ2UvdXNlcnMtZm9ybS91c2Vycy1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4udzQwIHtcbiAgICB3aWR0aDogNDBweDtcbn1cbi5jb2xvci1kaXYge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users-form',
                templateUrl: './users-form.component.html',
                styleUrls: ['./users-form.component.css'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] }, { type: src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }, { type: src_app_shared_services_nav_service__WEBPACK_IMPORTED_MODULE_8__["NavService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/users-page/users-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users-page/users-page.component.ts ***!
  \****************************************************/
/*! exports provided: UsersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageComponent", function() { return UsersPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/users.service */ "./src/app/shared/services/users.service.ts");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");








function UsersPageComponent_div_0_div_11_select_3_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const institution_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", institution_r11._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](institution_r11.name);
} }
function UsersPageComponent_div_0_div_11_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersPageComponent_div_0_div_11_select_3_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.institution = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041B\u044E\u0431\u043E\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UsersPageComponent_div_0_div_11_select_3_option_3_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const institutions_r9 = ctx.ngIf;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.institution);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", institutions_r9);
} }
function UsersPageComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0423\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UsersPageComponent_div_0_div_11_select_3_Template, 4, 2, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_user_filtr dark-", session_r5.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r6.institutions$));
} }
function UsersPageComponent_div_0_div_44_div_1_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
} if (rf & 2) {
    const user_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r20.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UsersPageComponent_div_0_div_44_div_1_div_1_p_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const session_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dark-", session_r5.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 4, user_r20.birthDate, "dd.MM.yyyy"), " ");
} }
function UsersPageComponent_div_0_div_44_div_1_div_1_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dark-", session_r5.firstColor, "-color");
} }
function UsersPageComponent_div_0_div_44_div_1_div_1_div_31_label_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersPageComponent_div_0_div_44_div_1_div_1_div_31_label_4_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const user_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r30.deleteUser(user_r20.login, user_r20._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("new_user_button form_picture_button middle-", session_r5.firstColor, "-bg-hover");
} }
const _c0 = function (a1) { return ["/manage/users", a1]; };
function UsersPageComponent_div_0_div_44_div_1_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersPageComponent_div_0_div_44_div_1_div_1_div_31_label_4_Template, 2, 3, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const session_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-admin form_picture_button middle-", session_r5.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, user_r20._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", session_r5._id != user_r20._id);
} }
function UsersPageComponent_div_0_div_44_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersPageComponent_div_0_div_44_div_1_div_1_img_4_Template, 1, 1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041B\u043E\u0433\u0438\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041F\u043E\u043B: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0423\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0420\u043E\u043B\u044C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UsersPageComponent_div_0_div_44_div_1_div_1_p_27_Template, 5, 7, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UsersPageComponent_div_0_div_44_div_1_div_1_p_28_Template, 4, 3, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UsersPageComponent_div_0_div_44_div_1_div_1_div_31_Template, 5, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r20 = ctx.$implicit;
    const session_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("user dark-", session_r5.firstColor, "-border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", user_r20._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r20.surname, " ", user_r20.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r20.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dark-", session_r5.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r20.login, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dark-", session_r5.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r20.sex === 1 ? "\u041C\u0443\u0436\u0441\u043A\u043E\u0439" : "\u0416\u0435\u043D\u0441\u043A\u0438\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dark-", session_r5.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r20.institutionName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dark-", session_r5.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r19.status[user_r20.levelStatus], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r20.birthDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r20.birthDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", session_r5.levelStatus == 1 || user_r20.levelStatus != 1);
} }
function UsersPageComponent_div_0_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersPageComponent_div_0_div_44_div_1_div_1_Template, 32, 26, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.users);
} }
function UsersPageComponent_div_0_div_44_div_4_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersPageComponent_div_0_div_44_div_4_label_1_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r38.loadMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("new_user_button center middle-", session_r5.firstColor, "-bg-hover");
} }
function UsersPageComponent_div_0_div_44_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersPageComponent_div_0_div_44_div_4_label_1_Template, 2, 3, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.loading);
} }
function UsersPageComponent_div_0_div_44_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
function UsersPageComponent_div_0_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersPageComponent_div_0_div_44_div_1_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersPageComponent_div_0_div_44_div_4_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UsersPageComponent_div_0_div_44_ng_template_5_Template, 1, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.users.length > 0)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.noMore);
} }
const _c1 = function () { return ["/manage/users", "new"]; };
function UsersPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041B\u043E\u0433\u0438\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersPageComponent_div_0_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.login = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0418\u043C\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersPageComponent_div_0_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersPageComponent_div_0_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.surname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UsersPageComponent_div_0_div_11_Template, 5, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041F\u043E\u043B:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersPageComponent_div_0_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.sex = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u041B\u044E\u0431\u043E\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersPageComponent_div_0_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.sex = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersPageComponent_div_0_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.sex = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0420\u043E\u043B\u044C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersPageComponent_div_0_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.role1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersPageComponent_div_0_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.role2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersPageComponent_div_0_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.role3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u041F\u043E\u0434\u043E\u043F\u0435\u0447\u043D\u044B\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersPageComponent_div_0_Template_input_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.role5 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u0412\u0437\u0440\u043E\u0441\u043B\u044B\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersPageComponent_div_0_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.role4 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u0413\u043E\u0441\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersPageComponent_div_0_Template_label_click_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.onFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, UsersPageComponent_div_0_div_44_Template, 7, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r5 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_user_filtr dark-", session_r5.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_user_filtr dark-", session_r5.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_user_filtr dark-", session_r5.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", session_r5.levelStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_user_filtr dark-", session_r5.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("in_user_filtr dark-", session_r5.firstColor, "-color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.role1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.role2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.role3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.role5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.role4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("middle-", session_r5.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.reloading)("ngIfElse", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-admin middle-", session_r5.firstColor, "-bg-hover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c1));
} }
function UsersPageComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
function UsersPageComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const STEP = 25;
class UsersPageComponent {
    constructor(usersService, loginService) {
        this.usersService = usersService;
        this.loginService = loginService;
        this.limit = STEP;
        this.offset = 0;
        this.users = [];
        this.loading = false;
        this.reloading = false;
        this.noMore = false;
        this.filter = {};
        this.status = {
            1: 'Администратор',
            2: 'Модератор',
            3: 'Подопечный',
            4: 'Гость',
            5: 'Взрослый'
        };
    }
    ngOnInit() {
        this.reloading = true;
        this.session$ = this.loginService.getUser();
        this.institutions$ = this.usersService.getInstitutions();
        this.fetch();
    }
    fetch() {
        const params = Object.assign({}, this.filter, {
            offset: this.offset,
            limit: this.limit
        });
        this.oSub = this.usersService.fetch(params).subscribe(users => {
            this.users = this.users.concat(users);
            this.noMore = users.length < STEP;
            this.loading = false;
            this.reloading = false;
        });
    }
    ngOnDestroy() {
        this.oSub.unsubscribe();
    }
    loadMore() {
        this.offset += STEP;
        this.loading = true;
        this.fetch();
    }
    deleteUser(login, id) {
        const decision = window.confirm(`Вы уверены, что хотите удалить пользователя с логином ${login}?`);
        if (decision) {
            this.usersService.delete(id)
                .subscribe(response => {
                let box = document.getElementById(id);
                box.remove();
            }, error => { console.log(error.error.message); });
        }
    }
    onFilter(filter) {
        if (this.login)
            filter.login = this.login;
        if (this.name)
            filter.name = this.name;
        if (this.surname)
            filter.surname = this.surname;
        if (this.institution) {
            if (this.institution != 'all')
                filter.institution = this.institution;
        }
        if (this.sex) {
            if (this.sex != '0')
                filter.sex = this.sex;
        }
        let roles = [];
        if (this.role1)
            roles.push('1');
        if (this.role2)
            roles.push('2');
        if (this.role3)
            roles.push('3');
        if (this.role4)
            roles.push('4');
        if (this.role5)
            roles.push('5');
        if (roles !== [])
            filter.levelStatus = roles.toString();
        this.users = [];
        this.offset = 0;
        this.filter = filter;
        this.reloading = true;
        this.fetch();
    }
}
UsersPageComponent.ɵfac = function UsersPageComponent_Factory(t) { return new (t || UsersPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
UsersPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersPageComponent, selectors: [["app-users-page"]], decls: 6, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["reloader", ""], ["empty", ""], [1, "user_filtr"], ["type", "text", "name", "login", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "name", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "surname", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["name", "sex", "type", "radio", "value", "0", 3, "ngModel", "ngModelChange"], ["name", "sex", "type", "radio", "value", "1", 3, "ngModel", "ngModelChange"], ["name", "sex", "type", "radio", "value", "2", 3, "ngModel", "ngModelChange"], ["name", "status", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["id", "submit_button", "type", "submit", "hidden", ""], ["for", "submit_button", "id", "submit", 3, "click"], ["id", "add_user", 3, "routerLink"], [3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "ngModel", "ngModelChange"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "more_button", "type", "button", "hidden", ""], ["loader", ""], [3, "class", "id", 4, "ngFor", "ngForOf"], [3, "id"], [1, "user_title"], ["class", "avatarAdmin", 3, "src", 4, "ngIf"], [1, "div_user_info"], [1, "user_info"], ["class", "user_info", 4, "ngIf"], [1, "avatarAdmin", 3, "src"], [3, "routerLink"], ["id", "delete_button", "type", "button", "hidden", ""], ["for", "delete_button", 3, "class", "click", 4, "ngIf"], ["for", "delete_button", 3, "click"], ["for", "more_button", 3, "class", "click", 4, "ngIfLoader", "ngIf"], ["for", "more_button", 3, "click"], [1, "empty"]], template: function UsersPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UsersPageComponent_div_0_Template, 47, 37, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UsersPageComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersPageComponent_ng_template_4_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.session$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".inline-block[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.div_user_info[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n}\n\n.center[_ngcontent-%COMP%] {\n    margin-left: 45%;\n}\n\n.user[_ngcontent-%COMP%] {\n    background-color: white;\n}\n\n.empty[_ngcontent-%COMP%] {\n    margin-left: 30%; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMtcGFnZS91c2Vycy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy1wYWdlL3VzZXJzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRpdl91c2VyX2luZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcbn1cblxuLnVzZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZW1wdHkge1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7IFxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users-page',
                templateUrl: './users-page.component.html',
                styleUrls: ['./users-page.component.css']
            }]
    }], function () { return [{ type: _shared_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }, { type: _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    SOCKET_ENDPOINT: 'http://localhost:5000'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Zoya/Desktop/emo/client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map