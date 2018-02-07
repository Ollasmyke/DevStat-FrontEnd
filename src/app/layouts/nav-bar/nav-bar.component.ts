import { Component, OnInit } from '@angular/core';
import { NewLanguageService } from '../../services/new-language.service';

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  newLang: string = "";
  langDisplay: String = "";
  constructor(private languageService: NewLanguageService) {}

  ngOnInit() {}

  languageMethod() {
    let newLanguage = (this.langDisplay = this.newLang);
    this.languageService.postLanguage(newLanguage).subscribe(
      response => {
        console.log("language was sent");
      },
      error => {
        console.log("Unable to post new language, please retry");
      }
    );
    console.log(newLanguage);
  }
}
