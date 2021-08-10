import { FormBuilder, NgForm, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings-form';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: '',
    checkbox: '',
    exampleRadios: '',
    textarea: '',
    escolha: '',
    
  };
  
  userRating = 0;
  maxRating = 10;
  singleModel = false;
  startDate!: Date;
  userSettings: UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  escolhas!: Observable<string[]>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.escolhas = this.dataService.getEscolhas();
    
    this.startDate = new Date();
  }

  onHtppError(errorResponse: any) {
    console.log('error ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.value);

    // if (form.valid) {
    //   this.dataService.postUserSettingForm(this.userSettings).subscribe(
    //     (result) => console.log('sucesso: ', result),
    //     (error) => this.onHtppError(error)
    //   );
    // } else {
    //   this.postError = true;
    //   this.postErrorMessage = 'Por favor corrija os erros acima';
    // }
  }
}
