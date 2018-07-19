import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders} from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {
  private headers = new HttpHeaders().set('Authorisation', 'token');

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const cloneReq = req.clone({headers: this.headers});
    console.log(cloneReq.params);
    return next.handle(cloneReq);
  }
}
