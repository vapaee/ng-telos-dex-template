import { Component, OnInit, ElementRef } from '@angular/core';

import { VapaeeScatter} from '@vapaee/scatter';
import { VapaeeDEX } from '@vapaee/dex';


declare var $:any;

@Component({
    selector: 'root-page',
    templateUrl: './root.page.html',
    styleUrls: ['./root.page.scss']
})
export class RootPage implements OnInit {

    constructor(
        public elRef: ElementRef,
        public scatter: VapaeeScatter,
        public dex: VapaeeDEX
    ) {
        
    }
    
    ngOnInit() {
       
    }

    collapseMenu() {
        var target = this.elRef.nativeElement.querySelector("#toggle-btn");
        var navbar = this.elRef.nativeElement.querySelector("#navbar");
        if (target && $(navbar).hasClass("show")) {
            $(target).click();
        }
    }
    
    debug(){
        console.log("--------------------------------");
        console.log("VPE", [this.dex]);
        console.log("Scatter", [this.scatter]);
        console.log("--------------------------------");
    }

}
