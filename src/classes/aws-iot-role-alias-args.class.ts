import { AwsIotRoleAliasArgsIntterface } from '../interfaces';


export class AwsIotRoleAliasArgs implements AwsIotRoleAliasArgsIntterface {
  	alias: string;
	role_arn: string;
	credential_duration?: string;

}
