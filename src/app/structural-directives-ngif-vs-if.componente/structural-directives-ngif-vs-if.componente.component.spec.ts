import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesNgifVsIfComponenteComponent } from './structural-directives-ngif-vs-if.componente.component';

describe('StructuralDirectivesNgifVsIfComponenteComponent', () => {
  let component: StructuralDirectivesNgifVsIfComponenteComponent;
  let fixture: ComponentFixture<StructuralDirectivesNgifVsIfComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectivesNgifVsIfComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectivesNgifVsIfComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
