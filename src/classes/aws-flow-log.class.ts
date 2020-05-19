import { AwsFlowLogIntterface } from '../interfaces';
import { AwsFlowLogArgs,  AwsFlowLogAttrs } from '.';

export class AwsFlowLog implements AwsFlowLogIntterface {
  	name: string = 'aws_flow_log';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/flow_log.html';
	groupName: string = 'VPC Resources';
	args: AwsFlowLogArgs;
	attrs: AwsFlowLogAttrs;

}
