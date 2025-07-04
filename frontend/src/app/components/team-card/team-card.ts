import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'team-card',
  imports: [CommonModule],
  templateUrl: './team-card.html',
  styleUrl: './team-card.css'
})
export class TeamCard 
{
  @Input() name: string = 'John Doe';
  @Input() JMCrole: string = 'Président';
  @Input() image: string = '';
  @Input() imageAlt: string = '';
  @Input() linkedin: string = 'https://linkedin.com/in/johndoe';
}
