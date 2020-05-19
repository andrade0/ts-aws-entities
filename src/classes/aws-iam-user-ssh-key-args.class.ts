import { AwsIamUserSshKeyArgsIntterface } from '../interfaces';


export class AwsIamUserSshKeyArgs implements AwsIamUserSshKeyArgsIntterface {
  	username: string;
	encoding: string;
	public_key: string;
	status?: string;

}
