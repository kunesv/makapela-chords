import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getDoc } from "@angular/fire/firestore";
import { AppComponent } from './app.component';

import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
  RulesTestEnvironment,
} from "@firebase/rules-unit-testing";

const testEnv = await initializeTestEnvironment({
  projectId: "makapela-chords",
})

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'makapela-chords'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('makapela-chords');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('makapela-chords app is running!');
  });

  it('should read song', () => {
    const alice = testEnv.authenticatedContext('alice')
    // assertSucceeds(getDoc(alice.firestore()))
    // RulesTestEnvironment.
    // RulesTestEnvironment.cleanup();

    // TODO: https://fabian-kostadinov.github.io/2022/12/09/how-to-test-firestore-security-rules-with-jest-in-angular/
  })
});
