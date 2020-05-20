import { AwsLaunchConfigurationIntterface } from '../interfaces';
import { AwsLaunchConfigurationArgs, AwsLaunchConfigurationAttrs } from '.';

export class AwsLaunchConfiguration implements AwsLaunchConfigurationIntterface {
  name: string = 'aws_launch_configuration';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/launch_configuration.html';
  groupName: string = 'EC2 Resources';
  args: AwsLaunchConfigurationArgs;
  attrs: AwsLaunchConfigurationAttrs;

}
