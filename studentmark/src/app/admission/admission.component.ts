import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControlName,Validators } from '@angular/forms';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  admission: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.admission=this.fb.group({
      frstname   : ['', [Validators.required,Validators.maxLength(20),Validators.pattern("^[a-zA-Z]+$")]],
      lstname     :  ['', [Validators.required,Validators.maxLength(20),Validators.pattern("^[a-zA-Z]+$")]],
      clss        :  ['', [Validators.required,Validators.pattern("^[a-zA-Z0-9]+$")]],
      yearofps    : ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      prctofmrks  :['', [Validators.required,Validators.pattern("^[0-9]*$")]],

    });
  }

}
