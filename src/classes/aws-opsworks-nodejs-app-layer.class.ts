import { AwsOpsworksNodejsAppLayerIntterface } from '../interfaces';
import { AwsOpsworksNodejsAppLayerArgs, AwsOpsworksNodejsAppLayerAttrs } from '.';

export class AwsOpsworksNodejsAppLayer implements AwsOpsworksNodejsAppLayerIntterface {
  name: string = 'aws_opsworks_nodejs_app_layer';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html';
  groupName: string = 'OpsWorks Resources';
  args: AwsOpsworksNodejsAppLayerArgs;
  attrs: AwsOpsworksNodejsAppLayerAttrs;

}
