import {FileInterface} from "./file.interface";
import {FolderInterface} from "./folder.interface";
import {SelectedDataInterface} from "./selected-data.interface";

export class SelectedData implements SelectedDataInterface {
  private _files: Array<FileInterface> = [];
  private _folders: Array<FolderInterface> = [];


  get files(): Array<FileInterface> {
    return this._files;
  }

  get folders(): Array<FolderInterface> {
    return this._folders;
  }

  join(data: SelectedDataInterface) {
    this._files = [...this._files, ...data.files];
    this._folders = [...this._folders, ...data.folders];

    return this;
  }
}
