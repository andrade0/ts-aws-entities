import { AwsRedshiftServiceAccountArgsIntterface, AwsRedshiftServiceAccountAttrsIntterface } from '.';

export interface AwsRedshiftServiceAccountIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsRedshiftServiceAccountArgsIntterface;
  attrs: AwsRedshiftServiceAccountAttrsIntterface;

}
