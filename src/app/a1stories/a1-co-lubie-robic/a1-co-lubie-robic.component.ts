import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-a1-co-lubie-robic',
  templateUrl: './a1-co-lubie-robic.component.html',
  styleUrls: ['./a1-co-lubie-robic.component.scss']
})



export class A1CoLubieRobicComponent {
points = 0;
answered = 0;
@ViewChild('appearBack') appearBack: ElementRef | undefined;
@ViewChild('appearBack2') appearBack2: ElementRef | undefined;
@ViewChildren('reset, reset2, reset3, reset4, reset5', {read: ElementRef}) childComp:QueryList<ElementRef> | undefined


sentence = [
  'Moim'
];

sentence2 = [
  'Bardzo'
];


/////// Exercise 1 Below ///////////////////////////////

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
  /////// Exercise 2 Below Sentence 1 ///////////////////////////////

  removeWord(event: any) {
    const value = event.target.innerText
    this.sentence.forEach((element, index) => {
      if (element === value && index != 0) this.sentence.splice(index, 1)
    })
    const children = this.appearBack?.nativeElement.children
    const getEachChild = [...children]
    getEachChild.forEach(x => {
      if (x.value === value) {
        x.classList.remove('disappear')
      }
    })

  }


  addWord(event: any) {
    const word = event.target.value
    this.sentence.push(word)
    const wordClicked = event.target
    wordClicked.classList.add('disappear')
    this.checkOrder()
  }


  checkOrder() {
    if (this.sentence[1] === 'największym' && this.sentence[2] === 'hobby' && this.sentence[3] === 'jest' && this.sentence[4] === 'malarstwo') {
      console.log('itworks')
    } else if (this.sentence.length === 5) {
      console.log('wrong order')
    }
  }

  /////// Exercise 2 Below Sentence 2 ///////////////////////////////

  removeWord2(event: any) {
    const value = event.target.innerText
    this.sentence2.forEach((element, index) => {
      if (element === value && index != 0) this.sentence2.splice(index, 1)
    })
    const children = this.appearBack2?.nativeElement.children
    const getEachChild = [...children]
    getEachChild.forEach(x => {
      if (x.value === value) {
        x.classList.remove('disappear')
      }
    })

  }


  addWord2(event: any) {
    const word = event.target.value
    this.sentence2.push(word)
    const wordClicked = event.target
    wordClicked.classList.add('disappear')
    this.checkOrder2()
  }


  checkOrder2() {
    if (this.sentence2[1] === 'lubię' && this.sentence2[2] === 'jeździć' && this.sentence2[3] === 'na' && this.sentence2[4] === 'rowerze') {
      console.log('itworks2')
    } else if (this.sentence2.length === 5) {
      console.log('wrong order2')
    }
  }

}


