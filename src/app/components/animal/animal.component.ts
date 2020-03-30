import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnimalesService } from '../../servicios/animales.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html'
})
export class AnimalComponent  {

  animal:any = {};
  constructor(private activatedRouter:ActivatedRoute, private _animalesService:AnimalesService) { 
      this.activatedRouter.params.subscribe(params=>{
        this.animal=this._animalesService.getAnimal(params['id']);
       /* console.log(this.animal);*/
      })

  }

 

}
