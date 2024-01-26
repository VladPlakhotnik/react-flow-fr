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
        subNodes: [
          { id: 'b_a_id', label: 'B-A', subNodes: null },
          { id: 'b_b_id', label: 'B-B', subNodes: null },
        ],
      },
      {
        id: 'c_id',
        label: 'C',
        subNodes: [
          { id: 'c_a_id', label: 'C-A', subNodes: null },
          { id: 'c_b_id', label: 'C-B', subNodes: null },
          { id: 'c_c_id', label: 'C-C', subNodes: null },
          { id: 'c_d_id', label: 'C-D', subNodes: null },
        ],
      },
      {
        id: 'd_id',
        label: 'D',
        subNodes: [
          { id: 'd_a_id', label: 'D-A', subNodes: null },
          { id: 'd_b_id', label: 'D-B', subNodes: null },
          { id: 'd_c_id', label: 'D-C', subNodes: null },
          { id: 'd_d_id', label: 'D-D', subNodes: null },
        ],
      },
      {
        id: 'e_id',
        label: 'E',
        subNodes: [
          { id: 'e_a_id', label: 'E-A', subNodes: null },
          { id: 'e_b_id', label: 'E-B', subNodes: null },
        ],
      },
      {
        id: 'j_id',
        label: 'J',
        subNodes: [
          { id: 'j_a_id', label: 'J-A', subNodes: null },
          { id: 'j_b_id', label: 'J-B', subNodes: null },
        ],
      },
      {
        id: 'q_id',
        label: 'Q',
        subNodes: null,
      },
      {
        id: 'l_id',
        label: 'L',
        subNodes: [
          { id: 'l_a_id', label: 'L-A', subNodes: null },
          { id: 'l_b_id', label: 'L-B', subNodes: null },
        ],
      },
      {
        id: 'k_id',
        label: 'K',
        subNodes: null,
      },
      {
        id: 'h_id',
        label: 'H',
        subNodes: [
          { id: 'h_a_id', label: 'H-A', subNodes: null },
          { id: 'h_b_id', label: 'H-B', subNodes: null },
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
