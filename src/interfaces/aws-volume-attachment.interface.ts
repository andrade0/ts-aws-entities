import { AwsVolumeAttachmentArgsIntterface, AwsVolumeAttachmentAttrsIntterface } from '.';

export interface AwsVolumeAttachmentIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsVolumeAttachmentArgsIntterface;
  attrs: AwsVolumeAttachmentAttrsIntterface;

}
