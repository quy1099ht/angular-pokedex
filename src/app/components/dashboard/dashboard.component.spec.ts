import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let getHeroesSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    TestBed
        .configureTestingModule({
          declarations: [DashboardComponent],
          imports: [RouterModule.forRoot([])],
          providers: [
            
          ]
        })
        .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
