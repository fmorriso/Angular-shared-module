import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppRoutingModule }   from './app-routing.module';
import { AppComponent }       from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent }     from './title.component';
import { UserService }        from './user.service';
import { ContactComponent }   from './contact/contact.component';
import { ContactService }     from './contact/contact.service';
import { AwesomePipe }        from './contact/awesome.pipe';
import { FormsModule }        from '@angular/forms';


@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		HighlightDirective,
		TitleComponent,
		ContactComponent,
		AwesomePipe
	],
	providers: [UserService, ContactService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
