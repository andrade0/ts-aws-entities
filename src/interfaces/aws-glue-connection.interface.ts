import { AwsGlueConnectionArgsIntterface, AwsGlueConnectionAttrsIntterface } from '.';

export interface AwsGlueConnectionIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsGlueConnectionArgsIntterface;
  attrs: AwsGlueConnectionAttrsIntterface;

}
