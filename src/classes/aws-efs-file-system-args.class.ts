import { AwsEfsFileSystemArgsIntterface } from '../interfaces';


export class AwsEfsFileSystemArgs implements AwsEfsFileSystemArgsIntterface {
  	creation_token?: string;
	reference_name?: string;
	encrypted?: string;
	kms_key_id?: string;
	performance_mode?: string;
	provisioned_throughput_in_mibps?: string;
	tags?: string;
	throughput_mode?: string;

}
