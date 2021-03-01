import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Customer } from './customer';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  // declare array and model here

  custArray: Array<Customer> = new Array();
  editCustomerDetails: boolean = false;
  userIndexToBeUpdate: number | null = null;
  today: Date = new Date();

  // declare model here
  model = new Customer('', 0);

  constructor(
    private logger: NGXLogger,
  ) { }

  ngOnInit(): void {
  }

  updateCustomer() {
    this.logger.info('Editing the customer');
    const userArray = [...this.custArray];
    if (this.userIndexToBeUpdate === null) {
      return;
    }
    userArray[this.userIndexToBeUpdate] = {
      name: this.model.name,
      age: this.model.age,
    };

    this.custArray = userArray;
    this.editCustomerDetails = false;
    this.userIndexToBeUpdate = null;
  }

  createCustomer() {
    try {
      if (this.editCustomerDetails) {
        this.updateCustomer();
        return;
      }
      this.logger.info('Creating customer here');
      // Add customer using the push event
      this.custArray.push(new Customer(this.model.name, this.model.age));
      this.logger.debug('Array is - ', JSON.stringify(this.custArray));
      this.logger.debug(this.model.age);
      this.model.name = '';
      this.model.age = 0;
    } catch (err) {
      this.logger.error('Error while creating the error ----> ' + err);
    }
  }

  deleteCustomer(index: number) {
    try {
      this.logger.info('Deleting customer here');
      // Deleting customer from the array
      const userArray = [...this.custArray];
      userArray.splice(index, 1);
      this.custArray = userArray;
    } catch (err) {
      this.logger.error('Error occurred - ', err);
    }
  }

  editCustomer(index: number) {
    try {
      this.logger.info('Editing the customer');
      const userArray = [...this.custArray];
      this.model.name = userArray[index].name;
      this.model.age = userArray[index].age;
      this.editCustomerDetails = true;
      this.userIndexToBeUpdate = index;
    } catch (err) {
      this.logger.error('Err occurred - ', err);
    }
  }

}
