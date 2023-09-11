import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;
  isValid(loginForm: NgForm): boolean {
    return loginForm.value.email && loginForm.value.password;
  }

  async onLogin(loginForm: NgForm): Promise<void> {
    console.log('fired');
  }
}
