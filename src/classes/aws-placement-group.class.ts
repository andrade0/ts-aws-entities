import { AwsPlacementGroupIntterface } from '../interfaces';
import { AwsPlacementGroupArgs,  AwsPlacementGroupAttrs } from '.';

export class AwsPlacementGroup implements AwsPlacementGroupIntterface {
  	name: string = 'aws_placement_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/placement_group.html';
	groupName: string = 'EC2 Resources';
	args: AwsPlacementGroupArgs;
	attrs: AwsPlacementGroupAttrs;

}
