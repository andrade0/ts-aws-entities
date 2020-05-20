import { AwsNeptuneClusterArgsIntterface, AwsNeptuneClusterAttrsIntterface } from '.';

export interface AwsNeptuneClusterIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsNeptuneClusterArgsIntterface;
  attrs: AwsNeptuneClusterAttrsIntterface;

}
