import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }

// }
// transform(value: any, ...args: any[]): any {
//   if (value) {
//     const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
//     if (seconds < 60)
//     return 'now';
//     const intervals = {
//       'year': 31536000,
//       'month': 2592000,
//       'week': 604800,
//       'day': 86400,
//       'hour': 3600,
//       'minute': 60,
//       'second': 1
//     };
//     let d;
//     for (const i in intervals) {
//       d = Math.floor(seconds / intervals[i]);
//         return d + ' ' + i + ' ago';
//     }
//   }
//   return value;
// }

// }
 transform(value: any, ...args:any[]): number {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs( todayWithNoTime - value ) //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && value < todayWithNoTime){
      return dateCounter;
    }else{
      return value;
    }
  }
}