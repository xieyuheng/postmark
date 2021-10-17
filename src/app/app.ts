import { ServiceContainer } from "@xieyuheng/enchanter/lib/service-container"
import * as Loggers from "@xieyuheng/enchanter/lib/loggers"
import { AppConfig } from "./app-config"
import { customAlphabet } from "nanoid"
import { Tester } from "../tester"
import { Parser } from "../parser"
import { CustomBlockParser } from "../custom-block-parser"

export class App extends ServiceContainer {
  nanoid = customAlphabet("1234567890abcdef", 16)
  config = new AppConfig()
  logger = new Loggers.PrettyLogger()
  parser = new Parser()
  tester = new Tester({ parser: this.parser })

  createCustomBlockParser = CustomBlockParser.create
}

export default new App()
