import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dragon } from '../../models/dragons';
import { DragonsService } from '../../services/dragons.service';

@Component({
  selector: 'app-dragons-add',
  templateUrl: './dragons-add.component.html',
  styleUrls: ['./dragons-add.component.scss'],
})
export class DragonsAddComponent implements OnInit {
  public form!: FormGroup;
  public dragon!: Dragon;
  public submitted: boolean = false;
  public errorMessage!: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dragonsService: DragonsService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(dragon?: Dragon): void {
    this.form = this.formBuilder.group({
      name: [
        dragon?.name,
        Validators.compose([Validators.required, Validators.maxLength(50)]),
      ],
      type: [
        dragon?.type,
        Validators.compose([Validators.required, Validators.maxLength(50)]),
      ],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.dragonsService.insert(this.form.value).subscribe({
      next: () => {
        alert('Ok, Seu dragão foi incluído com sucesso');
        this.router.navigate(['dragons/dragons-list']);
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }

  onCancel(): void {
    this.router.navigate(['dragons/dragons-list']);
  }
}
