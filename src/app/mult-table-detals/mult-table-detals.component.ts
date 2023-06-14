import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mult-table-detals',
  templateUrl: './mult-table-detals.component.html',
  styleUrls: ['./mult-table-detals.component.css']
})
export class MultTableDetalsComponent implements OnInit {
  n: number;

  constructor(private route: ActivatedRoute) {
    this.n = 0;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) =>{
      this.n = Number(params.get('n'));
    });
  }
}