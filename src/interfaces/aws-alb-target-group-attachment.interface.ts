import { AwsAlbTargetGroupAttachmentArgsIntterface, AwsAlbTargetGroupAttachmentAttrsIntterface } from '.';

export interface AwsAlbTargetGroupAttachmentIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAlbTargetGroupAttachmentArgsIntterface;
  attrs: AwsAlbTargetGroupAttachmentAttrsIntterface;

}
