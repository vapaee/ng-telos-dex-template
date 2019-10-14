import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'not-found-page',
    templateUrl: './not-found.page.html',
    styleUrls: ['./not-found.page.scss']
})
export class NotFoundPage implements OnInit {

    constructor(
    ) {
    }

    ngOnInit() {
        console.log("NOT FOUND 404: ", window.location.href);
    }

}
