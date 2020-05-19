import { AwsInstancesIntterface } from '../interfaces';
import { AwsInstancesArgs,  AwsInstancesAttrs } from '.';

export class AwsInstances implements AwsInstancesIntterface {
  	name: string = 'aws_instances';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/instances.html';
	groupName: string = 'Data Sources';
	args: AwsInstancesArgs;
	attrs: AwsInstancesAttrs;

}
