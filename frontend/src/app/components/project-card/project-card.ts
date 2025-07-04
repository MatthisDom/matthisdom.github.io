import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard 
{
  showModal = false; 
  @Input() title: string = 'Titre du projet';
  @Input() description: string = 'Description du aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa projet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  @Input() imageUrl: string = './assets/image/project-placeholder.jpg'; // Placeholder image URL
  @Input() link: string = '/projets/1'; // Link to the project details page
  @Input() tag : string = 'Web Development'; // Tag for the project 
  @Input() logo: string = './assets/image/partenaires/LOGO_MIAGE.png';
}
