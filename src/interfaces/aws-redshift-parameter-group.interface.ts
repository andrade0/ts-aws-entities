import { AwsRedshiftParameterGroupArgsIntterface, AwsRedshiftParameterGroupAttrsIntterface } from '.';

export interface AwsRedshiftParameterGroupIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsRedshiftParameterGroupArgsIntterface;
  attrs: AwsRedshiftParameterGroupAttrsIntterface;

}
