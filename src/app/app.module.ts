import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';

import './core/rxjs-extensions';

/* App Root */
import { AppComponent }       from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent }     from './title.component';
import { UserService }        from './user.service';

/* Feature Modules that have their own routing */
import { ContactModule }      from './contact/contact.module';
import { CrisisModule }       from './crisis/crisis.module';
import { CoreModule }         from './core/core.module';

/* Routing Module */
import { AppRoutingModule, routableComponents }   from './app-routing.module';

//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// angular2-first-look.azurewebsites.net
@NgModule({
	imports: [
		BrowserModule,

		ContactModule,
		CrisisModule,

		AppRoutingModule,

		CoreModule
	],
	declarations: [	AppComponent, HighlightDirective, TitleComponent, NavigationComponent, routableComponents ],
	providers: [UserService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
