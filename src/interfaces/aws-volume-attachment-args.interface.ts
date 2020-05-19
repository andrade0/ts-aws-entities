

export interface AwsVolumeAttachmentArgsIntterface {
  	device_name: string;
	instance_id: string;
	volume_id: string;
	force_detach: boolean;
	skip_destroy: boolean;

}
