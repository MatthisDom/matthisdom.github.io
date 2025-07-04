import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OpacityChangeOnScrollDirective } from '../../directives/opacity-change-on-scroll';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, OpacityChangeOnScrollDirective],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
