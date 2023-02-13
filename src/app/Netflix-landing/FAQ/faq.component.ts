import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkLineComponent } from '../../Netflix-landing/Dark-gray-line/dark.component';
import { InputBoxComponent } from '../Input-box/Input.component'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  standalone: true,
  imports: [CommonModule, DarkLineComponent, InputBoxComponent],
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
      answerSecond: "",
      isOpen: false,
    },
    {
      question: "Où puis-je regarder Netflix ?",
      answer:
        "Netflix, c'est où vous voulez, quand vous voulez. Connectez-vous à votre compte pour regarder Netflix en ligne sur netflix.com depuis votre ordinateur ou tout appareil connecté à Internet avec l'application Netflix, comme les Smart TV, smartphones, tablettes, lecteurs de streaming et consoles de jeu.",
      answerSecond: "Nous pouvez aussi télécharger vos séries préférées avec l'application iOS, Android ou Windows 10. Téléchargez des titres pour les regarder sur votre appareil mobile, même sans connexion Internet. Emportez Netflix partout avec vous.",
      isOpen: false,
    },
    {
      question: "Comment puis-je annuler mon offre ?",
      answer:
        "Netflix offre une grande souplesse. Pas de contrat compliqué. Sans engagement. Deux clics suffisent pour annuler votre compte en ligne. Pas de frais d'annulation : ouvrez ou fermez votre compte à tout moment.",
      answerSecond: "",
      isOpen: false,
    },
    {
      question: "Que puis-je regarder sur Netflix ?",
      answer:
        "Netflix propose un vaste catalogue comprenant notamment des longs-métrages, des documentaires, des séries, des animes et des programmes originaux Netflix primés. Regardez Netflix à volonté, quand vous le voulez.",
      answerSecond: "",
      isOpen: false,
    },
    {
      question: "Est-ce que Netflix est adapté aux enfants ?",
      answer:
        "Netflix Jeunesse est inclus dans votre abonnement et offre un meilleur contrôle aux parents, ainsi qu'un espace dédié aux enfants, avec des films et des séries destinés à toute la famille.",
      answerSecond: "Les profils Jeunesse comportent des fonctionnalités de contrôle parental avec code PIN permettant de modifier la catégorie d'âge des contenus que vos enfants peuvent regarder et de bloquer des titres spécifiques.",
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
