import {
    Component,
    OnInit,
    Input,
    ViewEncapsulation,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    ViewChild,
    ContentChild,
    ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],

  encapsulation:ViewEncapsulation.Emulated //None,Native ,Element
})
export class ServerElementComponent implements OnInit ,OnChanges ,DoCheck ,AfterContentInit ,AfterContentChecked ,AfterViewInit ,AfterViewChecked{
  //animal = '🐰';

  @Input('srvElement') element : {type:string, name:string,content:string};
  @Input() name : string;
  @ViewChild('heading') header : ElementRef;
  @ContentChild('contentParagraph') paragraph : ElementRef;

  constructor() {
      console.log('constructor called');
  }
  ngOnChanges(changes:SimpleChanges){
      console.log('ngOnChanges called');
      console.log(changes);

  }
  ngOnInit() {
      console.log('ngOnInit called');
      console.log('Text Content' +this.header.nativeElement.textContent);
      console.log('Text Content of paragraph' +this.paragraph.nativeElement.textContent);
  }

   ngDoCheck() {
        console.log('ngDoCheck called');
   }

    ngAfterContentInit() {
        console.log('ngAfterContentInit called');
        console.log('Text Content of paragraph' +this.paragraph.nativeElement.textContent);
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentInit called');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit called');
        console.log('Text Content' +this.header.nativeElement.textContent);
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked called');
    }
}
