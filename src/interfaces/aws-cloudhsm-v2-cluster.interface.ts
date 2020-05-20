import { AwsCloudhsmV2ClusterArgsIntterface, AwsCloudhsmV2ClusterAttrsIntterface } from '.';

export interface AwsCloudhsmV2ClusterIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsCloudhsmV2ClusterArgsIntterface;
  attrs: AwsCloudhsmV2ClusterAttrsIntterface;

}
