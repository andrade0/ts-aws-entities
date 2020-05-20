import { AwsDynamodbTableItemArgsIntterface } from '../interfaces';


export class AwsDynamodbTableItemArgs implements AwsDynamodbTableItemArgsIntterface {
  table_name: string;
  hash_key: string;
  range_key?: string;
  item: string;

}
