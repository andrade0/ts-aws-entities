import { AwsMediaPackageChannelArgsIntterface, AwsMediaPackageChannelAttrsIntterface } from '.';

export interface AwsMediaPackageChannelIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsMediaPackageChannelArgsIntterface;
  attrs: AwsMediaPackageChannelAttrsIntterface;

}
