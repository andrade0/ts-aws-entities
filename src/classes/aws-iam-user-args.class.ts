import { AwsIamUserArgsIntterface } from '../interfaces';


export class AwsIamUserArgs implements AwsIamUserArgsIntterface {
  	name: string;
	path: string;
	permissions_boundary?: string;
	force_destroy: string;
	tags: string;

}
