import {Route} from '@angular/router';
import {CreateCaretrackComponent} from "./pages/create-caretrack/create-caretrack.component";
import {CaretracksComponent} from "./pages/caretracks/caretracks.component";
import {CaretrackComponent} from "./pages/caretrack/caretrack.component";
import {NavigationRoutes} from "@digikare-challenges/core-domain";

export const appRoutes: Route[] = [
  {path: NavigationRoutes.HOME, component: CaretracksComponent},
  {path: NavigationRoutes.CREATE, component: CreateCaretrackComponent},
  {path: 'caretracks/:id', component: CaretrackComponent}
];
