import { useState } from 'react'
import { SAMPLE_MESSAGES } from './prompts/prompts.constants'
import { BoltIcon } from '@heroicons/react/24/outline'

export function ApiExplorer() {
  const [query, setQuery] = useState<string>('')

  return (
    <div className="flex flex-col">
      <label htmlFor="queryField" className="mb-2 block text-sm text-zinc-400">
        Query (prompt)
      </label>
      <textarea
        id="queryField"
        rows={4}
        className="mb-2 rounded-lg border border-zinc-300 p-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Describe what you want to do in natural language"
      ></textarea>
      <div className="flex items-stretch">
        <div className="no-scrollbar relative mr-3 flex overflow-x-scroll">
          {SAMPLE_MESSAGES.map((message) => {
            return (
              <div
                onClick={(event) => {
                  ;(event.target as HTMLDivElement).scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'nearest',
                  })
                  setQuery(message)
                }}
                key={message}
                className="mr-2 flex cursor-pointer items-center whitespace-nowrap rounded-full border border-zinc-100 px-4 text-sm first:ml-5 last:mr-5 hover:border-zinc-200 hover:bg-zinc-100"
              >
                {message}
              </div>
            )
          })}
        </div>
        <button className="button primary icon-leading">
          <BoltIcon />
          Generate
        </button>
      </div>
    </div>
  )
}
