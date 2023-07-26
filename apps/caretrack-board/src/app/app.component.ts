import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';


@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'digikare-challenges-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  title = 'caretrack-board';
}
