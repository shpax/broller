import { EventEmitter } from "events";
import { authWithPhone } from "./index";

export default class AuthPhone extends EventEmitter {
  constructor(phoneNumber) {
    super();
    this.phoneNumber = phoneNumber;
  }

  async getCode() {
    this.enterCodeFunc = await authWithPhone(this.phoneNumber);

    this.emit("code-sent");
  }

  async enterCode(code) {
    if (this.enterCodeFunc) {
      const authResult = await this.enterCodeFunc(code);

      this.emit("auth-success", authResult);
    }
  }
}
