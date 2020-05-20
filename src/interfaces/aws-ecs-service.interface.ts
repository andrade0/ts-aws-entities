import { AwsEcsServiceArgsIntterface, AwsEcsServiceAttrsIntterface } from '.';

export interface AwsEcsServiceIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsEcsServiceArgsIntterface;
  attrs: AwsEcsServiceAttrsIntterface;

}
