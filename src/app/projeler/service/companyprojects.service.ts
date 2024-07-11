import { Injectable } from '@angular/core';
import { CompanyProject } from '../model/project.model';
import { CompanyProjectDataSource } from '../data/project.datasource';

@Injectable({
  providedIn: 'root'
})
export class CompanyprojectsService {

  getCompanyProjects(): Array<CompanyProject> {
    return CompanyProjectDataSource;
  }
}
