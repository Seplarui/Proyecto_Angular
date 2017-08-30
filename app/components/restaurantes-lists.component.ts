import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES, RouteConfig, Router } from "angular2/router";
import { RestauranteService } from "../services/restaurante.service";

@Component({

    selector: "restaurantes-list",
    templateUrl: "app/view/restaurantes-list.html",
    providers: [RestauranteService]

})

export class RestaurantesListComponent {
    //PROPIEDADES

    public titulo: string = "Listado de Restaurantes";

    constructor(private _restauranteService: RestauranteService) { }


    ngOninit() {
        console.log("restaurantes-list component cargado");

    }




}