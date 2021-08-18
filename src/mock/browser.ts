import { setupWorker } from 'msw'

const modules = import.meta.globEager('./handlers/*.ts')

const handlers = []

for (const name in modules) {
  const module = modules[name]
  if (Array.isArray(module.default)) {
    handlers.push(...module.default)
  }
}

export const worker = setupWorker(...handlers)
