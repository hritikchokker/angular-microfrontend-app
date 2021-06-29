import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'projects/post/src/public-api';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'website';
  postList$!: Observable<any>;
  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._postService.fetchPosts();
    this.postList$ = this._postService.postList$;
  }

  alertUser(payload: any) {
    this._postService.activePost$.next(payload);
  }

  ngOnInit(): void {
    this._postService.activePost$.subscribe(data => {
      if (data) {
        alert(JSON.stringify(data));
      }
    })
  }

  navigateToAdmin() {
  }
}
