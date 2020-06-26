import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  public states = Object.values(StateClient);
  public form: FormGroup;
  @Input() initItem: Client;
  @Output() submited: EventEmitter<Client> = new EventEmitter();
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.initItem.name, [Validators.required, Validators.minLength(2)]],
      tva: [this.initItem.tva, Validators.required],
      ca: [this.initItem.ca],
      state: [this.initItem.state],
      comment: [this.initItem.comment],
      id: [this.initItem.id]
    });
  }

  public onSubmit(): void {
    this.submited.emit(this.form.value);
  }
}
