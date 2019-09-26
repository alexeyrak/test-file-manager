import {FolderInterface} from "./folder.interface";
import {FileInterface} from "./file.interface";

export interface SelectedDataInterface {
  folders: Array<FolderInterface>,
  files: Array<FileInterface>,
}
