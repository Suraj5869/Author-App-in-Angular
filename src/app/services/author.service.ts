import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  url='https://localhost:7057/api/Author';

  constructor(private http:HttpClient) { }

  getAuthors() {
    return this.http.get<any>(this.url);
  }

  deleteAuthor(id:any):Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  addAuthor(author:any){
    return this.http.post<any>(this.url, author);
  }
  getAuthor(id:any){
    const author =  this.http.get(`${this.url}/${id}`);
    return author;
  }
  updateAuthor( updatedAuthorData:any){
    return this.http.put(`${this.url}`, updatedAuthorData);
  }
  searchAuthorByName(name:string){
    return this.http.get(`${this.url}/${name}`);
  }
}
