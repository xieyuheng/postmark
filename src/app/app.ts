import { Coupler, Loggers } from "@xieyuheng/coupler"
import { Parser } from "../parser"
import { AppConfig } from "./app-config"

export class App extends Coupler {
  config = new AppConfig()
  logger = new Loggers.PrettyLogger()

  createParser = Parser.create
}

export default new App()
