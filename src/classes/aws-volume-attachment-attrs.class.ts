import { AwsVolumeAttachmentAttrsIntterface } from '../interfaces';


export class AwsVolumeAttachmentAttrs implements AwsVolumeAttachmentAttrsIntterface {
  	device_name?: string;
	instance_id?: string;
	volume_id?: string;

}
