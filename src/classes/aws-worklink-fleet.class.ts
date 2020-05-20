import { AwsWorklinkFleetIntterface } from '../interfaces';
import { AwsWorklinkFleetArgs, AwsWorklinkFleetAttrs } from '.';

export class AwsWorklinkFleet implements AwsWorklinkFleetIntterface {
  name: string = 'aws_worklink_fleet';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html';
  groupName: string = 'WorkLink Resources';
  args: AwsWorklinkFleetArgs;
  attrs: AwsWorklinkFleetAttrs;

}
