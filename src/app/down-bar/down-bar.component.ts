import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-down-bar',
  templateUrl: './down-bar.component.html',
  styleUrls: ['./down-bar.component.css']
})
export class DownBarComponent implements OnInit {
  text = 'Alberto Perez, 2021';

  constructor() { }

  ngOnInit() {
  }

}