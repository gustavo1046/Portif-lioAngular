import { Component } from '@angular/core';
import { HeaderComponent } from '../../portifolio/components/header/header.component';
import { KnowledgeComponent } from '../../portifolio/components/knowledge/knowledge.component';
import { ExperiencesComponent } from '../../portifolio/components/experiences/experiences.component';
import { ProjectsComponent } from '../../portifolio/components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,
            KnowledgeComponent,
            ExperiencesComponent,
            ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
