import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-a1-co-lubie-robic',
  templateUrl: './a1-co-lubie-robic.component.html',
  styleUrls: ['./a1-co-lubie-robic.component.scss']
})



export class A1CoLubieRobicComponent {
points = 0;
answered = 0;
//@ViewChild('reset5') resetAnswers: ElementRef | undefined;
@ViewChildren('reset, reset2, reset3, reset4, reset5', {read: ElementRef}) childComp:QueryList<ElementRef> | undefined






  checkAnswer(event: any) {
    const answer = event.target.dataset.answer;
    const element = event.target
    const parent = event.target.parentElement;
    if (answer === 'correct') {
      element.classList.add('correct')
     parent.classList.add('disable')
     this.points++;
     this.answered++;
    } else if (answer === 'false') {
      element.classList.add('false')
      parent.classList.add('disable')
      this.answered++;
    } else {
      console.log('error')
    }
  }

  restartTest() {
    this.childComp?.forEach(x => {
      x.nativeElement.classList.remove('disable')
      const children = x.nativeElement.children
      const getEachChild = [...children]
      getEachChild.forEach(btn => {
        btn.classList.remove('correct')
        btn.classList.remove('false')
      })
    })
    this.points = 0;
    this.answered = 0;
  }



}


