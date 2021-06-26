import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
