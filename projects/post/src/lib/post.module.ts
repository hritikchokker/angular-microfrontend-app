import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post.service';
import { ModuleWithProviders } from '@angular/core';

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    PostComponent,
    HttpClientModule
  ]
})
export class PostModule {
  // static forRoot(service: any): ModuleWithProviders<PostModule> {
  //   return {
  //     ngModule: PostModule,
  //     providers: [
  //       { provide: PostService, useClass: service }
  //     ]
  //   };
  // }
}
