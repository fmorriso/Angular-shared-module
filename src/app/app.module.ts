import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		HighlightDirective,
		TitleComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
