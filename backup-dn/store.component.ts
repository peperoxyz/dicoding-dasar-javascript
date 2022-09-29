import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import storeJson from "../shared/store.json";

interface store {
  id: number;
  img: string;
  name: string;
  rarity: string;
  quantity: number;
  price: number;
  power: string;
  total?: number;
  buy_qty?: number;
}

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
})
export class StoreComponent implements OnInit {
  store: store[] = storeJson.data;
  storeClone: store[] = structuredClone(this.store);
  displayModal: boolean = false;
  loginModal: boolean = false;
  selectedItem: any;
  searchText: string = "";

  isLoggedIn: boolean = false;

  categories = [
    {
      name: "Armor",
    },
    {
      name: "Weapon",
    },
  ];

  selectedCategory: string = "";

  filteredItems: any = [];

  filter(data: string) {
    // this.selectedCategory = data;
    this.filteredItems = this.store.filter((item: any) => {
      return item.category === data;
    });
    console.log(this.filteredItems);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  localSearch(queryString: string, array: any[], name: string) {
    let newArray: any = [];
    array.map((key: any) => {
      if (key[name].toLocaleLowerCase().includes(queryString.toLocaleLowerCase())) {
        newArray.push(key);
      }
    });
    return newArray;
  }

  onSearchTextChanged() {
    this.store = this.localSearch(this.searchText, this.storeClone, "name");
  }

  onChangeQuantity(i: number) {
    this.store[i].total = this.store[i].price * (this.store[i].buy_qty ?? 0);
  }

  alert() {
    alert("You have bought this item");
    this.displayModal = false;
  }

  showModalDialog(store: any) {
    if (this.isLoggedIn) {
      this.displayModal = true;
      this.selectedItem = store;
    } else {
      this.loginModal = true;
    }
  }

  goLogin() {
    this.isLoggedIn = true;
    alert("You are logged in");
  }
}
