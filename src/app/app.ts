import { ServiceContainer } from "@enchanterjs/enchanter/lib/service-container"
import * as Loggers from "@enchanterjs/enchanter/lib/loggers"
import { AppConfig } from "./app-config"
import { customAlphabet } from "nanoid"
import { Tester } from "../tester"
import { Parser } from "../parser"

export class App extends ServiceContainer {
  nanoid = customAlphabet("1234567890abcdef", 16)
  config = new AppConfig()
  logger = new Loggers.PrettyLogger()

  createParser = Parser.create

  defaultParser = this.createParser({
    enableTable: true,
  })

  tester = new Tester({ parser: this.defaultParser })
}

export default new App()
