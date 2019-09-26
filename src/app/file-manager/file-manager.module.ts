import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { HeadComponent } from './head/head.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FolderComponent } from './aside/folder/folder.component';
import {FileManagerService} from "./file-manager.service";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [AsideComponent, MainComponent, HeadComponent, BreadcrumbsComponent, FileManagerComponent, FolderComponent],
  exports: [FileManagerComponent],
  providers: [FileManagerService],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FileManagerModule { }
