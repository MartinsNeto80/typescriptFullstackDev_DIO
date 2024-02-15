import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (this.validadeStatus()) {
      this.balance = this.balance + value + 10;
      console.log("Valor depositado com sucesso.");
      console.log("Seu saldo atual é:", this.balance);
    }
  };
}
