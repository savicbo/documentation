import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { Position } from 'reactflow'
import { SubNodeContent, SubNodeContentProps } from '../SubNodeContent'
import { SourceHandle } from './SourceHandle'
import { TargetHandle } from './TargetHandle'
import { getSourceHandleId, getTargetHandleId } from './helpers'

export type ExternalApiNodeData = {
  label: string
  link: { url: string; title: string }
}
export const EXTERNAL_API_NODE = 'externalApiNode'

const NODE_CONTENT: SubNodeContentProps[] = [
  {
    title: 'webhook',
    value: 'users/{userId}/watch',
    details: {
      title: 'Handler',
      bodyMarkDown: `The handler function is used to handle the incoming requests from the integration. Which means that this
    function will be called every time the telegram integration sends a request to the webhook url set in the
    register function.\n\nIn this case, when the Gmail API has a new email it calls the webhook url we’ve registered with it. The
    request is parsed by the handler which in turn calls the onNewEmail function defined in the integration
    implementation.
`,
      actionLinks: [
        { label: 'Code', link: 'https://github.com', isExternal: true },
        { label: 'Documentation', link: 'https://botpress.com/docs' },
      ],
    },
  },
  {
    title: 'POST',
    value: 'users/{userId}/messages/send',
    details: {
      title: 'Handler',
      bodyMarkDown: `The handler function is used to handle the incoming requests from the integration. Which means that this
      function will be called every time the telegram integration sends a request to the webhook url set in the
      register function.\n\nIn this case, when the Gmail API has a new email it calls the webhook url we’ve registered with it. The
      request is parsed by the handler which in turn calls the onNewEmail function defined in the integration
      implementation.
`,
      actionLinks: [
        { label: 'Code', link: 'https://github.com', isExternal: true },
        { label: 'Documentation', link: 'https://botpress.com/docs' },
      ],
    },
  },
]
export function ExternalApiNode({ data }: { data: ExternalApiNodeData }) {
  return (
    <>
      <div
        className={classNames(
          'flex-col rounded-md border border-current bg-white text-zinc-200 dark:border-zinc-800 dark:bg-dark dark:text-zinc-500'
        )}
      >
        <div className="p-4">
          <div className={classNames('text-lg text-zinc-600 dark:text-zinc-100')}>{data.label}</div>
          <a
            target="blank"
            href={data.link.url}
            className="flex items-center text-sm text-primary hover:text-primary-dark"
          >
            {data.link.title} <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
          </a>
        </div>
        <div className="flex gap-4">
          <div className={classNames('relative flex flex-col items-center py-5 pl-4')}>
            <SubNodeContent titleClass="text-zinc-400" {...NODE_CONTENT[0]} />
            <div className={classNames('full absolute bottom-2 mt-[1px] h-[5px] w-[5px] rounded bg-current')}></div>
          </div>
          <div className={classNames('relative flex flex-col items-center justify-center py-5 pr-4')}>
            <div className="absolute -right-[1px] h-[18px] w-[10px] rounded-bl-full rounded-tl-full border border-current dark:border-zinc-600/50"></div>
            <SubNodeContent titleClass="text-zinc-400" {...NODE_CONTENT[1]} />
          </div>
        </div>
      </div>
      <div className={classNames('text-zinc-300 dark:text-zinc-600')}>
        <svg
          style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }}
          className="text-zinc-300 dark:text-zinc-500"
        >
          <defs>
            <marker id="external" refX={4} refY={1} markerHeight={16} markerWidth={16}>
              <ellipse cx="4" cy="4" rx="3" ry="3" className="fill-white stroke-current dark:fill-dark" />
            </marker>
          </defs>
        </svg>

        <SourceHandle position={Position.Bottom} id={getSourceHandleId(0)} left={126} />
        <TargetHandle position={Position.Right} id={getTargetHandleId(1)} top={133} />
      </div>
    </>
  )
}
