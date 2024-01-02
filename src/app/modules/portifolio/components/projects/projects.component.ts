import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../../Interface/IProjects';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
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
        },
      ]
    },
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
        },
      ]
    },
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
        },
      ]
    },
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
        },
      ]
    },
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
        },
      ]
    },
    
  ])

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
} 
