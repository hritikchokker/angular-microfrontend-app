import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList$: BehaviorSubject<[]> = new BehaviorSubject([]);
  activePost$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    private _httpClient: HttpClient
  ) {
    this.activePost$.subscribe(data => {
      console.log(data, 'asdasdas')
    })
  }


  fetchPosts() {
    this._httpClient.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data: any) => {
        if (data) {
          this.postList$.next(data)
        }
      })
  }
}
