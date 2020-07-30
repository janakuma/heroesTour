import { Component, OnInit, Input, Output } from '@angular/core';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero ;

  constructor() { }

  ngOnInit() {
  }

}
