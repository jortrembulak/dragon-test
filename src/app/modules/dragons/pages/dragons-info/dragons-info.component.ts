import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dragon } from '../../models/dragons';
import { DragonsService } from '../../services/dragons.service';

@Component({
  selector: 'app-dragons-info',
  templateUrl: './dragons-info.component.html',
  styleUrls: ['./dragons-info.component.scss'],
})
export class DragonsInfoComponent implements OnInit {
  public dragon!: Dragon;

  constructor(
    private dragonsService: DragonsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.dragonsService.getById(id).subscribe({
      next: (ret: Dragon) => (this.dragon = ret),
      error: () => {
        this.router.navigate(['dragons/dragons-list']);
      },
    });
  }

  onCancel(): void {
    this.router.navigate(['dragons/dragons-list']);
  }
}
