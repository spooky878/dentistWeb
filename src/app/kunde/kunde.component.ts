import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Kunde, RestApplicationClient} from "../../gen/rest-api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-kunde',
  templateUrl: './kunde.component.html',
  styleUrls: ['./kunde.component.css']
})
export class KundeComponent {
  addressForm = this.fb.group({
    id: null,
    nummer: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    befund: null
  });

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Wyoming', abbreviation: 'WY'}
  ];

  constructor(private fb: FormBuilder, private backendService: RestApplicationClient, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.backendService.getClient(id).subscribe(response => {
        this.addressForm.patchValue(response);
        this.addressForm.controls['id'].setValue(response.id);
        this.addressForm.controls['firstName'].setValue(response.vorname);
        this.addressForm.controls['lastName'].setValue(response.nachname);
        this.addressForm.controls['nummer'].setValue(response.nummer);
        this.addressForm.controls['address'].setValue(response.addresse);


      }, error => {
        alert("Patient nicht gefunden");
      })
    })
  }

  onSubmit(): void {
    let kunde: Kunde = {
      nachname: this.addressForm.controls['lastName'].value,
      nummer: this.addressForm.controls['nummer'].value,
      vorname: this.addressForm.controls['firstName'].value,
      id: this.addressForm.controls['id'].value,
      addresse: this.addressForm.controls['address'].value,
      befund: this.addressForm.controls['befund'].value,
    };
    this.backendService.saveClient(kunde).subscribe(response => {
      console.log(response);
    });
  }

  onDelete() {
    this.backendService.deleteClient(this.addressForm.controls['id'].value).subscribe(response => {
      this.router.navigate(['clients']);
    });
  }
}
