import { AwsAlbTargetGroupArgsIntterface, AwsAlbTargetGroupAttrsIntterface } from '.';

export interface AwsAlbTargetGroupIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAlbTargetGroupArgsIntterface;
  attrs: AwsAlbTargetGroupAttrsIntterface;

}
