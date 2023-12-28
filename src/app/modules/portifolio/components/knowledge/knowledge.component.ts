import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../../Interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<Iknowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conehcimento de HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conehcimento de CSS3'
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conehcimento de HTML5'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conehcimento de javascript'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conehcimento de Nodejs'
    },
  ])
}
