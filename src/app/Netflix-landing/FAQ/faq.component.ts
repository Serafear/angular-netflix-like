import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  standalone: true,
  imports: [CommonModule],
  encapsulation:
    ViewEncapsulation.None /*this allow me to use the class underline below*/,
})
export class FaqComponent {
  faqs = [
    {
      question: "Netflix, qu'est ce que c'est?",
      answer:
        "Netflix est un service de streaming qui propose une vaste sélection de séries, films, animes, documentaires et autres programmes sur des milliers d'appareils connectés à Internet. ",
      answerSecond:
        'Regardez tout ce que vous voulez, quand vous voulez, à un prix mensuel très attractif. Découvrez de nouveaux films et séries chaque semaine, il y en a pour tous les goûts !',
      isOpen: false,
    },
    {
      question: 'Combien coûte Netflix ?',
      answer:
        'Regardez Netflix sur votre smartphone, tablette, Smart TV, ordinateur ou appareil de streaming, le tout pour un tarif mensuel fixe. Les offres vont de 5,99 € à 17,99 € par mois. Pas de contrat ni de frais supplémentaires. ',
      answerSecond: '',
      isOpen: false,
    },
    {
      question: "Qu'est ce qui est différent dans Essentiel avec pub ?",
      answer:
        "Essentiel avec pub vous permet de profiter de films et séries à un prix plus attractif. Vous pouvez regarder vos programmes préférés sur n'importe quel appareil avec de courtes pauses pub. Cette offre ne donne pas accès aux téléchargements, et quelques films et séries ne sont pas disponibles en raison de restrictions liées aux licences. Certaines restrictions sur l'emplacement et les appareils s'appliquent également. <span class='underline'>En savoir plus.</span> ",
      answerSecond: '',
      isOpen: false,
    },
  ];

  toggleFAQ(faqToOpen) {
    this.faqs.forEach((faq) => {
      if (faq === faqToOpen) {
        faq.isOpen = !faq.isOpen;
      } else {
        faq.isOpen = false;
      }
    });
  }
}
