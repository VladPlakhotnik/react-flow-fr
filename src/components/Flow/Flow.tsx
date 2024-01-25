import { useCallback, useEffect } from 'react'
import ReactFlow, {
  Background,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  BackgroundVariant,
  NodeChange,
} from 'reactflow'
import { useEdges, useNodes } from '../../api/settings.api'
import 'reactflow/dist/style.css'
import { Container } from './Flow.styles'
import { useSettings } from '../../atoms/settingsAtom'
import { useLevelNodes } from '../../utilities/mockNodes'

export const Flow = () => {
  const { settings, updateSidebarId } = useSettings()
  const data = useNodes()
  const nodes = useLevelNodes(settings.sidebarId)
  const mockEdges = useEdges()
  const [edges, setEdges, onEdgesChange] = useEdgesState(mockEdges)

  console.log(nodes)

  useEffect(
    () => updateSidebarId(data[0].id),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges(eds => addEdge(params, eds)),
    [setEdges],
  )

  const handleUpdateNode = (changes: NodeChange[]) => {
    if (changes[0].type === 'select') {
      const id = changes[0].id
      updateSidebarId(id)
    }
  }

  return (
    <Container>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleUpdateNode}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
      </ReactFlow>
    </Container>
  )
}
