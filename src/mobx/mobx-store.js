import {observable, action} from "mobx";

export class CounterStore {

    @observable count = 0;

    @action
    addOne() {
        this.count ++;
    }
}
