import { AwsCloud9EnvironmentEc2ArgsIntterface, AwsCloud9EnvironmentEc2AttrsIntterface } from '.';

export interface AwsCloud9EnvironmentEc2Intterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsCloud9EnvironmentEc2ArgsIntterface;
  attrs: AwsCloud9EnvironmentEc2AttrsIntterface;

}
