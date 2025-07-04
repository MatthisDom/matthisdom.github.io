import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Meta } from '@angular/platform-browser';
import { FadeInOnScrollDirective } from '../../directives/fade-in-on-scroll';
import { FadeInOnLoadDirective } from '../../directives/fade-in-on-load';
import { RouterModule } from '@angular/router';
import { RightFadeInOnScrollDirective } from '../../directives/right-fade-in-on-scroll';
import { LeftFadeInOnScrollDirective } from '../../directives/left-fade-in-on-scroll';
import { BottomFadeInOnScrollDirective } from '../../directives/bottom-fade-in-on-scroll';
import { TeamCard } from '../team-card/team-card';
import { CountUpDirective } from '../../directives/count-up.directive';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, FadeInOnScrollDirective, FadeInOnLoadDirective,RouterModule, RightFadeInOnScrollDirective, LeftFadeInOnScrollDirective, BottomFadeInOnScrollDirective, TeamCard, CountUpDirective],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit
{
  teamMembers = [
    {
      name: 'Jean Dupont',
      role: 'Développeur Full Stack',
      image: './assets/image/team/jean-dupont.jpg',
      linkedin: 'https://www.linkedin.com/in/jean-dupont'
    },
    {
      name: 'Marie Curie',
      role: 'Chef de Projet',
      image: './assets/image/team/marie-curie.jpg',
      linkedin: 'https://www.linkedin.com/in/marie-curie'
    },
    {
      name: 'Pierre Martin',
      role: 'Designer UI/UX',
      image: './assets/image/team/pierre-martin.jpg',
      linkedin: 'https://www.linkedin.com/in/pierre-martin'
    },
    {
      name: 'Sophie Durand',
      role: 'Analyste Fonctionnel',
      image: './assets/image/team/sophie-durand.jpg',
      linkedin: 'https://www.linkedin.com/in/sophie-durand'
    },
    {
      name: 'Lucas Bernard',
      role: 'Développeur Mobile',
      image: './assets/image/team/lucas-bernard.jpg',
      linkedin: 'https://www.linkedin.com/in/lucas-bernard'
    },
    {
      name: 'Emma Lefevre',
      role: 'Testeur QA',
      image: './assets/image/team/emma-lefevre.jpg',
      linkedin: 'https://www.linkedin.com/in/emma-lefevre'
    }
  ];

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'description', content: 'Bienvenue sur notre site ! apprenez en plus sur qui nous sommes, nos services et notre équipe !' },
      { name: 'keywords', content: 'home, welcome, features, services' },
    ]);
  }
}
