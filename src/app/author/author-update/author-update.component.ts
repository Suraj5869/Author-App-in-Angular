import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.css']
})
export class AuthorUpdateComponent {
  authorId:any = null;
  authorData:any = {};
  authorForm= new FormGroup({
    name: new FormControl(this.authorData.name,[Validators.required, Validators.pattern(/^[A-Za-z\s]{1,10}$/)]),
    email: new FormControl(this.authorData.email, [Validators.required, Validators.email]),
  })

  constructor(private authorService: AuthorService, private route: ActivatedRoute, private router: Router){
    this.route.queryParams.subscribe(params => {
      this.authorId = params['id']; // Extract 'id' from query parameters
      if (this.authorId) {
        // Fetch and initialize the author's data
        this.authorService.getAuthor(this.authorId).subscribe((data: any) => {
          // console.log(data);
          this.authorData = data;
        });
      } 
});
  }
  updateAuthor(){
    const formValue = {id: this.authorId, name: this.authorForm.controls.name.value, email: this.authorForm.controls.email.value}
    console.log(formValue)
    this.authorService.updateAuthor(formValue).subscribe(() => {
    alert('Author updated successfully:');
    this.router.navigate(['']);
  });
  }

  get nameValidator(){
    return this.authorForm.get('name')
  }

  get emailValidator(){
    return this.authorForm.get('email')
  }
}
