import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  authorData:any='';

  constructor(private authorService: AuthorService, private router: Router) {
    this.loadAuthors();
   }

   loadAuthors() {
    this.authorService.getAuthors().subscribe((data: any) => {
      this.authorData = data;
    });
  }

  deleteAuthor(id:any){
    this.authorService.deleteAuthor(id).subscribe({
      next:(response)=>{
        alert(response.responseMessage)
        this.loadAuthors();
      },
      error:(error:HttpErrorResponse)=>{}
    });
  }
  
  sendData(id:any){
    this.router.navigate(['updateAuthor'], { queryParams: { id: id } });
  }
}
