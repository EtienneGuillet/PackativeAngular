import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BlogPost } from 'src/app/constants/blog-post.model';
import { BlogPostDialogComponent } from '../blog-post-dialog/blog-post-dialog.component';

@Component({
  selector: 'app-blog-card[blogPost]',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDialogModule],
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  @Input() blogPost: BlogPost;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(BlogPostDialogComponent, {
      data: {
        blogPost: this.blogPost,
      },
    });
  }
}
