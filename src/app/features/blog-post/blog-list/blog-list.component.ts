import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/constants/blog-post.model';
import { BlogPostService } from 'src/app/data/blog-post/blog-post.service';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, BlogCardComponent],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogPosts: Array<BlogPost>;

  constructor(private _blogPostService: BlogPostService) {}

  ngOnInit(): void {
    this._blogPostService
      .getBlogPosts()
      .subscribe((blogPosts) => (this.blogPosts = blogPosts));
  }
}
