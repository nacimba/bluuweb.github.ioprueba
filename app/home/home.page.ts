import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slidesOptions = {
    slidesPerView: 1.5
  }
  constructor(private router: Router) {}

 
  navigateToRegistro(){

this.router.navigate(['/registro']);

  }

  navigateToVenta(){

    this.router.navigate(['/venta']);
    
      }
  navigateToConsulta(){

    this.router.navigate(['/consulta']);
          }
   navigateToRegistroqr(){
     this.router.navigate(['/codigoqr']);
            
              }

}
