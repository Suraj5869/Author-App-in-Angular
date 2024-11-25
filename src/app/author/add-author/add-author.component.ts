import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent {

  newAuthorForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s]{1,10}$/)]),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  error="";
  constructor(private authorService:AuthorService, private router:Router) { }

  addNewAuthor(){
    this.authorService.addAuthor(this.newAuthorForm.value).subscribe({
      next:()=>{
        this.newAuthorForm.reset();
        alert('Author Added successfully:');
        this.router.navigate(['']);
      },
      error:(errorMessage: HttpErrorResponse)=>{
        console.log(errorMessage);
        if(errorMessage.error){
          this.error = errorMessage.error.exceptionMessage;
        }
        else{
          this.error = "An unexpected error occurred";
        }
        
      }
      
    })
  }

  get nameValidator(){
    return this.newAuthorForm.get('name')
  }

  get emailValidator(){
    return this.newAuthorForm.get('email')
  }
}
