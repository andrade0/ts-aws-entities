import { AwsCodedeployDeploymentGroupArgsIntterface, AwsCodedeployDeploymentGroupAttrsIntterface } from '.';

export interface AwsCodedeployDeploymentGroupIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCodedeployDeploymentGroupArgsIntterface;
	attrs: AwsCodedeployDeploymentGroupAttrsIntterface;

}
