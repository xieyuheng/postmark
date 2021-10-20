import app from "../../app"

{
  const text = `\
| a   | b     | c |
|-----|:-----:|:--|
| *1* | **3** | 5 |
| 2   | 4     | 6 |
`

  const document = app.tester.parser.parseDocument(text, {
    enableTable: true,
  })

  console.dir(document)

  // app.tester.assertDocument(document, [
  //   {
  //     kind: "Table",
  //     children: [
  //       { kind: "Text", text: "A, B, C" },
  //       // NOTE Be careful about this "!"
  //       { kind: "Text", text: "!" },
  //     ],
  //   },
  // ])
}
