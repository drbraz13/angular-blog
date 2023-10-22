import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import{dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  photoCover:string = "https://legadodamarvel.com.br/wp-content/uploads/2023/10/legadodamarvel-homem-de-ferro-4-iron-man-fanart.webp"
  contentTitle:string = "Novo filme do Homem de Ferro sera lancado em 2024"
  contentDescription:string = "Novo filme do Homem de Ferro sera lancado em 2024, com a volta do ator Robert Downey Jr. "
  private id:string | null = "0"  

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")   
         )
     
     this.setValuesToComponent(this.id)    
  }
  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    
    this.contentTitle = result.title
    this.contentDescription = result.description     
    this.photoCover = result.photoCover 

   }
}
