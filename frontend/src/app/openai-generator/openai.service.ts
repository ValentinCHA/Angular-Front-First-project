import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  apiKey:string;
  completions: any;

  constructor(private http: HttpClient) { }

  async createCompletion(prompt: string, model: string, temperature: number, maxTokens: number) {
    const url = 'https://api.openai.com/v1/engines/davinci/completions';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    };
    const body = {
      prompt: prompt,
      model: model,
      temperature: temperature,
      max_tokens: maxTokens
    };
    const response = await this.http.post(url, body, { headers: headers }).toPromise();
    return response;
  }
}
