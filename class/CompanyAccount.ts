import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    if (this.validadeStatus()) {
      this.balance = value + this.balance;
    }
    console.log("Você pegou um emprestimo");
    console.log(" Seu novo saldo é:", this.balance);
  };
}
