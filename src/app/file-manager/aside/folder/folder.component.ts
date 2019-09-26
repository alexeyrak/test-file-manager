import {Component, Input } from '@angular/core';
import {FolderInterface} from "../../folder.interface";
import {FileManagerService} from "../../file-manager.service";

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent {
  @Input() folder: FolderInterface;
  private _isOpen = false;

  get isOpen(): boolean {
    return this._isOpen;
  }

  constructor(private fileManagerService: FileManagerService) { }

  toggle() {
    if (this.folder.sub) {
      this._isOpen = !this._isOpen;
    }
    this.select();
  }

  select() {
    this.fileManagerService.select(this.folder);
  }
}
