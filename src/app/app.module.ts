import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		HighlightDirective
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
