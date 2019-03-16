import { OktaAuthService } from '@okta/okta-angular';
import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public title = 'Angular Inventory App';
	public isAuthenticated: boolean;
	constructor(public oktaAuth: OktaAuthService) {
		this.oktaAuth.$authenticationState.subscribe(
			(isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
		);
	}
	async ngOnInit() {
		this.isAuthenticated = await this.oktaAuth.isAuthenticated();
	}
	login() {
		this.oktaAuth.loginRedirect();
	}
	logout() {
		this.oktaAuth.logout('/');
	}
}
