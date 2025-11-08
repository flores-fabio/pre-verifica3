import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cassetta } from './cassetta';

describe('Cassetta', () => {
  let component: Cassetta;
  let fixture: ComponentFixture<Cassetta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cassetta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cassetta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
