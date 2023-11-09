import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideCore } from "@core/core";
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { HttpClientModule } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
    providers: [
        provideCore(),
        provideRouter(routes),
        importProvidersFrom(HttpClientModule),
        importProvidersFrom(BrowserModule),
        importProvidersFrom(MatDialogModule),
        provideAnimations()
    ]
}