import { AwsOpsworksCustomLayerIntterface } from '../interfaces';
import { AwsOpsworksCustomLayerArgs,  AwsOpsworksCustomLayerAttrs } from '.';

export class AwsOpsworksCustomLayer implements AwsOpsworksCustomLayerIntterface {
  	name: string = 'aws_opsworks_custom_layer';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html';
	groupName: string = 'OpsWorks Resources';
	args: AwsOpsworksCustomLayerArgs;
	attrs: AwsOpsworksCustomLayerAttrs;

}
