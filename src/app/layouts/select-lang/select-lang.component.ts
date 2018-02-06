import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-lang',
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.css']
})
export class SelectLangComponent implements OnInit {
  
  public langNumber: any[] = [ 1,2,3];

  constructor() { }

  ngOnInit() {
  }

}
