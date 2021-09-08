import {HttpClient as IHttpClient, RestResponse} from "../../gen/rest-api";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export class HttpClientAdapter implements IHttpClient {

  private baseUrl: string;

  constructor(private delegate: HttpClient) {
    this.baseUrl = "/"; //http://localhost:8080
  }

  request<R>(r: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R }): RestResponse<R> {
    console.log(this.baseUrl + r.url);
    let observable: Observable<any> = this.delegate.request(r.method, this.baseUrl + r.url, {
      body: r.data,
      params: r.queryParams
    });
    return observable;
  }
}
