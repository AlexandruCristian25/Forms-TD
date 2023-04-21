import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form1') myForm: NgForm;

  defaultCity = 'Constanta';
  description = 'Initial description';

  civilStatus = ['Married', 'Single', 'Complicated'];

  person = {
    firstname: '',
    lastname: '',
    email: '',
    city: '',
    description: '',
    status: '',
  };
  formSubmitted = false;

  // onSubmit(fEl: NgForm) {
  //   console.log(fEl);
  // }

  onSubmit() {
    console.log(this.myForm);
    this.formSubmitted = true;

    this.person.firstname = this.myForm.form.value.userData.firstname;
    this.person.lastname = this.myForm.form.value.userData.lastname;
    this.person.email = this.myForm.form.value.email;
    this.person.city = this.myForm.form.value.city;
    this.person.description = this.myForm.form.value.description;
    this.person.status = this.myForm.form.value.status;

    this.myForm.reset();
  }

  addSomeDescription() {
    const newDescription = 'Some other description';
    // this.myForm.setValue({
    //   userData: {
    //     firstname: 'Andrei',
    //     lastname: 'Pop'
    //   },
    //   email: 'andrei@a.com',
    //   city: '3',
    //   description: newDescription,
    //   status: 'Single'
    // });
    this.myForm.form.patchValue({description: newDescription});
  }
}
