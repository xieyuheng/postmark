import * as Loggers from "@enchanterjs/enchanter/lib/loggers"
import { ServiceContainer } from "@enchanterjs/enchanter/lib/service-container"
import { customAlphabet } from "nanoid"
import { Parser } from "../parser"
import { AppConfig } from "./app-config"

export class App extends ServiceContainer {
  nanoid = customAlphabet("1234567890abcdef", 16)
  config = new AppConfig()
  logger = new Loggers.PrettyLogger()

  createParser = Parser.create
}

export default new App()
