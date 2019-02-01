import { Component, Output, Input, EventEmitter, ElementRef, OnInit,  AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'app/common/backend.service';

@Component({
  selector: 'app-module-shell',
  templateUrl: './module-shell.component.html',
  styleUrls: ['./module-shell.component.scss'],
})
export class ModuleShellComponent implements OnInit,  AfterViewInit {

  @Output()
  cancelWfl = new EventEmitter<string>();
  @Input()
  activityConf: any;
  @Input()
  activityConfId: string;
  @Input()
  testInput = 'dummy';

  private id: string;
  private vehicle: any;

  constructor(
    private router: Router,
    private el: ElementRef,
    private backenService: BackendService
  ) { }

  ngOnInit() {
    // first navigation not fired when loading in web component
    this.router.navigate(['/page1']);
  }

  ngAfterViewInit() {
    if (this.activityConfId) {
      this.id = this.activityConfId;
      this.loadVehicle(this.id );
    }
  }

  public cancelWorkflowNG() {
    this.cancelWfl.emit('cancel workflow (EventEmmitter)');
  }

  public cancelWorkflow() {
    const customEvent = new CustomEvent('CustomWebcomponentEvent', {
      bubbles: true, cancelable: true, detail: 'cancel workflow (dispatched)' });
    this.el.nativeElement.dispatchEvent(customEvent);
  }

  // public activityConfObject(): any {
  //   return this.el.nativeElement.activityConf;
  // }

  private loadVehicle(objId: string, entity = 'VEH') {
    this.backenService.getDetailEntryById(entity, objId).subscribe(record => {
      if (record && record.data) {
        this.vehicle = record.data[0];
      }
  });
  }
}
