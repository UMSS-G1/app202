import { FormControl } from '@angular/forms';

export class MyValidators{

  static isYoung(control: FormControl){
    let age = control.value;
    //Primer version
    // if(age >= 18 || age == ''){
    //   return null;
    // }else{
    //   return {'isyoung': true}
    // }
    //segunda version
    // if(age >= 18 || age == ''){
    //   return null;
    // }
    // return {'isyoung': true};
    //tercer version
    return age >= 18 || age == '' ? null : {'isyoung': true};
  }
}