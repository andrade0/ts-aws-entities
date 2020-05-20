import { AwsIamGroupArgsIntterface, AwsIamGroupAttrsIntterface } from '.';

export interface AwsIamGroupIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIamGroupArgsIntterface;
  attrs: AwsIamGroupAttrsIntterface;

}
