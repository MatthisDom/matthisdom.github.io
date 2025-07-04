import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mentions-legal',
  imports: [Header, Footer, CommonModule],
  templateUrl: './mentions-legal.html',
  styleUrl: './mentions-legal.css'
})
export class MentionsLegal implements OnInit 
{
  @Input() PresidentName: string = 'John Doe';
  @Input() PresidentEmail: string = 'JohnDoe@gmail.com';

  @Input() HebergerName: string = 'Hébergeur SARL';
  @Input() HebergerAddress: string = '123 Rue de l\'Hébergement'; 
  constructor(private meta: Meta) 
  {

  }

  ngOnInit(): void 
  {
    this.meta.addTags([
      { name: 'description', content: 'les mentions légales' },
      { name: 'keywords', content: 'legal mention' },
    ]);
  }
}
