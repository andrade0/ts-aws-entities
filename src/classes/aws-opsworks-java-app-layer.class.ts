import { AwsOpsworksJavaAppLayerIntterface } from '../interfaces';
import { AwsOpsworksJavaAppLayerArgs,  AwsOpsworksJavaAppLayerAttrs } from '.';

export class AwsOpsworksJavaAppLayer implements AwsOpsworksJavaAppLayerIntterface {
  	name: string = 'aws_opsworks_java_app_layer';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html';
	groupName: string = 'OpsWorks Resources';
	args: AwsOpsworksJavaAppLayerArgs;
	attrs: AwsOpsworksJavaAppLayerAttrs;

}
