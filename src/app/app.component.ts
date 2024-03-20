import { Component, HostBinding, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { defaultWord } from './default_word';

import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeSwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClient],
})
export class AppComponent {
  darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );

  data: any;
  keyword: string = 'keyboard';

  constructor(private dataService: DataService) {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    });
  }

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  ngOnInit() {
    this.data = defaultWord;
    console.log(this.data);
    // this.dataService.getData(this.keyword).subscribe((res) => {
    //   this.data = res;
    //   console.log(this.data);
    // });
  }
}
