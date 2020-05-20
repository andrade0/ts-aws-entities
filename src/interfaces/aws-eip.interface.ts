import { AwsEipArgsIntterface, AwsEipAttrsIntterface } from '.';

export interface AwsEipIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsEipArgsIntterface;
  attrs: AwsEipAttrsIntterface;

}
