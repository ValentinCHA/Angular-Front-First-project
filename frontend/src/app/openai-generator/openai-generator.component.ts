import { Component } from '@angular/core';
import { OpenaiService } from './openai.service';

@Component({
  selector: 'app-openai-generator',
  templateUrl: './openai-generator.component.html',
  styleUrls: ['./openai-generator.component.css']
})

export class OpenaiGeneratorComponent {
  title:string ="OpenAI Generator"

  prompt: string = "";
  generatedText: string = "";

  constructor(private openai: OpenaiService) {
    openai.apiKey = "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";
  }

  async generateText() {
    try {
        const response = await this.openai.completions.create({
        prompt: this.prompt,
        model: "text-davinci-002",
        temperature: 0.5,
        maxTokens: 2048,
        });

        if(response){
            this.generatedText = response.choices[0].text;
        }else{
            this.generatedText = "Pas de réponse";
        }
    } catch (error) {
        this.generatedText = "Erreur lors de l'appel à l'API";
        console.log("ERREUR => ", error);

    }
}


}