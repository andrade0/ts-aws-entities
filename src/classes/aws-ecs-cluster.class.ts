import { AwsEcsClusterIntterface } from '../interfaces';
import { AwsEcsClusterArgs, AwsEcsClusterAttrs } from '.';

export class AwsEcsCluster implements AwsEcsClusterIntterface {
  name: string = 'aws_ecs_cluster';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html';
  groupName: string = 'ECS Resources';
  args: AwsEcsClusterArgs;
  attrs: AwsEcsClusterAttrs;

}
