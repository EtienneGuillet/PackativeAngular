import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BlogPostDialog } from 'src/app/constants/blog-post.model';
import { BlogCommentsComponent } from '../blog-comments/blog-comments.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    BlogCommentsComponent,
  ],
  templateUrl: './blog-post-dialog.component.html',
  styleUrls: ['./blog-post-dialog.component.scss'],
})
export class BlogPostDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: BlogPostDialog) {}
}
