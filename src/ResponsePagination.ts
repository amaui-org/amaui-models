import { Base } from './base';
import { MongoResponse } from './MongoResponse';

export interface IResponsePagination {
  next?: string;
  previous?: string;

  hasNext?: boolean;
  hasPrevious?: boolean;

  length?: number;
  total?: number;
  skip?: number;
  limit?: number;
}

export class ResponsePagination extends Base implements IResponsePagination {

  constructor(
    public next?: string,
    public previous?: string,

    public hasNext?: boolean,
    public hasPrevious?: boolean,

    public length?: number,
    public total?: number,
    public skip?: number,
    public limit?: number,
  ) {
    super();
  }

  public static fromMongoQuery(value: MongoResponse): ResponsePagination {
    return new ResponsePagination(
      value.next,
      value.previous,
      value.hasNext,
      value.hasPrevious,
      value.response && value.response.length,
      value.total,
      value.skip,
      value.limit
    );
  }

}
