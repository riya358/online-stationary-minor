import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../../model/entities/user';
import { HttpClient } from '@angular/common/http';
import { IRegisterUserRequest } from '../../model/contracts/user-request.interface';
import { IRegisterResponse } from '../../model/contracts/auth.interface';
import { IAddItemRequest } from '../../model/contracts/add.item.request';
import { ISearchRequest } from '../../model/contracts/search.request';

@Injectable({
  providedIn: 'root',
})
export class ItemAPIService {

  constructor(private http: HttpClient) {}

  search(search: ISearchRequest): Observable<any>{
    return this.http.post<any>('items/search', search);
  }

  add(item: IAddItemRequest ): Observable<any> {
    return this.http.post<any>('items', item );
  }
}
