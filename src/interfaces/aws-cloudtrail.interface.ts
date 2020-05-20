import { AwsCloudtrailArgsIntterface, AwsCloudtrailAttrsIntterface } from '.';

export interface AwsCloudtrailIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsCloudtrailArgsIntterface;
  attrs: AwsCloudtrailAttrsIntterface;

}
