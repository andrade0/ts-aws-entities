import { AwsCloud9EnvironmentEc2Intterface } from '../interfaces';
import { AwsCloud9EnvironmentEc2Args, AwsCloud9EnvironmentEc2Attrs } from '.';

export class AwsCloud9EnvironmentEc2 implements AwsCloud9EnvironmentEc2Intterface {
  name: string = 'aws_cloud9_environment_ec2';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html';
  groupName: string = 'Cloud9 Resources';
  args: AwsCloud9EnvironmentEc2Args;
  attrs: AwsCloud9EnvironmentEc2Attrs;

}
