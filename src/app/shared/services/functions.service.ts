import { Injectable } from "@angular/core";
import { SharedService } from "./shared.service";

@Injectable({
    providedIn: 'root'
})
export class FunctionsService {
    timeDecrement: any;
    constructor(
        private sharedService: SharedService
    ) { }

    startCountDown(time: any, paused: boolean) {
        if (time > 0) {
            this.timeDecrement = setInterval(() => {
                if (!paused) {
                    time--;
                    this.sharedService.sendCountDownTime(time)
                    if (time === 0) {
                        this.resetCountDown();
                    }
                }
            }, 1000)
        } else {
            time = 0;

        }
    }

    pauseCountDown(time: any) {
        clearInterval(this.timeDecrement);
    }


    resetCountDown() {
        clearInterval(this.timeDecrement);
        this.sharedService.sendNumOfPuases(null);
        this.sharedService.sendNumOfStarts(null);
        this.sharedService.sendCountDownTime(0);
    }

}