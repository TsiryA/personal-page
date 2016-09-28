import { Component } from '@angular/core';
// entities loads
import { Hero } from '../../entities/hero';

// importing services
import { HeroService } from '../../services/hero.services';

@Component({
  selector: 'app-root',
  templateUrl: '../../components/templates/views/app.component.html',
  styleUrls:[ '../../components/templates/styles/app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';
}

