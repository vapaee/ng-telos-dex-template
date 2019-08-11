import { Component } from '@angular/core';
import { VapaeeScatter, NetworkMap } from '@vapaee/scatter';
import { VapaeeDEX } from '@vapaee/dex';
import { Feedback } from '@vapaee/feedback';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ng-telos-dex-template';

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

    }
}