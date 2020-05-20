import { AwsCloudformationStackArgsIntterface, AwsCloudformationStackAttrsIntterface } from '.';

export interface AwsCloudformationStackIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsCloudformationStackArgsIntterface;
  attrs: AwsCloudformationStackAttrsIntterface;

}
