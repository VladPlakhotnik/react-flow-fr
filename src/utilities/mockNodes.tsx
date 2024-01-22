import { RiAccountCircleLine, RiBankLine } from 'react-icons/ri'
import type { Node } from 'reactflow'
import { Position } from 'reactflow'
import { RoundBackground, CompanyName } from '../components/Flow/Flow.styles'

const nodeStyle = {
  border: '2px solid blue',
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
        <RoundBackground>
          <RiBankLine style={{ scale: '3' }} />
          <CompanyName>Wavestone</CompanyName>
        </RoundBackground>
      ),
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
      label: (
        <RoundBackground>
          <RiAccountCircleLine style={{ scale: '3' }} />
          <CompanyName>A...</CompanyName>
        </RoundBackground>
      ),
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
      label: (
        <RoundBackground>
          <RiAccountCircleLine style={{ scale: '3' }} />
          <CompanyName>B...</CompanyName>
        </RoundBackground>
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
        <RoundBackground>
          <RiAccountCircleLine style={{ scale: '3' }} />
          <CompanyName>C...</CompanyName>
        </RoundBackground>
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
        <RoundBackground>
          <RiAccountCircleLine style={{ scale: '3' }} />
          <CompanyName>D...</CompanyName>
        </RoundBackground>
      ),
    },
    style: nodeStyle,
    type: 'output',
    targetPosition: Position.Top,
  },
]
