import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-target-description',
  templateUrl: './target-description.component.html',
  styleUrls: ['./target-description.component.scss'],
})
export class TargetDescriptionComponent implements OnInit {
  @Input() description: string;
  text: boolean= false;
  constructor() {}

  ngOnInit(): void {}
}
