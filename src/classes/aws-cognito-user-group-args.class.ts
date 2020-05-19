import { AwsCognitoUserGroupArgsIntterface } from '../interfaces';


export class AwsCognitoUserGroupArgs implements AwsCognitoUserGroupArgsIntterface {
  	name: string;
	user_pool_id: string;
	description?: string;
	precedence?: string;
	role_arn?: string;

}
