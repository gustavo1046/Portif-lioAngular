import { Component, signal } from '@angular/core';
import { IProjects } from '../../../Interface/IProjects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'vida Fullstack',
      width: '100px',
      height: '51px', 
      description: '<p>Explore o fascinante mundo do desenvolvimento web do meu blog dedicado a vida fullstack</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        }
      ]
    }
  ])
} 
