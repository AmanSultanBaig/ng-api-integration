import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/util/util.service';

@Component({
  selector: 'app-single-post-view',
  templateUrl: './single-post-view.component.html',
  styleUrls: ['./single-post-view.component.css']
})
export class SinglePostViewComponent implements OnInit {
  singlePost = {title: "", body: ""}

  constructor(private _utilService: UtilService) {
    this._utilService.singlePost.subscribe(result => {
      this.singlePost = result
    })
  }

  ngOnInit(): void {
  }

}
