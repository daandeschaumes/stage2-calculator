import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CalculatorController extends Controller {
  @tracked itemList = [];
  @tracked currentNumber = 0;
  get subtotal() {
    return this.itemList.reduce((acc, item) => {
      return (acc += item);
    }, 0);
  }

  get isGreaterThan100() {
    return this.subtotal > 100;
  }

  get isEvenAndNotZero() {
    return this.subtotal % 2 === 0 && this.subtotal > 0;
  }

  @action
  addNumbers() {
    if (this.currentNumber) {
      this.itemList = [...this.itemList, this.currentNumber];
      console.log(this.itemList);
      this.currentNumber = 0;
    }
  }

  @action
  reset() {
    this.itemList = [];
    this.currentNumber = 0;
  }
  @action
  deleteItem(itemToDelete) {
    const indexToRemove = this.itemList.findIndex(
      (item) => item === itemToDelete
    );

    if (indexToRemove !== -1) {
      this.itemList.splice(indexToRemove, 1);
    }
    this.itemList = [...this.itemList];
  }

  @action
  registerNumber(event) {
    const number = event.target.value;
    if (number >= 0) {
      this.currentNumber = parseInt(number);
    } else {
      this.currentNumber = 0;
    }
  }
}
