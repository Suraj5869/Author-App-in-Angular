import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-search-author',
  templateUrl: './search-author.component.html',
  styleUrls: ['./search-author.component.css']
})
export class SearchAuthorComponent {

  searchForm=new FormGroup({
    name:new FormControl()
  })
  authorData:any ="";
  constructor(private authorService : AuthorService){}

  submit(){
    this.authorService.searchAuthorByName(this.searchForm.controls.name.value).subscribe({
      next:(data)=>{
        this.authorData = data;
        
      },
      error:(errorResponse:HttpErrorResponse)=>{}
     });
  }
}
