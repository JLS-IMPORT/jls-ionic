import { Component } from '@angular/core';
import { UtilsService } from '../service/utils.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public MessageCount: number|null = null;
  constructor(public utils: UtilsService) {


  }
  ngOnInit() {
    this.utils.newMessageNumberSubject.subscribe(numberOfNewMessage => {

      this.MessageCount = numberOfNewMessage > 0 ? numberOfNewMessage : null;
    });
  }

}
