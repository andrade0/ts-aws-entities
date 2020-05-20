import { AwsEc2CapacityReservationIntterface } from '../interfaces';
import { AwsEc2CapacityReservationArgs, AwsEc2CapacityReservationAttrs } from '.';

export class AwsEc2CapacityReservation implements AwsEc2CapacityReservationIntterface {
  name: string = 'aws_ec2_capacity_reservation';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html';
  groupName: string = 'EC2 Resources';
  args: AwsEc2CapacityReservationArgs;
  attrs: AwsEc2CapacityReservationAttrs;

}
