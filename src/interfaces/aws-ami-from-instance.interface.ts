import { AwsAmiFromInstanceArgsIntterface, AwsAmiFromInstanceAttrsIntterface } from '.';

export interface AwsAmiFromInstanceIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAmiFromInstanceArgsIntterface;
  attrs: AwsAmiFromInstanceAttrsIntterface;

}
