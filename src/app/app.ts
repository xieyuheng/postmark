import { Coupler, Loggers } from "@xieyuheng/coupler"
import { customAlphabet } from "nanoid"
import { Parser } from "../parser"
import { AppConfig } from "./app-config"

export class App extends Coupler {
  nanoid = customAlphabet("1234567890abcdef", 16)
  config = new AppConfig()
  logger = new Loggers.PrettyLogger()

  createParser = Parser.create
}

export default new App()
