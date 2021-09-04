import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPicturesViewComponent } from './album-pictures-view.component';

describe('AlbumPicturesViewComponent', () => {
  let component: AlbumPicturesViewComponent;
  let fixture: ComponentFixture<AlbumPicturesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumPicturesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPicturesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
