webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/boundaries/boundaries-front.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"container\">\r\n    <div class=\"box_shadow\" style=\"border:3px solid #7f7f7f; width:100%; float:left;\">\r\n      <div class='col-sm-2'>\r\n        <div class=\"text-center\">\r\n          <img class=\"img-responsive\" src=\"/assets/images/codico_logo.png\" class=\"codico-logo\">\r\n        </div>\r\n        <img src=\"/assets/images/ipek_logo.png\" class=\"ipek-logo img-responsive\">\r\n        <br/>\r\n        <div style='background-color: orange;padding: 20px;border: 2px solid darkgray;margin-top: 50px;'>\r\n          <img src=\"/assets/images/sign-info.png\" height='32' width=\"32\">\r\n          <span class=\"text-white\">Specify your boundary conditions.</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-10 right-box\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <wizard [selectedStep]=\"'boundary'\"></wizard>\r\n          </div>\r\n\r\n          <div class=\"col-sm-10 col-sm-offset-1 filter-groups\">\r\n            <div *ngFor=\"let group of data\" class=\"col-sm-5 filter-group\">\r\n              <div class=\"col-sm-12 filters-list\">\r\n                <div *ngIf=\"group.MaxAllowedOptions\" class=\"filter-header-metadata\">\r\n                  Max Allowed Options: {{ group.MaxAllowedOptions }}\r\n                </div>\r\n                <div class=\"filter-header\">\r\n                  {{ group.Title }}\r\n                </div>\r\n                <div (click)=\"filterToggle(filter)\" class=\"filter-container\" *ngFor=\"let filter of group.Filters\" [class.area-disabled]=\"filter.disabled\">\r\n                  <label for=\"{{filter.BoundaryOptionId}}\">{{ filter.BoundaryText }}</label>\r\n                  <i class=\"fiber-check-box pull-right\" [class.fbox-selected]=\"filter.Selected\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <button (click)=\"next()\" class=\"btn btn-success pull-right\">Next</button>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/boundaries/boundaries-front.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var boundaries_front_service_1 = __webpack_require__("./src/app/account/boundaries/boundaries-front.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var shared_data_1 = __webpack_require__("./src/app/services/shared-data.ts");
var BoundariesFrontComponent = /** @class */ (function () {
    function BoundariesFrontComponent(dataService, sharedData, route, router) {
        this.dataService = dataService;
        this.sharedData = sharedData;
        this.route = route;
        this.router = router;
    }
    BoundariesFrontComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.topicId = +params['id'];
            _this.getData(_this.topicId);
        });
    };
    BoundariesFrontComponent.prototype.filterToggle = function (filter) {
        filter.Selected = !filter.Selected;
        var boundary = this.data.find(function (d) { return d.BoundaryId === filter.BoundaryId; });
        var selectedFilters = boundary.Filters.filter(function (s) { return s.Selected === true; });
        if (selectedFilters.length == boundary.MaxAllowedOptions) {
            var unChecked = boundary.Filters.filter(function (x) { return !x.Selected; });
            if (unChecked && unChecked.length > 0) {
                unChecked.forEach(function (element) {
                    element.disabled = true;
                });
            }
        }
        else {
            boundary.Filters.forEach(function (element) {
                element.disabled = false;
            });
        }
    };
    BoundariesFrontComponent.prototype.next = function () {
        this.setSharedData(this.data);
        console.log(this.data);
        this.router.navigate(['/account/result']);
    };
    BoundariesFrontComponent.prototype.getData = function (topicId) {
        var _this = this;
        this.dataService.getBoundaries(topicId)
            .subscribe(function (data) {
            _this.data = _this.convert(data);
            console.log(_this.data);
        });
    };
    BoundariesFrontComponent.prototype.convert = function (data) {
        var retValue = data.map(function (d) {
            var group = d.$;
            group.Filters = d.BoundaryOptions.map(function (f) {
                var item = f.$;
                item.Selected = false;
                return item;
            });
            return group;
        });
        return retValue;
    };
    BoundariesFrontComponent.prototype.setSharedData = function (boundaries) {
        this.sharedData.data.boundaries = boundaries;
    };
    BoundariesFrontComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'front-boundaries',
            template: __webpack_require__("./src/app/account/boundaries/boundaries-front.component.html"),
            providers: [boundaries_front_service_1.BoundaryFrontService]
        }),
        __metadata("design:paramtypes", [boundaries_front_service_1.BoundaryFrontService,
            shared_data_1.SharedDataService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], BoundariesFrontComponent);
    return BoundariesFrontComponent;
}());
exports.BoundariesFrontComponent = BoundariesFrontComponent;


/***/ }),

/***/ "./src/app/account/boundaries/boundaries-front.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var BoundaryFrontService = /** @class */ (function (_super) {
    __extends(BoundaryFrontService, _super);
    function BoundaryFrontService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    BoundaryFrontService.prototype.getBoundaries = function (topicId) {
        return this.get(this.hostAPI + "/front/boundaries/" + topicId, this.authorisedOptions())
            .map(function (res) { return res.json().Filters.Boundary; });
    };
    BoundaryFrontService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BoundaryFrontService);
    return BoundaryFrontService;
}(base_http_service_1.BaseService));
exports.BoundaryFrontService = BoundaryFrontService;


/***/ }),

/***/ "./src/app/account/container/account-container.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand active\" [routerLink]=\"['/account/home']\">Fiberfox</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li>\r\n          <a [routerLink]=\"['/account/home']\">Home</a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/account/start']\">Start Flow</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav pull-right\">\r\n        <li class=\"\">\r\n          <span>{{ user.username }}</span>\r\n        </li>\r\n        <li>\r\n          <a (click)=\"logout()\">Log out</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 bigcrow\">\r\n    <div class=\"row m-t-35\">\r\n      <div class=\"col-md-10 col-md-offset-1 outer-box-style\">\r\n        <div class=\"row\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/container/account-container.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/security/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AccountContainerComponent = /** @class */ (function () {
    function AccountContainerComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AccountContainerComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem('currentUser');
    };
    AccountContainerComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    AccountContainerComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'account-container',
            template: __webpack_require__("./src/app/account/container/account-container.component.html"),
            providers: [auth_service_1.AuthService]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], AccountContainerComponent);
    return AccountContainerComponent;
}());
exports.AccountContainerComponent = AccountContainerComponent;


/***/ }),

/***/ "./src/app/account/filters/filters-front.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"container\">\r\n    <div class=\"box_shadow\" style=\"border:3px solid #7f7f7f; width:100%; float:left;\">\r\n      <div class='col-sm-2'>\r\n        <div class=\"text-center\">\r\n          <img class=\"img-responsive\" src=\"/assets/images/codico_logo.png\" class=\"codico-logo\">\r\n        </div>\r\n        <img src=\"/assets/images/ipek_logo.png\" class=\"ipek-logo img-responsive\">\r\n        <br/>\r\n        <div style='background-color: orange;padding: 20px;border: 2px solid darkgray;margin-top: 50px;'>\r\n          <img src=\"/assets/images/sign-info.png\" height='32' width=\"32\">\r\n          <span class=\"text-white\">Select a topic/topics you would like to find out more about.</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-10 right-box filterStyle\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <wizard [selectedStep]=\"'targets'\"></wizard>\r\n          </div>\r\n\r\n          <div class=\"col-sm-10 col-sm-offset-1 filter-groups\">\r\n            <div *ngFor=\"let group of data\" class=\"col-sm-5 filter-group\">\r\n              <div class=\"col-sm-12 filters-list\">\r\n                <div *ngIf=\"group.MaxAllowedOptions\" class=\"filter-header-metadata\">\r\n                  Max Allowed Options: {{ group.MaxAllowedOptions }}\r\n                </div>\r\n                <div class=\"filter-header\">\r\n                  {{ group.Title }}\r\n                </div>\r\n                <div (click)=\"filterToggle(filter)\" class=\"filter-container\" *ngFor=\"let filter of group.Filters\" [class.area-disabled]=\"filter.disabled\">\r\n                  <label for=\"{{filter.TargetFilterId}}\">{{ filter.FilterText }}</label>\r\n                  <i class=\"fiber-check-box pull-right\" [class.fbox-selected]=\"filter.Selected\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <button (click)=\"next()\" class=\"btn btn-success pull-right\">Next</button>\r\n      </div>\r\n\r\n      <!-- <div class=\"col-sm-12\" style=\"margin-bottom:20px;\">\r\n        <button (click)=\"next()\" class=\"btn btn-success pull-right\">Next</button>\r\n      </div> -->\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/filters/filters-front.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var filters_front_service_1 = __webpack_require__("./src/app/account/filters/filters-front.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var shared_data_1 = __webpack_require__("./src/app/services/shared-data.ts");
var FiltersFrontComponent = /** @class */ (function () {
    function FiltersFrontComponent(dataService, sharedData, route, router) {
        this.dataService = dataService;
        this.sharedData = sharedData;
        this.route = route;
        this.router = router;
    }
    FiltersFrontComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.topicId = +params['id'];
            _this.getData(_this.topicId);
        });
    };
    FiltersFrontComponent.prototype.filterToggle = function (filter) {
        filter.Selected = !filter.Selected;
        var filterGroup = this.data.find(function (d) { return d.TargetFilterGroupId === filter.TargetFilterGroupId; });
        var selectedFilters = filterGroup.Filters.filter(function (s) { return s.Selected === true; });
        if (selectedFilters.length == filterGroup.MaxAllowedOptions) {
            var unChecked = filterGroup.Filters.filter(function (x) { return !x.Selected; });
            if (unChecked && unChecked.length > 0) {
                unChecked.forEach(function (element) {
                    element.disabled = true;
                });
            }
        }
        else {
            filterGroup.Filters.forEach(function (element) {
                element.disabled = false;
            });
        }
    };
    FiltersFrontComponent.prototype.next = function () {
        console.log(this.data);
        this.setSharedData(this.data);
        if (this.sharedData.data.hasBoundaries()) {
            this.router.navigate(['/account/boundaries', this.topicId]);
        }
        else {
            this.router.navigate(['/account/result']);
        }
    };
    FiltersFrontComponent.prototype.getData = function (topicId) {
        var _this = this;
        this.dataService.getFilters(topicId)
            .subscribe(function (data) {
            if (data && data.Filters && data.Filters.TargetFilterGroup) {
                _this.data = _this.convert(data.Filters.TargetFilterGroup);
            }
            console.log(_this.data);
        });
    };
    FiltersFrontComponent.prototype.convert = function (data) {
        var retValue = data.map(function (d) {
            var group = d.$;
            group.Filters = d.TargetFilter.map(function (f) {
                var item = f.$;
                item.Selected = false;
                return item;
            });
            return group;
        });
        return retValue;
    };
    FiltersFrontComponent.prototype.setSharedData = function (filters) {
        this.sharedData.data.filters = filters;
        this.sharedData.data.boundaries = null;
    };
    FiltersFrontComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'filters',
            template: __webpack_require__("./src/app/account/filters/filters-front.component.html"),
            providers: [filters_front_service_1.FilterFrontService]
        }),
        __metadata("design:paramtypes", [filters_front_service_1.FilterFrontService,
            shared_data_1.SharedDataService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], FiltersFrontComponent);
    return FiltersFrontComponent;
}());
exports.FiltersFrontComponent = FiltersFrontComponent;


/***/ }),

/***/ "./src/app/account/filters/filters-front.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var FilterFrontService = /** @class */ (function (_super) {
    __extends(FilterFrontService, _super);
    function FilterFrontService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    FilterFrontService.prototype.getFilters = function (topicId) {
        return this.get(this.hostAPI + "/front/filters/" + topicId, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    FilterFrontService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FilterFrontService);
    return FilterFrontService;
}(base_http_service_1.BaseService));
exports.FilterFrontService = FilterFrontService;


/***/ }),

/***/ "./src/app/account/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"container\">\r\n    <div class=\"box_shadow\" style=\"border:3px solid #7f7f7f; width:100%; float:left;\">\r\n      <div class='col-sm-2'>\r\n        <div class=\"text-center\">\r\n          <img class=\"img-responsive\" src=\"/assets/images/codico_logo.png\" class=\"codico-logo\">\r\n        </div>\r\n        <img src=\"/assets/images/ipek_logo.png\" class=\"ipek-logo img-responsive\">\r\n        <br/>\r\n        <div style='background-color: orange;padding: 20px;border: 2px solid darkgray;margin-top: 50px;'>\r\n          <img src=\"/assets/images/sign-info.png\" height='32' width=\"32\">\r\n          <span class=\"text-white\">Select a category to which you would like to receive information and design guidelines.</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-10 right-box\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <wizard [selectedStep]=\"'phases'\"></wizard>\r\n          </div>\r\n          <div class=\"col-sm-12 categories-container\">\r\n            <table class=\"table\" *ngIf=\"data\">\r\n              <tr>\r\n                <td class=\"fiber-fixed-width\">\r\n                  <span class=\"fiber-box-header fiber-box bold\">Activities of product engineering</span>\r\n                </td>\r\n                <td *ngFor=\"let activity of data.phases; let i=index\" class=\"phaseNameStyle\">\r\n                  \r\n                  <span class=\"box-heading bold\" [title]=\"activity.phaseDescription\" *ngIf=\"i != 2\">{{ activity.phaseName }}</span>\r\n                  <span class=\"box-heading bold\" *ngIf=\"i == 2\">{{ activity.phaseName }}</span>\r\n                </td>\r\n              </tr>\r\n              <tr class=\"margined-border\" *ngFor=\"let row of data.topicGroups; let i=index\">\r\n                <td class=\"fiber-fixed-width\">\r\n                  <span class=\"fiber-box bold\" [class.active]=\"row.topics[0].topicsCount > 0 || row.topics[1].topicsCount > 0 || row.topics[2].topicsCount > 0\" *ngIf=\"i == 5\" title=\"This activity supports innovative, all-embracing search for possible solutions.  Various solution alternatives will be evaluated with regard to their suitability for fulfilling your objectives and boundary conditions. In this activity, however, no concrete design guidelines are provided.\">{{ row.activityName }}</span>\r\n\r\n                  <span class=\"fiber-box bold\" [class.active]=\"row.topics[0].topicsCount > 0 || row.topics[1].topicsCount > 0 || row.topics[2].topicsCount > 0\" *ngIf=\"i == 6\" title=\"This activity will provide concrete design advice, examples of good and bad design solutions, manufacturing restrictions with regard to different materials, geometry and manufacturing processes.\">{{ row.activityName }}</span>\r\n\r\n                  <span class=\"fiber-box bold\" [class.active]=\"row.topics[0].topicsCount > 0 || row.topics[1].topicsCount > 0 || row.topics[2].topicsCount > 0\" *ngIf=\"i < 5 || i > 7\">{{ row.activityName }}</span>\r\n                </td>\r\n                <td *ngFor=\"let col of row.topics\" class=\"topicsNum\">\r\n                  <a class=\"value-wrapper\" *ngIf=\"col && col.topicsCount > 0\" (click)=\"redirectToTopics(col.phaseId, row.activityId)\">\r\n                    {{ col.topicsCount }} Topics\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n            <div class=\"col-sm-8 col-md-offset-4\">\r\n              <h4 class=\"text-right\">\r\n                <strong>Time</strong>\r\n              </h4>\r\n              <div class=\"arrow\">\r\n                <div class=\"line\"></div>\r\n                <div class=\"point\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/grid/grid.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var grid_service_1 = __webpack_require__("./src/app/account/grid/grid.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var shared_data_1 = __webpack_require__("./src/app/services/shared-data.ts");
var GridComponent = /** @class */ (function () {
    function GridComponent(dataService, sharedData, route, router) {
        this.dataService = dataService;
        this.sharedData = sharedData;
        this.route = route;
        this.router = router;
    }
    GridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.subCategoryId = +params['id'];
            if (_this.subCategoryId) {
                _this.setSharedData(_this.subCategoryId);
                _this.getData(_this.subCategoryId);
            }
        });
    };
    GridComponent.prototype.redirectToTopics = function (phaseId, activityId) {
        this.router.navigate(["/account/topics/" + phaseId + "/" + this.subCategoryId + "/" + activityId]);
    };
    GridComponent.prototype.getData = function (id) {
        var _this = this;
        this.dataService.getTopicsGroups(id)
            .subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        });
    };
    GridComponent.prototype.setSharedData = function (subCategoryId) {
        this.sharedData.data.subCategory = subCategoryId;
        this.sharedData.data.topic = null;
        this.sharedData.data.answer = null;
        this.sharedData.data.filters = null;
        this.sharedData.data.boundaries = null;
    };
    GridComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'grid',
            template: __webpack_require__("./src/app/account/grid/grid.component.html"),
            providers: [grid_service_1.GridFrontService]
        }),
        __metadata("design:paramtypes", [grid_service_1.GridFrontService,
            shared_data_1.SharedDataService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;


/***/ }),

/***/ "./src/app/account/grid/grid.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var GridFrontService = /** @class */ (function (_super) {
    __extends(GridFrontService, _super);
    function GridFrontService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    GridFrontService.prototype.getTopicsGroups = function (id) {
        return this.get(this.hostAPI + "/front/topicgroups/" + id, this.authorisedOptions())
            .map(this.convertData);
    };
    GridFrontService.prototype.convertData = function (res) {
        var response = res.json();
        var grouppedByActivity = response.map(function (q) { return q.ActivityId; });
        grouppedByActivity = grouppedByActivity.filter(function (item, pos) {
            return grouppedByActivity.indexOf(item) == pos;
        });
        var retValue = {
            phases: response.filter(function (r) { return r.ActivityId == response[0].ActivityId; })
                .map(function (r) {
                return {
                    phaseName: r.PhaseName,
                    phaseId: r.PhaseId,
                    phaseDescription: r.PhaseDescription
                };
            }),
            topicGroups: grouppedByActivity
                .map(function (r) {
                var topic = response.filter(function (w) { return w.ActivityId == r; });
                return {
                    activityName: topic[0].ActivityName,
                    activityId: topic[0].ActivityId,
                    phaseId: topic[0].PhaseId,
                    topics: topic.map(function (x) {
                        return {
                            topicsCount: x.Topics,
                            phaseId: x.PhaseId,
                            phaseName: x.PhaseName
                        };
                    })
                };
            })
        };
        return retValue;
    };
    GridFrontService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], GridFrontService);
    return GridFrontService;
}(base_http_service_1.BaseService));
exports.GridFrontService = GridFrontService;


/***/ }),

/***/ "./src/app/account/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 bigcrow\">\r\n    <div class=\"row m-t-35\">\r\n      <div class=\"col-md-10 col-md-offset-1\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'home',
            template: __webpack_require__("./src/app/account/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/account/questions/questions-front.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var QuestionsFrontService = /** @class */ (function (_super) {
    __extends(QuestionsFrontService, _super);
    function QuestionsFrontService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    QuestionsFrontService.prototype.getQuestions = function (topicId) {
        return this.get(this.hostAPI + "/front/questions/" + topicId, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    QuestionsFrontService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], QuestionsFrontService);
    return QuestionsFrontService;
}(base_http_service_1.BaseService));
exports.QuestionsFrontService = QuestionsFrontService;


/***/ }),

/***/ "./src/app/account/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"container\">\r\n    <div class=\"box_shadow\" style=\"border:3px solid #7f7f7f; width:100%; float:left;\">\r\n      <div class='col-sm-2 leftBoxStyle'>\r\n        <div class=\"text-center\">\r\n          <img class=\"img-responsive\" src=\"/assets/images/codico_logo.png\" class=\"codico-logo\">\r\n        </div>\r\n        <img src=\"/assets/images/ipek_logo.png\" class=\"ipek-logo img-responsive\">\r\n        <br/>\r\n        <div style='background-color: orange;padding: 20px;border: 2px solid darkgray;margin-top: 50px;'>\r\n          <img src=\"/assets/images/sign-info.png\" height='32' width=\"32\">\r\n          <span class=\"text-white\">Select a category to which you would like to receive information and design guidelines.</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-10 right-box-style\" style=\"padding:15px 0\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <wizard [selectedStep]=\"'topics'\"></wizard>\r\n          </div>\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"col-sm-10 col-sm-offset-1 m-t-20 categories-container\">\r\n              <ul *ngIf=\"data\" class=\"cat-sub-items-container questions-ul\">\r\n                <li class=\"cat-header bold cat-header-custom\">\r\n                  {{data[0].TopicName}}\r\n                </li>\r\n                <li class=\"cat-sub-item questions-li\" *ngFor=\"let question of data\">\r\n                  <a class=\"cat-sub-item-anchor\" style=\"cursor:pointer;\" (click)=\"selectAnswer(question)\">{{ question.QuestionText }}</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/questions/questions.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var questions_front_service_1 = __webpack_require__("./src/app/account/questions/questions-front.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var shared_data_1 = __webpack_require__("./src/app/services/shared-data.ts");
var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(dataService, sharedData, route, router) {
        this.dataService = dataService;
        this.sharedData = sharedData;
        this.route = route;
        this.router = router;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.topicId = +params['id'];
            _this.getData(_this.topicId);
        });
    };
    QuestionsComponent.prototype.selectAnswer = function (answer) {
        this.setSharedData(answer);
        console.log(answer);
        if (answer.HasTargetFiltering) {
            this.router.navigate(['/account/filters', answer.TopicId]);
        }
        else if (answer.HasBoundaryOptions) {
            this.router.navigate(['/account/boundaries', answer.TopicId]);
        }
        else {
            this.router.navigate(['/account/result']);
        }
    };
    QuestionsComponent.prototype.getData = function (topicId) {
        var _this = this;
        this.dataService.getQuestions(topicId)
            .subscribe(function (data) { _this.data = data; console.log(_this.data); });
    };
    QuestionsComponent.prototype.setSharedData = function (answer) {
        this.sharedData.data.answer = answer;
        this.sharedData.data.filters = null;
        this.sharedData.data.boundaries = null;
    };
    QuestionsComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'questions',
            template: __webpack_require__("./src/app/account/questions/questions.component.html"),
            providers: [questions_front_service_1.QuestionsFrontService]
        }),
        __metadata("design:paramtypes", [questions_front_service_1.QuestionsFrontService,
            shared_data_1.SharedDataService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], QuestionsComponent);
    return QuestionsComponent;
}());
exports.QuestionsComponent = QuestionsComponent;


/***/ }),

/***/ "./src/app/account/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"container\">\r\n    <div class=\"box_shadow\" style=\"border:3px solid #7f7f7f; width:100%; float:left;\">\r\n        <div class=\"col-sm-2\" #leftBar>\r\n            <div class=\"res-menu relevant\">\r\n                <div class=\"container-el\">\r\n                  <span>Relevant Information</span>\r\n                  <span *ngIf=\"!relevantMenu || relevantMenu.length === 0\">No items</span>\r\n                </div>\r\n                <ul class=\"relevantMenu-ul\" *ngIf=\"relevantMenu && relevantMenu.length > 0\">\r\n                  <li class=\"item relevantMenu-li\" *ngFor=\"let menu of relevantMenu\">\r\n                    <a class=\"menu-item\" (click)=\"showArticle(menu.ResultMenuId)\">{{ menu.Name }}</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div *ngIf=\"!isQuestion\" class=\"res-menu others\">\r\n                <div class=\"container-el\">\r\n                  <span>Other Information</span>\r\n                  <span *ngIf=\"!othersMenu || othersMenu.length === 0\">No items</span>\r\n                </div>\r\n                <ul *ngIf=\"othersMenu && othersMenu.length > 0\">\r\n                  <li class=\"item\" *ngFor=\"let menu of othersMenu\">\r\n                    <a class=\"menu-item\" (click)=\"showArticle(menu.ResultMenuId)\">{{ menu.Name }}</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n        </div>\r\n      <div class=\"col-sm-10\" #rightBar>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <wizard [selectedStep]=\"'result'\"></wizard>\r\n          </div>\r\n        </div>\r\n        <div class=\"row descriptionRowStyle\">\r\n          <div *ngIf=\"article\" class=\"col-sm-12 descriptionStyle\">\r\n              <div class=\"descriptionOuterStyle\">\r\n                <div [innerHtml]=\"article.Description\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row finishStyle\">\r\n          <div class=\"col-sm-12\">\r\n            <a [routerLink]=\"['/account/thankyou']\" class=\"btn btn-primary pull-right\">Finish</a>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/result/result.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var result_service_1 = __webpack_require__("./src/app/account/result/result.service.ts");
var shared_data_1 = __webpack_require__("./src/app/services/shared-data.ts");
var auth_service_1 = __webpack_require__("./src/app/security/auth.service.ts");
var ResultComponent = /** @class */ (function () {
    function ResultComponent(dataService, sharedDataService, authService, el, renderer) {
        this.dataService = dataService;
        this.sharedDataService = sharedDataService;
        this.authService = authService;
        this.el = el;
        this.renderer = renderer;
        this.isQuestion = false;
        this.containerHeight = null;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.getData();
        this.saveOperationLog();
        //console.log('--- Result ranking ---', this.sharedDataService.data); // TODO maybe save here for tracking purposes
    };
    ResultComponent.prototype.showArticle = function (resultMenuId) {
        var _this = this;
        this.dataService.getArticles(resultMenuId)
            .subscribe(function (article) {
            _this.article = article[0];
        });
    };
    ResultComponent.prototype.getData = function () {
        var _this = this;
        // decides if its result menu from filters or from questions
        // if filters then retrieves necessary data from sharedData to send to the server
        // else gets result menu based on selected question
        if (this.sharedDataService.data.filters || this.sharedDataService.data.boundaries) {
            this.isQuestion = false;
            var selectedFilters = null;
            if (this.sharedDataService.data.filters)
                selectedFilters = ([].concat.apply([], this.sharedDataService.data.filters.map(function (f) { return f.Filters; })))
                    .filter(function (r) { return r.Selected === true; })
                    .map(function (t) { return t.TargetFilterId; })
                    .toString();
            var selectedBoundaries = null;
            if (this.sharedDataService.data.boundaries)
                selectedBoundaries = ([].concat.apply([], this.sharedDataService.data.boundaries.map(function (f) { return f.Filters; })))
                    .filter(function (r) { return r.Selected === true; })
                    .map(function (t) { return t.BoundaryOptionId; })
                    .toString();
            this.dataService.getResultMenu(selectedFilters, selectedBoundaries)
                .subscribe(function (data) {
                console.log('--- Result ranking ---', data);
                _this.relevantMenu = data.filter(function (d) { return d.Ranking > 0; });
                if (_this.relevantMenu && _this.relevantMenu.length > 0) {
                    _this.showArticle(_this.relevantMenu[0].ResultMenuId);
                }
                _this.othersMenu = data.filter(function (d) { return d.Ranking <= 0; });
            });
        }
        else {
            if (this.sharedDataService.data.answer) {
                this.dataService.getResultMenuByQuestionId(this.sharedDataService.data.answer.QuestionId)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.relevantMenu = data;
                    if (_this.relevantMenu && _this.relevantMenu.length > 0) {
                        _this.showArticle(_this.relevantMenu[0].ResultMenuId);
                    }
                });
                this.isQuestion = true;
            }
        }
    };
    ResultComponent.prototype.saveOperationLog = function () {
        var _this = this;
        try {
            if (!this.sharedDataService.data) {
                return;
            }
            var log = this.sharedDataService.data;
            this.dataService.saveOperationLog({
                UserId: this.authService.getLoggedInUser().user.UserId,
                SubCategoryId: log.subCategory ? log.subCategory : null,
                ActivityId: log.topic && log.topic.ActivityId ? log.topic.ActivityId : null,
                PhaseId: log.topic && log.topic.PhaseId ? log.topic.PhaseId : null,
                TopicId: log.topic && log.topic.TopicId ? log.topic.TopicId : null,
                QuestionId: log.answer && log.answer.QuestionId ? log.answer.QuestionId : null,
            })
                .subscribe(function (result) {
                console.log('height');
                setTimeout(function () {
                    console.log(_this.leftBarElement.nativeElement.offsetHeight);
                    console.log(_this.rightBarElement.nativeElement.offsetHeight);
                    if (_this.leftBarElement.nativeElement.offsetHeight >= _this.rightBarElement.nativeElement.offsetHeight) {
                        _this.renderer.addClass(_this.leftBarElement.nativeElement, 'leftBoxStyle');
                    }
                    else {
                        _this.renderer.addClass(_this.rightBarElement.nativeElement, 'right-box-result-style');
                    }
                }, 5000);
                console.log("Log saved");
            });
        }
        catch (error) {
            console.log("Log error. Nevermind the dog", error);
        }
    };
    __decorate([
        core_1.ViewChild('leftBar'),
        __metadata("design:type", core_1.ElementRef)
    ], ResultComponent.prototype, "leftBarElement", void 0);
    __decorate([
        core_1.ViewChild('rightBar'),
        __metadata("design:type", core_1.ElementRef)
    ], ResultComponent.prototype, "rightBarElement", void 0);
    ResultComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'result',
            template: __webpack_require__("./src/app/account/result/result.component.html"),
            providers: [result_service_1.ResultService, auth_service_1.AuthService]
        }),
        __metadata("design:paramtypes", [result_service_1.ResultService,
            shared_data_1.SharedDataService,
            auth_service_1.AuthService,
            core_1.ElementRef,
            core_1.Renderer2])
    ], ResultComponent);
    return ResultComponent;
}());
exports.ResultComponent = ResultComponent;


/***/ }),

/***/ "./src/app/account/result/result.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var ResultService = /** @class */ (function (_super) {
    __extends(ResultService, _super);
    function ResultService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ResultService.prototype.getResultMenu = function (filters, boundaries) {
        return this.post(this.hostAPI + "/front/resultmenu", { filtersList: filters, boundariesList: boundaries }, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    ResultService.prototype.getResultMenuByQuestionId = function (questionId) {
        return this.get(this.hostAPI + "/front/resultmenubyq/" + questionId, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    ResultService.prototype.getArticles = function (resultMenuId) {
        return this.get(this.hostAPI + "/front/resultmenu/" + resultMenuId, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    ResultService.prototype.saveOperationLog = function (logData) {
        return this.post(this.hostAPI + "/log", logData, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    ResultService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ResultService);
    return ResultService;
}(base_http_service_1.BaseService));
exports.ResultService = ResultService;


/***/ }),

/***/ "./src/app/account/start/categories-front.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var CategoriesFrontService = /** @class */ (function (_super) {
    __extends(CategoriesFrontService, _super);
    function CategoriesFrontService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    CategoriesFrontService.prototype.getCategories = function () {
        return this.get(this.hostAPI + "/front/categories", this.authorisedOptions())
            .map(this.convertData);
    };
    CategoriesFrontService.prototype.convertData = function (res) {
        var response = res.json();
        var retValue = [];
        var categoryId = -1;
        var el = {
            categoryId: -1,
            categoryName: "",
            subCategories: []
        };
        response.forEach(function (element, i) {
            if (categoryId != element.CategoryId) {
                el = {
                    categoryId: element.CategoryId,
                    categoryName: element.Name,
                    subCategories: []
                };
                retValue.push(el);
            }
            el.subCategories.push({
                subCategoryId: element.SubCategoryId,
                subCategoryName: element.SubCategoryName,
                isActive: element.IsActive
            });
            categoryId = element.CategoryId;
        });
        return retValue;
    };
    CategoriesFrontService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CategoriesFrontService);
    return CategoriesFrontService;
}(base_http_service_1.BaseService));
exports.CategoriesFrontService = CategoriesFrontService;


/***/ }),

/***/ "./src/app/account/start/start.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"container\">\r\n    <div class=\"box_shadow\" style=\"border:3px solid #7f7f7f; width:100%; float:left;\">\r\n      <div class='col-sm-2'>\r\n        <div class=\"text-center\">\r\n          <img class=\"img-responsive\" src=\"/assets/images/codico_logo.png\" class=\"codico-logo\">\r\n        </div>\r\n        <img src=\"/assets/images/ipek_logo.png\" class=\"ipek-logo img-responsive\">\r\n        <br/>\r\n        <div style='background-color: orange;padding: 20px;border: 2px solid darkgray;margin-top: 50px;'>\r\n          <img src=\"/assets/images/sign-info.png\" height='32' width=\"32\">\r\n          <span class=\"text-white\">Select a category to which you would like to receive information and design guidelines.</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-10 right-box\" style=\"padding:15px 0\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <wizard [selectedStep]=\"'category'\"></wizard>\r\n          </div>\r\n          \r\n          <div class=\"col-sm-12 categories-container\">\r\n            <div *ngFor=\"let category of data\" class=\"col-md-6\">\r\n              <h3 *ngIf=\"categoryId == 1\" class=\"text-info cat-head\">{{category.categoryName}}</h3>\r\n              <h3 *ngIf=\"categoryId != 1\" class=\"text-info-right cat-head\">{{category.categoryName}}</h3>\r\n              <ul class=\"cat-sub-items-container\">\r\n                <li class=\"cat-sub-item bold\" [class.item-disabled]=\"!sub.isActive\" *ngFor=\"let sub of category.subCategories\">\r\n                  <a [routerLink]=\"['/account/grid', sub.subCategoryId]\">{{ sub.subCategoryName }}</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/start/start.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var categories_front_service_1 = __webpack_require__("./src/app/account/start/categories-front.service.ts");
var StartComponent = /** @class */ (function () {
    function StartComponent(dataService) {
        this.dataService = dataService;
    }
    StartComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    StartComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.getCategories()
            .subscribe(function (data) { _this.data = data; console.log(_this.data); });
    };
    StartComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'start',
            template: __webpack_require__("./src/app/account/start/start.component.html"),
            providers: [categories_front_service_1.CategoriesFrontService]
        }),
        __metadata("design:paramtypes", [categories_front_service_1.CategoriesFrontService])
    ], StartComponent);
    return StartComponent;
}());
exports.StartComponent = StartComponent;


/***/ }),

/***/ "./src/app/account/thankyou/thankyou.component.css":
/***/ (function(module, exports) {

module.exports = ".box{\r\n    background-color: orange;\r\n    padding: 10px;\r\n    border: 2px solid #000;\r\n    color: #000;\r\n    margin: 10px auto;\r\n    font-size: 15px;\r\n}\r\nul.rating-list {\r\n    list-style: none;\r\n    margin: 30px auto;\r\n}\r\nul.rating-list li {\r\n    margin-top: 30px;\r\n    font-size: 16px;\r\n    font-style: italic;\r\n}\r\nul.rating-list i.fa-star-o:hover {\r\n    color: orange;\r\n}\r\n.box-gray {\r\n    background-color: darkgray;\r\n    padding: 10px;\r\n    border: 2px solid #000;\r\n    color: #FFF;\r\n    font-size: 15px;\r\n    margin: 10px auto;\r\n}"

/***/ }),

/***/ "./src/app/account/thankyou/thankyou.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"box_shadow\" style=\"border:3px solid #7f7f7f; width:100%; float:left;\">\r\n      <div class=\"col-sm-12\">\r\n        <h4 class=\"text-center\">\r\n          Thank you for using CoDiCo-FiberFox!\r\n          <br> We hope that the search results provided, were helpful for you.\r\n        </h4>\r\n\r\n        <div class=\"box\">\r\n          Our CoDiCo-FibreFox uses deep-learning algorithms and can learn from your feedback and optimize search results. Please evaluate\r\n          the content provided to you.\r\n\r\n        </div>\r\n\r\n\r\n        <ul class=\"rating-list\">\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            Provided information was applicable to my situation\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            Provided information was technical correct\r\n\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            Level of detail was good for understanding\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-star-o\"></i>\r\n            </a>\r\n            Information was up-to-date\r\n\r\n          </li>\r\n        </ul>\r\n        <div class=\"box\">\r\n          Other feedback / extension requests for developers –\r\n          <a class=\"text-info\" href=\"mailto:amrahman30@gmail.com\" target=\"_blank\">Click here</a>\r\n\r\n        </div>\r\n\r\n        <div class=\"box-gray\">\r\n          Skip the evaluation and go to the main menu –\r\n          <a class=\"text-warning\" [routerLink]=\"['/account/start']\">Click here</a>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/thankyou/thankyou.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ThankYouComponent = /** @class */ (function () {
    function ThankYouComponent() {
    }
    ThankYouComponent.prototype.ngOnInit = function () {
    };
    ThankYouComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'thankyou',
            template: __webpack_require__("./src/app/account/thankyou/thankyou.component.html"),
            styles: [__webpack_require__("./src/app/account/thankyou/thankyou.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThankYouComponent);
    return ThankYouComponent;
}());
exports.ThankYouComponent = ThankYouComponent;


/***/ }),

/***/ "./src/app/account/topics/topics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"container\">\r\n    <div class=\"box_shadow\" style=\"border:3px solid #7f7f7f; width:100%; float:left;\">\r\n      <div class='col-sm-2'>\r\n        <div class=\"text-center\">\r\n          <img class=\"img-responsive\" src=\"/assets/images/codico_logo.png\" class=\"codico-logo\">\r\n        </div>\r\n        <img src=\"/assets/images/ipek_logo.png\" class=\"ipek-logo img-responsive\">\r\n        <br/>\r\n        <div style='background-color: orange;padding: 20px;border: 2px solid darkgray;margin-top: 50px;'>\r\n          <img src=\"/assets/images/sign-info.png\" height='32' width=\"32\">\r\n          <span class=\"text-white\">Select a category to which you would like to receive information and design guidelines.</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-10 right-box\" style=\"padding:15px 0\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <wizard [selectedStep]=\"'topics'\"></wizard>\r\n          </div>\r\n\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"dashed-border\">\r\n                <ul *ngIf=\"activities\" class=\"cat-sub-items-container\">\r\n                  <li class=\"cat-sub-item bold\" style=\"background: #27458b; text-align:center; color:white;\">\r\n                    Activities of product engineering\r\n                  </li>\r\n                  <li class=\"cat-sub-item fiber-box bold activities-li\" [class.active]=\"activity.ActivityId == activityId\" *ngFor=\"let activity of activities\">\r\n                    <a href=\"javascript:void(0)\"> {{ activity.Name }}</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <ul *ngIf=\"data && data.length > 0\" class=\"cat-sub-items-container\">\r\n                <li class=\"cat-item-header\">\r\n                  {{data[0].PhaseName}}\r\n                </li>\r\n                <li class=\"cat-sub-item\" [class.item-disabled]=\"!topic.IsActive\"  *ngFor=\"let topic of data\">\r\n                  <a (click)=\"selectTopic(topic)\">{{ topic.Name }}</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/topics/topics.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var topics_service_1 = __webpack_require__("./src/app/account/topics/topics.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var activity_service_1 = __webpack_require__("./src/app/services/activity.service.ts");
var shared_data_1 = __webpack_require__("./src/app/services/shared-data.ts");
var TopicsComponent = /** @class */ (function () {
    function TopicsComponent(dataService, activityService, sharedData, route, router) {
        this.dataService = dataService;
        this.activityService = activityService;
        this.sharedData = sharedData;
        this.route = route;
        this.router = router;
    }
    TopicsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.phaseId = +params['pid'];
            _this.subCategoryId = +params['scid'];
            _this.activityId = +params['actid'];
            _this.getData(_this.phaseId, _this.subCategoryId, _this.activityId);
            _this.getActivities();
        });
    };
    TopicsComponent.prototype.selectTopic = function (topic) {
        this.setSharedData(topic);
        console.log(this.sharedData.data);
        if (topic.HasQuestions) {
            this.router.navigate(['/account/questions', topic.TopicId]);
        }
        else if (topic.HasTargetFiltering) {
            this.router.navigate(['/account/filters', topic.TopicId]);
        }
        else if (topic.HasBoundaryOptions) {
            this.router.navigate(['/account/boundaries', topic.TopicId]);
        }
    };
    TopicsComponent.prototype.getData = function (phaseId, subCategoryId, activityId) {
        var _this = this;
        this.dataService.getTopics(phaseId, subCategoryId, activityId)
            .subscribe(function (data) { _this.data = data; console.log(_this.data); });
    };
    TopicsComponent.prototype.getActivities = function () {
        var _this = this;
        this.activityService.getList()
            .subscribe(function (activities) { _this.activities = activities; console.log(_this.activities); });
    };
    TopicsComponent.prototype.setSharedData = function (topic) {
        this.sharedData.data.topic = topic;
        this.sharedData.data.answer = null;
        this.sharedData.data.filters = null;
        this.sharedData.data.boundaries = null;
    };
    TopicsComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'topics',
            template: __webpack_require__("./src/app/account/topics/topics.component.html"),
            providers: [topics_service_1.TopicsService, activity_service_1.ActivityService]
        }),
        __metadata("design:paramtypes", [topics_service_1.TopicsService,
            activity_service_1.ActivityService,
            shared_data_1.SharedDataService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], TopicsComponent);
    return TopicsComponent;
}());
exports.TopicsComponent = TopicsComponent;


/***/ }),

/***/ "./src/app/account/topics/topics.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var TopicsService = /** @class */ (function (_super) {
    __extends(TopicsService, _super);
    function TopicsService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    TopicsService.prototype.getTopics = function (phaseId, subCategoryId, activityId) {
        return this.get(this.hostAPI + "/front/topics/" + phaseId + "/" + subCategoryId + "/" + activityId, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    TopicsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TopicsService);
    return TopicsService;
}(base_http_service_1.BaseService));
exports.TopicsService = TopicsService;


/***/ }),

/***/ "./src/app/account/wizard/wizard.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"wizard\" style=\"padding:15px\">\r\n  <li *ngFor=\"let item of items\" [class.selected]=\"item.selected\">\r\n    <a (click)=\"goToStep(item)\" href=\"javascript:void(0);\">{{ item.name }}</a>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/account/wizard/wizard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var shared_data_1 = __webpack_require__("./src/app/services/shared-data.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var WizardComponent = /** @class */ (function () {
    function WizardComponent(sharedDataService, router) {
        this.sharedDataService = sharedDataService;
        this.router = router;
        this.items = [
            { id: "category", name: "Category", selected: false, disabled: true },
            { id: "phases", name: "Phases", selected: false, disabled: true },
            { id: "topics", name: "Topics", selected: false, disabled: true },
            { id: "targets", name: "Targets", selected: false, disabled: true },
            { id: "boundary", name: "Boundary Conditions", selected: false, disabled: true },
            { id: "result", name: "Result", selected: false, disabled: true }
        ];
    }
    WizardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var selectedItem = this.items.find(function (x) { return x.id === _this.selectedStep; });
        var index = this.items.findIndex(function (x) { return x.id === _this.selectedStep; });
        for (var i = 0; i < index; i++) {
            this.items[i].disabled = false;
        }
        selectedItem.selected = true;
    };
    WizardComponent.prototype.goToStep = function (item) {
        if (!this.sharedDataService.data || item.disabled) {
            return;
        }
        switch (item.id) {
            case "category":
                this.router.navigate(['/account/start']);
                break;
            case "phases":
                if (this.sharedDataService.data.subCategory) {
                    this.router.navigate(['/account/grid', this.sharedDataService.data.subCategory]);
                }
                break;
            case "topics":
                if (this.sharedDataService.data.topic) {
                    this.router.navigate(['/account/topics',
                        this.sharedDataService.data.topic.PhaseId,
                        this.sharedDataService.data.subCategory,
                        this.sharedDataService.data.topic.ActivityId]);
                }
                break;
            case "targets":
                if (this.sharedDataService.data.topic) {
                    this.router.navigate(['/account/filters', this.sharedDataService.data.topic.TopicId]);
                }
                break;
            case "boundary":
                if (this.sharedDataService.data.topic) {
                    this.router.navigate(['/account/boundary', this.sharedDataService.data.topic.TopicId]);
                }
                break;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WizardComponent.prototype, "selectedStep", void 0);
    WizardComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'wizard',
            template: __webpack_require__("./src/app/account/wizard/wizard.component.html")
        }),
        __metadata("design:paramtypes", [shared_data_1.SharedDataService,
            router_1.Router])
    ], WizardComponent);
    return WizardComponent;
}());
exports.WizardComponent = WizardComponent;


/***/ }),

/***/ "./src/app/admin/activity/activity.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Activities\r\n        <small>CRUD</small>\r\n    </h1>\r\n</section>\r\n<section class=\"content container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <p-table [value]=\"activities\" selectionMode=\"single\" [(selection)]=\"selectedActivity\" (onRowSelect)=\"onRowSelect($event)\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Sort Order</th>\r\n                        <th>Remove</th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-activity>\r\n                    <tr [pSelectableRow]=\"activity\" title=\"Click on the row to edit\">\r\n                        <td>{{activity.Name}}</td>\r\n                        <td>{{activity.SortOrder}}</td>\r\n                        <td>\r\n                            <a class=\"btn-danger\" (click)=\"remove(activity.ActivityId)\">Remove</a>\r\n                        </td>\r\n                    </tr>\r\n                </ng-template>\r\n            </p-table>\r\n            <button (click)=\"addNew()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-plus\"></i>&nbsp; Add</button>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- edit modal -->\r\n<p-dialog header=\"Activity Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"500\">\r\n    <div class=\"ui-g ui-fluid\" *ngIf=\"activity\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"name\">Name</label>\r\n            </div>\r\n            <div class=\"ui-g-8 p-0\">\r\n                <input class=\"form-control\" pInputText id=\"name\" [(ngModel)]=\"activity.Name\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"sortorder\">SortOrder</label>\r\n            </div>\r\n            <div class=\"ui-g-8 p-0\">\r\n                <input class=\"form-control\" pInputText id=\"sortorder\" [(ngModel)]=\"activity.SortOrder\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <p-footer>\r\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n            <button (click)=\"close()\" class=\"m-t-20 btn btn-danger\">\r\n                <i class=\"fa fa-close\"></i>&nbsp; Cancel</button>\r\n            <button (click)=\"save()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-check\"></i>&nbsp; Save</button>\r\n        </div>\r\n    </p-footer>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/admin/activity/activity.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var activity_service_1 = __webpack_require__("./src/app/services/activity.service.ts");
var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(activityService) {
        var _this = this;
        this.activityService = activityService;
        this.displayDialog = false;
        this.saveCallback = function (result) {
            _this.getData();
        };
    }
    ActivityComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ActivityComponent.prototype.remove = function (activityId) {
        var _this = this;
        if (!confirm('Are you sure?')) {
            return;
        }
        this.activityService.remove(activityId)
            .subscribe(function (result) {
            console.log(result);
            _this.getData();
        });
    };
    ActivityComponent.prototype.save = function () {
        if (this.isNew) {
            this.activityService.save(this.activity)
                .subscribe(this.saveCallback);
        }
        else {
            this.activityService.update(this.activity.ActivityId, this.activity)
                .subscribe(this.saveCallback);
        }
        this.displayDialog = false;
    };
    ActivityComponent.prototype.addNew = function () {
        this.displayDialog = true;
        this.isNew = true;
        this.activity = {};
    };
    ActivityComponent.prototype.close = function () {
        this.displayDialog = false;
    };
    ActivityComponent.prototype.onRowSelect = function (event) {
        this.isNew = false;
        this.activity = this.cloneActivity(event.data);
        this.displayDialog = true;
    };
    ActivityComponent.prototype.cloneActivity = function (c) {
        var activity = {};
        for (var prop in c) {
            activity[prop] = c[prop];
        }
        return activity;
    };
    ActivityComponent.prototype.getData = function () {
        var _this = this;
        this.activityService.getList()
            .subscribe(function (activities) {
            _this.activities = activities;
        });
    };
    ActivityComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'activities',
            template: __webpack_require__("./src/app/admin/activity/activity.component.html"),
            providers: [activity_service_1.ActivityService]
        }),
        __metadata("design:paramtypes", [activity_service_1.ActivityService])
    ], ActivityComponent);
    return ActivityComponent;
}());
exports.ActivityComponent = ActivityComponent;


/***/ }),

/***/ "./src/app/admin/approval/approval.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Registrations\r\n        <small>User registration requests</small>\r\n    </h1>\r\n</section>\r\n<section class=\"content container-fluid\">\r\n    <p-table [value]=\"users\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Email</th>\r\n                <th>User name</th>\r\n                <th>Company name</th>\r\n                <th>ActivityField</th>\r\n                <th>Field</th>\r\n                <th>Activity</th>\r\n                <th>Experience Level</th>\r\n                <th>Create date</th>\r\n                <th>Approved</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-user>\r\n            <tr>\r\n                <td>{{user.Email}}</td>\r\n                <td>{{user.Username}}</td>\r\n                <td>{{user.CompanyName}}</td>\r\n                <td>{{user.ActivityField}}</td>\r\n                <td>{{user.FieldName}}</td>\r\n                <td>{{user.ActivityName}}</td>\r\n                <td>{{user.LevelName}}</td>\r\n                <td>{{user.Createdate}}</td>\r\n                <td>\r\n                    <button title=\"Toggle approval\" (click)=\"changeApproval(user.IsApproved, user.UserId)\" [ngClass]=\"user.IsApproved ? 'btn-success' : 'btn-danger'\" class=\"btn btn-success\">{{user.IsApproved ? \"Yes\" : \"No\"}}</button>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</section>"

/***/ }),

/***/ "./src/app/admin/approval/approval.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var ApprovalComponent = /** @class */ (function () {
    function ApprovalComponent(userService) {
        this.userService = userService;
    }
    ApprovalComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ApprovalComponent.prototype.changeApproval = function (isApproved, userId) {
        var _this = this;
        if (!confirm('Are you sure?')) {
            return;
        }
        this.userService.changeApproval(userId, (isApproved ? 0 : 1))
            .subscribe(function (result) {
            _this.getData();
        });
    };
    ApprovalComponent.prototype.getData = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    ApprovalComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'approval',
            template: __webpack_require__("./src/app/admin/approval/approval.component.html"),
            providers: [user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], ApprovalComponent);
    return ApprovalComponent;
}());
exports.ApprovalComponent = ApprovalComponent;


/***/ }),

/***/ "./src/app/admin/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Articles\r\n        <small>CRUD</small>\r\n    </h1>\r\n</section>\r\n<section class=\"content container-fluid\">\r\n    <p-table [value]=\"articles\" selectionMode=\"single\" [(selection)]=\"selectedArticle\" (onRowSelect)=\"onRowSelect($event)\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Title</th>\r\n                <th>Description</th>\r\n                <th>Result Menu</th>\r\n                <th>Remove</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData>\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td>{{rowData.Title}}</td>\r\n                <td>{{rowData.Description | slice:0:99}}</td>\r\n                <td>{{rowData.ResultMenuName}}</td>\r\n                <td>\r\n                    <a class=\"btn-danger\" (click)=\"remove(rowData.ArticleId)\">Remove</a>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n    <button (click)=\"addNew()\" class=\"m-t-20 btn btn-primary\">\r\n        <i class=\"fa fa-plus\"></i>&nbsp; Add</button>\r\n\r\n    <!-- edit modal -->\r\n    <p-dialog header=\"Article Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"800\">\r\n        <div class=\"ui-g ui-fluid\" *ngIf=\"article\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2\">\r\n                    <label for=\"title\">Title</label>\r\n                </div>\r\n                <div class=\"ui-g-10 p-0\">\r\n                    <input class=\"form-control\" required pInputText id=\"title\" [(ngModel)]=\"article.Title\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2\">\r\n                    <label for=\"description\">Description</label>\r\n                </div>\r\n                <div class=\"ui-g-10 p-0\">\r\n                    <!-- <p-editor [(ngModel)]=\"article.Description\" required pInputText id=\"description\" [style]=\"{'height':'200px'}\"></p-editor> -->\r\n                    <div [froalaEditor] [(ngModel)]=\"article.Description\" required pInputText id=\"description\" [style]=\"{'height':'200px'}\"></div>\r\n                    <!-- <app-ngx-editor [placeholder]=\"'Enter text here...'\" [spellcheck]=\"true\" [(ngModel)]=\"article.Description\" required pInputText id=\"description\" [style]=\"{'height':'200px'}\"></app-ngx-editor> -->\r\n                    <!-- <quill-editor [(ngModel)]=\"article.Description\" required pInputText id=\"description\" [style]=\"{'height':'200px'}\"></quill-editor> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2\">\r\n                    <label for=\"ResultMenuId\">Result Menu</label>\r\n                </div>\r\n                <div *ngIf='resultMenu && resultMenu.length > 0' class=\"form-group\" [ngClass]=\"{'has-error':ResultMenuId.invalid && ResultMenuId.touched}\"\r\n                    class=\"ui-g-10 p-0\">\r\n                    <select [(ngModel)]=\"article.ResultMenuId\" #ResultMenuId=\"ngModel\" required class=\"form-control\" name=\"ResultMenuId\">\r\n                        <option *ngFor=\"let menu of resultMenu\" [value]=\"menu.ResultMenuId\">{{menu.Name}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <p-footer>\r\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                <button (click)=\"close()\" class=\"m-t-20 btn btn-danger\">\r\n                    <i class=\"fa fa-close\"></i>&nbsp; Cancel</button>\r\n                <button (click)=\"save()\" class=\"m-t-20 btn btn-primary\">\r\n                    <i class=\"fa fa-check\"></i>&nbsp; Save</button>\r\n            </div>\r\n        </p-footer>\r\n    </p-dialog>\r\n</section>"

/***/ }),

/***/ "./src/app/admin/article/article.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var article_service_1 = __webpack_require__("./src/app/services/article.service.ts");
var result_menu_service_1 = __webpack_require__("./src/app/services/result-menu.service.ts");
var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(articleService, resultMenuService) {
        var _this = this;
        this.articleService = articleService;
        this.resultMenuService = resultMenuService;
        this.displayDialog = false;
        this.saveCallback = function (result) {
            _this.getData();
        };
    }
    ArticleComponent.prototype.ngOnInit = function () {
        this.getData();
        this.getResultMenu();
    };
    ArticleComponent.prototype.remove = function (articleId) {
        var _this = this;
        if (!confirm('Are you sure?')) {
            return;
        }
        this.articleService.remove(articleId)
            .subscribe(function (result) {
            _this.getData();
        });
    };
    ArticleComponent.prototype.save = function () {
        if (this.isNew) {
            this.articleService.save(this.article)
                .subscribe(this.saveCallback);
        }
        else {
            this.articleService.update(this.article.ArticleId, this.article)
                .subscribe(this.saveCallback);
        }
        this.displayDialog = false;
    };
    ArticleComponent.prototype.addNew = function () {
        this.displayDialog = true;
        this.isNew = true;
        this.article = {};
    };
    ArticleComponent.prototype.close = function () {
        this.displayDialog = false;
    };
    ArticleComponent.prototype.onRowSelect = function (event) {
        this.isNew = false;
        this.article = this.cloneArticle(event.data);
        this.displayDialog = true;
    };
    ArticleComponent.prototype.cloneArticle = function (c) {
        var article = {};
        for (var prop in c) {
            article[prop] = c[prop];
        }
        return article;
    };
    ArticleComponent.prototype.getData = function () {
        var _this = this;
        this.articleService.getList()
            .subscribe(function (articles) {
            _this.articles = articles;
        });
    };
    ArticleComponent.prototype.getResultMenu = function () {
        var _this = this;
        this.resultMenuService.getList()
            .subscribe(function (resultMenu) {
            _this.resultMenu = resultMenu;
        });
    };
    ArticleComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'articles',
            template: __webpack_require__("./src/app/admin/article/article.component.html"),
            providers: [article_service_1.ArticleService, result_menu_service_1.ResultMenuService]
        }),
        __metadata("design:paramtypes", [article_service_1.ArticleService,
            result_menu_service_1.ResultMenuService])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;


/***/ }),

/***/ "./src/app/admin/boundary-option-grid/boundary-option-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-hover\" *ngIf=\"data && data.boundaryOptionValues && data.boundaryOptionValues.length > 0\">\r\n  <tr>\r\n    <td style=\"font-weight:bold;\">Boundary Options / Result Menu</td>\r\n    <td *ngFor=\"let menu of data.resultMenu\">\r\n      {{ menu.ResultMenuName }}\r\n    </td>\r\n  </tr>\r\n  <tr *ngFor=\"let model of data.boundaryOptionValues\">\r\n    <td>\r\n      {{ model.boundaryText }}\r\n    </td>\r\n    <td *ngFor=\"let menu of model.resultMenu\">\r\n      <input type=\"number\" [(ngModel)]=\"menu.AlgorithmValue\" name=\"AlgorithmValue\">\r\n    </td>\r\n  </tr>\r\n</table>\r\n<button (click)=\"saveBoundaryOptionValues()\" class=\"btn btn-primary\" [disabled]='isSavingValues'>\r\n  <i class=\"fa fa-plus\"></i>&nbsp; Save</button>"

/***/ }),

/***/ "./src/app/admin/boundary-option-grid/boundary-option-grid.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var result_menu_service_1 = __webpack_require__("./src/app/services/result-menu.service.ts");
var boundary_option_value_service_1 = __webpack_require__("./src/app/services/boundary-option-value.service.ts");
var BoundaryOptionGridComponent = /** @class */ (function () {
    function BoundaryOptionGridComponent(resultMenuService, boundaryOptionValueService) {
        this.resultMenuService = resultMenuService;
        this.boundaryOptionValueService = boundaryOptionValueService;
        this.isSavingValues = false;
    }
    BoundaryOptionGridComponent.prototype.ngOnInit = function () {
        this.getBoundaryOptionValues();
    };
    BoundaryOptionGridComponent.prototype.saveBoundaryOptionValues = function () {
        var _this = this;
        this.isSavingValues = true;
        this.boundaryOptionValueService.save({ resultMenu: this.getResultValues(this.data.boundaryOptionValues) })
            .subscribe(function (result) {
            _this.getBoundaryOptionValues();
            _this.isSavingValues = false;
        });
    };
    BoundaryOptionGridComponent.prototype.refresh = function () {
        this.getBoundaryOptionValues();
    };
    BoundaryOptionGridComponent.prototype.getBoundaryOptionValues = function () {
        var _this = this;
        this.boundaryOptionValueService.getList(this.boundaryId)
            .subscribe(function (data) {
            _this.data = data;
        });
    };
    BoundaryOptionGridComponent.prototype.getResultValues = function (boundaryOptionValues) {
        return [].concat.apply([], boundaryOptionValues.map(function (r) { return r.resultMenu; }));
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], BoundaryOptionGridComponent.prototype, "boundaryId", void 0);
    BoundaryOptionGridComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'boundary-option-grid',
            template: __webpack_require__("./src/app/admin/boundary-option-grid/boundary-option-grid.component.html"),
            providers: [boundary_option_value_service_1.BoundaryOptionValueService, result_menu_service_1.ResultMenuService]
        }),
        __metadata("design:paramtypes", [result_menu_service_1.ResultMenuService,
            boundary_option_value_service_1.BoundaryOptionValueService])
    ], BoundaryOptionGridComponent);
    return BoundaryOptionGridComponent;
}());
exports.BoundaryOptionGridComponent = BoundaryOptionGridComponent;


/***/ }),

/***/ "./src/app/admin/boundary-option/boundary-option.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Boundary Options\r\n        <small>CRUD</small>\r\n    </h1>\r\n</section>\r\n<section class=\"content container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <p-table [value]=\"boundaryOptions\" selectionMode=\"single\" [(selection)]=\"selectedBoundaryOption\" (onRowSelect)=\"onRowSelect($event)\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th>Text</th>\r\n                        <th>Remove</th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-boundaryOption>\r\n                    <tr [pSelectableRow]=\"boundaryOption\" title=\"Click on the row to edit\">\r\n                        <td>{{boundaryOption.BoundaryText}}</td>\r\n                        <td>\r\n                            <a class=\"btn-danger\" (click)=\"remove(boundaryOption.BoundaryOptionId)\">Remove</a>\r\n                        </td>\r\n                    </tr>\r\n                </ng-template>\r\n            </p-table>\r\n            <button (click)=\"addNew()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-plus\"></i>&nbsp; Add New Boundary Option</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 content\" style=\"overflow-x: scroll;\">\r\n            <boundary-option-grid #boundaryGrid  *ngIf=\"boundaryId\" [boundaryId]=\"boundaryId\"></boundary-option-grid>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- edit modal -->\r\n<p-dialog header=\"Filter Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"500\">\r\n    <div class=\"ui-g ui-fluid\" *ngIf=\"boundaryOption\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"text\">Text</label>\r\n            </div>\r\n            <div class=\"ui-g-8 p-0\">\r\n                <input class=\"form-control\" pInputText id=\"text\" [(ngModel)]=\"boundaryOption.BoundaryText\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <p-footer>\r\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n            <button (click)=\"close()\" class=\"m-t-20 btn btn-danger\">\r\n                <i class=\"fa fa-close\"></i>&nbsp; Cancel</button>\r\n            <button (click)=\"save()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-check\"></i>&nbsp; Save</button>\r\n        </div>\r\n    </p-footer>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/admin/boundary-option/boundary-option.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var boundary_option_service_1 = __webpack_require__("./src/app/services/boundary-option.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var boundary_option_grid_component_1 = __webpack_require__("./src/app/admin/boundary-option-grid/boundary-option-grid.component.ts");
var BoundaryOptionComponent = /** @class */ (function () {
    function BoundaryOptionComponent(boundaryOptionService, route, router) {
        var _this = this;
        this.boundaryOptionService = boundaryOptionService;
        this.route = route;
        this.router = router;
        this.displayDialog = false;
        this.saveCallback = function (result) {
            _this.getBoundaryOptions(_this.boundaryId);
            _this.displayDialog = false;
            _this.boundaryGrid.refresh();
        };
    }
    BoundaryOptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.boundaryId = params['id'];
            if (_this.boundaryId) {
                _this.isNew = false;
                _this.getBoundaryOptions(_this.boundaryId);
            }
            else {
                _this.isNew = true;
            }
        });
    };
    BoundaryOptionComponent.prototype.remove = function (boundaryOptionId) {
        var _this = this;
        if (!confirm('Are you sure?')) {
            return;
        }
        this.boundaryOptionService.remove(boundaryOptionId)
            .subscribe(function (result) {
            _this.getBoundaryOptions(_this.boundaryId);
            _this.boundaryGrid.refresh();
        });
    };
    BoundaryOptionComponent.prototype.save = function () {
        if (this.isNew) {
            this.boundaryOption.BoundaryId = this.boundaryId;
            this.boundaryOptionService.save(this.boundaryOption)
                .subscribe(this.saveCallback);
        }
        else {
            this.boundaryOptionService.update(this.boundaryOption.BoundaryOptionId, this.boundaryOption)
                .subscribe(this.saveCallback);
        }
    };
    BoundaryOptionComponent.prototype.addNew = function () {
        this.displayDialog = true;
        this.isNew = true;
        this.boundaryOption = {};
    };
    BoundaryOptionComponent.prototype.close = function () {
        this.displayDialog = false;
    };
    BoundaryOptionComponent.prototype.onRowSelect = function (event) {
        this.isNew = false;
        this.boundaryOption = this.cloneFilter(event.data);
        this.displayDialog = true;
    };
    BoundaryOptionComponent.prototype.cloneFilter = function (c) {
        var boundaryOption = {};
        for (var prop in c) {
            boundaryOption[prop] = c[prop];
        }
        return boundaryOption;
    };
    BoundaryOptionComponent.prototype.getBoundaryOptions = function (id) {
        var _this = this;
        this.boundaryOptionService.getList(id)
            .subscribe(function (boundaryOptions) { _this.boundaryOptions = boundaryOptions; });
    };
    __decorate([
        core_1.ViewChild("boundaryGrid"),
        __metadata("design:type", boundary_option_grid_component_1.BoundaryOptionGridComponent)
    ], BoundaryOptionComponent.prototype, "boundaryGrid", void 0);
    BoundaryOptionComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'boundary-option',
            template: __webpack_require__("./src/app/admin/boundary-option/boundary-option.component.html"),
            providers: [boundary_option_service_1.BoundaryOptionService]
        }),
        __metadata("design:paramtypes", [boundary_option_service_1.BoundaryOptionService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], BoundaryOptionComponent);
    return BoundaryOptionComponent;
}());
exports.BoundaryOptionComponent = BoundaryOptionComponent;


/***/ }),

/***/ "./src/app/admin/boundary/boundary.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Boundaries\r\n        <small>CRUD</small>\r\n    </h1>\r\n</section>\r\n<section class=\"content container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <p-table [value]=\"boundaries\" selectionMode=\"single\" [(selection)]=\"selectedBoundary\" (onRowSelect)=\"onRowSelect($event)\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th>Title</th>\r\n                        <th>Topic</th>\r\n                        <th>Max Allowed Options</th>\r\n                        <th>Details</th>\r\n                        <th>Remove</th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-boundary>\r\n                    <tr [pSelectableRow]=\"boundary\" title=\"Click on the row to edit\">\r\n                        <td>{{boundary.Title}}</td>\r\n                        <td>{{boundary.TopicName}}</td>\r\n                        <td>{{boundary.MaxAllowedOptions}}</td>\r\n                        <td>\r\n                            <a class=\"btn\" [routerLink]=\"['/admin/boundaries/details/', boundary.BoundaryId]\">Details</a>\r\n                        </td>\r\n                        <td>\r\n                            <a class=\"btn-danger\" (click)=\"remove(boundary.BoundaryId)\">Remove</a>\r\n                        </td>\r\n                    </tr>\r\n                </ng-template>\r\n            </p-table>\r\n            <button (click)=\"addNew()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-plus\"></i>&nbsp; Add</button>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- edit modal -->\r\n<p-dialog header=\"FilterGroup Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"500\">\r\n    <div class=\"ui-g ui-fluid\" *ngIf=\"boundary\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"title\">Title</label>\r\n            </div>\r\n            <div class=\"ui-g-8 p-0\">\r\n                <input class=\"form-control\" pInputText id=\"title\" [(ngModel)]=\"boundary.Title\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"name\">Topic</label>\r\n                </div>\r\n                <div *ngIf='topics && topics.length > 0' class=\"form-group\" [ngClass]=\"{'has-error':TopicId.invalid && TopicId.touched}\"\r\n                    class=\"ui-g-8 p-0\">\r\n                    <select [(ngModel)]=\"boundary.TopicId\" #TopicId=\"ngModel\" required class=\"form-control\" name=\"TopicId\">\r\n                        <option *ngFor=\"let topic of topics\" [value]=\"topic.TopicId\">{{topic.Name}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"sortorder\">Max Allowed Options</label>\r\n            </div>\r\n            <div class=\"ui-g-8 p-0\">\r\n                <input class=\"form-control\" pInputText id=\"maxAllowedOptions\" [(ngModel)]=\"boundary.MaxAllowedOptions\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <p-footer>\r\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n            <button (click)=\"close()\" class=\"m-t-20 btn btn-danger\">\r\n                <i class=\"fa fa-close\"></i>&nbsp; Cancel</button>\r\n            <button (click)=\"save()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-check\"></i>&nbsp; Save</button>\r\n        </div>\r\n    </p-footer>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/admin/boundary/boundary.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var boundary_service_1 = __webpack_require__("./src/app/services/boundary.service.ts");
var topic_service_1 = __webpack_require__("./src/app/services/topic.service.ts");
var BoundaryComponent = /** @class */ (function () {
    function BoundaryComponent(boundaryService, topicService) {
        var _this = this;
        this.boundaryService = boundaryService;
        this.topicService = topicService;
        this.displayDialog = false;
        this.saveCallback = function (result) {
            _this.getBoundaries();
        };
    }
    BoundaryComponent.prototype.ngOnInit = function () {
        this.getBoundaries();
        this.getPageData();
    };
    BoundaryComponent.prototype.remove = function (boundaryId) {
        var _this = this;
        if (!confirm('Are you sure?')) {
            return;
        }
        this.boundaryService.remove(boundaryId)
            .subscribe(function (result) { _this.getBoundaries(); });
    };
    BoundaryComponent.prototype.save = function () {
        if (this.isNew) {
            this.boundaryService.save(this.boundary)
                .subscribe(this.saveCallback);
        }
        else {
            this.boundaryService.update(this.boundary.BoundaryId, this.boundary)
                .subscribe(this.saveCallback);
        }
        this.displayDialog = false;
    };
    BoundaryComponent.prototype.addNew = function () {
        this.displayDialog = true;
        this.isNew = true;
        this.boundary = {};
    };
    BoundaryComponent.prototype.close = function () {
        this.displayDialog = false;
    };
    BoundaryComponent.prototype.onRowSelect = function (event) {
        this.isNew = false;
        this.boundary = this.cloneBoundary(event.data);
        this.displayDialog = true;
    };
    BoundaryComponent.prototype.cloneBoundary = function (c) {
        var boundary = {};
        for (var prop in c) {
            boundary[prop] = c[prop];
        }
        return boundary;
    };
    BoundaryComponent.prototype.getBoundaries = function () {
        var _this = this;
        this.boundaryService.getList()
            .subscribe(function (boundaries) { _this.boundaries = boundaries; });
    };
    BoundaryComponent.prototype.getPageData = function () {
        var _this = this;
        this.topicService.getList()
            .subscribe(function (topics) { _this.topics = topics; });
    };
    BoundaryComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'boundarys',
            template: __webpack_require__("./src/app/admin/boundary/boundary.component.html"),
            providers: [boundary_service_1.BoundaryService, topic_service_1.TopicService]
        }),
        __metadata("design:paramtypes", [boundary_service_1.BoundaryService,
            topic_service_1.TopicService])
    ], BoundaryComponent);
    return BoundaryComponent;
}());
exports.BoundaryComponent = BoundaryComponent;


/***/ }),

/***/ "./src/app/admin/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Categories\r\n        <small>CRUD</small>\r\n    </h1>\r\n</section>\r\n<section class=\"content container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <p-table [value]=\"categories\" selectionMode=\"single\" [(selection)]=\"selectedCategory\" (onRowSelect)=\"onRowSelect($event)\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Sort Order</th>\r\n                        <th>Remove</th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-category>\r\n                    <tr [pSelectableRow]=\"category\" title=\"Click on the row to edit\">\r\n                        <td>{{category.Name}}</td>\r\n                        <td>{{category.SortOrder}}</td>\r\n                        <td>\r\n                            <a class=\"btn-danger\" (click)=\"remove(category.CategoryId)\">Remove</a>\r\n                        </td>\r\n                    </tr>\r\n                </ng-template>\r\n            </p-table>\r\n            <button (click)=\"addNew()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-plus\"></i>&nbsp; Add</button>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- edit modal -->\r\n<p-dialog header=\"Category Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"500\">\r\n    <div class=\"ui-g ui-fluid\" *ngIf=\"category\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"name\">Name</label>\r\n            </div>\r\n            <div class=\"ui-g-8 p-0\">\r\n                <input class=\"form-control\" pInputText id=\"name\" [(ngModel)]=\"category.Name\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"sortorder\">SortOrder</label>\r\n            </div>\r\n            <div class=\"ui-g-8 p-0\">\r\n                <input class=\"form-control\" pInputText id=\"sortorder\" [(ngModel)]=\"category.SortOrder\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <p-footer>\r\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n            <button (click)=\"close()\" class=\"m-t-20 btn btn-danger\">\r\n                <i class=\"fa fa-close\"></i>&nbsp; Cancel</button>\r\n            <button (click)=\"save()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-check\"></i>&nbsp; Save</button>\r\n        </div>\r\n    </p-footer>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/admin/category/category.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var category_service_1 = __webpack_require__("./src/app/services/category.service.ts");
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService) {
        var _this = this;
        this.categoryService = categoryService;
        this.displayDialog = false;
        this.saveCallback = function (result) {
            _this.getData();
        };
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    CategoryComponent.prototype.remove = function (categoryId) {
        var _this = this;
        if (!confirm('Are you sure?')) {
            return;
        }
        this.categoryService.remove(categoryId)
            .subscribe(function (result) {
            console.log(result);
            _this.getData();
        });
    };
    CategoryComponent.prototype.save = function () {
        if (this.isNew) {
            this.categoryService.save(this.category)
                .subscribe(this.saveCallback);
        }
        else {
            this.categoryService.update(this.category.CategoryId, this.category)
                .subscribe(this.saveCallback);
        }
        this.displayDialog = false;
    };
    CategoryComponent.prototype.addNew = function () {
        this.displayDialog = true;
        this.isNew = true;
        this.category = {};
    };
    CategoryComponent.prototype.close = function () {
        this.displayDialog = false;
    };
    CategoryComponent.prototype.onRowSelect = function (event) {
        this.isNew = false;
        this.category = this.cloneCategory(event.data);
        this.displayDialog = true;
    };
    CategoryComponent.prototype.cloneCategory = function (c) {
        var category = {};
        for (var prop in c) {
            category[prop] = c[prop];
        }
        return category;
    };
    CategoryComponent.prototype.getData = function () {
        var _this = this;
        this.categoryService.getList()
            .subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    CategoryComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'categories',
            template: __webpack_require__("./src/app/admin/category/category.component.html"),
            providers: [category_service_1.CategoryService]
        }),
        __metadata("design:paramtypes", [category_service_1.CategoryService])
    ], CategoryComponent);
    return CategoryComponent;
}());
exports.CategoryComponent = CategoryComponent;


/***/ }),

/***/ "./src/app/admin/container/admin-container.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/container/admin-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"skin-blue sidebar-mini\">\r\n  <div class=\"wrapper\" style=\"height: auto; min-height: 100%;\">\r\n    <header class=\"main-header\">\r\n      <a [routerLink]=\"['/admin/dashboard']\" class=\"logo\">\r\n        <span class=\"logo-mini\">\r\n          <b>A</b>LT</span>\r\n        <span class=\"logo-lg\">\r\n          <b>FIBER</b>FOX</span>\r\n      </a>\r\n      <nav class=\"navbar navbar-static-top\" role=\"navigation\">\r\n        <div class=\"navbar-custom-menu\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <li class=\"dropdown user user-menu\">\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <span class=\"hidden-xs\">{{ currentUser.user.Username }}</span>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n    </header>\r\n    <sidenav></sidenav>\r\n    <div class=\"content-wrapper\" style=\"min-height: 810.814px;\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <footer class=\"main-footer\">\r\n      <div class=\"pull-right hidden-xs\">\r\n        Anything you want\r\n      </div>\r\n      <strong>Copyright © 2017-18\r\n        <a href=\"#\">Fiberfox</a>.</strong> All rights reserved.\r\n    </footer>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/container/admin-container.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/security/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AdminContainerComponent = /** @class */ (function () {
    function AdminContainerComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminContainerComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getLoggedInUser();
        if (!this.currentUser || !this.currentUser.user || !this.currentUser.user.IsAdmin) {
            this.router.navigate(['/account/home']);
        }
    };
    AdminContainerComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'admin-container',
            template: __webpack_require__("./src/app/admin/container/admin-container.component.html"),
            styles: [__webpack_require__("./src/app/admin/container/admin-container.component.css")],
            providers: [auth_service_1.AuthService]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], AdminContainerComponent);
    return AdminContainerComponent;
}());
exports.AdminContainerComponent = AdminContainerComponent;


/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Page Header\r\n        <small>Optional description</small>\r\n    </h1>\r\n</section>\r\n<section class=\"content container-fluid\">\r\n    <h2>admin dashboard</h2>\r\n</section>"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'dashboard',
            template: __webpack_require__("./src/app/admin/dashboard/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/admin/filter-grid/filter-grid.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/filter-grid/filter-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-hover\" *ngIf=\"data && data.filterValues && data.filterValues.length > 0\">\r\n  <tr>\r\n    <td style=\"font-weight:bold;\">Target Filters / Result Menu</td>\r\n    <td *ngFor=\"let menu of data.resultMenu\">\r\n      {{ menu.ResultMenuName }}\r\n    </td>\r\n  </tr>\r\n  <tr *ngFor=\"let model of data.filterValues\">\r\n    <td>\r\n      {{ model.filterText }}\r\n    </td>\r\n    <td *ngFor=\"let menu of model.resultMenu\">\r\n      <input type=\"number\" [(ngModel)]=\"menu.AlgorithmValue\" name=\"AlgorithmValue\">\r\n    </td>\r\n  </tr>\r\n</table>\r\n<button (click)=\"saveFilterValues()\" class=\"btn btn-primary\" [disabled]='isSavingValues'>\r\n  <i class=\"fa fa-plus\"></i>&nbsp; Save</button>"

/***/ }),

/***/ "./src/app/admin/filter-grid/filter-grid.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var result_menu_service_1 = __webpack_require__("./src/app/services/result-menu.service.ts");
var filter_value_service_1 = __webpack_require__("./src/app/services/filter-value.service.ts");
var FilterGridComponent = /** @class */ (function () {
    function FilterGridComponent(resultMenuService, filterValueSerice) {
        this.resultMenuService = resultMenuService;
        this.filterValueSerice = filterValueSerice;
        this.isSavingValues = false;
    }
    FilterGridComponent.prototype.ngOnInit = function () {
        this.getFilterValues();
    };
    FilterGridComponent.prototype.saveFilterValues = function () {
        var _this = this;
        this.isSavingValues = true;
        this.filterValueSerice.save({ resultMenu: this.getResultValues(this.data.filterValues) })
            .subscribe(function (result) {
            _this.getFilterValues();
            _this.isSavingValues = false;
        });
    };
    FilterGridComponent.prototype.refresh = function () {
        this.getFilterValues();
    };
    FilterGridComponent.prototype.getFilterValues = function () {
        var _this = this;
        this.filterValueSerice.getList(this.filterGroupId)
            .subscribe(function (data) {
            _this.data = data;
        });
    };
    FilterGridComponent.prototype.getResultValues = function (filterValues) {
        return [].concat.apply([], this.data.filterValues.map(function (r) { return r.resultMenu; }));
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], FilterGridComponent.prototype, "filterGroupId", void 0);
    FilterGridComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'filter-grid',
            template: __webpack_require__("./src/app/admin/filter-grid/filter-grid.component.html"),
            styles: [__webpack_require__("./src/app/admin/filter-grid/filter-grid.component.css")],
            providers: [filter_value_service_1.FilterValueService, result_menu_service_1.ResultMenuService]
        }),
        __metadata("design:paramtypes", [result_menu_service_1.ResultMenuService,
            filter_value_service_1.FilterValueService])
    ], FilterGridComponent);
    return FilterGridComponent;
}());
exports.FilterGridComponent = FilterGridComponent;


/***/ }),

/***/ "./src/app/admin/filter-group/filter-group.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Filter Groups\r\n        <small>CRUD</small>\r\n    </h1>\r\n</section>\r\n<section class=\"content container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <p-table [value]=\"filterGroups\" selectionMode=\"single\" [(selection)]=\"selectedFilterGroup\" (onRowSelect)=\"onRowSelect($event)\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th>Title</th>\r\n                        <th>Topic</th>\r\n                        <th>Max Allowed Options</th>\r\n                        <th>Details</th>\r\n                        <th>Remove</th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-filterGroup>\r\n                    <tr [pSelectableRow]=\"filterGroup\" title=\"Click on the row to edit\">\r\n                        <td>{{filterGroup.Title}}</td>\r\n                        <td>{{filterGroup.TopicName}}</td>\r\n                        <td>{{filterGroup.MaxAllowedOptions}}</td>\r\n                        <td>\r\n                            <a class=\"btn\" [routerLink]=\"['/admin/filters/details/', filterGroup.TargetFilterGroupId]\">Details</a>\r\n                        </td>\r\n                        <td>\r\n                            <a class=\"btn-danger\" (click)=\"remove(filterGroup.TargetFilterGroupId)\">Remove</a>\r\n                        </td>\r\n                    </tr>\r\n                </ng-template>\r\n            </p-table>\r\n            <button (click)=\"addNew()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-plus\"></i>&nbsp; Add</button>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- edit modal -->\r\n<p-dialog header=\"FilterGroup Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"500\">\r\n    <div class=\"ui-g ui-fluid\" *ngIf=\"filterGroup\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"title\">Title</label>\r\n            </div>\r\n            <div class=\"ui-g-8 p-0\">\r\n                <input class=\"form-control\" pInputText id=\"title\" [(ngModel)]=\"filterGroup.Title\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"name\">Topic</label>\r\n                </div>\r\n                <div *ngIf='topics && topics.length > 0' class=\"form-group\" [ngClass]=\"{'has-error':TopicId.invalid && TopicId.touched}\"\r\n                    class=\"ui-g-8 p-0\">\r\n                    <select [(ngModel)]=\"filterGroup.TopicId\" #TopicId=\"ngModel\" required class=\"form-control\" name=\"TopicId\">\r\n                        <option *ngFor=\"let topic of topics\" [value]=\"topic.TopicId\">{{topic.Name}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"sortorder\">Max Allowed Options</label>\r\n            </div>\r\n            <div class=\"ui-g-8 p-0\">\r\n                <input class=\"form-control\" pInputText id=\"maxAllowedOptions\" [(ngModel)]=\"filterGroup.MaxAllowedOptions\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <p-footer>\r\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n            <button (click)=\"close()\" class=\"m-t-20 btn btn-danger\">\r\n                <i class=\"fa fa-close\"></i>&nbsp; Cancel</button>\r\n            <button (click)=\"save()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-check\"></i>&nbsp; Save</button>\r\n        </div>\r\n    </p-footer>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/admin/filter-group/filter-group.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var filter_group_service_1 = __webpack_require__("./src/app/services/filter-group.service.ts");
var topic_service_1 = __webpack_require__("./src/app/services/topic.service.ts");
var FilterGroupComponent = /** @class */ (function () {
    function FilterGroupComponent(filterGroupService, topicService) {
        var _this = this;
        this.filterGroupService = filterGroupService;
        this.topicService = topicService;
        this.displayDialog = false;
        this.saveCallback = function (result) {
            _this.getFilterGroups();
        };
    }
    FilterGroupComponent.prototype.ngOnInit = function () {
        this.getFilterGroups();
        this.getPageData();
    };
    FilterGroupComponent.prototype.remove = function (filterGroupId) {
        var _this = this;
        if (!confirm('Are you sure?')) {
            return;
        }
        this.filterGroupService.remove(filterGroupId)
            .subscribe(function (result) { _this.getFilterGroups(); });
    };
    FilterGroupComponent.prototype.save = function () {
        if (this.isNew) {
            this.filterGroupService.save(this.filterGroup)
                .subscribe(this.saveCallback);
        }
        else {
            this.filterGroupService.update(this.filterGroup.TargetFilterGroupId, this.filterGroup)
                .subscribe(this.saveCallback);
        }
        this.displayDialog = false;
    };
    FilterGroupComponent.prototype.addNew = function () {
        this.displayDialog = true;
        this.isNew = true;
        this.filterGroup = {};
    };
    FilterGroupComponent.prototype.close = function () {
        this.displayDialog = false;
    };
    FilterGroupComponent.prototype.onRowSelect = function (event) {
        this.isNew = false;
        this.filterGroup = this.cloneFilterGroup(event.data);
        this.displayDialog = true;
    };
    FilterGroupComponent.prototype.cloneFilterGroup = function (c) {
        var filterGroup = {};
        for (var prop in c) {
            filterGroup[prop] = c[prop];
        }
        return filterGroup;
    };
    FilterGroupComponent.prototype.getFilterGroups = function () {
        var _this = this;
        this.filterGroupService.getList()
            .subscribe(function (filterGroups) { _this.filterGroups = filterGroups; });
    };
    FilterGroupComponent.prototype.getPageData = function () {
        var _this = this;
        this.topicService.getList()
            .subscribe(function (topics) { _this.topics = topics; });
    };
    FilterGroupComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'filter-groups',
            template: __webpack_require__("./src/app/admin/filter-group/filter-group.component.html"),
            providers: [filter_group_service_1.FilterGroupService, topic_service_1.TopicService]
        }),
        __metadata("design:paramtypes", [filter_group_service_1.FilterGroupService,
            topic_service_1.TopicService])
    ], FilterGroupComponent);
    return FilterGroupComponent;
}());
exports.FilterGroupComponent = FilterGroupComponent;


/***/ }),

/***/ "./src/app/admin/filters/filters.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Filters\r\n        <small>CRUD</small>\r\n    </h1>\r\n</section>\r\n<section class=\"content container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <p-table [value]=\"filters\" selectionMode=\"single\" [(selection)]=\"selectedFilter\" (onRowSelect)=\"onRowSelect($event)\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th>Text</th>\r\n                        <th>Remove</th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-filter>\r\n                    <tr [pSelectableRow]=\"filter\" title=\"Click on the row to edit\">\r\n                        <td>{{filter.FilterText}}</td>\r\n                        <td>\r\n                            <a class=\"btn-danger\" (click)=\"remove(filter.TargetFilterId)\">Remove</a>\r\n                        </td>\r\n                    </tr>\r\n                </ng-template>\r\n            </p-table>\r\n            <button (click)=\"addNew()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-plus\"></i>&nbsp; Add New Filter</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 content\" style=\"overflow-x: scroll;\">\r\n            <filter-grid #filterGrid *ngIf=\"filterGroupId\" [filterGroupId]=\"filterGroupId\"></filter-grid>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- edit modal -->\r\n<p-dialog header=\"Filter Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"500\">\r\n    <div class=\"ui-g ui-fluid\" *ngIf=\"filter\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"text\">Text</label>\r\n            </div>\r\n            <div class=\"ui-g-8 p-0\">\r\n                <input class=\"form-control\" pInputText id=\"text\" [(ngModel)]=\"filter.FilterText\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <p-footer>\r\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n            <button (click)=\"close()\" class=\"m-t-20 btn btn-danger\">\r\n                <i class=\"fa fa-close\"></i>&nbsp; Cancel</button>\r\n            <button (click)=\"save()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-check\"></i>&nbsp; Save</button>\r\n        </div>\r\n    </p-footer>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/admin/filters/filters.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var filters_service_1 = __webpack_require__("./src/app/services/filters.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var filter_grid_component_1 = __webpack_require__("./src/app/admin/filter-grid/filter-grid.component.ts");
var FiltersComponent = /** @class */ (function () {
    function FiltersComponent(filterService, route, router) {
        var _this = this;
        this.filterService = filterService;
        this.route = route;
        this.router = router;
        this.displayDialog = false;
        this.saveCallback = function (result) {
            _this.getFilters(_this.filterGroupId);
            _this.displayDialog = false;
            //location.reload();
            _this.filterGrid.refresh();
        };
    }
    FiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.filterGroupId = params['id'];
            if (_this.filterGroupId) {
                _this.isNew = false;
                _this.getFilters(_this.filterGroupId);
            }
            else {
                _this.isNew = true;
            }
        });
    };
    FiltersComponent.prototype.remove = function (filterId) {
        var _this = this;
        if (!confirm('Are you sure?')) {
            return;
        }
        this.filterService.remove(filterId)
            .subscribe(function (result) {
            _this.getFilters(_this.filterGroupId);
            _this.filterGrid.refresh();
        });
    };
    FiltersComponent.prototype.save = function () {
        if (this.isNew) {
            this.filter.TargetFilterGroupId = this.filterGroupId;
            this.filterService.save(this.filter)
                .subscribe(this.saveCallback);
        }
        else {
            this.filterService.update(this.filter.TargetFilterId, this.filter)
                .subscribe(this.saveCallback);
        }
    };
    FiltersComponent.prototype.addNew = function () {
        this.displayDialog = true;
        this.isNew = true;
        this.filter = {};
    };
    FiltersComponent.prototype.close = function () {
        this.displayDialog = false;
    };
    FiltersComponent.prototype.onRowSelect = function (event) {
        this.isNew = false;
        this.filter = this.cloneFilterGroup(event.data);
        this.displayDialog = true;
    };
    FiltersComponent.prototype.cloneFilterGroup = function (c) {
        var filter = {};
        for (var prop in c) {
            filter[prop] = c[prop];
        }
        return filter;
    };
    FiltersComponent.prototype.getFilters = function (id) {
        var _this = this;
        this.filterService.getList(id)
            .subscribe(function (filters) { _this.filters = filters; });
    };
    __decorate([
        core_1.ViewChild("filterGrid"),
        __metadata("design:type", filter_grid_component_1.FilterGridComponent)
    ], FiltersComponent.prototype, "filterGrid", void 0);
    FiltersComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'filterss',
            template: __webpack_require__("./src/app/admin/filters/filters.component.html"),
            providers: [filters_service_1.FilterService]
        }),
        __metadata("design:paramtypes", [filters_service_1.FilterService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], FiltersComponent);
    return FiltersComponent;
}());
exports.FiltersComponent = FiltersComponent;


/***/ }),

/***/ "./src/app/admin/phase/phase.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Phases\r\n        <small>CRUD</small>\r\n    </h1>\r\n</section>\r\n<section class=\"content container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <p-table [value]=\"phases\" selectionMode=\"single\" [(selection)]=\"selectedPhase\" (onRowSelect)=\"onRowSelect($event)\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Description</th>\r\n                        <th>Remove</th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-phase>\r\n                    <tr [pSelectableRow]=\"phase\" title=\"Click on the row to edit\">\r\n                        <td>{{phase.Name}}</td>\r\n                        <td>{{phase.Description}}</td>\r\n                        <td>\r\n                            <a class=\"btn-danger\" (click)=\"remove(phase.PhaseId)\">Remove</a>\r\n                        </td>\r\n                    </tr>\r\n                </ng-template>\r\n            </p-table>\r\n            <button (click)=\"addNew()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-plus\"></i>&nbsp; Add</button>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- edit modal -->\r\n<p-dialog header=\"Phase Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"500\">\r\n    <div class=\"ui-g ui-fluid\" *ngIf=\"phase\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"name\">Name</label>\r\n            </div>\r\n            <div class=\"ui-g-8 p-0\">\r\n                <input class=\"form-control\" pInputText id=\"name\" [(ngModel)]=\"phase.Name\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"description\">Description</label>\r\n            </div>\r\n            <div class=\"ui-g-8 p-0\">\r\n                <input class=\"form-control\" pInputText id=\"description\" [(ngModel)]=\"phase.Description\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <p-footer>\r\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n            <button (click)=\"close()\" class=\"m-t-20 btn btn-danger\">\r\n                <i class=\"fa fa-close\"></i>&nbsp; Cancel</button>\r\n            <button (click)=\"save()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-check\"></i>&nbsp; Save</button>\r\n        </div>\r\n    </p-footer>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/admin/phase/phase.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var phase_service_1 = __webpack_require__("./src/app/services/phase.service.ts");
var PhaseComponent = /** @class */ (function () {
    function PhaseComponent(phaseService) {
        var _this = this;
        this.phaseService = phaseService;
        this.displayDialog = false;
        this.saveCallback = function (result) {
            _this.getData();
        };
    }
    PhaseComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    PhaseComponent.prototype.remove = function (phaseId) {
        var _this = this;
        if (!confirm('Are you sure?')) {
            return;
        }
        this.phaseService.remove(phaseId)
            .subscribe(function (result) {
            _this.getData();
        });
    };
    PhaseComponent.prototype.save = function () {
        if (this.isNew) {
            this.phaseService.save(this.phase)
                .subscribe(this.saveCallback);
        }
        else {
            this.phaseService.update(this.phase.PhaseId, this.phase)
                .subscribe(this.saveCallback);
        }
        this.displayDialog = false;
    };
    PhaseComponent.prototype.addNew = function () {
        this.displayDialog = true;
        this.isNew = true;
        this.phase = {};
    };
    PhaseComponent.prototype.close = function () {
        this.displayDialog = false;
    };
    PhaseComponent.prototype.onRowSelect = function (event) {
        this.isNew = false;
        this.phase = this.clonePhase(event.data);
        this.displayDialog = true;
    };
    PhaseComponent.prototype.clonePhase = function (c) {
        var phase = {};
        for (var prop in c) {
            phase[prop] = c[prop];
        }
        return phase;
    };
    PhaseComponent.prototype.getData = function () {
        var _this = this;
        this.phaseService.getList()
            .subscribe(function (phases) {
            _this.phases = phases;
        });
    };
    PhaseComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'phases',
            template: __webpack_require__("./src/app/admin/phase/phase.component.html"),
            providers: [phase_service_1.PhaseService]
        }),
        __metadata("design:paramtypes", [phase_service_1.PhaseService])
    ], PhaseComponent);
    return PhaseComponent;
}());
exports.PhaseComponent = PhaseComponent;


/***/ }),

/***/ "./src/app/admin/question/edit/edit-question.component.css":
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .ui-multiselect{\r\n    width:100%;\r\n}"

/***/ }),

/***/ "./src/app/admin/question/edit/edit-question.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Edit Question\r\n        <small>CRUD</small>\r\n    </h1>\r\n</section>\r\n<section class=\"content container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <div *ngIf=\"model\" class=\"box box-primary\">\r\n                <div class=\"box-body\">\r\n                    <div class=\"col-md-12\">\r\n                        <form name=\"form\" #form=\"ngForm\">\r\n                            <div class=\"form-group\" [ngClass]=\"{'has-error':QuestionText.invalid && QuestionText.touched}\">\r\n                                <label class=\"form-control-label\" for=\"QuestionText\">Question</label>\r\n                                <input [(ngModel)]=\"model.QuestionText\" #QuestionText=\"ngModel\" required class=\"form-control\" name=\"QuestionText\" placeholder=\"Enter the Question\">\r\n                            </div>\r\n                            <div *ngIf='topics && topics.length > 0' class=\"form-group\" [ngClass]=\"{'has-error':TopicId.invalid && TopicId.touched}\">\r\n                                <label class=\"form-control-label\" for=\"TopicId\">Topic</label>\r\n                                <select placeholder=\"Topic\" [(ngModel)]=\"model.TopicId\" #TopicId=\"ngModel\" required class=\"form-control\" name=\"TopicId\">\r\n                                    <option *ngFor=\"let topic of topics\" [value]=\"topic.TopicId\">{{topic.Name}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input type=\"checkbox\" name=\"HasTargetFiltering\" [(ngModel)]=\"model.HasTargetFiltering\"> Has Target Filtering\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input type=\"checkbox\" name=\"HasBoundaryOptions\" [(ngModel)]=\"model.HasBoundaryOptions\"> Has Boundary Option\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <p-multiSelect [options]=\"resultMenuItems\" optionLabel=\"Name\" dataKey=\"ResultMenuId\" [(ngModel)]=\"model.ResultMenuItems\" \r\n                                    [defaultLabel]=\"'Result Menu'\" #ResultMenuItems=\"ngModel\" name=\"ResultMenuItems\">\r\n                                </p-multiSelect>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                    <button type=\"submit\" [disabled]='!form.valid' (click)=\"save()\" class=\"btn btn-primary\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/admin/question/edit/edit-question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var question_service_1 = __webpack_require__("./src/app/services/question.service.ts");
var topic_service_1 = __webpack_require__("./src/app/services/topic.service.ts");
var result_menu_service_1 = __webpack_require__("./src/app/services/result-menu.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var question_model_1 = __webpack_require__("./src/app/admin/question/edit/question-model.ts");
var EditComponent = /** @class */ (function () {
    function EditComponent(questionService, topicService, resultMenuService, route, router) {
        this.questionService = questionService;
        this.topicService = topicService;
        this.resultMenuService = resultMenuService;
        this.route = route;
        this.router = router;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isNew = false;
                _this.getQuestion(id);
            }
            else {
                _this.isNew = true;
                _this.model = new question_model_1.QuestionModel();
            }
        });
        this.getPageData();
    };
    EditComponent.prototype.save = function () {
        var _this = this;
        console.log(this.model);
        if (this.isNew) {
            this.questionService.save(this.model)
                .subscribe(function (result) {
                _this.router.navigate(['/admin/questions']);
            });
        }
        else {
            this.questionService.update(this.model.QuestionId, this.model)
                .subscribe(function (result) {
                _this.router.navigate(['/admin/questions']);
            });
        }
    };
    EditComponent.prototype.getQuestion = function (id) {
        var _this = this;
        this.questionService.getById(id)
            .subscribe(function (model) {
            _this.model = model;
            console.log(_this.model);
            //this.getPageData();
        });
    };
    EditComponent.prototype.getPageData = function () {
        var _this = this;
        this.topicService.getList()
            .subscribe(function (topics) { _this.topics = topics; });
        this.resultMenuService.getList()
            .subscribe(function (resultMenuItems) { _this.resultMenuItems = resultMenuItems; });
    };
    EditComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'edit-question',
            template: __webpack_require__("./src/app/admin/question/edit/edit-question.component.html"),
            styles: [__webpack_require__("./src/app/admin/question/edit/edit-question.component.css")],
            providers: [question_service_1.QuestionService, topic_service_1.TopicService, result_menu_service_1.ResultMenuService]
        }),
        __metadata("design:paramtypes", [question_service_1.QuestionService,
            topic_service_1.TopicService,
            result_menu_service_1.ResultMenuService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "./src/app/admin/question/edit/question-model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QuestionModel = /** @class */ (function () {
    function QuestionModel() {
    }
    return QuestionModel;
}());
exports.QuestionModel = QuestionModel;


/***/ }),

/***/ "./src/app/admin/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Questions\r\n        <small>CRUD</small>\r\n    </h1>\r\n</section>\r\n<section class=\"content container-fluid\">\r\n    <p-table [value]=\"questions\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Question</th>\r\n                <th>Topic</th>\r\n                <th>Target Filtering</th>\r\n                <th>Boundary Options</th>\r\n                <th>Edit</th>\r\n                <th>Delete</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData>\r\n            <tr>\r\n                <td>{{rowData.QuestionText}}</td>\r\n                <td>{{rowData.TopicName}}</td>\r\n                <td>\r\n                    {{ rowData.HasBoundaryOptions ? \"Yes\" : \"No\" }}\r\n                </td>\r\n                <td>\r\n                    {{ rowData.HasTargetFiltering ? \"Yes\" : \"No\" }}\r\n                </td>\r\n                <td>\r\n                    <a class=\"btn-success\" [routerLink]=\"['/admin/questions/edit/',rowData.QuestionId]\">Edit</a>\r\n                </td>\r\n                <td>\r\n                    <a class=\"btn-danger\" (click)=\"remove(rowData.QuestionId)\">Remove</a>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n    <a [routerLink]=\"['/admin/questions/edit']\" class=\"m-t-20 btn btn-primary\">\r\n        <i class=\"fa fa-plus\"></i>&nbsp; Add</a>\r\n</section>"

/***/ }),

/***/ "./src/app/admin/question/question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var question_service_1 = __webpack_require__("./src/app/services/question.service.ts");
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(questionService) {
        this.questionService = questionService;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    QuestionComponent.prototype.remove = function (questionId) {
        var _this = this;
        if (!confirm('Are you sure?'))
            return;
        this.questionService.remove(questionId)
            .subscribe(function (result) { _this.getData(); });
    };
    QuestionComponent.prototype.getData = function () {
        var _this = this;
        this.questionService.getList()
            .subscribe(function (questions) { _this.questions = questions; });
    };
    QuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'question',
            template: __webpack_require__("./src/app/admin/question/question.component.html"),
            providers: [question_service_1.QuestionService]
        }),
        __metadata("design:paramtypes", [question_service_1.QuestionService])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;


/***/ }),

/***/ "./src/app/admin/result-menu/result-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Result Menu\r\n        <small>CRUD</small>\r\n    </h1>\r\n</section>\r\n<section class=\"content container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <p-table [value]=\"resultMenuItems\" selectionMode=\"single\" [(selection)]=\"selectedMenu\" (onRowSelect)=\"onRowSelect($event)\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Topic</th>\r\n                        <th>Remove</th>\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-menu>\r\n                    <tr [pSelectableRow]=\"menu\" title=\"Click on the row to edit\">\r\n                        <td>{{menu.Name}}</td>\r\n                        <td>{{menu.TopicName}}</td>\r\n                        <td>\r\n                            <a class=\"btn-danger\" (click)=\"remove(menu.ResultMenuId)\">Remove</a>\r\n                        </td>\r\n                    </tr>\r\n                </ng-template>\r\n            </p-table>\r\n            <button (click)=\"addNew()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-plus\"></i>&nbsp; Add</button>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- edit modal -->\r\n<p-dialog header=\"Result Menu Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"500\">\r\n    <div class=\"ui-g ui-fluid\" *ngIf=\"menu\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"name\">Name</label>\r\n            </div>\r\n            <div class=\"ui-g-8 p-0\">\r\n                <input class=\"form-control\" pInputText id=\"name\" [(ngModel)]=\"menu.Name\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"name\">Topic</label>\r\n            </div>\r\n            <div *ngIf='topics && topics.length > 0' class=\"form-group\" [ngClass]=\"{'has-error':TopicId.invalid && TopicId.touched}\"\r\n                class=\"ui-g-8 p-0\">\r\n                <select [(ngModel)]=\"menu.TopicId\" #TopicId=\"ngModel\" required class=\"form-control\" name=\"TopicId\">\r\n                    <option *ngFor=\"let topic of topics\" [value]=\"topic.TopicId\">{{ topic.Name }}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <p-footer>\r\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n            <button (click)=\"close()\" class=\"m-t-20 btn btn-danger\">\r\n                <i class=\"fa fa-close\"></i>&nbsp; Cancel</button>\r\n            <button (click)=\"save()\" class=\"m-t-20 btn btn-primary\">\r\n                <i class=\"fa fa-check\"></i>&nbsp; Save</button>\r\n        </div>\r\n    </p-footer>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/admin/result-menu/result-menu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var result_menu_service_1 = __webpack_require__("./src/app/services/result-menu.service.ts");
var topic_service_1 = __webpack_require__("./src/app/services/topic.service.ts");
var ResultMenuComponent = /** @class */ (function () {
    function ResultMenuComponent(resultMenuService, topicService) {
        var _this = this;
        this.resultMenuService = resultMenuService;
        this.topicService = topicService;
        this.displayDialog = false;
        this.saveCallback = function (result) {
            _this.getData();
        };
    }
    ResultMenuComponent.prototype.ngOnInit = function () {
        this.getData();
        this.getTopics();
    };
    ResultMenuComponent.prototype.remove = function (menuId) {
        var _this = this;
        if (!confirm('Are you sure?')) {
            return;
        }
        this.resultMenuService.remove(menuId)
            .subscribe(function (result) { _this.getData(); });
    };
    ResultMenuComponent.prototype.save = function () {
        if (this.isNew) {
            this.resultMenuService.save(this.menu)
                .subscribe(this.saveCallback);
        }
        else {
            this.resultMenuService.update(this.menu.ResultMenuId, this.menu)
                .subscribe(this.saveCallback);
        }
        this.displayDialog = false;
    };
    ResultMenuComponent.prototype.addNew = function () {
        this.displayDialog = true;
        this.isNew = true;
        this.menu = {};
    };
    ResultMenuComponent.prototype.close = function () {
        this.displayDialog = false;
    };
    ResultMenuComponent.prototype.onRowSelect = function (event) {
        this.isNew = false;
        this.menu = this.cloneMenu(event.data);
        this.displayDialog = true;
    };
    ResultMenuComponent.prototype.cloneMenu = function (c) {
        var menu = {};
        for (var prop in c) {
            menu[prop] = c[prop];
        }
        return menu;
    };
    ResultMenuComponent.prototype.getData = function () {
        var _this = this;
        this.resultMenuService.getList()
            .subscribe(function (items) {
            _this.resultMenuItems = items;
        });
    };
    ResultMenuComponent.prototype.getTopics = function () {
        var _this = this;
        this.topicService.getList()
            .subscribe(function (topics) { _this.topics = topics; });
    };
    ResultMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'result-menu',
            template: __webpack_require__("./src/app/admin/result-menu/result-menu.component.html"),
            providers: [result_menu_service_1.ResultMenuService, topic_service_1.TopicService]
        }),
        __metadata("design:paramtypes", [result_menu_service_1.ResultMenuService,
            topic_service_1.TopicService])
    ], ResultMenuComponent);
    return ResultMenuComponent;
}());
exports.ResultMenuComponent = ResultMenuComponent;


/***/ }),

/***/ "./src/app/admin/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\r\n    <section class=\"sidebar\">\r\n        <ul class=\"sidebar-menu tree\" data-widget=\"tree\">\r\n            <li class=\"header\">Navigation</li>\r\n            <li>\r\n                <a [routerLink]=\"['/admin/approval']\">\r\n                    <i class=\"fa fa-address-book\"></i>\r\n                    <span>User Approvals</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/admin/categories']\">\r\n                    <i class=\"fa fa-angle-right\"></i>\r\n                    <span>Categories</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/admin/subcategories']\">\r\n                    <i class=\"fa fa-angle-double-right\"></i>\r\n                    <span>Sub Categories</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/admin/activities']\">\r\n                    <i class=\"fa fa-step-forward\"></i>\r\n                    <span>Activities</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/admin/phases']\">\r\n                    <i class=\"fa fa-step-forward\"></i>\r\n                    <span>Phases</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/admin/topics']\">\r\n                    <i class=\"fa fa-file\"></i>\r\n                    <span>Topics</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/admin/questions']\">\r\n                    <i class=\"fa fa-question\"></i>\r\n                    <span>Questions</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/admin/filters']\">\r\n                    <i class=\"fa fa-filter\"></i>\r\n                    <span>Target Filtering</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/admin/boundaries']\">\r\n                    <i class=\"fa fa-filter\"></i>\r\n                    <span>Boundary Filtering</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/admin/resultmenu']\">\r\n                    <i class=\"fa fa-bars\"></i>\r\n                    <span>Result Menu</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/admin/articles']\">\r\n                    <i class=\"fa fa-paperclip\"></i>\r\n                    <span>Articles</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </section>\r\n</aside>"

/***/ }),

/***/ "./src/app/admin/sidenav/sidenav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SideNavComponent = /** @class */ (function () {
    function SideNavComponent() {
    }
    SideNavComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'sidenav',
            template: __webpack_require__("./src/app/admin/sidenav/sidenav.component.html")
        })
    ], SideNavComponent);
    return SideNavComponent;
}());
exports.SideNavComponent = SideNavComponent;


/***/ }),

/***/ "./src/app/admin/sub-category/sub-category.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Sub Categories\r\n        <small>CRUD</small>\r\n    </h1>\r\n</section>\r\n<section class=\"content container-fluid\">\r\n    <p-table [value]=\"subCategories\" selectionMode=\"single\" [(selection)]=\"selectedSubCategory\" (onRowSelect)=\"onRowSelect($event)\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Category Name</th>\r\n                <th>Sort Order</th>\r\n                <th>IsActive</th>\r\n                <th>Delete</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData>\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td>{{rowData.Name}}</td>\r\n                <td>{{rowData.CategoryName}}</td>\r\n                <td>{{rowData.SortOrder}}</td>\r\n                <td>{{rowData.IsActive}}</td>\r\n                <td>\r\n                    <a class=\"btn-danger\" (click)=\"remove(rowData.SubCategoryId)\">Remove</a>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n    <button (click)=\"addNew()\" class=\"m-t-20 btn btn-primary\">\r\n        <i class=\"fa fa-plus\"></i>&nbsp; Add</button>\r\n\r\n    <!-- edit modal -->\r\n    <p-dialog header=\"SubCategory Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"500\">\r\n        <div class=\"ui-g ui-fluid\" *ngIf=\"subCategory\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"name\">Name</label>\r\n                </div>\r\n                <div class=\"ui-g-8 p-0\">\r\n                    <input class=\"form-control\" required pInputText id=\"name\" [(ngModel)]=\"subCategory.Name\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"name\">Category Name</label>\r\n                </div>\r\n                <div *ngIf='categories && categories.length > 0' class=\"form-group\" [ngClass]=\"{'has-error':CategoryId.invalid && CategoryId.touched}\"\r\n                    class=\"ui-g-8 p-0\">\r\n                    <select [(ngModel)]=\"subCategory.CategoryId\" #CategoryId=\"ngModel\" required class=\"form-control\" name=\"CategoryId\">\r\n                        <option *ngFor=\"let category of categories\" [value]=\"category.CategoryId\">{{category.Name}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label for=\"IsActive\">IsActive</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8 p-0\">\r\n                        <label>\r\n                            <input type=\"checkbox\" name=\"IsActive\" [(ngModel)]=\"subCategory.IsActive\">\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"sortorder\">SortOrder</label>\r\n                </div>\r\n                <div class=\"ui-g-8 p-0\">\r\n                    <input class=\"form-control\" required pInputText id=\"sortorder\" [(ngModel)]=\"subCategory.SortOrder\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <p-footer>\r\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                <button (click)=\"close()\" class=\"m-t-20 btn btn-danger\">\r\n                    <i class=\"fa fa-close\"></i>&nbsp; Cancel</button>\r\n                <button (click)=\"save()\" class=\"m-t-20 btn btn-primary\">\r\n                    <i class=\"fa fa-check\"></i>&nbsp; Save</button>\r\n            </div>\r\n        </p-footer>\r\n    </p-dialog>\r\n</section>"

/***/ }),

/***/ "./src/app/admin/sub-category/sub-category.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var sub_category_service_1 = __webpack_require__("./src/app/services/sub-category.service.ts");
var category_service_1 = __webpack_require__("./src/app/services/category.service.ts");
var SubCategoryComponent = /** @class */ (function () {
    function SubCategoryComponent(subCategoryService, categoryService) {
        var _this = this;
        this.subCategoryService = subCategoryService;
        this.categoryService = categoryService;
        this.displayDialog = false;
        this.saveCallback = function (result) {
            _this.getData();
        };
    }
    SubCategoryComponent.prototype.ngOnInit = function () {
        this.getData();
        this.getCategories();
    };
    SubCategoryComponent.prototype.remove = function (subCategoryId) {
        var _this = this;
        if (!confirm('Are you sure?')) {
            return;
        }
        this.subCategoryService.remove(subCategoryId)
            .subscribe(function (result) {
            _this.getData();
        });
    };
    SubCategoryComponent.prototype.save = function () {
        if (this.isNew) {
            this.subCategoryService.save(this.subCategory)
                .subscribe(this.saveCallback);
        }
        else {
            this.subCategoryService.update(this.subCategory.SubCategoryId, this.subCategory)
                .subscribe(this.saveCallback);
        }
        this.displayDialog = false;
    };
    SubCategoryComponent.prototype.addNew = function () {
        this.displayDialog = true;
        this.isNew = true;
        this.subCategory = {};
    };
    SubCategoryComponent.prototype.close = function () {
        this.displayDialog = false;
    };
    SubCategoryComponent.prototype.onRowSelect = function (event) {
        this.isNew = false;
        this.subCategory = this.cloneSubCategory(event.data);
        this.displayDialog = true;
    };
    SubCategoryComponent.prototype.cloneSubCategory = function (c) {
        var category = {};
        for (var prop in c) {
            category[prop] = c[prop];
        }
        return category;
    };
    SubCategoryComponent.prototype.getData = function () {
        var _this = this;
        this.subCategoryService.getList()
            .subscribe(function (subCategories) {
            _this.subCategories = subCategories;
        });
    };
    SubCategoryComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getList()
            .subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    SubCategoryComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'sub-categories',
            template: __webpack_require__("./src/app/admin/sub-category/sub-category.component.html"),
            providers: [sub_category_service_1.SubCategoryService, category_service_1.CategoryService]
        }),
        __metadata("design:paramtypes", [sub_category_service_1.SubCategoryService,
            category_service_1.CategoryService])
    ], SubCategoryComponent);
    return SubCategoryComponent;
}());
exports.SubCategoryComponent = SubCategoryComponent;


/***/ }),

/***/ "./src/app/admin/topic/topic.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Topics\r\n        <small>CRUD</small>\r\n    </h1>\r\n</section>\r\n<section class=\"content container-fluid\">\r\n    <p-table [value]=\"topics\" selectionMode=\"single\" [(selection)]=\"selectedTopic\" (onRowSelect)=\"onRowSelect($event)\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Phase</th>\r\n                <th>Sub Category</th>\r\n                <th>Activity</th>\r\n                <th>Active</th>\r\n                <th>Has Question(s)</th>\r\n                <th>Has Target Filtering</th>\r\n                <th>Has Boundary Option</th>\r\n                <th>Delete</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData>\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td>{{rowData.Name}}</td>\r\n                <td>{{rowData.PhaseName}}</td>\r\n                <td>{{rowData.SubCategoryName}}</td>\r\n                <td>{{rowData.ActivityName}}</td>\r\n                <td>\r\n                    {{ rowData.IsActive ? \"Yes\" : \"No\" }}\r\n                </td>\r\n                <td>\r\n                    {{ rowData.HasQuestions ? \"Yes\" : \"No\" }}\r\n                </td>\r\n                <td>\r\n                    {{ rowData.HasTargetFiltering ? \"Yes\" : \"No\" }}\r\n                </td>\r\n                <td>\r\n                    {{ rowData.HasBoundaryOptions ? \"Yes\" : \"No\" }}\r\n                </td>\r\n                <td>\r\n                    <a class=\"btn-danger\" (click)=\"remove(rowData.TopicId)\">Remove</a>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n    <button (click)=\"addNew()\" class=\"m-t-20 btn btn-primary\">\r\n        <i class=\"fa fa-plus\"></i>&nbsp; Add</button>\r\n\r\n    <!-- edit modal -->\r\n    <p-dialog header=\"Topic Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"500\">\r\n        <div class=\"ui-g ui-fluid\" *ngIf=\"topic\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"name\">Name</label>\r\n                </div>\r\n                <div class=\"ui-g-8 p-0\">\r\n                    <input class=\"form-control\" required pInputText id=\"name\" [(ngModel)]=\"topic.Name\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"PhaceId\">Phase</label>\r\n                </div>\r\n                <div *ngIf='phases && phases.length > 0' class=\"form-group\" [ngClass]=\"{'has-error':PhaseId.invalid && PhaseId.touched}\"\r\n                    class=\"ui-g-8 p-0\">\r\n                    <select [(ngModel)]=\"topic.PhaseId\" #PhaseId=\"ngModel\" required class=\"form-control\" name=\"PhaseId\">\r\n                        <option *ngFor=\"let phase of phases\" [value]=\"phase.PhaseId\">{{phase.Name}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"SubCategoryId\">Sub Category</label>\r\n                </div>\r\n                <div *ngIf='subCategories && subCategories.length > 0' class=\"form-group\" [ngClass]=\"{'has-error':SubCategoryId.invalid && SubCategoryId.touched}\"\r\n                    class=\"ui-g-8 p-0\">\r\n                    <select [(ngModel)]=\"topic.SubCategoryId\" #SubCategoryId=\"ngModel\" required class=\"form-control\" name=\"SubCategoryId\">\r\n                        <option *ngFor=\"let subCategory of subCategories\" [value]=\"subCategory.SubCategoryId\">{{subCategory.Name}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"ActivityId\">Activity</label>\r\n                </div>\r\n                <div *ngIf='activities && activities.length > 0' class=\"form-group\" [ngClass]=\"{'has-error':ActivityId.invalid && ActivityId.touched}\"\r\n                    class=\"ui-g-8 p-0\">\r\n                    <select [(ngModel)]=\"topic.ActivityId\" #ActivityId=\"ngModel\" required class=\"form-control\" name=\"ActivityId\">\r\n                        <option *ngFor=\"let activity of activities\" [value]=\"activity.ActivityId\">{{activity.Name}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"IsActive\">Active</label>\r\n                </div>\r\n                <div class=\"ui-g-8 p-0\">\r\n                    <label>\r\n                        <input type=\"checkbox\" name=\"IsActive\" [(ngModel)]=\"topic.IsActive\">\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"HasTargetFiltering\">Has Target Filtering</label>\r\n                </div>\r\n                <div class=\"ui-g-8 p-0\">\r\n                    <label>\r\n                        <input type=\"checkbox\" name=\"HasTargetFiltering\" [(ngModel)]=\"topic.HasTargetFiltering\">\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"HasBoundaryOptions\">Has Boundary Option</label>\r\n                </div>\r\n                <div class=\"ui-g-8 p-0\">\r\n                    <label>\r\n                        <input type=\"checkbox\" name=\"HasBoundaryOptions\" [(ngModel)]=\"topic.HasBoundaryOptions\">\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <p-footer>\r\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                <button (click)=\"close()\" class=\"m-t-20 btn btn-danger\">\r\n                    <i class=\"fa fa-close\"></i>&nbsp; Cancel</button>\r\n                <button (click)=\"save()\" class=\"m-t-20 btn btn-primary\">\r\n                    <i class=\"fa fa-check\"></i>&nbsp; Save</button>\r\n            </div>\r\n        </p-footer>\r\n    </p-dialog>\r\n</section>"

/***/ }),

/***/ "./src/app/admin/topic/topic.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var topic_service_1 = __webpack_require__("./src/app/services/topic.service.ts");
var activity_service_1 = __webpack_require__("./src/app/services/activity.service.ts");
var phase_service_1 = __webpack_require__("./src/app/services/phase.service.ts");
var sub_category_service_1 = __webpack_require__("./src/app/services/sub-category.service.ts");
var TopicComponent = /** @class */ (function () {
    function TopicComponent(topicService, activityService, subCategoryService, phaseService) {
        var _this = this;
        this.topicService = topicService;
        this.activityService = activityService;
        this.subCategoryService = subCategoryService;
        this.phaseService = phaseService;
        this.displayDialog = false;
        this.saveCallback = function (result) {
            _this.getTopics();
        };
    }
    TopicComponent.prototype.ngOnInit = function () {
        this.getTopics();
        this.getPageData();
    };
    TopicComponent.prototype.remove = function (topicId) {
        var _this = this;
        if (!confirm('Are you sure?'))
            return;
        this.topicService.remove(topicId)
            .subscribe(function (result) { _this.getTopics(); });
    };
    TopicComponent.prototype.save = function () {
        if (this.isNew) {
            this.topicService.save(this.topic)
                .subscribe(this.saveCallback);
        }
        else {
            this.topicService.update(this.topic.TopicId, this.topic)
                .subscribe(this.saveCallback);
        }
        this.displayDialog = false;
    };
    TopicComponent.prototype.addNew = function () {
        this.displayDialog = true;
        this.isNew = true;
        this.topic = {};
    };
    TopicComponent.prototype.close = function () {
        this.displayDialog = false;
    };
    TopicComponent.prototype.onRowSelect = function (event) {
        this.isNew = false;
        this.topic = this.cloneTopic(event.data);
        this.displayDialog = true;
    };
    TopicComponent.prototype.cloneTopic = function (c) {
        var topic = {};
        for (var prop in c) {
            topic[prop] = c[prop];
        }
        return topic;
    };
    TopicComponent.prototype.getTopics = function () {
        var _this = this;
        this.topicService.getList()
            .subscribe(function (topics) { _this.topics = topics; });
    };
    TopicComponent.prototype.getPageData = function () {
        var _this = this;
        this.activityService.getList()
            .subscribe(function (activities) { _this.activities = activities; });
        this.subCategoryService.getList()
            .subscribe(function (subCategories) { _this.subCategories = subCategories; });
        this.phaseService.getList()
            .subscribe(function (phases) { _this.phases = phases; });
    };
    TopicComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'topics',
            template: __webpack_require__("./src/app/admin/topic/topic.component.html"),
            providers: [topic_service_1.TopicService, activity_service_1.ActivityService, sub_category_service_1.SubCategoryService, phase_service_1.PhaseService]
        }),
        __metadata("design:paramtypes", [topic_service_1.TopicService,
            activity_service_1.ActivityService,
            sub_category_service_1.SubCategoryService,
            phase_service_1.PhaseService])
    ], TopicComponent);
    return TopicComponent;
}());
exports.TopicComponent = TopicComponent;


/***/ }),

/***/ "./src/app/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\r\n    {{message.text}}\r\n</div>"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var alert_service_1 = __webpack_require__("./src/app/shared/alert.service.ts");
var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'alert',
            template: __webpack_require__("./src/app/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [alert_service_1.AlertService])
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<alert></alert>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var core_2 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            encapsulation: core_2.ViewEncapsulation.None
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/account/home/home.component.ts");
var index_component_1 = __webpack_require__("./src/app/index/index.component.ts");
var auth_guard_1 = __webpack_require__("./src/app/security/auth.guard.ts");
var admin_container_component_1 = __webpack_require__("./src/app/admin/container/admin-container.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/admin/dashboard/dashboard.component.ts");
var table_1 = __webpack_require__("./node_modules/primeng/table.js");
var dialog_1 = __webpack_require__("./node_modules/primeng/dialog.js");
var multiselect_1 = __webpack_require__("./node_modules/primeng/multiselect.js");
var editor_1 = __webpack_require__("./node_modules/primeng/editor.js");
var login_component_1 = __webpack_require__("./src/app/security/login/login.component.ts");
var signup_component_1 = __webpack_require__("./src/app/security/signup/signup.component.ts");
var busstop_component_1 = __webpack_require__("./src/app/busstop/busstop.component.ts");
var account_container_component_1 = __webpack_require__("./src/app/account/container/account-container.component.ts");
var admin_guard_1 = __webpack_require__("./src/app/security/admin.guard.ts");
var approval_component_1 = __webpack_require__("./src/app/admin/approval/approval.component.ts");
var sidenav_component_1 = __webpack_require__("./src/app/admin/sidenav/sidenav.component.ts");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var category_component_1 = __webpack_require__("./src/app/admin/category/category.component.ts");
var sub_category_component_1 = __webpack_require__("./src/app/admin/sub-category/sub-category.component.ts");
var phase_component_1 = __webpack_require__("./src/app/admin/phase/phase.component.ts");
var topic_component_1 = __webpack_require__("./src/app/admin/topic/topic.component.ts");
var article_component_1 = __webpack_require__("./src/app/admin/article/article.component.ts");
var result_menu_component_1 = __webpack_require__("./src/app/admin/result-menu/result-menu.component.ts");
var question_component_1 = __webpack_require__("./src/app/admin/question/question.component.ts");
var edit_question_component_1 = __webpack_require__("./src/app/admin/question/edit/edit-question.component.ts");
var filter_group_component_1 = __webpack_require__("./src/app/admin/filter-group/filter-group.component.ts");
var filters_component_1 = __webpack_require__("./src/app/admin/filters/filters.component.ts");
var filter_grid_component_1 = __webpack_require__("./src/app/admin/filter-grid/filter-grid.component.ts");
var boundary_component_1 = __webpack_require__("./src/app/admin/boundary/boundary.component.ts");
var boundary_option_component_1 = __webpack_require__("./src/app/admin/boundary-option/boundary-option.component.ts");
var boundary_option_grid_component_1 = __webpack_require__("./src/app/admin/boundary-option-grid/boundary-option-grid.component.ts");
var start_component_1 = __webpack_require__("./src/app/account/start/start.component.ts");
var wizard_component_1 = __webpack_require__("./src/app/account/wizard/wizard.component.ts");
var grid_component_1 = __webpack_require__("./src/app/account/grid/grid.component.ts");
var topics_component_1 = __webpack_require__("./src/app/account/topics/topics.component.ts");
var questions_component_1 = __webpack_require__("./src/app/account/questions/questions.component.ts");
var filters_front_component_1 = __webpack_require__("./src/app/account/filters/filters-front.component.ts");
var boundaries_front_component_1 = __webpack_require__("./src/app/account/boundaries/boundaries-front.component.ts");
var shared_data_1 = __webpack_require__("./src/app/services/shared-data.ts");
var result_component_1 = __webpack_require__("./src/app/account/result/result.component.ts");
var thankyou_component_1 = __webpack_require__("./src/app/account/thankyou/thankyou.component.ts");
var alert_component_1 = __webpack_require__("./src/app/alert/alert.component.ts");
var alert_service_1 = __webpack_require__("./src/app/shared/alert.service.ts");
var activity_component_1 = __webpack_require__("./src/app/admin/activity/activity.component.ts");
// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
var angular2_froala_wysiwyg_1 = __webpack_require__("./node_modules/angular2-froala-wysiwyg/index.js");
// import { QuillModule } from 'ngx-quill';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    // public components
                    { path: '', redirectTo: 'index', pathMatch: 'full' },
                    { path: 'index', component: index_component_1.IndexComponent },
                    { path: 'busstop', component: busstop_component_1.BusStopComponent },
                    { path: 'login', component: login_component_1.LoginComponent },
                    { path: 'signup', component: signup_component_1.SignUpComponent },
                    // authenticated user components
                    {
                        path: 'account',
                        component: account_container_component_1.AccountContainerComponent,
                        canActivate: [auth_guard_1.AuthGuard],
                        children: [
                            { path: '', redirectTo: 'home', pathMatch: 'full' },
                            { path: 'home', component: home_component_1.HomeComponent },
                            { path: 'start', component: start_component_1.StartComponent },
                            { path: 'grid/:id', component: grid_component_1.GridComponent },
                            { path: 'topics/:pid/:scid/:actid', component: topics_component_1.TopicsComponent },
                            { path: 'questions/:id', component: questions_component_1.QuestionsComponent },
                            { path: 'filters/:id', component: filters_front_component_1.FiltersFrontComponent },
                            { path: 'boundaries/:id', component: boundaries_front_component_1.BoundariesFrontComponent },
                            { path: 'result', component: result_component_1.ResultComponent },
                            { path: 'thankyou', component: thankyou_component_1.ThankYouComponent },
                            { path: '**', redirectTo: 'home' }
                        ]
                    },
                    // admin dashboard
                    {
                        path: 'admin',
                        component: admin_container_component_1.AdminContainerComponent,
                        canActivate: [admin_guard_1.AdminGuard],
                        children: [
                            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                            { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                            { path: 'approval', component: approval_component_1.ApprovalComponent },
                            { path: 'categories', component: category_component_1.CategoryComponent },
                            { path: 'subcategories', component: sub_category_component_1.SubCategoryComponent },
                            { path: 'phases', component: phase_component_1.PhaseComponent },
                            { path: 'activities', component: activity_component_1.ActivityComponent },
                            { path: 'topics', component: topic_component_1.TopicComponent },
                            { path: 'articles', component: article_component_1.ArticleComponent },
                            { path: 'resultmenu', component: result_menu_component_1.ResultMenuComponent },
                            { path: 'questions', component: question_component_1.QuestionComponent },
                            { path: 'questions/edit', component: edit_question_component_1.EditComponent },
                            { path: 'questions/edit/:id', component: edit_question_component_1.EditComponent },
                            { path: 'filters', component: filter_group_component_1.FilterGroupComponent },
                            { path: 'filters/details/:id', component: filters_component_1.FiltersComponent },
                            { path: 'boundaries', component: boundary_component_1.BoundaryComponent },
                            { path: 'boundaries/details/:id', component: boundary_option_component_1.BoundaryOptionComponent }
                        ]
                    },
                    { path: '**', redirectTo: 'index' }
                ]),
                table_1.TableModule,
                dialog_1.DialogModule,
                multiselect_1.MultiSelectModule,
                editor_1.EditorModule,
                angular2_froala_wysiwyg_1.FroalaEditorModule.forRoot(), angular2_froala_wysiwyg_1.FroalaViewModule.forRoot()
                // QuillModule
            ],
            declarations: [
                // front user components
                start_component_1.StartComponent,
                grid_component_1.GridComponent,
                topics_component_1.TopicsComponent,
                questions_component_1.QuestionsComponent,
                filters_front_component_1.FiltersFrontComponent,
                boundaries_front_component_1.BoundariesFrontComponent,
                result_component_1.ResultComponent,
                thankyou_component_1.ThankYouComponent,
                alert_component_1.AlertComponent,
                wizard_component_1.WizardComponent,
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                admin_container_component_1.AdminContainerComponent,
                signup_component_1.SignUpComponent,
                busstop_component_1.BusStopComponent,
                index_component_1.IndexComponent,
                account_container_component_1.AccountContainerComponent,
                // admin components
                approval_component_1.ApprovalComponent,
                sidenav_component_1.SideNavComponent,
                category_component_1.CategoryComponent,
                sub_category_component_1.SubCategoryComponent,
                activity_component_1.ActivityComponent,
                phase_component_1.PhaseComponent,
                topic_component_1.TopicComponent,
                article_component_1.ArticleComponent,
                result_menu_component_1.ResultMenuComponent,
                question_component_1.QuestionComponent,
                edit_question_component_1.EditComponent,
                filter_group_component_1.FilterGroupComponent,
                filters_component_1.FiltersComponent,
                filter_grid_component_1.FilterGridComponent,
                boundary_component_1.BoundaryComponent,
                boundary_option_component_1.BoundaryOptionComponent,
                boundary_option_grid_component_1.BoundaryOptionGridComponent
            ],
            providers: [
                auth_guard_1.AuthGuard,
                admin_guard_1.AdminGuard,
                shared_data_1.SharedDataService,
                alert_service_1.AlertService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/busstop/busstop.component.css":
/***/ (function(module, exports) {

module.exports = ".tac {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/busstop/busstop.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand active\" [routerLink]=\"['/home']\">Fiberfox</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li>\r\n                    <a [routerLink]=\"['/home']\">Home</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav pull-right\">\r\n                <li class=\"\">\r\n                    <a [routerLink]=\"['/login']\">Login</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/signup']\">Sign Up</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"col-sm-6 col-sm-offset-3\">\r\n    <div class=\"shadowed p-100 tac\">\r\n        <h4>\r\n            You have successfully registered. Wait for the administrator to approve it.\r\n        </h4>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/busstop/busstop.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BusStopComponent = /** @class */ (function () {
    function BusStopComponent() {
    }
    BusStopComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'busstop',
            template: __webpack_require__("./src/app/busstop/busstop.component.html"),
            styles: [__webpack_require__("./src/app/busstop/busstop.component.css")]
        })
    ], BusStopComponent);
    return BusStopComponent;
}());
exports.BusStopComponent = BusStopComponent;


/***/ }),

/***/ "./src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand active\" [routerLink]=\"['/account/home']\">Fiberfox</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li>\r\n          <a [routerLink]=\"['/account/home']\">Home</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav pull-right\">\r\n        <li class=\"\">\r\n          <a [routerLink]=\"['/login']\">Login</a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/signup']\">Sign Up</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 bigcrow\">    \r\n    <!--start of content panel-->\r\n    <div class=\"row m-t-35\">\r\n      <div class=\"col-md-10 col-md-offset-1\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"bs-component\">\r\n                <h2 class=\"text-info text-center\">Get honest feedback from your coworkers and friends</h2>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <router-outlet></router-outlet>\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--end of content panel-->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/security/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var IndexComponent = /** @class */ (function () {
    function IndexComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        var user = this.authService.getLoggedInUser();
        if (user && user.success) {
            this.router.navigate(['/account/home']);
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    IndexComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'index',
            template: __webpack_require__("./src/app/index/index.component.html"),
            providers: [auth_service_1.AuthService]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;


/***/ }),

/***/ "./src/app/security/admin.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AdminGuard = /** @class */ (function () {
    function AdminGuard(router) {
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        var auth = JSON.parse(localStorage.getItem('currentUser'));
        if (auth && auth.user.IsAdmin == true) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/home']);
        return false;
    };
    AdminGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AdminGuard);
    return AdminGuard;
}());
exports.AdminGuard = AdminGuard;


/***/ }),

/***/ "./src/app/security/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/security/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var AuthService = /** @class */ (function (_super) {
    __extends(AuthService, _super);
    function AuthService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    AuthService.prototype.getLoggedInUser = function () {
        return JSON.parse(localStorage.getItem('currentUser') || "{}");
    };
    AuthService.prototype.login = function (email, password) {
        return this.http.post(this.hostAPI + '/authenticate', JSON.stringify({ email: email, password: password }), this.options())
            .map(function (response) {
            // login successful if there's a token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthService.prototype.createUser = function (newUser) {
        return this.post(this.hostAPI + '/account/', newUser // TODO Do we need RequestOptions?
        , new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': 'application/json' }) }))
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuthService);
    return AuthService;
}(base_http_service_1.BaseService));
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/security/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/security/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand active\" [routerLink]=\"['/home']\">Fiberfox</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li>\r\n                    <a [routerLink]=\"['/home']\">Home</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav pull-right\">\r\n                <li class=\"\">\r\n                    <a [routerLink]=\"['/login']\">Login</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/signup']\">Sign Up</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"container-fluid m-t-100\">\r\n    <div class=\"col-sm-4 col-sm-offset-4 shadowed\">\r\n        <div class=\"p-100\">\r\n            <h2>Login</h2>\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                    <label for=\"email\">Email</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\r\n                    <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n                    />\r\n                    <a [routerLink]=\"['/signup']\" class=\"btn btn-link\">Sign Up</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/security/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/security/auth.service.ts");
var alert_service_1 = __webpack_require__("./src/app/shared/alert.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, alertService, router, authService) {
        this.route = route;
        this.alertService = alertService;
        this.router = router;
        this.authService = authService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/account/home';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model.email, this.model.password)
            .subscribe(function (data) {
            if (localStorage.getItem('currentUser'))
                _this.router.navigate([_this.returnUrl]);
            else {
                _this.alertService.error("Provided email or password is incorrect");
            }
        }, function (error) {
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'login',
            template: __webpack_require__("./src/app/security/login/login.component.html"),
            styles: [__webpack_require__("./src/app/security/login/login.component.css")],
            providers: [auth_service_1.AuthService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            alert_service_1.AlertService,
            router_1.Router,
            auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/security/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/security/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand active\" [routerLink]=\"['/home']\">Fiberfox</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li>\r\n                    <a [routerLink]=\"['/home']\">Home</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav pull-right\">\r\n                <li class=\"\">\r\n                    <a [routerLink]=\"['/login']\">Login</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/signup']\">Sign Up</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"col-sm-6 col-sm-offset-3\">\r\n    <div class=\"shadowed p-100\">\r\n        <form name=\"regForm\" #form=\"ngForm\">\r\n            <fieldset>\r\n                <legend>\r\n                    <h2>Register Here</h2>\r\n                </legend>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':Email.invalid && Email.touched}\">\r\n                            <label class=\"form-control-label\" for=\"email\">Email</label>\r\n                            <input [(ngModel)]=\"model.Email\" #Email=\"ngModel\" required class=\"form-control\" name=\"email\" placeholder=\"Enter the email\">\r\n                        </div>\r\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':Username.invalid && Username.touched}\">\r\n                            <label class=\"form-control-label\" for=\"UserName\">User Name</label>\r\n                            <input [(ngModel)]=\"model.Username\" #Username=\"ngModel\" required class=\"form-control\" name=\"Username\" placeholder=\"Enter the username\">\r\n                        </div>\r\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':Password.invalid && Password.touched}\">\r\n                            <label class=\"form-control-label\" for=\"Password\">Password</label>\r\n                            <input [(ngModel)]=\"model.Password\" #Password=\"ngModel\" required class=\"form-control\" name=\"Password\" placeholder=\"Enter the password\"\r\n                                type=\"password\">\r\n                        </div>\r\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':RePassword.invalid && RePassword.touched}\">\r\n                            <label class=\"form-control-label\" for=\"ConfirmPassword\">Re Password</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"model.RePassword\" #RePassword=\"ngModel\" required name=\"ConfirmPassword\" placeholder=\"Confirm password\"\r\n                                type=\"password\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div *ngIf='industryFields && industryFields.length > 0' class=\"form-group\" [ngClass]=\"{'has-error':IndustryFieldId.invalid && IndustryFieldId.touched}\">\r\n                            <label class=\"form-control-label\" for=\"IndustryField\">Industry Field</label>\r\n                            <select [(ngModel)]=\"model.IndustryFieldId\" #IndustryFieldId=\"ngModel\" required class=\"form-control\" name=\"IndustryField\">\r\n                                <option *ngFor=\"let field of industryFields\" [value]=\"field.IndustryFieldId\">{{field.FieldName}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div *ngIf='activityFields && activityFields.length > 0' class=\"form-group\" [ngClass]=\"{'has-error':ActivityFieldId.invalid && ActivityFieldId.touched}\">\r\n                            <label class=\"form-control-label\" for=\"ActivityField\">Activity Field</label>\r\n                            <select [(ngModel)]=\"model.ActivityFieldId\" #ActivityFieldId=\"ngModel\" required class=\"form-control\" name=\"ActivityFieldId\">\r\n                                <option *ngFor=\"let field of activityFields\" [value]=\"field.ActivityFieldId\">{{field.FieldName}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':ActivityField.invalid && ActivityField.touched}\">\r\n                            <label class=\"form-control-label\" for=\"ActivityField\">Specify ActivityField</label>\r\n                            <input [(ngModel)]=\"model.ActivityField\" #ActivityField=\"ngModel\" required class=\"form-control\" name=\"ActivityField\" placeholder=\"Enter Activity Field\"\r\n                                type=\"text\">\r\n                        </div>\r\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':CompanyName.invalid && CompanyName.touched}\">\r\n                            <label class=\"form-control-label\" for=\"CompanyName\">Company Name</label>\r\n                            <input [(ngModel)]=\"model.CompanyName\" #CompanyName=\"ngModel\" required class=\"form-control\" name=\"CompanyName\" placeholder=\"Enter Company Name\"\r\n                                type=\"text\">\r\n                        </div>\r\n                        <div *ngIf='experienceLevels && experienceLevels.length > 0' class=\"form-group\" [ngClass]=\"{'has-error':ExperienceLevelId.invalid && ExperienceLevelId.touched}\">\r\n                            <label class=\"form-control-label\" for=\"ExperienceLevel\">Experience Level</label>\r\n                            <select [(ngModel)]=\"model.ExperienceLevelId\" #ExperienceLevelId=\"ngModel\" required class=\"form-control\" name=\"ExperienceLevel\">\r\n                                <option *ngFor=\"let level of experienceLevels\" [value]=\"level.ExperienceLevelId\">{{level.LevelName}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"pull-right\">\r\n                        <input class=\"btn btn-primary \" (click)=\"createUser()\" value=\"Register\" [disabled]='!form.valid'>\r\n                        <a class=\"btn btn-default\" onclick=\"return confirm('Are you sure to leave? The entered data will not be saved.')\" href=\"/home\">Cancel</a>\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n        <div class=\"m-b\">\r\n            Alread have an account ?\r\n            <a class=\"text-danger\" [routerLink]=\"['/login']\">Login here</a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/security/signup/signup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/security/auth.service.ts");
var signup_model_1 = __webpack_require__("./src/app/security/signup/signup.model.ts");
var industry_field_service_1 = __webpack_require__("./src/app/services/industry-field.service.ts");
var experience_level_service_1 = __webpack_require__("./src/app/services/experience-level.service.ts");
var activity_field_service_1 = __webpack_require__("./src/app/services/activity-field.service.ts");
var alert_service_1 = __webpack_require__("./src/app/shared/alert.service.ts");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService, industryFieldService, activityFieldService, experienceLevelService, alertService, router) {
        this.authService = authService;
        this.industryFieldService = industryFieldService;
        this.activityFieldService = activityFieldService;
        this.experienceLevelService = experienceLevelService;
        this.alertService = alertService;
        this.router = router;
        this.model = new signup_model_1.SignUpModel();
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.getPageData();
    };
    SignUpComponent.prototype.createUser = function () {
        var _this = this;
        this.authService.createUser(this.model)
            .subscribe(function (response) {
            console.log(response);
            if (response && response.success) {
                _this.alertService.success("Successfully registered. Login now");
                _this.router.navigate(['/login']);
            }
            else {
                _this.alertService.error("Registration failed! Please come back later.");
            }
        });
    };
    SignUpComponent.prototype.getPageData = function () {
        var _this = this;
        this.industryFieldService.getList()
            .subscribe(function (fields) { return _this.industryFields = fields; });
        this.activityFieldService.getList()
            .subscribe(function (fields) { return _this.activityFields = fields; });
        this.experienceLevelService.getList()
            .subscribe(function (levels) { return _this.experienceLevels = levels; });
    };
    SignUpComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'signup',
            template: __webpack_require__("./src/app/security/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/security/signup/signup.component.css")],
            providers: [auth_service_1.AuthService, industry_field_service_1.IndustryFieldService, activity_field_service_1.ActivityFieldService, experience_level_service_1.ExperienceLevelService]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            industry_field_service_1.IndustryFieldService,
            activity_field_service_1.ActivityFieldService,
            experience_level_service_1.ExperienceLevelService,
            alert_service_1.AlertService,
            router_1.Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;


/***/ }),

/***/ "./src/app/security/signup/signup.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SignUpModel = /** @class */ (function () {
    function SignUpModel() {
    }
    return SignUpModel;
}());
exports.SignUpModel = SignUpModel;


/***/ }),

/***/ "./src/app/services/activity-field.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var ActivityFieldService = /** @class */ (function (_super) {
    __extends(ActivityFieldService, _super);
    function ActivityFieldService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ActivityFieldService.prototype.getById = function (id) {
        return this.get(this.hostAPI + '/actfield/' + id, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    ActivityFieldService.prototype.getList = function () {
        return this.get(this.hostAPI + '/actfields/', this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    ActivityFieldService.prototype.save = function (newPost) {
        return this.post(this.hostAPI + '/actfields/', newPost, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    ActivityFieldService.prototype.update = function (id, postData) {
        return this.patch(this.hostAPI + '/actfield/' + id, postData, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    ActivityFieldService.prototype.remove = function (id) {
        return this.delete(this.hostAPI + '/actfield/' + id, this.authorisedOptions());
    };
    ActivityFieldService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ActivityFieldService);
    return ActivityFieldService;
}(base_http_service_1.BaseService));
exports.ActivityFieldService = ActivityFieldService;


/***/ }),

/***/ "./src/app/services/activity.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var default_service_1 = __webpack_require__("./src/app/services/default.service.ts");
var ActivityService = /** @class */ (function (_super) {
    __extends(ActivityService, _super);
    function ActivityService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ActivityService.prototype.getById = function (id) {
        return _super.prototype.getById.call(this, id, 'activity');
    };
    ActivityService.prototype.getList = function () {
        return _super.prototype.getList.call(this, 'activities');
    };
    ActivityService.prototype.save = function (data) {
        return _super.prototype.save.call(this, data, 'activities');
    };
    ActivityService.prototype.update = function (id, data) {
        return _super.prototype.update.call(this, id, data, 'activity');
    };
    ActivityService.prototype.remove = function (id) {
        return _super.prototype.remove.call(this, id, 'activity');
    };
    ActivityService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ActivityService);
    return ActivityService;
}(default_service_1.DefaultService));
exports.ActivityService = ActivityService;


/***/ }),

/***/ "./src/app/services/article.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var default_service_1 = __webpack_require__("./src/app/services/default.service.ts");
var ArticleService = /** @class */ (function (_super) {
    __extends(ArticleService, _super);
    function ArticleService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ArticleService.prototype.getById = function (id) {
        return _super.prototype.getById.call(this, id, 'article');
    };
    ArticleService.prototype.getList = function () {
        return _super.prototype.getList.call(this, 'articles');
    };
    ArticleService.prototype.save = function (data) {
        return _super.prototype.save.call(this, data, 'articles');
    };
    ArticleService.prototype.update = function (id, data) {
        return _super.prototype.update.call(this, id, data, 'article');
    };
    ArticleService.prototype.remove = function (id) {
        return _super.prototype.remove.call(this, id, 'article');
    };
    ArticleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ArticleService);
    return ArticleService;
}(default_service_1.DefaultService));
exports.ArticleService = ArticleService;


/***/ }),

/***/ "./src/app/services/boundary-option-value.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var default_service_1 = __webpack_require__("./src/app/services/default.service.ts");
var BoundaryOptionValueService = /** @class */ (function (_super) {
    __extends(BoundaryOptionValueService, _super);
    function BoundaryOptionValueService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    BoundaryOptionValueService.prototype.getById = function (id) {
        return _super.prototype.getById.call(this, id, 'resultmenu');
    };
    BoundaryOptionValueService.prototype.getList = function (id) {
        return this.get(this.hostAPI + "/boundaryvalues/" + id, this.authorisedOptions())
            .map(this.convertData);
    };
    BoundaryOptionValueService.prototype.save = function (data) {
        return _super.prototype.save.call(this, data, 'boundaryvalue');
    };
    BoundaryOptionValueService.prototype.convertData = function (res) {
        var response = res.json();
        var retValue = {
            resultMenu: [],
            boundaryOptionValues: []
        };
        if (!response || !response.length || response.length === 0) {
            return retValue;
        }
        var boundaryOptionId = response[0].BoundaryOptionId;
        var boundaryOptionId2 = -1;
        var fv = { boundaryText: "", resultMenu: [] };
        response.forEach(function (element, i) {
            if (boundaryOptionId == element.BoundaryOptionId) {
                retValue.resultMenu.push({ ResultMenuName: element.ResultMenuName, ResultMenuId: element.ResultMenuId });
                boundaryOptionId = element.BoundaryOptionId;
            }
            if (boundaryOptionId2 == element.BoundaryOptionId && i < response.length) {
                fv.resultMenu.push({
                    BoundaryOptionValueId: element.BoundaryOptionValueId,
                    AlgorithmValue: element.AlgorithmValue,
                    ResultMenuId: element.ResultMenuId,
                    BoundaryOptionId: element.BoundaryOptionId
                });
            }
            else {
                fv = { boundaryText: element.BoundaryText, resultMenu: [] };
                fv.resultMenu.push({
                    BoundaryOptionValueId: element.BoundaryOptionValueId,
                    AlgorithmValue: element.AlgorithmValue,
                    ResultMenuId: element.ResultMenuId,
                    BoundaryOptionId: element.BoundaryOptionId
                });
                retValue.boundaryOptionValues.push(fv);
            }
            boundaryOptionId2 = element.BoundaryOptionId;
        });
        return retValue;
    };
    BoundaryOptionValueService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BoundaryOptionValueService);
    return BoundaryOptionValueService;
}(default_service_1.DefaultService));
exports.BoundaryOptionValueService = BoundaryOptionValueService;


/***/ }),

/***/ "./src/app/services/boundary-option.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var BoundaryOptionService = /** @class */ (function (_super) {
    __extends(BoundaryOptionService, _super);
    function BoundaryOptionService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    BoundaryOptionService.prototype.getById = function (id) {
        return this.get(this.hostAPI + '/boundaryoptions/' + id, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    BoundaryOptionService.prototype.getList = function (id) {
        return this.get(this.hostAPI + "/boundaryoptions/" + id, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    BoundaryOptionService.prototype.save = function (newCategory) {
        return this.post(this.hostAPI + '/boundaryoptions/', newCategory, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    BoundaryOptionService.prototype.update = function (id, postData) {
        return this.patch(this.hostAPI + '/boundaryoption/' + id, postData, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    BoundaryOptionService.prototype.remove = function (id) {
        return this.delete(this.hostAPI + '/boundaryoption/' + id, this.authorisedOptions());
    };
    BoundaryOptionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BoundaryOptionService);
    return BoundaryOptionService;
}(base_http_service_1.BaseService));
exports.BoundaryOptionService = BoundaryOptionService;


/***/ }),

/***/ "./src/app/services/boundary.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var BoundaryService = /** @class */ (function (_super) {
    __extends(BoundaryService, _super);
    function BoundaryService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    BoundaryService.prototype.getById = function (id) {
        return this.get(this.hostAPI + '/boundary/' + id, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    BoundaryService.prototype.getList = function () {
        return this.get(this.hostAPI + '/boundaries/', this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    BoundaryService.prototype.save = function (newCategory) {
        return this.post(this.hostAPI + '/boundaries/', newCategory, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    BoundaryService.prototype.update = function (id, postData) {
        return this.patch(this.hostAPI + '/boundary/' + id, postData, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    BoundaryService.prototype.remove = function (id) {
        return this.delete(this.hostAPI + '/boundary/' + id, this.authorisedOptions());
    };
    BoundaryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BoundaryService);
    return BoundaryService;
}(base_http_service_1.BaseService));
exports.BoundaryService = BoundaryService;


/***/ }),

/***/ "./src/app/services/category.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var CategoryService = /** @class */ (function (_super) {
    __extends(CategoryService, _super);
    function CategoryService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    CategoryService.prototype.getById = function (id) {
        return this.get(this.hostAPI + '/category/' + id, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getList = function () {
        return this.get(this.hostAPI + '/categories/', this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.save = function (newCategory) {
        return this.post(this.hostAPI + '/categories/', newCategory, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.update = function (id, postData) {
        return this.patch(this.hostAPI + '/category/' + id, postData, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.remove = function (id) {
        return this.delete(this.hostAPI + '/category/' + id, this.authorisedOptions());
    };
    CategoryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CategoryService);
    return CategoryService;
}(base_http_service_1.BaseService));
exports.CategoryService = CategoryService;


/***/ }),

/***/ "./src/app/services/default.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var DefaultService = /** @class */ (function (_super) {
    __extends(DefaultService, _super);
    function DefaultService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    DefaultService.prototype.getById = function (id, path) {
        return this.get(this.hostAPI + "/" + path + "/" + id, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    DefaultService.prototype.getList = function (path) {
        return this.get(this.hostAPI + "/" + path, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    DefaultService.prototype.save = function (data, path) {
        return this.post(this.hostAPI + "/" + path, data, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    DefaultService.prototype.update = function (id, data, path) {
        return this.patch(this.hostAPI + "/" + path + "/" + id, data, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    DefaultService.prototype.remove = function (id, path) {
        return this.delete(this.hostAPI + "/" + path + "/" + id, this.authorisedOptions());
    };
    DefaultService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DefaultService);
    return DefaultService;
}(base_http_service_1.BaseService));
exports.DefaultService = DefaultService;


/***/ }),

/***/ "./src/app/services/experience-level.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var ExperienceLevelService = /** @class */ (function (_super) {
    __extends(ExperienceLevelService, _super);
    function ExperienceLevelService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ExperienceLevelService.prototype.getById = function (id) {
        return this.get(this.hostAPI + '/level/' + id, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    ExperienceLevelService.prototype.getList = function () {
        return this.get(this.hostAPI + '/levels/', this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    ExperienceLevelService.prototype.save = function (newPost) {
        return this.post(this.hostAPI + '/levels/', newPost, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    ExperienceLevelService.prototype.update = function (id, postData) {
        return this.patch(this.hostAPI + '/level/' + id, postData, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    ExperienceLevelService.prototype.remove = function (id) {
        return this.delete(this.hostAPI + '/level/' + id, this.authorisedOptions());
    };
    ExperienceLevelService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ExperienceLevelService);
    return ExperienceLevelService;
}(base_http_service_1.BaseService));
exports.ExperienceLevelService = ExperienceLevelService;


/***/ }),

/***/ "./src/app/services/filter-group.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var FilterGroupService = /** @class */ (function (_super) {
    __extends(FilterGroupService, _super);
    function FilterGroupService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    FilterGroupService.prototype.getById = function (id) {
        return this.get(this.hostAPI + '/filtergroup/' + id, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    FilterGroupService.prototype.getList = function () {
        return this.get(this.hostAPI + '/filtergroups/', this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    FilterGroupService.prototype.save = function (newCategory) {
        return this.post(this.hostAPI + '/filtergroups/', newCategory, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    FilterGroupService.prototype.update = function (id, postData) {
        return this.patch(this.hostAPI + '/filtergroup/' + id, postData, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    FilterGroupService.prototype.remove = function (id) {
        return this.delete(this.hostAPI + '/filtergroup/' + id, this.authorisedOptions());
    };
    FilterGroupService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FilterGroupService);
    return FilterGroupService;
}(base_http_service_1.BaseService));
exports.FilterGroupService = FilterGroupService;


/***/ }),

/***/ "./src/app/services/filter-value.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var default_service_1 = __webpack_require__("./src/app/services/default.service.ts");
var FilterValueService = /** @class */ (function (_super) {
    __extends(FilterValueService, _super);
    function FilterValueService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    FilterValueService.prototype.getById = function (id) {
        return _super.prototype.getById.call(this, id, 'resultmenu');
    };
    FilterValueService.prototype.getList = function (id) {
        return this.get(this.hostAPI + "/filtervalues/" + id, this.authorisedOptions())
            .map(this.convertData);
    };
    FilterValueService.prototype.save = function (data) {
        return _super.prototype.save.call(this, data, 'filtervalue');
    };
    FilterValueService.prototype.update = function (id, data) {
        return _super.prototype.update.call(this, id, data, 'resultmenu');
    };
    FilterValueService.prototype.remove = function (id) {
        return _super.prototype.remove.call(this, id, 'resultmenu');
    };
    FilterValueService.prototype.convertData = function (res) {
        var response = res.json();
        var retValue = {
            resultMenu: [],
            filterValues: []
        };
        if (!response || !response.length || response.length === 0) {
            return retValue;
        }
        var targetFilterId = response[0].TargetFilterId;
        var targetFilterId2 = -1;
        var fv = { filterText: "", resultMenu: [] };
        response.forEach(function (element, i) {
            if (targetFilterId == element.TargetFilterId) {
                retValue.resultMenu.push({ ResultMenuName: element.ResultMenuName, ResultMenuId: element.ResultMenuId });
                targetFilterId = element.TargetFilterId;
            }
            if (targetFilterId2 == element.TargetFilterId && i < response.length) {
                fv.resultMenu.push({
                    TargetFilterValueId: element.TargetFilterValueId,
                    AlgorithmValue: element.AlgorithmValue,
                    ResultMenuId: element.ResultMenuId,
                    TargetFilterId: element.TargetFilterId
                });
            }
            else {
                fv = { filterText: element.FilterText, resultMenu: [] };
                fv.resultMenu.push({
                    TargetFilterValueId: element.TargetFilterValueId,
                    AlgorithmValue: element.AlgorithmValue,
                    ResultMenuId: element.ResultMenuId,
                    TargetFilterId: element.TargetFilterId
                });
                retValue.filterValues.push(fv);
            }
            targetFilterId2 = element.TargetFilterId;
        });
        return retValue;
    };
    FilterValueService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FilterValueService);
    return FilterValueService;
}(default_service_1.DefaultService));
exports.FilterValueService = FilterValueService;


/***/ }),

/***/ "./src/app/services/filters.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var FilterService = /** @class */ (function (_super) {
    __extends(FilterService, _super);
    function FilterService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    FilterService.prototype.getById = function (id) {
        return this.get(this.hostAPI + '/filters/' + id, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    FilterService.prototype.getList = function (id) {
        return this.get(this.hostAPI + "/filters/" + id, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    FilterService.prototype.save = function (newCategory) {
        return this.post(this.hostAPI + '/filters/', newCategory, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    FilterService.prototype.update = function (id, postData) {
        return this.patch(this.hostAPI + '/filter/' + id, postData, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    FilterService.prototype.remove = function (id) {
        return this.delete(this.hostAPI + '/filter/' + id, this.authorisedOptions());
    };
    FilterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FilterService);
    return FilterService;
}(base_http_service_1.BaseService));
exports.FilterService = FilterService;


/***/ }),

/***/ "./src/app/services/industry-field.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var IndustryFieldService = /** @class */ (function (_super) {
    __extends(IndustryFieldService, _super);
    function IndustryFieldService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    IndustryFieldService.prototype.getById = function (id) {
        return this.get(this.hostAPI + '/indfield/' + id, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    IndustryFieldService.prototype.getList = function () {
        return this.get(this.hostAPI + '/indfields/', this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    IndustryFieldService.prototype.save = function (newPost) {
        return this.post(this.hostAPI + '/indfields/', newPost, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    IndustryFieldService.prototype.update = function (id, postData) {
        return this.patch(this.hostAPI + '/indfield/' + id, postData, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    IndustryFieldService.prototype.remove = function (id) {
        return this.delete(this.hostAPI + '/indfield/' + id, this.authorisedOptions());
    };
    IndustryFieldService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], IndustryFieldService);
    return IndustryFieldService;
}(base_http_service_1.BaseService));
exports.IndustryFieldService = IndustryFieldService;


/***/ }),

/***/ "./src/app/services/phase.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var PhaseService = /** @class */ (function (_super) {
    __extends(PhaseService, _super);
    function PhaseService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    PhaseService.prototype.getById = function (id) {
        return this.get(this.hostAPI + '/phase/' + id, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    PhaseService.prototype.getList = function () {
        return this.get(this.hostAPI + '/phases/', this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    PhaseService.prototype.save = function (newPhase) {
        return this.post(this.hostAPI + '/phases/', newPhase, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    PhaseService.prototype.update = function (id, postData) {
        return this.patch(this.hostAPI + '/phase/' + id, postData, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    PhaseService.prototype.remove = function (id) {
        return this.delete(this.hostAPI + '/phase/' + id, this.authorisedOptions());
    };
    PhaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PhaseService);
    return PhaseService;
}(base_http_service_1.BaseService));
exports.PhaseService = PhaseService;


/***/ }),

/***/ "./src/app/services/question.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var default_service_1 = __webpack_require__("./src/app/services/default.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var question_model_1 = __webpack_require__("./src/app/admin/question/edit/question-model.ts");
var QuestionService = /** @class */ (function (_super) {
    __extends(QuestionService, _super);
    function QuestionService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    QuestionService.prototype.getById = function (id) {
        return this.get(this.hostAPI + "/question/" + id, this.authorisedOptions())
            .map(function (res) {
            var response = res.json();
            var result = Array.isArray(response) ? response[0] : response;
            var question = new question_model_1.QuestionModel();
            question.QuestionId = result.QuestionId;
            question.QuestionText = result.QuestionText;
            question.TopicId = result.TopicId;
            question.HasTargetFiltering = result.HasTargetFiltering;
            question.HasBoundaryOptions = result.HasBoundaryOptions;
            question.ResultMenuItems = [];
            if (Array.isArray(response)) {
                response.forEach(function (element) {
                    if (element && element.ResultMenuId && element.ResultMenuName) {
                        var resultMenuItem = {
                            "ResultMenuId": element.ResultMenuId,
                            "Name": element.ResultMenuName
                        };
                        question.ResultMenuItems.push(resultMenuItem);
                    }
                });
            }
            return question;
        });
    };
    QuestionService.prototype.getList = function () {
        return _super.prototype.getList.call(this, 'questions');
    };
    QuestionService.prototype.save = function (data) {
        return _super.prototype.save.call(this, data, 'questions');
    };
    QuestionService.prototype.update = function (id, data) {
        return _super.prototype.update.call(this, id, data, 'question');
    };
    QuestionService.prototype.remove = function (id) {
        return _super.prototype.remove.call(this, id, 'question');
    };
    QuestionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], QuestionService);
    return QuestionService;
}(default_service_1.DefaultService));
exports.QuestionService = QuestionService;


/***/ }),

/***/ "./src/app/services/result-menu.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var default_service_1 = __webpack_require__("./src/app/services/default.service.ts");
var ResultMenuService = /** @class */ (function (_super) {
    __extends(ResultMenuService, _super);
    function ResultMenuService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ResultMenuService.prototype.getById = function (id) {
        return _super.prototype.getById.call(this, id, 'resultmenu');
    };
    ResultMenuService.prototype.getList = function () {
        return _super.prototype.getList.call(this, 'menu');
    };
    ResultMenuService.prototype.save = function (data) {
        return _super.prototype.save.call(this, data, 'menu');
    };
    ResultMenuService.prototype.update = function (id, data) {
        return _super.prototype.update.call(this, id, data, 'resultmenu');
    };
    ResultMenuService.prototype.remove = function (id) {
        return _super.prototype.remove.call(this, id, 'resultmenu');
    };
    ResultMenuService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ResultMenuService);
    return ResultMenuService;
}(default_service_1.DefaultService));
exports.ResultMenuService = ResultMenuService;


/***/ }),

/***/ "./src/app/services/shared-data.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var shared_data_model_1 = __webpack_require__("./src/app/shared/shared-data.model.ts");
var SharedDataService = /** @class */ (function () {
    function SharedDataService() {
        this.data = new shared_data_model_1.SharedData();
    }
    SharedDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SharedDataService);
    return SharedDataService;
}());
exports.SharedDataService = SharedDataService;


/***/ }),

/***/ "./src/app/services/sub-category.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var SubCategoryService = /** @class */ (function (_super) {
    __extends(SubCategoryService, _super);
    function SubCategoryService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    SubCategoryService.prototype.getById = function (id) {
        return this.get(this.hostAPI + '/subcategory/' + id, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    SubCategoryService.prototype.getList = function () {
        return this.get(this.hostAPI + '/subcategories/', this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    SubCategoryService.prototype.save = function (newPost) {
        return this.post(this.hostAPI + '/subcategories/', newPost, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    SubCategoryService.prototype.update = function (id, postData) {
        return this.patch(this.hostAPI + '/subcategory/' + id, postData, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    SubCategoryService.prototype.remove = function (id) {
        return this.delete(this.hostAPI + '/subcategory/' + id, this.authorisedOptions());
    };
    SubCategoryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SubCategoryService);
    return SubCategoryService;
}(base_http_service_1.BaseService));
exports.SubCategoryService = SubCategoryService;


/***/ }),

/***/ "./src/app/services/topic.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var TopicService = /** @class */ (function (_super) {
    __extends(TopicService, _super);
    function TopicService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    TopicService.prototype.getById = function (id) {
        return this.get(this.hostAPI + '/topic/' + id, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    TopicService.prototype.getList = function () {
        return this.get(this.hostAPI + '/topics/', this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    TopicService.prototype.save = function (newTopic) {
        return this.post(this.hostAPI + '/topics/', newTopic, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    TopicService.prototype.update = function (id, postData) {
        return this.patch(this.hostAPI + '/topic/' + id, postData, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    TopicService.prototype.remove = function (id) {
        return this.delete(this.hostAPI + '/topic/' + id, this.authorisedOptions());
    };
    TopicService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TopicService);
    return TopicService;
}(base_http_service_1.BaseService));
exports.TopicService = TopicService;


/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var base_http_service_1 = __webpack_require__("./src/app/shared/base-http.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    UserService.prototype.getUserById = function (userId) {
        return this.get(this.hostAPI + '/user/' + userId, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUsers = function () {
        return this.get(this.hostAPI + '/users/', this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.changeApproval = function (userId, isApproved) {
        return this.post(this.hostAPI + '/approval/' + userId, { "IsApproved": isApproved }, this.authorisedOptions())
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.remove = function (userId) {
        return this.delete(this.hostAPI + '/user/' + userId, this.authorisedOptions());
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}(base_http_service_1.BaseService));
exports.UserService = UserService;


/***/ }),

/***/ "./src/app/shared/alert.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new Subject_1.Subject();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AlertService);
    return AlertService;
}());
exports.AlertService = AlertService;


/***/ }),

/***/ "./src/app/shared/base-http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var BaseService = /** @class */ (function () {
    function BaseService(http) {
        this.http = http;
        // protected host: string = 'http://localhost:3000';
        this.host = 'https://fiberfox-backend-ipek.herokuapp.com';
        this.hostAPI = this.host + '/api';
    }
    BaseService.prototype.get = function (url, options) {
        return this.http.get(url, options);
    };
    BaseService.prototype.post = function (url, postData, options) {
        return this.http.post(url, postData, options);
    };
    BaseService.prototype.patch = function (url, body, options) {
        return this.http.patch(url, body, options);
    };
    BaseService.prototype.delete = function (url, options) {
        return this.http.delete(url, options);
    };
    BaseService.prototype.options = function () {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return new http_1.RequestOptions({ headers: headers });
    };
    BaseService.prototype.authorisedOptions = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({
                'x-access-token': currentUser.token,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': '*'
            });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    BaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BaseService);
    return BaseService;
}());
exports.BaseService = BaseService;


/***/ }),

/***/ "./src/app/shared/shared-data.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedData = /** @class */ (function () {
    function SharedData() {
        this.subCategory = null;
        this.topic = null;
        this.answer = null;
        this.filters = [];
        this.boundaries = [];
    }
    SharedData.prototype.hasFilters = function () {
        if (this.answer && this.answer.HasTargetFiltering)
            return true;
        if (this.topic && this.topic.HasTargetFiltering)
            return true;
    };
    SharedData.prototype.hasBoundaries = function () {
        if (this.answer && this.answer.HasBoundaryOptions)
            return true;
        if (this.topic && this.topic.HasBoundaryOptions)
            return true;
    };
    return SharedData;
}());
exports.SharedData = SharedData;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map