import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';

/* App Root */
import { AppComponent }       from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent }     from './title.component';
import { UserService }        from './user.service';

/* Contact - one-stop shopping via a separate feature module: */
import { ContactModule }      from './contact/contact.module';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';


@NgModule({
	imports: [
		BrowserModule,
		ContactModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		HighlightDirective,
		TitleComponent,
		NavigationComponent
	],
	providers: [UserService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
