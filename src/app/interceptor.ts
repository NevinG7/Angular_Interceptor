import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Toast, ToastrService } from "ngx-toastr";
import { Observable, tap } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
export class myintercept implements HttpInterceptor{

    constructor(private readonly toast:ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                this.toast.success("Got real data", 'Success');
            }
            }, (error) => {
                this.toast.error("Fake endpoint", 'Error');
            })
          );

}
}
