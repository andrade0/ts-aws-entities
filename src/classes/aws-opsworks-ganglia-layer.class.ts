import { AwsOpsworksGangliaLayerIntterface } from '../interfaces';
import { AwsOpsworksGangliaLayerArgs, AwsOpsworksGangliaLayerAttrs } from '.';

export class AwsOpsworksGangliaLayer implements AwsOpsworksGangliaLayerIntterface {
  name: string = 'aws_opsworks_ganglia_layer';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html';
  groupName: string = 'OpsWorks Resources';
  args: AwsOpsworksGangliaLayerArgs;
  attrs: AwsOpsworksGangliaLayerAttrs;

}
