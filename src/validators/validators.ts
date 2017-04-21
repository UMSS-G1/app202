import { FormControl } from '@angular/forms';

export class MyValidators{

  static isYoung(control: FormControl){
    let age = control.value;
    if(age >= 18 || age == ''){
      return null;
    }else{
      return {'isyoung': true}
    }
  }
}