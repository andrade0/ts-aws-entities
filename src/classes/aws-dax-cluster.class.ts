import { AwsDaxClusterIntterface } from '../interfaces';
import { AwsDaxClusterArgs, AwsDaxClusterAttrs } from '.';

export class AwsDaxCluster implements AwsDaxClusterIntterface {
  name: string = 'aws_dax_cluster';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/dax_cluster.html';
  groupName: string = 'DynamoDB Accelerator Resources';
  args: AwsDaxClusterArgs;
  attrs: AwsDaxClusterAttrs;

}
