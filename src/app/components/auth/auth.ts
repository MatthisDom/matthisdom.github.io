import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth implements OnInit 
{
  constructor(private meta: Meta) 
  {

  }

  ngOnInit(): void 
  {
    this.meta.addTags([
      { name: 'robots', content: 'noindex' },
    ]);
  }
}
