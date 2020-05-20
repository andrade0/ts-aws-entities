import { AwsMediaStoreContainerArgsIntterface, AwsMediaStoreContainerAttrsIntterface } from '.';

export interface AwsMediaStoreContainerIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsMediaStoreContainerArgsIntterface;
  attrs: AwsMediaStoreContainerAttrsIntterface;

}
