import { Injectable } from '@angular/core';
import {DATA} from "./data";
import {FolderInterface} from "./folder.interface";
import {BehaviorSubject} from "rxjs";
import {SelectedData} from "./selected-data";
import {SelectedDataInterface} from "./selected-data.interface";
import {Mode} from "./mode.enum";

@Injectable()
export class FileManagerService {
  mode: Mode = Mode.grid;
  private _selectedFolder = new BehaviorSubject<SelectedDataInterface>(null);
  private _breadCrumbs = new BehaviorSubject<Array<FolderInterface>>([]);

  get breadCrumbs(): BehaviorSubject<Array<FolderInterface>> {
    return this._breadCrumbs;
  }

  get selectedFolder(): BehaviorSubject<SelectedDataInterface> {
    return this._selectedFolder;
  }

  get folders(): Array<FolderInterface> {
    return DATA.files;
  }

  constructor() {
  }


  select(folder?: FolderInterface) {
    this._selectedFolder.next({
      files: folder && folder.files ? folder.files : [],
      folders: folder ? (folder.sub ? [folder.sub] : []) : this.folders
    });
    this._breadCrumbs.next(folder ? this.getBreadCrumbs(folder) : []);
  }

  private getBreadCrumbs(folder: FolderInterface) {
    for(let treeFolder of this.folders) {
      const data = this.findPath(folder, treeFolder);
      if (data) return data;
    }
    return [];
  }

  private findPath(currentFolder, treeFolder) {
    if (currentFolder === treeFolder) {
      return [treeFolder];
    } else if (treeFolder.sub) {
      let result = this.findPath(currentFolder, treeFolder.sub);
      if (result) {
        return [treeFolder, ...result];
      } else {
        return null;
      }
      return null;
    }
  }

  search(text: string) {
    const result = this.folders.reduce((data: SelectedData, folder: FolderInterface) => {
      if (folder.name.search(text) > -1) {
        data.join({files: [], folders: [folder]})
      }
      return data.join(this.find(text, folder));
    }, new SelectedData());

    this._selectedFolder.next(result);
    this._breadCrumbs.next([]);
  }

  private find(text: string, folder: FolderInterface): SelectedDataInterface {
    const result = new SelectedData();
    const files = folder.files ? folder.files.filter((file) => file.name.search(text) > -1) : [];
    const folders = folder.sub && (folder.sub.name.search(text) > -1) ? [folder.sub] : [];
    result.join({files, folders});

    if (folder.sub) {
      result.join(this.find(text, folder.sub));
    }

    return result;
  }

}
