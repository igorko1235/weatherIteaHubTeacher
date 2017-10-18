import {AuthService} from './auth.service';
import {TestBed} from '@angular/core/testing';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../environments/environment';

describe('Service: Auth', () => {
  let authService: AuthService;
  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
        AngularFireAuthModule
      ],
      declarations: [
      ],
      providers: [
        AngularFireAuth,
        AuthService
      ]
    });
    // UserService provided to the TestBed
    authService = TestBed.get(AuthService);
  });

  it('should return true from isAuthenticated when there is a token', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    expect(authService.isLoggedIn()).toBeTruthy();
  });
  it('should return false from isAuthenticated when there is no token', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    expect(authService.isLoggedIn()).toBeFalsy();
  });
});
