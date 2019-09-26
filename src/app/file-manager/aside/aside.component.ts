import { Component } from '@angular/core';
import {FileManagerService} from "../file-manager.service";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  get folders() {
    return this.fileManagerService.folders;
  }

  constructor(private fileManagerService: FileManagerService) { }
}
