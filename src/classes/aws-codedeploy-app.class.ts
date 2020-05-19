import { AwsCodedeployAppIntterface } from '../interfaces';
import { AwsCodedeployAppArgs,  AwsCodedeployAppAttrs } from '.';

export class AwsCodedeployApp implements AwsCodedeployAppIntterface {
  	name: string = 'aws_codedeploy_app';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html';
	groupName: string = 'CodeDeploy Resources';
	args: AwsCodedeployAppArgs;
	attrs: AwsCodedeployAppAttrs;

}
