import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeMovies } from './data.type';

@Injectable()
export class MovieService {
  API: string = '';
  constructor(private http: HttpClient) {}
  list(): Observable<TypeMovies[]> {
    return this.http.get<TypeMovies[]>(this.API);
  }
  read(id: number): Observable<TypeMovies> {
    return this.http.get<TypeMovies>(`${this.API}/${id}`);
  }
  create(data: TypeMovies): Observable<TypeMovies> {
    return this.http.post<TypeMovies>(this.API, data);
  }
  delete(id: number): Observable<TypeMovies> {
    return this.http.delete<TypeMovies>(`${this.API}/${id}`);
  }
  update(id: number, data: TypeMovies): Observable<TypeMovies> {
    return this.http.put<TypeMovies>(`${this.API}/${id}`, data);
  }
}
