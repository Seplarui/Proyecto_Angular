import { Component, OnInit } from "angular2/core";
import { RouteParams } from "angular2/router";
import { RestauranteService } from "../services/restaurante.service";
import { Restaurante } from "../model/restaurante";

@Component({

    selector: "restaurantes-detail",
    templateUrl: "app/view/restaurantes-detail.html",
    providers: [RestauranteService]

})

export class RestaurantesDetailComponent  {

}