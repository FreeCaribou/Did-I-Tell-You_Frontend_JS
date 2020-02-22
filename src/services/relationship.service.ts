import BaseService from "./base.service";
import { MOCK_GET_RELATIONSHIPS } from "../mock/relationship.mock";

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

}