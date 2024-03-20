import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [NgIf],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.css',
})
export class ThemeSwitchComponent {
  @Input() darkMode: string = '';
  @Output() onClick = new EventEmitter<any>();

  getDarkMode() {
    return JSON.parse(this.darkMode);
  }

  themeSet(event: any) {
    this.onClick.emit(event);
  }
}
