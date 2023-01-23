import { Component } from '@angular/core';
// import { OpenaiService } from 'openai-sdk';

@Component({
  selector: 'app-openai-generator',
  templateUrl: './openai-generator.component.html',
  styleUrls: ['./openai-generator.component.css']
})

export class OpenaiGeneratorComponent {
  title:string ="OpenAI Generator"

  // prompt: string | undefined;
  // generatedText: string | undefined;

  // constructor(private openai: OpenaiService) {
  //   openai.apiKey = "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";
  // }

  // async generateText() {
  //   const response = await this.openai.completions.create({
  //     prompt: this.prompt,
  //     model: "text-davinci-002",
  //     temperature: 0.5,
  //     maxTokens: 2048,
  //   });
  //   this.generatedText = response.choices[0].text;
  // }
}