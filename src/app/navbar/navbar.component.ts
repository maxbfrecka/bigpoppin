import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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

  navColor0=this.random_rgba();
  navColor1=this.random_rgba();
  navColor2=this.random_rgba();
  navColor3=this.random_rgba();
  navColor4=this.random_rgba();
  navColor5=this.random_rgba();
  navColor6=this.random_rgba();
  navColor7=this.random_rgba();
  navColor8=this.random_rgba();
  navColor9=this.random_rgba();
  navColor10=this.random_rgba();
  navColor11=this.random_rgba();
  navColor12=this.random_rgba();
  navColor13=this.random_rgba();
  navColor14=this.random_rgba();

  ngOnInit() {
  }

}
