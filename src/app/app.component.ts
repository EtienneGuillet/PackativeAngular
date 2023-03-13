import { Component } from '@angular/core';
import { BlogListComponent } from './features/blog-post/blog-list/blog-list.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [BlogListComponent],
})
export class AppComponent {}
