import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//var sqlite3 = require('sqlite3').verbose();
var sqlite3 = require('sqlite3');


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

  buttonClick(){
     var db =  new sqlite3.Database('chain.sqlite3');
     console.log(db);
  }

 createTable() {
    console.log("createTable lorem");
    //db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)", insertRows);
}
}
