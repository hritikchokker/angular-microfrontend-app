import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { POST_DATA } from './post.data';
@Injectable({
  providedIn: 'platform'
})
export class PostService {

  postList$: BehaviorSubject<[]> = new BehaviorSubject([]);
  activePost$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    // private _httpClient: HttpClient
  ) {
    console.info('new instance created');
    // this.activePost$.subscribe(data => {
    //   if (data) {

    //   }
    // })
  }


  fetchPosts() {
    of(POST_DATA)
      .subscribe((res: any) => {
        if (res) {
          this.postList$.next(res);
        }
      })
  }
}
