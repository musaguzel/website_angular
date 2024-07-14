import { Component, OnInit , ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CompanyprojectsService } from '../service/companyprojects.service';
import { CompanyProject } from '../model/project.model';

@Component({
  selector: 'app-projeler',
  templateUrl: './projeler.component.html',
  styleUrls: ['./projeler.component.css']
})
export class ProjelerComponent implements OnInit {
  companyProjects: Array<CompanyProject>

  constructor(private companyProjectService: CompanyprojectsService) { }
  ngOnInit(): void {
    this.getCompanyProjects();
  }

  getCompanyProjects() {
    this.companyProjects = this.companyProjectService.getCompanyProjects();
  }
}
