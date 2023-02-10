import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  standalone: true,
  imports: [CommonModule],
})

export class FaqComponent {
  faqs = [
    {
      question: 'What is Angular?',
      answer: 'Angular is a JavaScript framework for building web applications. It is maintained by Google and is used for building dynamic, single-page applications.',
      isOpen: false
    },
    {
      question: 'What are the benefits of using Angular?',
      answer: 'There are many benefits to using Angular, including its ability to simplify the development process, improve code quality, and increase development speed. Additionally, Angular has a large and active community, making it easy to find support and resources when needed.',
      isOpen: false
    }
  ];

  toggleFAQ(faq) {
    faq.isOpen = !faq.isOpen;
  }
}





