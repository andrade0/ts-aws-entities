import { AwsSsmDocumentAttrsIntterface } from '../interfaces';


export class AwsSsmDocumentAttrs implements AwsSsmDocumentAttrsIntterface {
  	created_date?: string;
	description?: string;
	schema_version?: string;
	default_version?: string;
	hash?: string;
	hash_type?: string;
	latest_version?: string;
	owner?: string;
	status?: string;
	parameter?: string;
	platform_types?: string;

}
