import { AwsAvailabilityZonesIntterface } from '../interfaces';
import { AwsAvailabilityZonesArgs, AwsAvailabilityZonesAttrs } from '.';

export class AwsAvailabilityZones implements AwsAvailabilityZonesIntterface {
  name: string = 'aws_availability_zones';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/availability_zones.html';
  groupName: string = 'Data Sources';
  args: AwsAvailabilityZonesArgs;
  attrs: AwsAvailabilityZonesAttrs;

}
