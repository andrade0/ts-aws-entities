import { AwsLightsailInstanceArgsIntterface, AwsLightsailInstanceAttrsIntterface } from '.';

export interface AwsLightsailInstanceIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsLightsailInstanceArgsIntterface;
  attrs: AwsLightsailInstanceAttrsIntterface;

}
