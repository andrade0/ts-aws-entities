import { AwsDbSubnetGroupArgsIntterface, AwsDbSubnetGroupAttrsIntterface } from '.';

export interface AwsDbSubnetGroupIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDbSubnetGroupArgsIntterface;
  attrs: AwsDbSubnetGroupAttrsIntterface;

}
