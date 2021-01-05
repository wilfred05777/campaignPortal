import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {takeUntil} from "rxjs/operators";
import {guestMenu, memberMenu} from "./navmenu.model";
import {Subject} from "rxjs";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'evodlife-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit, OnDestroy {
  menuItems: MenuItem[] = [];
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.af.user
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.menuItems = !!user ? memberMenu : guestMenu;
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
