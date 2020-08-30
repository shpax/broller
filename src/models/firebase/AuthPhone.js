import { EventEmitter } from "events";
import { authWithPhone } from "./index";

export default class AuthPhone extends EventEmitter {
  constructor(phoneNumber) {
    super();
    this.phoneNumber = phoneNumber;
    console.log("AUTH_PHONE");
  }

  async getCode() {
    console.log("getCode");
    this.enterCodeFunc = await authWithPhone(this.phoneNumber);

    this.emit("code-sent");
  }

  async enterCode(code) {
    console.log("enterCode");
    if (this.enterCodeFunc) {
      const authResult = await this.enterCodeFunc(code);

      this.emit("auth-success", authResult);
    }
  }
}
