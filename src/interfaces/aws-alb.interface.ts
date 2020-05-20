import { AwsAlbArgsIntterface, AwsAlbAttrsIntterface } from '.';

export interface AwsAlbIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAlbArgsIntterface;
  attrs: AwsAlbAttrsIntterface;

}
