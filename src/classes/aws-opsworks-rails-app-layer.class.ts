import { AwsOpsworksRailsAppLayerIntterface } from '../interfaces';
import { AwsOpsworksRailsAppLayerArgs,  AwsOpsworksRailsAppLayerAttrs } from '.';

export class AwsOpsworksRailsAppLayer implements AwsOpsworksRailsAppLayerIntterface {
  	name: string = 'aws_opsworks_rails_app_layer';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html';
	groupName: string = 'OpsWorks Resources';
	args: AwsOpsworksRailsAppLayerArgs;
	attrs: AwsOpsworksRailsAppLayerAttrs;

}
