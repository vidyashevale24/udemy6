import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{ serverName:string ,serverContent:string }>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName:string ,serverContent:string }>();

    /*newServerName = '';*/
    @ViewChild('serverNameInput') serverNameInput:ElementRef;
    newServerContent = '';
    constructor() { }

    ngOnInit() {
    }

    /* Method 1:Reference variable
    onAddServer(NameInput:HTMLInputElement) {
        this.serverCreated.emit({
            serverName:  NameInput.value,
            serverContent: this.newServerContent,
        });
    }*/

   /* Method 2: NgModel
   onAddServer() {
        this.serverCreated.emit({
            serverName:  this.newServerName,
            serverContent: this.newServerContent,
        });
    }*/

    /* Method 3: childView */
    onAddServer(NameInput:HTMLInputElement) {
         this.serverCreated.emit({
             serverName:  this.serverNameInput.nativeElement.value,
             serverContent: this.newServerContent,
         });
    }

    onAddBlueprint() {
        this.blueprintCreated.emit({
            serverName: this.serverNameInput.nativeElement.value,
            serverContent: this.newServerContent,
        });
    }
}
