import { Node, Edge } from 'reactflow'

import { mockNodes } from '../utilities/mockNodes'
import { mockEdges } from '../utilities/mockEdges'

export const useNodes = (): Node[] => {
  // ------------- Request to receive nodes

  return mockNodes
}

export const useEdges = (): Edge[] => {
  // ------------- Request to receive edges

  return mockEdges
}
