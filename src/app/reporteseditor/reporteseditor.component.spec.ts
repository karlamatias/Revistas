import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteseditorComponent } from './reporteseditor.component';

describe('ReporteseditorComponent', () => {
  let component: ReporteseditorComponent;
  let fixture: ComponentFixture<ReporteseditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteseditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteseditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
