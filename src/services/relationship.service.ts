import BaseService from "./base.service";
import { MOCK_GET_RELATIONSHIPS, MOCK_GET_RELATIONSHIP } from "../mock/relationship.mock";

export default class RelationshipService {
  baseUrl: string;
  baseService: BaseService;
  mock: any;

  constructor() {
    this.baseUrl = 'relationship/';
    this.baseService = new BaseService();
    this.mock = process.env.REACT_APP_MOCK;
  }

  async getAllRelationship() {
    return this.mock ? MOCK_GET_RELATIONSHIPS : this.baseService.get(this.baseUrl);
  }

  async getOneRelationship(id: number) {
    return this.mock ? MOCK_GET_RELATIONSHIP : this.baseService.get(`${this.baseUrl}${id}`);
  }

}