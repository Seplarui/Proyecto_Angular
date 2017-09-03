import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES, RouteConfig, Router } from "angular2/router";
import { RestaurantesListComponent } from "./components/restaurantes-lists.component";
import { RestaurantesDetailComponent } from './components/restaurantes-detail.component';
@Component({

    selector: "my-app",
    templateUrl: "app/view/home.html",
    directives: [RestaurantesListComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', name: "Home", component: RestaurantesListComponent, useAsDefault: true },
    { path: '/restaurante/:id', name: "Restaurante", component: RestaurantesDetailComponent }
])

export class AppComponent {
    //PROPIEDADES

    public titulo: string = "Restaurantes";



}