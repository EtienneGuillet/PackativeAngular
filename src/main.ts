import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    // importProvidersFrom(RouterModule.forRoot(APP_ROUTES)),
    // importProvidersFrom(HttpClientModule),
  ],
}).catch((err) => console.error(err));