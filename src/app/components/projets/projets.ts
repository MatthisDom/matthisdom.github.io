import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ProjectCard } from '../project-card/project-card';
import { CommonModule } from '@angular/common';
import { FadeInOnLoadDirective } from '../../directives/fade-in-on-load';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-projets',
  imports: [Header,Footer, ProjectCard,CommonModule,FadeInOnLoadDirective],
  templateUrl: './projets.html',
  styleUrl: './projets.css'
})
export class Projets implements OnInit
{
  constructor(private meta: Meta){} 
  ngOnInit(): void 
  {
    this.meta.addTags([
      { name: 'description', content: "Voici l'intégralité des projets réalisé pour nos clients"},
      { name: 'keywords', content: "junior miage concept, projets, clients, webapp, application"}
    ]);
  }
  projects = [
    { title: 'Projet 1', description: 'Description du projet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl: '' },
    { title: 'Projet 2', description: '', imageUrl: '' },
    { title: 'Projet 3', description: 'Description du projet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl: '' },
    { title: 'Projet 4', description: '', imageUrl: '' },
    { title: 'Projet 5', description: 'Description du projet 5', imageUrl: '' },
    { title: 'Projet 6', description: 'Description du projet 6', imageUrl: '' },
    { title: 'Projet 7', description: 'Description du projet 7', imageUrl: '' },
    { title: 'Projet 8', description: 'Description du projet 8', imageUrl: '' },
    { title: 'Projet 9', description: 'Description du projet 9', imageUrl: '' },
    // Ajoute ici tous tes projets réels
  ];
  pageSize = 6;
  currentPage = 1;

  get totalPages() {
    return Math.ceil(this.projects.length / this.pageSize);
  }

  get paginatedProjects() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.projects.slice(start, start + this.pageSize);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  prevPage() { this.goToPage(this.currentPage - 1); }
  nextPage() { this.goToPage(this.currentPage + 1); }
}
