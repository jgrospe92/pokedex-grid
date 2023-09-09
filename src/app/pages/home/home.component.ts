import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.scrollRight();
    console.log('home page loaded');
  }

  @ViewChild('horizontal_scroll', { read: ElementRef }) public horizontal_scroll!: ElementRef<any>;

  public scrollRight(): void {
    this.horizontal_scroll.nativeElement.scrollTo({ left: (this.horizontal_scroll.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.horizontal_scroll.nativeElement.scrollTo({ left: (this.horizontal_scroll.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }



}
