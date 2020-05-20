import { AwsVolumeAttachmentArgsIntterface } from '../interfaces';


export class AwsVolumeAttachmentArgs implements AwsVolumeAttachmentArgsIntterface {
  device_name: string;
  instance_id: string;
  volume_id: string;
  force_detach: boolean;
  skip_destroy: boolean;

}
