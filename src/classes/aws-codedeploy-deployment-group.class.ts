import { AwsCodedeployDeploymentGroupIntterface } from '../interfaces';
import { AwsCodedeployDeploymentGroupArgs,  AwsCodedeployDeploymentGroupAttrs } from '.';

export class AwsCodedeployDeploymentGroup implements AwsCodedeployDeploymentGroupIntterface {
  	name: string = 'aws_codedeploy_deployment_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html';
	groupName: string = 'CodeDeploy Resources';
	args: AwsCodedeployDeploymentGroupArgs;
	attrs: AwsCodedeployDeploymentGroupAttrs;

}
