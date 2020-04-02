//#region " Primary Namespaces "

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//#endregion

//#region " Additional Namespaces "

import { environment } from '../environments/environment';

//#endregion

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private header = new HttpHeaders({ "content-type": "application/json" , "Accept": "application/json" })

  //#region  "Get data function"
  //---------------------------------------------------------------------
  // <summary>
       //This function call HTTP get service to fatch data
  // </summary>
  //---------------------------------------------------------------------

  get(endpoint) {
    //let url = environment.baseUrl + endpoint;
    let url =  endpoint;
    return this.http.get(url, { headers: this.header })
    .pipe(catchError(this.handleError))
  }
  //#endregion

  //#region  "Insert data function"
  //---------------------------------------------------------------------
  // <summary>
       //This function call HTTP post service to insert data
  // </summary>
  //---------------------------------------------------------------------

  post(endpoint, data) {
    let url = environment.baseUrl + endpoint;
    return this.http.post(url, data, { headers: this.header })
    .pipe(catchError(this.handleError))
  }

  //#endregion

  //#region  "Update data function"
  //---------------------------------------------------------------------
  // <summary>
       //This function call HTTP put service to update the data
  // </summary>
  //---------------------------------------------------------------------
  put(endpoint, data) {
    let url = environment.baseUrl + endpoint;
    return this.http.put(url, data, { headers: this.header })
    .pipe(catchError(this.handleError))
  }
  //#endregion

  //#region  "Delete data function"
  //---------------------------------------------------------------------
  // <summary>
        //This function call HTTP delete service to delete the data
  // </summary>
  //---------------------------------------------------------------------
  delete(endpoint) {
    let url = environment.baseUrl + endpoint;
    return this.http.delete(url, { headers: this.header })
    .pipe(catchError(this.handleError))
  }
  //#endregion

  //#region  "Error handling function"
  //---------------------------------------------------------------------
  // <summary>
        //This function used to error handling
  // </summary>
  //---------------------------------------------------------------------
  handleError = (errorResponse: HttpErrorResponse) => {
    if(errorResponse.status === 401) {
      console.log("handle unauthentication error")
    }else if(errorResponse.status === 400 || errorResponse.status === 500) {
      return throwError(errorResponse.error.error || errorResponse.error || "Something went wrong");
    }else if(errorResponse.status === 404){
      return throwError(errorResponse.error.message || "Server side error");
    }else if(errorResponse.error instanceof ErrorEvent){
      return throwError(errorResponse.error.message || "Client side error");
    }
  }
  //#endregion

}

