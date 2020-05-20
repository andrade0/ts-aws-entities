import { AwsLaunchConfigurationArgsIntterface, AwsLaunchConfigurationAttrsIntterface } from '.';

export interface AwsLaunchConfigurationIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsLaunchConfigurationArgsIntterface;
  attrs: AwsLaunchConfigurationAttrsIntterface;

}
