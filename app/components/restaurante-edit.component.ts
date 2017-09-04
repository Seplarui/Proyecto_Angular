import { Component, OnInit } from "angular2/core";
import { Router, RouteParams } from "angular2/router";
import { RestauranteService } from "../services/restaurante.service";
import { Restaurante } from "../model/restaurante";

@Component({
    selector: "restaurante-edit",
    templateUrl: "app/view/restaurante-edit.html",
    providers: [RestauranteService]
})

export class RestauranteEditComponent implements OnInit {

    public titulo = "Editar Restaurante";
    public restaurante: Restaurante;
    public errorMessage: string;
    public status: string;

    constructor(
        private _restauranteService: RestauranteService,
        private _routeParams: RouteParams,
        private _router: Router
    ) { }

    onSubmit() {
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
    }

    ngOnInit() {

        console.log("component restauranteadd cargado");

        this.restaurante = new Restaurante(
            parseInt(this._routeParams.get("id")),
            this._routeParams.get("nombre"),
            this._routeParams.get("direccion"),
            this._routeParams.get("descripcion"),
            "null",
            this._routeParams.get("precio")
        );
        //peticion ajax
        this.getRestaurante();
    }

    getRestaurante() {
        let id = this._routeParams.get("id");
        this._restauranteService.getRestaurante(id).subscribe(
            response => {
                this.restaurante = response.data;
                this.status = response.status;
                if (this.status !== "success") {
                    this._router.navigate(['Home']);
                }

            },
            error => {
                this.errorMessage = <any>error;

                if (this.errorMessage !== null) {
                    console.log(this.errorMessage);
                    alert("Error en la petición");
                }

            }
        );
    }

    callPrecio(value) {
        this.restaurante.precio = value;
    }

}