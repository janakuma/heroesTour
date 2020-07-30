import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';

import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  targetName?: string = '';

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Hero Component: Selected hero id ${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  sendHi(hero: Hero) {
    this.targetName = this.heroService.sayHi(hero.name);

    console.log(this.targetName);

  }

}