import { EventEmitter } from "events";
import { authWithPhone } from "./index";

export default class AuthPhone extends EventEmitter {
  constructor(phoneNumber, capchaContainerId) {
    super();
    this.phoneNumber = phoneNumber;
    this.capchaContainerId = capchaContainerId;
  }

  async getCode() {
    this.enterCodeFunc = await authWithPhone(
      this.phoneNumber,
      this.capchaContainerId
    );

    this.emit("code-sent");
  }

  async enterCode(code) {
    if (!this.enterCodeFunc) throw new Error("getCode must be triggered first");
    const authResult = await this.enterCodeFunc(code);

    this.emit("auth-success", authResult);
  }
}
