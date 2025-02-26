import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestFriendComponent } from './suggest-friend.component';

describe('SuggestFriendComponent', () => {
  let component: SuggestFriendComponent;
  let fixture: ComponentFixture<SuggestFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestFriendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
