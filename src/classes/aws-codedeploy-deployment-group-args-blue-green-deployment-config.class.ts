import { AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigIntterface } from '../interfaces';


export class AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfig implements AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigIntterface {
  deployment_ready_option?: string;
  green_fleet_provisioning_option?: string;
  terminate_blue_instances_on_deployment_success?: string;

}
