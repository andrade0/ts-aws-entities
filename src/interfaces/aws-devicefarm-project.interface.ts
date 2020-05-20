import { AwsDevicefarmProjectArgsIntterface, AwsDevicefarmProjectAttrsIntterface } from '.';

export interface AwsDevicefarmProjectIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDevicefarmProjectArgsIntterface;
  attrs: AwsDevicefarmProjectAttrsIntterface;

}
