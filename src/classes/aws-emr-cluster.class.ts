import { AwsEmrClusterIntterface } from '../interfaces';
import { AwsEmrClusterArgs, AwsEmrClusterAttrs } from '.';

export class AwsEmrCluster implements AwsEmrClusterIntterface {
  name: string = 'aws_emr_cluster';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/emr_cluster.html';
  groupName: string = 'Elastic Map Reduce Resources';
  args: AwsEmrClusterArgs;
  attrs: AwsEmrClusterAttrs;

}
