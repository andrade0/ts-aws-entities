import { AwsOpsworksInstanceIntterface } from '../interfaces';
import { AwsOpsworksInstanceArgs,  AwsOpsworksInstanceAttrs } from '.';

export class AwsOpsworksInstance implements AwsOpsworksInstanceIntterface {
  	name: string = 'aws_opsworks_instance';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html';
	groupName: string = 'OpsWorks Resources';
	args: AwsOpsworksInstanceArgs;
	attrs: AwsOpsworksInstanceAttrs;

}
