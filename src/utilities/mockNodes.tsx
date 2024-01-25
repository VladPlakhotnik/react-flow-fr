import type { Node } from 'reactflow'
import { Position } from 'reactflow'
import { NodeButton } from '../components/NodeButton/NodeButton'
import { useNodes } from '../api/settings.api'

const nodeStyle: React.CSSProperties = {
  border: '2px solid blue',
  borderRadius: '50%',
  width: '60px',
  height: '60px',
}

interface CustomNodeProps {
  id: string
  type?: string
  label: string
  position: {
    x: number
    y: number
  }
}

const getCustomNode = (props: CustomNodeProps) => {
  const { id, type, label, position } = props

  return {
    id,
    position,
    // type,
    data: {
      label: <NodeButton type={type} label={label} />,
    },
    style: nodeStyle,
  }
}

export const useLevelNodes = (id: string): Node[] => {
  const nodesTest: Node[] = []
  const data = useNodes()

  data.forEach(i => {
    nodesTest.push(
      getCustomNode({
        id: i.id,
        type: 'single',
        label: i.label,
        position: { x: 600, y: 100 },
      }),
    )

    i.subNodes?.forEach((b, index) => {
      if (b.id === id) {
        nodesTest.push(
          getCustomNode({
            id: b.id,
            type: b.subNodes !== null ? 'nested' : 'single',
            label: b.label,
            position: { x: 600, y: 400 },
          }),
        )

        b.subNodes?.map((c, idx) => {
          nodesTest.push(
            getCustomNode({
              id: c.id,
              type: c.subNodes !== null ? 'nested' : 'single',
              label: c.label,
              position: { x: 300 + idx * 200, y: 700 },
            }),
          )
        })
      }

      if (id === 'wavestone_id') {
        nodesTest.push(
          getCustomNode({
            id: b.id,
            type: b.subNodes !== null ? 'nested' : 'single',
            label: b.label,
            position: { x: 300 + index * 200, y: 700 },
          }),
        )
      }
    })
  })

  return nodesTest
}

export const mockNodes: Node[] = [
  {
    id: 'wavestone_id',
    position: {
      x: 600,
      y: 100,
    },
    data: {
      label: <NodeButton />,
    },
    style: nodeStyle,
    type: 'input',
    targetPosition: Position.Bottom,
  },
  {
    id: 'a_id',
    position: {
      x: 300,
      y: 300,
    },
    data: {
      label: <NodeButton />,
    },
    style: nodeStyle,
    type: 'output',
    targetPosition: Position.Right,
  },
  {
    id: 'b_id',
    position: {
      x: 900,
      y: 300,
    },
    data: {
      label: <NodeButton />,
    },
    style: nodeStyle,
    type: 'output',
    targetPosition: Position.Left,
  },
  {
    id: 'c_id',
    position: {
      x: 400,
      y: 600,
    },
    data: {
      label: <NodeButton />,
    },
    style: nodeStyle,
    type: 'output',
    targetPosition: Position.Top,
  },
  {
    id: 'd_id',
    position: {
      x: 800,
      y: 600,
    },
    data: {
      label: <NodeButton />,
    },
    style: nodeStyle,
    type: 'output',
    targetPosition: Position.Top,
  },
]
