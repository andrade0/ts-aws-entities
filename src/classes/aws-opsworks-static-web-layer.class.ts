import { AwsOpsworksStaticWebLayerIntterface } from '../interfaces';
import { AwsOpsworksStaticWebLayerArgs, AwsOpsworksStaticWebLayerAttrs } from '.';

export class AwsOpsworksStaticWebLayer implements AwsOpsworksStaticWebLayerIntterface {
  name: string = 'aws_opsworks_static_web_layer';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_static_web_layer.html';
  groupName: string = 'OpsWorks Resources';
  args: AwsOpsworksStaticWebLayerArgs;
  attrs: AwsOpsworksStaticWebLayerAttrs;

}
