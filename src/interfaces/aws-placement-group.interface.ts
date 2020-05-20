import { AwsPlacementGroupArgsIntterface, AwsPlacementGroupAttrsIntterface } from '.';

export interface AwsPlacementGroupIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsPlacementGroupArgsIntterface;
  attrs: AwsPlacementGroupAttrsIntterface;

}
