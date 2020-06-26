import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { OrdersService } from 'src/app/orders/services/orders.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {
  public init = new Client();
  constructor(
    private os: ClientsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public add(item: Client) {
    this.os.add(item).subscribe((res) => {
      // console.log(res);
      //this.router.navigate(['orders', 'edit']);
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }
}
