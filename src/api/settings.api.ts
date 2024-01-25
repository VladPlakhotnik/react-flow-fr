import { Edge } from 'reactflow'

import { mockEdges } from '../utilities/mockEdges'
import { mockDetails } from '../utilities/mockDetails'

export interface INodes {
  id: string
  label: string
  subNodes: INodes[] | null
}

const data: INodes[] = [
  {
    id: 'wavestone_id',
    label: 'Wavestone',
    subNodes: [
      {
        id: 'a_id',
        label: 'A',
        subNodes: null,
      },
      {
        id: 'b_id',
        label: 'B',
        subNodes: null,
      },
      {
        id: 'c_id',
        label: 'C',
        subNodes: null,
      },
      {
        id: 'd_id',
        label: 'D',
        subNodes: [
          { id: 'd_a_id', label: 'D-A', subNodes: null },
          { id: 'd_b_id', label: 'D-B', subNodes: null },
        ],
      },
    ],
  },
]

export const useNodes = (): INodes[] => {
  // ------------- Request to receive nodes

  return data
}

export const useEdges = (): Edge[] => {
  // ------------- Request to receive edges

  return mockEdges
}

export const useDetails = () => {
  // ------------- Request to receive details

  return mockDetails
}
