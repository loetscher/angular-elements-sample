import { Component, Output, Input, EventEmitter, ElementRef, OnInit,  AfterViewInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-shell',
  templateUrl: './module-shell.component.html',
  styleUrls: ['./module-shell.component.scss'],
})
export class ModuleShellComponent implements OnInit,  AfterViewInit{

  @Output() cancelWfl = new EventEmitter<string>();
  @Input() activityConf:any;
  @Input() activityConfId:string;
  @Input() testInput = "dummy";

  private id: string;

  constructor(
    private router: Router,
    private el: ElementRef
  ) { }

  ngOnInit() {
    // first navigation not fired when loading in web component
    this.router.navigate(['/page1']);
  }

  ngAfterViewInit() {
    if (this.activityConfId) {
      this.id = this.activityConfId;
    }
  }

  public cancelWorkflowNG() {
    this.cancelWfl.emit("cancel workflow (EventEmmitter)");
  }

  public cancelWorkflow() {
    this.el.nativeElement.dispatchEvent(new CustomEvent('CustomWebcomponentEvent', { bubbles: true, cancelable: true, detail: 'cancel workflow (dispatched)' }));
  }
}
