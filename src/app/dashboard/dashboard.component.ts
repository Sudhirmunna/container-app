import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  title = 'container-app';
  profile;
  data;
  name;
  reactOutput = 0;
  vueMessage;
  vueOutput;
  @ViewChild('myDiv') divView: ElementRef;
  @ViewChild('vueDiv') vueDiv: ElementRef;

  microAppAEvent(event) {
    if (event) {
      console.log('contaient app', event);
      this.profile = event;
    }
  }

  getProfile() {
    if (this.profile) {
      this.data = this.profile.detail;
    }
    if (this.divView && this.divView.nativeElement && this.profile) {
      this.divView.nativeElement.setAttribute('name', this.profile.detail.firstName);
    }
    if (this.vueDiv && this.vueDiv.nativeElement && this.profile) {
      this.vueDiv.nativeElement.setAttribute('message', this.profile.detail.firstName + ' ' + this.profile.detail.lastName);
    }
  }
  ngAfterViewInit() {
    if (this.divView && this.divView.nativeElement) {
      this.divView.nativeElement.setAttribute('onClickEvt', 'onClickEvt');
      this.divView.nativeElement.addEventListener('onClickEvt', () => this.getDataFromReactApp());
    }
    if (this.vueDiv && this.vueDiv.nativeElement) {
      this.vueDiv.nativeElement.setAttribute('vueEvent', 'vueEvent');
      this.vueDiv.nativeElement.addEventListener('vueEvent', (event) => this.getDataFromVueApp(event));
    }
  }

  getDataFromReactApp() {
    this.reactOutput = this.reactOutput + 1;
  }
  getDataFromVueApp(event: any ) {
    console.log('event');
    console.log(event);
    this.vueOutput = event.detail;

  }

}
