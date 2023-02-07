import { CZT } from "./config.js";

export class CztUtility {

  static isEmpty(arg) {
    return [null, false, undefined, 0, ''].includes(arg);
  };

  static genId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  };

  static arrayRemoveElement(arr, value) {
    return arr.filter(function(ele){ 
        return ele != value; 
    });
  };

  static getProgressCircle({ current = 100, max = 100, radius = 16 }) {
    let circumference = radius * 2 * Math.PI;
    let percent = current < max ? current / max : 1;
    let percentNumber = percent * 100;
    let offset = circumference - (percent * circumference);
    let strokeWidth = 4;
    let diameter = (radius * 2) + strokeWidth;
    let colorClass = Math.round((percent * 100) / 10) * 10;

    return {
      radius: radius,
      diameter: diameter,
      strokeWidth: strokeWidth,
      circumference: circumference,
      offset: offset,
      position: diameter / 2,
      color: 'red',
      class: colorClass,
    };
  };

}