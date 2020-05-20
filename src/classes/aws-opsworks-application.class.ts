import { AwsOpsworksApplicationIntterface } from '../interfaces';
import { AwsOpsworksApplicationArgs, AwsOpsworksApplicationAttrs } from '.';

export class AwsOpsworksApplication implements AwsOpsworksApplicationIntterface {
  name: string = 'aws_opsworks_application';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_application.html';
  groupName: string = 'OpsWorks Resources';
  args: AwsOpsworksApplicationArgs;
  attrs: AwsOpsworksApplicationAttrs;

}
