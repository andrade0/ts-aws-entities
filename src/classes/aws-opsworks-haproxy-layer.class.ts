import { AwsOpsworksHaproxyLayerIntterface } from '../interfaces';
import { AwsOpsworksHaproxyLayerArgs, AwsOpsworksHaproxyLayerAttrs } from '.';

export class AwsOpsworksHaproxyLayer implements AwsOpsworksHaproxyLayerIntterface {
  name: string = 'aws_opsworks_haproxy_layer';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html';
  groupName: string = 'OpsWorks Resources';
  args: AwsOpsworksHaproxyLayerArgs;
  attrs: AwsOpsworksHaproxyLayerAttrs;

}
