import { AwsEc2CapacityReservationArgsIntterface, AwsEc2CapacityReservationAttrsIntterface } from '.';

export interface AwsEc2CapacityReservationIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsEc2CapacityReservationArgsIntterface;
  attrs: AwsEc2CapacityReservationAttrsIntterface;

}
