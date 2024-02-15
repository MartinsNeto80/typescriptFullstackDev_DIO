import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { PremiumAccount } from "./class/PremiumAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(123456789, "Martins", 1);
console.log(peopleAccount);
peopleAccount.setName("MartinsNeto");
console.log(peopleAccount.getName());
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
console.log(peopleAccount.getBalance());

const companyAccount: CompanyAccount = new CompanyAccount("Martins S/A", 2);
console.log(companyAccount);
companyAccount.setName("MartinsNeto S/A");
console.log(companyAccount.getName());
companyAccount.deposit(100);
companyAccount.withdraw(50);
console.log(companyAccount.getBalance());
companyAccount.getLoan(1500);

const premiumAccount: PremiumAccount = new PremiumAccount(
  "Martins Nobre de Souza Neto",
  1
);
console.log(premiumAccount);
premiumAccount.setName("MartinsNobreSouzaNeto");
console.log(premiumAccount.getName());
premiumAccount.deposit(100);
premiumAccount.withdraw(50);
console.log(premiumAccount.getBalance());
