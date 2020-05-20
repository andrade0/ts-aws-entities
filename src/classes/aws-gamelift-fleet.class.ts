import { AwsGameliftFleetIntterface } from '../interfaces';
import { AwsGameliftFleetArgs, AwsGameliftFleetAttrs } from '.';

export class AwsGameliftFleet implements AwsGameliftFleetIntterface {
  name: string = 'aws_gamelift_fleet';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html';
  groupName: string = 'Gamelift Resources';
  args: AwsGameliftFleetArgs;
  attrs: AwsGameliftFleetAttrs;

}
