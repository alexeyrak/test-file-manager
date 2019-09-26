import {Component, OnDestroy} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, filter} from "rxjs/operators";
import {FileManagerService} from "../file-manager.service";
import {Subscription} from "rxjs";
import {Mode} from "../mode.enum";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnDestroy {
  search = new FormControl('');
  private searchSub: Subscription;
  modes = Mode;

  get currentMode() {
    return this.fileManagerService.mode;
  }

  constructor(private fileManagerService: FileManagerService) {
    this.searchSub = this.search.valueChanges.pipe(
      debounceTime(300),
      filter(Boolean)
    ).subscribe((search) => this.fileManagerService.search(search));
  }

  ngOnDestroy() {
    this.searchSub.unsubscribe();
  }

  choose(mode: Mode) {
    this.fileManagerService.mode = mode;
  }
}
