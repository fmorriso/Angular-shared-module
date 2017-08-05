import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';

/* App Root */
import { AppComponent }       from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent }     from './title.component';
import { UserService }        from './user.service';

/* Feature Modules that have their own routing */
import { ContactModule }      from './contact/contact.module';
//import { CrisisModule }       from './crisis/crisis.module';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

@NgModule({
	imports: [
		BrowserModule,

		ContactModule,
		//CrisisModule,

		AppRoutingModule
	],
	declarations: [	AppComponent, HighlightDirective, TitleComponent, NavigationComponent ],
	providers: [UserService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
