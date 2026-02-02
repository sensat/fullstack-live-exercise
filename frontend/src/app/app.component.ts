import {Component, signal} from '@angular/core';
import { ContentAPIService } from './content-api.service';

export interface Content {
  id: string;
  name: string;
  description: string;
  selectedFormat?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected contentList = signal<Content[]>([]);
  protected defaultFormat = signal<string>('pdf');

  constructor(
    private readonly contentAPIService: ContentAPIService) 
  {}

  public ngOnInit(): void {
    this.contentAPIService.listContent().subscribe(
      (contentList: Content[]) => this.contentList.set(contentList)
    );
  }

  public exportContent(contentId: string, format: string): void {
    console.log(`Exporting content ${contentId} in format ${format}`);
  }
}
 