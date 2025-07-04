import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Meta } from '@angular/platform-browser';
import { TeamCard } from '../team-card/team-card';
import { LeftFadeInOnScrollDirective } from '../../directives/left-fade-in-on-scroll';
import { RightFadeInOnScrollDirective } from '../../directives/right-fade-in-on-scroll';
import { LeftFadeInOnLoadDirective } from '../../directives/left-fade-in-on-load';
import { RightFadeInOnLoadDirective } from '../../directives/right-fade-in-on-load';
import { BottomFadeInOnScrollDirective } from '../../directives/bottom-fade-in-on-scroll';
import { FadeInOnLoadDirective } from '../../directives/fade-in-on-load';

@Component({
  selector: 'app-presentation',
  imports: [Header, Footer, TeamCard,BottomFadeInOnScrollDirective,RightFadeInOnScrollDirective, LeftFadeInOnScrollDirective,FadeInOnLoadDirective],
  templateUrl: './presentation.html',
  styleUrl: './presentation.css'
})
export class Presentation implements OnInit 
{
  constructor(private meta: Meta) 
  {

  }

  ngOnInit(): void 
  {
    this.meta.addTags([
      { name: 'description', content: 'Apprenez en plus sur les Juniors entreprises, nous et notre équipe' },
      { name: 'keywords', content: 'about, team, junior entreprise, MIAGE' },
    ]);
  }
}
