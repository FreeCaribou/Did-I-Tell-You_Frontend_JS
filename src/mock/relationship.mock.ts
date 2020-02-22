import { Relationship } from "../models/Relationship"
import { MOCK_USER } from "./user.mock"

export const MOCK_RELATIONSHIP: Relationship = {
  id: 1,
  name: 'Samy',
  user: MOCK_USER
}

export const MOCK_GET_RELATIONSHIPS = {
  data: [MOCK_RELATIONSHIP],
  status: 200
} 