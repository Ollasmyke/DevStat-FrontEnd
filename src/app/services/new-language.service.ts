import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Http } from "@angular/http";
import {Observable} from 'rxjs/Observable';



@Injectable()
export class NewLanguageService {
  constructor(private http: Http) {}

  postLanguage(newLanguage) {
    return this.http.post("localhost:9080", newLanguage);
  }

  // getLanguage() {
  //   return this.http.get("url");
  // }
}
