import { Component } from '@angular/core';
import { ActionsComponent } from "./actions/actions.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [BreadcrumbsComponent, UserComponent, ActionsComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

}
