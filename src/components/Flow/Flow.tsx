import { useCallback } from 'react'
import ReactFlow, {
  Background,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  BackgroundVariant,
  NodeChange,
} from 'reactflow'
import { useEdges } from '../../api/settings.api'
import 'reactflow/dist/style.css'
import { Container } from './Flow.styles'
import { useSettings } from '../../atoms/settingsAtom'
import { useLevelNodes } from '../../utilities/mockNodes'

export const Flow = () => {
  const { settings, updateSidebarId } = useSettings()
  const nodes = useLevelNodes(settings.sidebarId)
  const [edges, setEdges] = useEdgesState(useEdges())

  const level1 = [
    'wavestone_id',
    'a_id',
    'b_id',
    'c_id',
    'd_id',
    'e_id',
    'j_id',
    'q_id',
    'l_id',
    'k_id',
    'h_id',
  ]

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges(eds => addEdge(params, eds)),
    [setEdges],
  )

  const handleUpdateNode = (changes: NodeChange[]) => {
    if (changes[0].type === 'select') {
      const id = changes[0].id
      if (level1.some(nodeId => nodeId === id)) updateSidebarId(id)
    }
  }

  return (
    <Container>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleUpdateNode}
        onConnect={onConnect}
      >
        <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
      </ReactFlow>
    </Container>
  )
}
