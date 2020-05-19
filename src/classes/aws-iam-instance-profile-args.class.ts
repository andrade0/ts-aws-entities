import { AwsIamInstanceProfileArgsIntterface } from '../interfaces';


export class AwsIamInstanceProfileArgs implements AwsIamInstanceProfileArgsIntterface {
  	name: string;
	name_prefix: string;
	path: string;
	roles: string;
	role?: string;
	id: string;
	arn: string;
	create_date: string;
	unique_id: string;

}
