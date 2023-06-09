import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostDialogComponent } from './blog-post-dialog.component';

describe('BlogPostDialogComponent', () => {
  let component: BlogPostDialogComponent;
  let fixture: ComponentFixture<BlogPostDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BlogPostDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
