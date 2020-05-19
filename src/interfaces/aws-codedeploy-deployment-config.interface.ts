import { AwsCodedeployDeploymentConfigArgsIntterface, AwsCodedeployDeploymentConfigAttrsIntterface } from '.';

export interface AwsCodedeployDeploymentConfigIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCodedeployDeploymentConfigArgsIntterface;
	attrs: AwsCodedeployDeploymentConfigAttrsIntterface;

}
