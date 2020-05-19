import { AwsNeptuneClusterInstanceAttrsIntterface } from '../interfaces';


export class AwsNeptuneClusterInstanceAttrs implements AwsNeptuneClusterInstanceAttrsIntterface {
  	address?: string;
	arn?: string;
	dbi_resource_id?: string;
	endpoint?: string;
	id?: string;
	kms_key_arn?: string;
	storage_encrypted?: string;
	writer?: boolean;

}
