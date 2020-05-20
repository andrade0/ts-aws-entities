import { AwsRedshiftClusterArgsIntterface, AwsRedshiftClusterAttrsIntterface } from '.';

export interface AwsRedshiftClusterIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsRedshiftClusterArgsIntterface;
  attrs: AwsRedshiftClusterAttrsIntterface;

}
