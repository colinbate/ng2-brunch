import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {routing} from './app.routes';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {HomeComponent} from './home';
import {AboutComponent} from './about';
import {NavBarComponent} from './navbar.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent, AboutComponent, NavBarComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
