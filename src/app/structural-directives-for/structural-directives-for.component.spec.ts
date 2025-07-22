import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesForComponent } from './structural-directives-for.component';

describe('StructuralDirectivesForComponent', () => {
  let component: StructuralDirectivesForComponent;
  let fixture: ComponentFixture<StructuralDirectivesForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectivesForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectivesForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
