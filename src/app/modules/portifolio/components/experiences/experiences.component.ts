import { Component, signal } from '@angular/core';
import { IExperiences } from '../../../Interface/IExperiences';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedor FullStack | Salon Sense",
        p: "Março 2023 - Dezembro 2023"
      },
      text: "<p>Desenvolver um site que ofereça uma interface simples para o salão de beleza, possuindo todos os processos básicos para o proprietário gerenciar agendamentos, anotações e receita gerada por período.</p>",
    },
    {
      summary: {
        strong: "Desenvolvedor Python | Scoutfy",
        p: "Fevereiro 2022 - Abril 2022"
      },
      text: "<p>Desenvolver robôs específicos para fazer raspagens de informações de sites e organizá-los em planilhas para tratamento de informações</p>",
    },
    {
      summary: {
        strong: "DBA Oracle | Conexos",
        p: "Julho 2022 - Dezembro 2023"
      },
      text: "<p>Desenvolver Query específicas com foco em performance para a confecção de relatórios visuais a partir da ferramenta Jasper Reports</p>",
    },
  ]);
}
