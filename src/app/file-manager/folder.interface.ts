import {FileInterface} from "./file.interface";
import {EntityInterface} from "./entity.interface";

export interface FolderInterface extends EntityInterface{
  files?: Array<FileInterface>,
  sub?: FolderInterface,
  hasChild?: boolean;
}

