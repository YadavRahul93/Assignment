import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
  err: boolean = false;
  timeDecrement: any;

  private countdownTime = new Subject<number>();
  private noOfStarts = new Subject<any>();
  private noOfPauses = new Subject<any>();
  private currLog = new Subject<any>();
  private isPaused = new Subject<boolean>();
//   private isStart = new Subject<boolean>();


  sendCountDownTime(time: number){
      this.countdownTime.next(time);
  }

  sendNumOfStarts(data: any){
      this.noOfStarts.next(data)
  }

  sendNumOfPuases(data: any){
      this.noOfPauses.next(data);
  }

  sendCurrentLog(log:any){
      this.currLog.next(log);
  }

  sendPauseStat(status: boolean){
      this.isPaused.next(status)
  }

  getCountDownTime(): Observable<any>{
    return this.countdownTime.asObservable();
  }

  getNumOfStarts(): Observable<any>{
      return this.noOfStarts.asObservable();
  }

  getNumOfPauses(): Observable<any>{
      return this.noOfPauses.asObservable();
  }

  getCurrentLog(): Observable<any>{
      return this.currLog.asObservable();
  }
  
  getPauseStat(): Observable<any>{
      return this.isPaused.asObservable();
  }
  
}