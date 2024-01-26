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
import { type INodes, useEdges, useNodes } from '../../api/settings.api'
import 'reactflow/dist/style.css'
import { Container } from './Flow.styles'
import { useSettings } from '../../atoms/settingsAtom'
import { useLevelNodes } from '../../utilities/mockNodes'

export const Flow = () => {
  const { settings, updateSidebarId } = useSettings()
  const nodes = useLevelNodes(settings.sidebarId)
  const data = useNodes()
  const [edges, setEdges] = useEdgesState(useEdges())

  const extractTopLevelIds = (nodes: INodes[]) =>
    nodes.reduce((acc, node) => {
      acc.push(node.id)
      if (node.subNodes) {
        acc.push(...node.subNodes.map(subNode => subNode.id))
      }
      return acc
    }, [] as string[])

  const LEVEL_1 = extractTopLevelIds(data)

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges(eds => addEdge(params, eds)),
    [setEdges],
  )

  const handleUpdateNode = (changes: NodeChange[]) => {
    if (changes[0].type === 'select') {
      const id = changes[0].id
      if (LEVEL_1.some(nodeId => nodeId === id)) updateSidebarId(id)
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
