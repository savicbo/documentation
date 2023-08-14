import { CSSProperties, useCallback, useMemo } from 'react'
import ReactFlow, { Edge, Handle, Position, addEdge, useEdgesState, useNodesState } from 'reactflow'
import 'reactflow/dist/base.css'

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Google API' } },
  { id: '2', type: 'botpress', position: { x: 0, y: 100 }, data: { label: '2' } },
  { id: '3', type: 'botpress', position: { x: 500, y: 100 }, data: { label: '2' } },
]
const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', targetHandle: 'lt', type: 'smoothstep' },
  { id: 'e1-2-2', source: '1', target: '2', targetHandle: 'lb', type: 'smoothstep' },
]
export function SdkDiagram() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const nodeTypes = useMemo(() => ({ botpress: BotpressNode }), [])

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  return (
    <div style={{ width: '100%', height: '75vh' }} className="border border-orange-300">
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
    </div>
  )
}

const handleStyle: CSSProperties = {}

function BotpressNode({ data }) {
  return (
    <>
      <div className="flex-col rounded-md border border-fuchsia-300">
        <div className="flex rounded-t-md border-b border-fuchsia-300 bg-fuchsia-50/75">
          <div className="border-r border-fuchsia-300  p-2 py-2 text-fuchsia-300">
            <IntegrationIcon />
          </div>
          <div className="flex grow  items-center px-3 text-fuchsia-800">Gmail</div>
        </div>
        <div className="flex flex-col py-2">
          <div className="relative flex items-center justify-center px-4 py-1">
            <TargetHandleContainer />
            <NodeInfoCard title="channels.message.text" value="sendEmail" />
          </div>
          <div className="relative flex items-center justify-center px-4 py-1">
            <TargetHandleContainer />
            <NodeInfoCard title="channels.message.text" value="sendEmail" />
          </div>
        </div>
      </div>
      <TargetHandle id="lt" top={90} />
      <TargetHandle id="lb" top={161} />
    </>
  )
}
function NodeInfoCard(props: { title?: string; value?: string }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md border border-zinc-200/75 bg-zinc-50/50">
      <div className="flex items-center border-b  border-zinc-200/75 px-2 py-1 text-sm text-fuchsia-600">
        {props.title}
      </div>
      <div className="flex items-center px-2 py-1 text-zinc-900">{props.value}</div>
    </div>
  )
}
function TargetHandleContainer() {
  return (
    <div className=" absolute -left-[1px] box-content h-[16px] w-[7px] rounded-br-full rounded-tr-full border border-fuchsia-300 ">
      <div className="absolute -left-1 h-full w-full rounded-full bg-white"></div>
    </div>
  )
}

function TargetHandle(props: { top?: number; id: string }) {
  return (
    <Handle
      {...props}
      type="target"
      position={Position.Left}
      style={{ top: props.top, backgroundColor: 'white' }}
      className="h-2 w-2 rounded-full border border-fuchsia-300 bg-white"
    />
  )
}
function IntegrationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M14.7508 4.89999C14.7508 4.54194 14.893 4.19857 15.1462 3.94539C15.3994 3.69222 15.7427 3.54999 16.1008 3.54999C16.4588 3.54999 16.8022 3.69222 17.0554 3.94539C17.3085 4.19857 17.4508 4.54194 17.4508 4.89999V5.59999C17.4508 6.1702 17.6773 6.71706 18.0805 7.12027C18.4837 7.52347 19.0306 7.74999 19.6008 7.74999H23.8008C23.9732 7.74999 24.1385 7.81847 24.2604 7.94037C24.3823 8.06227 24.4508 8.2276 24.4508 8.39999V12.6C24.4508 12.7724 24.3823 12.9377 24.2604 13.0596C24.1385 13.1815 23.9732 13.25 23.8008 13.25H23.1008C22.3449 13.25 21.62 13.5503 21.0855 14.0847C20.551 14.6192 20.2508 15.3441 20.2508 16.1C20.2508 16.8559 20.551 17.5808 21.0855 18.1152C21.62 18.6497 22.3449 18.95 23.1008 18.95H23.8008C23.9732 18.95 24.1385 19.0185 24.2604 19.1404C24.3823 19.2623 24.4508 19.4276 24.4508 19.6V23.8C24.4508 23.9724 24.3823 24.1377 24.2604 24.2596C24.1385 24.3815 23.9732 24.45 23.8008 24.45H19.6008C19.4284 24.45 19.2631 24.3815 19.1412 24.2596C19.0193 24.1377 18.9508 23.9724 18.9508 23.8V23.1C18.9508 22.3441 18.6505 21.6192 18.116 21.0847C17.5816 20.5503 16.8566 20.25 16.1008 20.25C15.3449 20.25 14.62 20.5503 14.0855 21.0847C13.551 21.6192 13.2508 22.3441 13.2508 23.1V23.8C13.2508 23.9724 13.1823 24.1377 13.0604 24.2596C12.9385 24.3815 12.7732 24.45 12.6008 24.45H8.40078C8.22839 24.45 8.06306 24.3815 7.94116 24.2596C7.81926 24.1377 7.75078 23.9724 7.75078 23.8V19.6C7.75078 19.0298 7.52426 18.4829 7.12106 18.0797C6.71786 17.6765 6.171 17.45 5.60078 17.45H4.90078C4.54274 17.45 4.19936 17.3078 3.94619 17.0546C3.69301 16.8014 3.55078 16.458 3.55078 16.1C3.55078 15.7419 3.69301 15.3986 3.94619 15.1454C4.19936 14.8922 4.54274 14.75 4.90078 14.75H5.60078C6.171 14.75 6.71786 14.5235 7.12106 14.1203C7.52426 13.7171 7.75078 13.1702 7.75078 12.6V8.39999C7.75078 8.2276 7.81926 8.06227 7.94116 7.94037C8.06306 7.81847 8.22839 7.74999 8.40078 7.74999H12.6008C13.171 7.74999 13.7179 7.52347 14.1211 7.12027C14.5243 6.71706 14.7508 6.1702 14.7508 5.59999V4.89999Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}
