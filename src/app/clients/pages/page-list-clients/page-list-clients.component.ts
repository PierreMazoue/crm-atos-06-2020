import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { Subscription, Observable } from 'rxjs';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public states = Object.values(StateClient);
  public listHeaders: string[];
  // public collection: Order[];
  public collection$: Observable<Client[]>;
  private sub: Subscription;
  constructor(private os: ClientsService) { }
  ngOnInit(): void {
    this.collection$ = this.os.collection;
    // this.os.collection.subscribe((col) => {
    //   this.collection = col;
    // });
    this.listHeaders = [
      'Name',
      'Tva',
      'CA HT',
      'CA TTC',
      'State'
    ];
    this.sub = this.os.testObservable.subscribe((datas) => {
      console.log(datas);
    });
  }

  public changeState(item: Client, e): void {
    this.os.changeState(item, e.target.value).subscribe((res) => {
      // console.log(res);
      // res etant la réponse de l'api, traiter les codes d'erreur
      item.state = res.state;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
