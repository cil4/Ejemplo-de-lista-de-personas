import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[]=[]
  constructor() { }

  getAllPersonas(): Persona[]{
    let persona1 = new Persona("Herman", "Boro", 28)
    this.personas.push(persona1)
    this.personas.push(new Persona("Sara", "Diaz", 43))
    this.personas.push(new Persona("Lale", "Esposito", 30))

    return this.personas
  }
  //solo un ejemplo de los servicios que se pueden ofrecer
  removePersona(persona:Persona):void{
    
  }
}
