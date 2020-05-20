import { AwsAmiIdsArgsIntterface, AwsAmiIdsAttrsIntterface } from '.';

export interface AwsAmiIdsIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAmiIdsArgsIntterface;
  attrs: AwsAmiIdsAttrsIntterface;

}
