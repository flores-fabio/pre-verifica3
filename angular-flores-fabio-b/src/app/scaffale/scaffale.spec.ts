import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scaffale } from './scaffale';

describe('Scaffale', () => {
  let component: Scaffale;
  let fixture: ComponentFixture<Scaffale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scaffale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scaffale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
