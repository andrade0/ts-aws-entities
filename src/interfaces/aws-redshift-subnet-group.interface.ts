import { AwsRedshiftSubnetGroupArgsIntterface, AwsRedshiftSubnetGroupAttrsIntterface } from '.';

export interface AwsRedshiftSubnetGroupIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsRedshiftSubnetGroupArgsIntterface;
  attrs: AwsRedshiftSubnetGroupAttrsIntterface;

}
