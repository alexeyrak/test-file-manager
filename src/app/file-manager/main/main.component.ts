import { Component } from '@angular/core';
import {FileManagerService} from "../file-manager.service";
import {FolderInterface} from "../folder.interface";
import {Mode} from "../mode.enum";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  selected = this.fileManagerService.selectedFolder;
  modes = Mode;

  get currentMode() {
    return this.fileManagerService.mode;
  }

  constructor(private fileManagerService: FileManagerService) { }

  select(folder: FolderInterface) {
    this.fileManagerService.select(folder);
  }
}
