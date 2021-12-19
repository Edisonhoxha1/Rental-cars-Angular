import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Makina-me-qera-Angular';

  ngOnInit() {
    const list = [
      {
        "id": "2b65c9ff-749f-f8e9-0e1c-81f845f9755b",
        "carName": "Mercedes Benzzzzzzzzzz",
        "year": "2013",
        "fuel": "Deisel",
        "reservedDate": "20-11-2021"
      }, {
        "id": "2f08f68e-4b09-8ebe-b7e4-df5df22ec7aa",
        "carName": "Fiat",
        "year": "2000",
        "fuel": "Deisel",
        "reservedDate": "22-11-2021"

      }, {
        "id": "4913c77b-b407-e086-7ba3-c08cfb6cd48a",
        "carName": "Audi",
        "year": "2019",
        "fuel": "Deisel",
        "reservedDate": "23-11-2021"

      }, {
        "id": "9c4cbd3d-1b73-baf9-41b8-963fc19e0acd",
        "carName": "Passat",
        "year": "2005",
        "fuel": "Deisel",
        "reservedDate": "24-11-2021"

      }, {
        "id": "bed375ca-133b-082f-5299-2898d6badd1a",
        "carName": "Citroen C3",
        "year": "2011",
        "fuel": "Deisel",
        "reservedDate": "18-12-2021"
      }, {
        "id": "e4f7ff3f-88bd-ea72-51e7-4cff623fe745",
        "carName": "Audi",
        "year": "2012",
        "fuel": "Gaz",
        "reservedDate": "17-12-2021"
      }];
    localStorage.setItem('reservedCarsList', JSON.stringify(list));
  }
}
