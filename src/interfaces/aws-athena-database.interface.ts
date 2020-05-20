import { AwsAthenaDatabaseArgsIntterface, AwsAthenaDatabaseAttrsIntterface } from '.';

export interface AwsAthenaDatabaseIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAthenaDatabaseArgsIntterface;
  attrs: AwsAthenaDatabaseAttrsIntterface;

}
