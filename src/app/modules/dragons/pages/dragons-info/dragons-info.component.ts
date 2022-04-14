import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dragon } from '../../models/dragons';

@Component({
  selector: 'app-dragons-info',
  templateUrl: './dragons-info.component.html',
  styleUrls: ['./dragons-info.component.scss'],
})
export class DragonsInfoComponent implements OnInit {
  public dragon!: Dragon;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getDragon();
  }

  getDragon() {
    this.dragon = this.route.snapshot.data['dragons'] || {};
  }

  onCancel(): void {
    this.router.navigate(['dragons/dragons-list']);
  }
}
