import { Component ,OnInit} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    $("#bun").click(function(){
      console.log("eslam");
    })
    $(document).ready(function(){
      $("#exampleModal").modal("show");
    })
  }
  title = 'line-one';
}
