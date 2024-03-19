import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { defaultWord } from './default_word';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClient],
})
export class AppComponent {
  data: any;
  title = 'dictionary-app';
  keyword: string = 'keyboard';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = defaultWord;
    console.log(this.data);
    // this.dataService.getData(this.keyword).subscribe((res) => {
    //   this.data = res;
    //   console.log(this.data);
    // });
  }
}
