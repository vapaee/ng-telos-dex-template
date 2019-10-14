import { Component, OnInit, OnDestroy } from '@angular/core';
import { VapaeeScatter, SmartContract, TableResult } from '@vapaee/scatter';

@Component({
    selector: 'home-page',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss', '../common.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
   
    timer: number;
    contract: SmartContract;
    result: any;
    constructor(
        public satter: VapaeeScatter,
    ) {
        this.contract = new SmartContract("eosio.token", this.satter);
        this.contract.getTable("stat", {scope:"TLOS"}).then((result: TableResult) => {
            this.result = result.rows;
        });
    }

    ngOnInit() {
        
    } 

    ngOnDestroy() {

    }
}
