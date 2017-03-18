import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderService {

  ifhide: BehaviorSubject<boolean>

  hideToolbar(hide: boolean) {
    if (hide) {
      document.getElementById("menu").style.display = "none";
    }
  }

}
