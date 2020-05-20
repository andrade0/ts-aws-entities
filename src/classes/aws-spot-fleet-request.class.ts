import { AwsSpotFleetRequestIntterface } from '../interfaces';
import { AwsSpotFleetRequestArgs, AwsSpotFleetRequestAttrs } from '.';

export class AwsSpotFleetRequest implements AwsSpotFleetRequestIntterface {
  name: string = 'aws_spot_fleet_request';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html';
  groupName: string = 'EC2 Resources';
  args: AwsSpotFleetRequestArgs;
  attrs: AwsSpotFleetRequestAttrs;

}
