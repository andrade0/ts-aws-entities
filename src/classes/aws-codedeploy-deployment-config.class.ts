import { AwsCodedeployDeploymentConfigIntterface } from '../interfaces';
import { AwsCodedeployDeploymentConfigArgs, AwsCodedeployDeploymentConfigAttrs } from '.';

export class AwsCodedeployDeploymentConfig implements AwsCodedeployDeploymentConfigIntterface {
  name: string = 'aws_codedeploy_deployment_config';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html';
  groupName: string = 'CodeDeploy Resources';
  args: AwsCodedeployDeploymentConfigArgs;
  attrs: AwsCodedeployDeploymentConfigAttrs;

}
