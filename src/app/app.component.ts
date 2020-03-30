import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'container-app';
  profile;
  data;
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
  }
}
