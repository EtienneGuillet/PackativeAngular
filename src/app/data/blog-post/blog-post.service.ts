import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/app/constants/blog-post.model';

const BLOG_POST_URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  constructor(private _htpp: HttpClient) {}

  getBlogPosts(): Observable<Array<BlogPost>> {
    return this._htpp.get<Array<BlogPost>>(BLOG_POST_URL);
  }
}
