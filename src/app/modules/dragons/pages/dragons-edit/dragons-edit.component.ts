import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dragon } from '../../models/dragons';
import { DragonsService } from '../../services/dragons.service';

@Component({
  selector: 'app-dragons-edit',
  templateUrl: './dragons-edit.component.html',
  styleUrls: ['./dragons-edit.component.scss'],
})
export class DragonsEditComponent implements OnInit {
  public id!: string;
  public form!: FormGroup;
  public dragon!: Dragon;
  public submitted: boolean = false;
  public errorMessage!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dragonsService: DragonsService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.createForm();
    this.getById(this.id);
  }

  getById(id: string): void {
    this.dragonsService.getById(id).subscribe({
      next: (ret) => {
        this.dragon = ret;
        this.createForm(ret);
      },
      error: () => {
        this.router.navigate(['dragons/dragons-list']);
      },
    });
  }

  createForm(dragon?: Dragon): void {
    this.form = this.formBuilder.group({
      id: dragon?.id,
      name: [dragon?.name, Validators.required],
      type: [dragon?.type, Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.dragonsService.update(this.id, this.form.value).subscribe({
      next: () => {
        alert('Ok, Seu dragão foi atualizado com sucesso');
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
