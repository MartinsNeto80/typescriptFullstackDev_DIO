export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (this.validadeStatus()) {
      this.balance = value + this.balance;
      console.log("Valor depositado com sucesso.");
      console.log("Seu saldo atual é:", this.balance);
    }
  };

  withdraw = (value: number): void => {
    if (this.validadeStatus() && this.balance > value) {
      this.balance = this.balance - value;
      console.log("Você Sacou");
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  readonly validadeStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
