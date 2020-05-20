import { AwsNeptuneClusterInstanceArgsIntterface, AwsNeptuneClusterInstanceAttrsIntterface } from '.';

export interface AwsNeptuneClusterInstanceIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsNeptuneClusterInstanceArgsIntterface;
  attrs: AwsNeptuneClusterInstanceAttrsIntterface;

}
