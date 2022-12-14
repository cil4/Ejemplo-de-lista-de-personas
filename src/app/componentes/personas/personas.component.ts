import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = []

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.getAllPersonas()
    //let persona1 = new Persona("Herman", "Boro", 28)
    //this.personas.push(persona1)
    //this.personas.push(new Persona("Ricardo", "Perez", 55))
    //this.personas.push(new Persona("Maria", "Torres", 22))
  }
 getAllPersonas():void{
   this.personas = this.personaService.getAllPersonas()
  }
  borrarPersonaDeLista(personaParaBorrar:Persona){
    this.personas = this.personas.filter(p => p.nombre !== personaParaBorrar.nombre)
  }
}
