import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dragons } from '../../models/dragons';
import { DragonsService } from '../../services/dragons.service';

@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.scss'],
})
export class DragonsListComponent implements OnInit {
  public dragons!: Dragons;

  constructor(private dragonsService: DragonsService, private router: Router) {}

  ngOnInit() {
    this.getAllDragons();
  }

  getAllDragons(): void {
    this.dragonsService.getAll().subscribe({
      next: (ret: Dragons) => {
        this.dragons = ret;
      },
      error: (err) => console.log(err),
    });
  }

  view(id: string): void {
    this.router.navigate([`dragons/dragons-info/${id}`]);
  }

  edit(id: string): void {
    this.router.navigate([`dragons/dragons-edit/${id}`]);
  }

  add(): void {
    this.router.navigate([`dragons/dragons-add`]);
  }

  delete(id: string): void {
    this.dragonsService.delete(id).subscribe({
      next: (ret) => {
        alert('Ok, Dragon was removed');
        this.removeFromList(id);
      },
      error: (err) => console.log(err),
    });
  }

  private removeFromList(id: string): void {
    let index = this.dragons
      .map(function (item) {
        return item.id;
      })
      .indexOf(id);

    this.dragons.splice(index, 1);
  }
}
