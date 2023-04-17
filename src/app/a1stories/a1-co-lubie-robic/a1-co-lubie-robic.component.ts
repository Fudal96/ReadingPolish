import { Component } from '@angular/core';

@Component({
  selector: 'app-a1-co-lubie-robic',
  templateUrl: './a1-co-lubie-robic.component.html',
  styleUrls: ['./a1-co-lubie-robic.component.scss']
})
export class A1CoLubieRobicComponent {

points = 0;






  checkAnswer(event: any) {
    const answer = event.target.dataset.answer;
    const element = event.target
    const parent = event.target.parentElement;
    if (answer === 'correct') {
      element.classList.add('correct')
     parent.classList.add('disable')
     this.points++;
     console.log(this.points)
    } else if (answer === 'false') {
      element.classList.add('false')
      parent.classList.add('disable')
    } else {
      console.log('error')
    }
  }



}


