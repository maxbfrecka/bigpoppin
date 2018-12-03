import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})
export class TestcompComponent implements OnInit {

  constructor() { 

  	function random_rgba() {
    	var o = Math.round, r = Math.random, s = 255;
    	return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
		}
  }
 
 random_rgba = function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }

  color0=this.random_rgba();
  color1=this.random_rgba();
  color2=this.random_rgba();
  color3=this.random_rgba();
  color4=this.random_rgba();
  color5=this.random_rgba();
  color6=this.random_rgba();
  color7=this.random_rgba();
  color8=this.random_rgba();
  color9=this.random_rgba();
  color10=this.random_rgba();
  color11=this.random_rgba();
  color12=this.random_rgba();
  color13=this.random_rgba();
  color14=this.random_rgba();

  ngOnInit() {
  }

}
