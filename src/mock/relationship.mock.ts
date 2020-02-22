import { Relationship } from "../models/Relationship"
import { MOCK_USER } from "./user.mock"

export const MOCK_RELATIONSHIP_SAMY: Relationship = {
  id: 1,
  name: 'Samy',
  user: MOCK_USER
}

export const MOCK_RELATIONSHIP_FLO: Relationship = {
  id: 2,
  name: 'Flo',
  user: MOCK_USER
}

export const MOCK_GET_RELATIONSHIPS = {
  data: [MOCK_RELATIONSHIP_SAMY, MOCK_RELATIONSHIP_FLO],
  status: 200
} 