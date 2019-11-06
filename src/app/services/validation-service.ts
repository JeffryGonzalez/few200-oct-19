import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ValidationService {
  validateCreditCard(num: string): boolean {
    return true;
  }
}
