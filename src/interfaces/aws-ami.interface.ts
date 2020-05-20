import { AwsAmiArgsIntterface, AwsAmiAttrsIntterface } from '.';

export interface AwsAmiIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAmiArgsIntterface;
  attrs: AwsAmiAttrsIntterface;

}
