import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit() {
    this.document.body.classList.add('stickyHeader');
  }

}
