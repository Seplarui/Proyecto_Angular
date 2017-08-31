import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES, RouteConfig, Router } from "angular2/router";
import { RestauranteService } from "../services/restaurante.service";
import { Restaurante } from "../model/restaurante";

@Component({

    selector: "restaurantes-list",
    templateUrl: "app/view/restaurantes-list.html",
    providers: [RestauranteService]

})

export class RestaurantesListComponent {
    //PROPIEDADES

    public titulo: string = "Listado de Restaurantes";
    public restaurantes: Restaurante[];
    public status: string;
    public errorMessage;


    constructor(private _restauranteService: RestauranteService) { }


    ngOninit() {
        this.getRestaurantes();
        console.log("restaurantes-list component cargado");

    }

    getRestaurantes() {
        this._restauranteService.getRestaurantes()
            .subscribe(
            result => {

                this.restaurantes = result.data; //Datos en json que nos llega.
                this.status = result.status;//Datos en json que nos llega.

                if (this.status !== "success") {
                    alert("Error en el servidor");
                }
            },
            error => {
                this.errorMessage = <any>error;

                if (this.errorMessage !== null) {

                    console.log(this.errorMessage);
                    alert("Error en la petición");

                }

            }
            );//Recoger el resultado.
    }




}