import BaseService from "./base.service";

export default class RelationshipService {
  baseUrl: string;
  baseService: BaseService;

  constructor() {
    this.baseUrl = 'relationship/';
    this.baseService = new BaseService();
  }

  async getAllRelationship() {
    return this.baseService.get(this.baseUrl);
  }

}