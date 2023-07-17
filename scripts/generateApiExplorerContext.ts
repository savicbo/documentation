import * as fs from 'fs'
import metadata from '../public/static/openApi/metadata.json'

async function getApiExplorerContext(): Promise<string> {
  let fileContent = ''
  const clientMethodsMap = metadata.sections.reduce((_clientMethodsMap, section) => {
    _clientMethodsMap[section.name] = section.operations
    return _clientMethodsMap
  }, {} as any)
  fileContent += `export const CLIENT_METHODS = ${JSON.stringify(clientMethodsMap)}`
  return fileContent
}

getApiExplorerContext()
  .then((context) => {
    try {
      fs.writeFileSync('../prompts/client-context.constants.ts', context)
    } catch (error) {
      console.log('There was an error writing the document - ', error)
    }
  })
  .catch((err) => {
    console.log('there was an error generating the api documentation page - ', err)
  })
