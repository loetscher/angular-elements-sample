import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {
   RestClient, Client, Get, Path, Produces, MediaType
} from 'angular-rest-client';

@Injectable()
@Client({
  serviceId: 'todo-service',
  baseUrl: '/rest/api/storage/',
  headers: {
      'content-type': 'application/json'
  }
})
export class BackendService extends RestClient {

  constructor(http: HttpClient) {
    super(<HttpClient>http);
  }


  @Get('{entity}/{primaryKey}')
  @Produces(MediaType.JSON)
  // @ts-ignore
  public getDetailEntryById(@Path('entity') entity: string, @Path('primaryKey') primaryKey: string): Observable<any> { return undefined; }

  @Get('{entity}')
  @Produces(MediaType.JSON)
  // @ts-ignore
  public getDetailForEntity(@Path('entity') entity: string): Observable<any> { return undefined; }
}
