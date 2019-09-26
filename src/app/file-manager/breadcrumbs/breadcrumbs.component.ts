import { Component, OnInit } from '@angular/core';
import {FileManagerService} from "../file-manager.service";
import {FolderInterface} from "../folder.interface";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  get breadCrumbs() {
    return this.fileManagerService.breadCrumbs;
  }
  constructor(private fileManagerService: FileManagerService) { }

  ngOnInit() {
  }

  select(folder?: FolderInterface) {
    this.fileManagerService.select(folder);
  }
}
