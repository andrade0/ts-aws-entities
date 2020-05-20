import { AwsDynamodbGlobalTableArgsIntterface, AwsDynamodbGlobalTableAttrsIntterface } from '.';

export interface AwsDynamodbGlobalTableIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDynamodbGlobalTableArgsIntterface;
  attrs: AwsDynamodbGlobalTableAttrsIntterface;

}
