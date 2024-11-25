import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { AddAuthorComponent } from './author/add-author/add-author.component';
import { AuthorUpdateComponent } from './author/author-update/author-update.component';
import { SearchAuthorComponent } from './author/search-author/search-author.component';
const routes: Routes = [
  {path: '',
    component:AuthorListComponent
  },
  {
    path: 'addAuthor',
    component: AddAuthorComponent
  },
  {path: 'updateAuthor',
    component: AuthorUpdateComponent
  },
  {path:'searchAuthor',
    component:SearchAuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
