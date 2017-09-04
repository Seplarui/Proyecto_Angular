System.register(["angular2/core", "angular2/router", "../services/restaurante.service", "../model/restaurante"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, restaurante_service_1, restaurante_1;
    var RestauranteEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (restaurante_service_1_1) {
                restaurante_service_1 = restaurante_service_1_1;
            },
            function (restaurante_1_1) {
                restaurante_1 = restaurante_1_1;
            }],
        execute: function() {
            RestauranteEditComponent = (function () {
                function RestauranteEditComponent(_restauranteService, _routeParams, _router) {
                    this._restauranteService = _restauranteService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.titulo = "Editar Restaurante";
                }
                RestauranteEditComponent.prototype.onSubmit = function () {
                    /*
                    this._restauranteService.addRestaurante(this.restaurante)
                        .subscribe(
                        response => {
                            this.status = response.status;
                            if (this.status !== "success") {
                                alert("Error en el servidor");
                            }
                        },
                        error => {
            
                            this.errorMessage = <any>error;
                            if (this.errorMessage !== null) {
                                this.errorMessage = <any>error;
                                console.log(this.errorMessage, this.restaurante);
                                alert("Error en la petición.");
            
                            }
            
                        }
                        );
            
                    this._router.navigate(["Home"]);
                    */
                };
                RestauranteEditComponent.prototype.ngOnInit = function () {
                    console.log("component restauranteadd cargado");
                    this.restaurante = new restaurante_1.Restaurante(parseInt(this._routeParams.get("id")), this._routeParams.get("nombre"), this._routeParams.get("direccion"), this._routeParams.get("descripcion"), "null", this._routeParams.get("precio"));
                    //peticion ajax
                    this.getRestaurante();
                };
                RestauranteEditComponent.prototype.getRestaurante = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this._restauranteService.getRestaurante(id).subscribe(function (response) {
                        _this.restaurante = response.data;
                        _this.status = response.status;
                        if (_this.status !== "success") {
                            _this._router.navigate(['Home']);
                        }
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                            alert("Error en la petición");
                        }
                    });
                };
                RestauranteEditComponent.prototype.callPrecio = function (value) {
                    this.restaurante.precio = value;
                };
                RestauranteEditComponent = __decorate([
                    core_1.Component({
                        selector: "restaurante-edit",
                        templateUrl: "app/view/restaurante-edit.html",
                        providers: [restaurante_service_1.RestauranteService]
                    }), 
                    __metadata('design:paramtypes', [restaurante_service_1.RestauranteService, router_1.RouteParams, router_1.Router])
                ], RestauranteEditComponent);
                return RestauranteEditComponent;
            }());
            exports_1("RestauranteEditComponent", RestauranteEditComponent);
        }
    }
});
//# sourceMappingURL=restaurante-edit.component.js.map