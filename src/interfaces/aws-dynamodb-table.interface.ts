import { AwsDynamodbTableArgsIntterface, AwsDynamodbTableAttrsIntterface } from '.';

export interface AwsDynamodbTableIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDynamodbTableArgsIntterface;
  attrs: AwsDynamodbTableAttrsIntterface;

}
