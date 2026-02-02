import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Content } from "src/app/app.component";

@Injectable({
  providedIn: 'root'
})
export class ContentAPIService {
  private readonly baseUrl = 'http://localhost:4000';

  constructor(private readonly http: HttpClient) {}

  public listContent(): Observable<Content[]> {
    return this.http.get<{contentList: Content[]}>(`${this.baseUrl}/api/content/list`).pipe(
      map((response: {contentList: Content[]}) => response.contentList)
    );
  }

  public exportContent(contentId: string, format: string): Observable<{id: string}> {
    return this.http.post<{id: string}>(`${this.baseUrl}/api/content/export`, { contentId, format });
  }
}