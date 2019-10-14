import { Component } from '@angular/core';
import { VapaeeScatter, NetworkMap, SmartContract, TableResult } from '@vapaee/scatter';
import { VapaeeDEX } from '@vapaee/dex';
import { Feedback } from '@vapaee/feedback';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ng-telos-dex-template';
    contract: SmartContract;
    tokens: any;

    constructor(
        public scatter: VapaeeScatter,
        public dex: VapaeeDEX
    ) {
        var feed: Feedback = new Feedback();
        feed.setLoading("A", true);
        console.log(feed);
        
        var endpoints:NetworkMap = {
            "telos": {
                "name": "TELOS",
                "symbol": "TLOS",
                "explorer": "http://mainnet.telosfoundation.io",
                "chainId":"4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11",
                "endpoints":[
                {
                    "protocol":"https",
                    "host":"telos.eos.barcelona",
                    "port":443
                },
                {
                    "protocol":"https",
                    "host":"telos.caleos.io",
                    "port":443
                }]
            },
            "telos-testnet": {
                "name": "TELOS TestNet",
                "symbol": "TLOS",
                "explorer": "https://monitor.telosfoundation.io",
                "chainId":"335e60379729c982a6f04adeaad166234f7bf5bf1191252b8941783559aec33e",
                "endpoints":[
                {
                    "protocol":"https",
                    "host":"testnet.telos.caleos.io",
                    "port":443
                },
                {
                    "protocol":"http2",
                    "host":"api.telosmadrid.io",
                    "port":443
                }]
            }
        };
        this.scatter.setEndpoints(endpoints);

        var network = "telos";
        if ( this.scatter.network.slug != network || !this.scatter.connected ) {
            this.scatter.setNetwork(network);
            this.scatter.connectApp("My Telos Dex").catch(err => console.error(err));
        }

        setTimeout(_ => {
            console.log("Vapaee DEX", this.dex);
            console.log("Vapaee Scatter", this.scatter);
            console.log("OK !!");
        }, 3000);

        this.contract = new SmartContract("vapaeetokens", this.scatter);
        this.contract.getTable("tokens", {limit:200}).then((result: TableResult) => {
            this.tokens = result.rows;
            console.log(this.tokens);
        });

    }
}
