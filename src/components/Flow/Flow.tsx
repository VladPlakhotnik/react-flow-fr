import { useCallback, useEffect } from 'react'
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
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

export const Flow = () => {
  const { updateSidebarId } = useSettings()
  const mockNodes = useNodes()
  const mockEdges = useEdges()
  const [nodes, , onNodesChange] = useNodesState(mockNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(mockEdges)

  useEffect(
    () => updateSidebarId(mockNodes[0].id),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges(eds => addEdge(params, eds)),
    [setEdges],
  )

  const handleUpdateNode = (changes: NodeChange[]) => {
    if (changes[0].type === 'position') {
      onNodesChange(changes)
      updateSidebarId(changes[0].id)
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
        <Controls />
        <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
      </ReactFlow>
    </Container>
  )
}
