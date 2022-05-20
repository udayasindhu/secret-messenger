import { Component, VERSION } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular ";
  secretForm: FormGroup;
  // constructor(private formBuilder: FormBuilder) {
  //   this.secretForm = this.formBuilder.group({
  //     encString: ['']
  //   });
  // }
  moveToEncrypt() {
    let encryptElement = document.getElementById("encryptContent");
    encryptElement.scrollIntoView();
  }
  moveToDecrypt() {
    let decryptElement = document.getElementById("decryptContent");
    decryptElement.scrollIntoView();
  }
  onSubmit() {
    // this.secretForm.controls.encString.value();
    console.log("String :");
  }
}
