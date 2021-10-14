import { ServiceContainer } from "@xieyuheng/enchanter/lib/service-container"
import * as Loggers from "@xieyuheng/enchanter/lib/loggers"
import { AppConfig } from "./app-config"
import { customAlphabet } from "nanoid"
import { Tester } from "../tester"

export class App extends ServiceContainer {
  nanoid = customAlphabet("1234567890abcdef", 16)
  config = new AppConfig()
  logger = new Loggers.PrettyLogger()
  tester = new Tester()
}

export default new App()
