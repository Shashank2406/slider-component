import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  box=[];
  value=0;
  ngOnInit(){
  //Initialise the Array  
    var i;
    for(i = 0;i<46;i++) {
        this.box[i]=i*2;
    }
    this.box[i]=95;
    this.box[i+1]=100;
  }
  changeZoom(event,value){
    //Value of the slider 
    //console.log(this.box[value])
  }
    //Button event Handling
  button(event,sign)
      {
          //console.log(this.value);
          if(sign==1&&this.value>0)
          {
              this.value=this.value-1;
          }
          else
            if(sign==2&&this.value<47)
            {
              this.value=this.value+1;
            }
    }
}
