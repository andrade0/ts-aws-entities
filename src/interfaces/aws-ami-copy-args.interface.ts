

export interface AwsAmiCopyArgsIntterface {
  	name: string;
	source_ami_id: string;
	source_ami_region: string;
	encrypted?: string;
	kms_key_id?: string;
	tags?: string;
	create: string;
	update: string;
	delete: string;

}
