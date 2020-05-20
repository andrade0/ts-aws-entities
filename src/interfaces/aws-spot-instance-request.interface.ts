import { AwsSpotInstanceRequestArgsIntterface, AwsSpotInstanceRequestAttrsIntterface } from '.';

export interface AwsSpotInstanceRequestIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsSpotInstanceRequestArgsIntterface;
  attrs: AwsSpotInstanceRequestAttrsIntterface;

}
