import { RiAccountCircleLine, RiBankLine } from 'react-icons/ri'
import type { Node } from 'reactflow'
import { Position } from 'reactflow'

const nodeStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid blue',
  borderRadius: '50px',
  width: '60px',
  height: '60px',
}

export const mockNodes: Node[] = [
  {
    id: 'wavestone_id',
    position: {
      x: 600,
      y: 100,
    },
    data: {
      label: (
        <div>
          <RiBankLine style={{ scale: '4' }} />
        </div>
      ),
    },
    style: nodeStyle,
    type: 'input',
    targetPosition: Position.Bottom,
  },
  {
    id: 'a_id',
    position: {
      x: 400,
      y: 200,
    },
    data: {
      label: (
        <div>
          <RiAccountCircleLine style={{ scale: '4' }} />
        </div>
      ),
    },
    style: nodeStyle,
    type: 'output',
    targetPosition: Position.Right,
  },
  {
    id: 'b_id',
    position: {
      x: 800,
      y: 200,
    },
    data: {
      label: (
        <div>
          <RiAccountCircleLine style={{ scale: '4' }} />
        </div>
      ),
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
      label: (
        <div>
          <RiAccountCircleLine style={{ scale: '4' }} />
        </div>
      ),
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
      label: (
        <div>
          <RiAccountCircleLine style={{ scale: '4' }} />
        </div>
      ),
    },
    style: nodeStyle,
    type: 'output',
    targetPosition: Position.Top,
  },
]
