import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
    MatDividerModule,
      MatIconModule,
        MatMenuModule,
	  MatProgressSpinnerModule,
	    MatTableModule,
	      MatToolbarModule
	      } from '@angular/material';
	      import { HttpClientModule } from '@angular/common/http';
	      import { FormsModule } from '@angular/forms';
	      import { OktaAuthModule } from '@okta/okta-angular';
	      import { AppRoutingModule } from './app-routing.module';
	      import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

	      @NgModule({
			declarations: [
			    AppComponent,
			    ProductsComponent,
			    HomeComponent
			],
			imports: [
				AppRoutingModule,
				BrowserModule,
				BrowserAnimationsModule,
				HttpClientModule,
				FlexLayoutModule,
				MatToolbarModule,
				MatMenuModule,
				MatIconModule,
				MatButtonModule,
				MatTableModule,
				MatDividerModule,
				MatProgressSpinnerModule,
				FormsModule,
				OktaAuthModule.initAuth({
					issuer: 'https://dev-180473.okta.com/oauth2/default',
					redirectUri: 'http://localhost:4200/implicit/callback',
					clientId: '0oacn808mLQJXtrsm356'
				})
			],
			providers: [],
			bootstrap: [AppComponent]
		})
		export class AppModule { }
