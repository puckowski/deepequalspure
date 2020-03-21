import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxDeepEqualsPureService {

  constructor() { }

  public deepEquals(firstObject: any, secondObject: any): boolean {
    if (Array.isArray(firstObject) === true) {
      if (Array.isArray(secondObject) === false) {
        return false;
      } else if (firstObject.length !== secondObject.length) {
        return false;
      } else {
        const firstArrays: Set<any> = new Set<any>();
        const firstObjects: Set<any> = new Set<any>();
        const firstValues: Set<any> = new Set<any>();
        const firstFunctions: Set<any> = new Set<any>();

        for (const value of firstObject) {
          if (Array.isArray(value) === true) {
            firstArrays.add(value);
          } else if (typeof value === 'object') {
            firstObjects.add(value);
          } else if (typeof value === 'function') {
            firstFunctions.add(JSON.stringify('' + value));
          } else {
            firstValues.add(value);
          }
        }

        const secondArrays: Set<any> = new Set<any>();
        const secondObjects: Set<any> = new Set<any>();
        const secondValues: Set<any> = new Set<any>();
        const secondFunctions: Set<any> = new Set<any>();

        for (const value of secondObject) {
          if (Array.isArray(value) === true) {
            secondArrays.add(value);
          } else if (typeof value === 'object') {
            secondObjects.add(value);
          } else if (typeof value === 'function') {
            secondFunctions.add(JSON.stringify('' + value));
          } else {
            secondValues.add(value);
          }
        }

        if (firstValues.size !== secondValues.size) {
          return false;
        } else {
          let match = true;
          for (const value of firstValues) {
            if (secondValues.has(value) === false) {
              match = false;
              break;
            }
          }

          if (match === false) {
            return false;
          } else if (firstObjects.size === secondObjects.size) {
            match = true;
            for (const value of firstObjects) {
              let hasMatch = false;
              for (const secondValue of secondObjects) {
                if (this.deepEquals(value, secondValue) === true) {
                  hasMatch = true;
                  break;
                }
              }

              if (hasMatch === false) {
                match = false;
                break;
              }
            }

            if (match === false) {
              return false;
            } else if (firstArrays.size === secondArrays.size) {
              match = true;
              for (const value of firstArrays) {
                let hasMatch = false;
                for (const secondValue of secondArrays) {
                  if (this.deepEquals(value, secondValue) === true) {
                    hasMatch = true;
                    break;
                  }
                }

                if (hasMatch === false) {
                  match = false;
                  break;
                }
              }

              if (match === false) {
                return false;
              } else if (firstFunctions.size === secondFunctions.size) {
                match = true;
                for (const value of firstFunctions) {
                  if (secondFunctions.has(value) === false) {
                    match = false;
                    break;
                  }
                }

                if (match === false) {
                  return false;
                } else {
                  return true;
                }
              } else {
                return false;
              }
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      }
    } else if (typeof firstObject === 'object') {
      if (typeof secondObject !== 'object') {
        return false;
      } else {
        let match = true;

        if (Object.keys(firstObject).length === Object.keys(secondObject).length) {
          for (const [key, value] of Object.entries(firstObject)) {
            if (secondObject[key] === undefined) {
              match = false;
              break;
            } else {
              const secondValue = secondObject[key];

              match = this.deepEquals(value, secondValue);

              if (match === false) {
                break;
              }
            }
          }
        } else {
          match = false;
        }

        return match;
      }
    } else {
      if (Array.isArray(secondObject) === true) {
        return false;
      } else if (typeof secondObject === 'object') {
        return false;
      } else {
        if (typeof firstObject === 'function') {
          if (typeof secondObject === 'function') {
            return JSON.stringify('' + firstObject) === JSON.stringify('' + secondObject);
          } else {
            return false;
          }
        } else {
          return JSON.stringify(firstObject) === JSON.stringify(secondObject);
        }
      }
    }
  }
}
