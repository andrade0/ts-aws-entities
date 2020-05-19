import { AwsOpsworksPhpAppLayerIntterface } from '../interfaces';
import { AwsOpsworksPhpAppLayerArgs,  AwsOpsworksPhpAppLayerAttrs } from '.';

export class AwsOpsworksPhpAppLayer implements AwsOpsworksPhpAppLayerIntterface {
  	name: string = 'aws_opsworks_php_app_layer';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html';
	groupName: string = 'OpsWorks Resources';
	args: AwsOpsworksPhpAppLayerArgs;
	attrs: AwsOpsworksPhpAppLayerAttrs;

}
