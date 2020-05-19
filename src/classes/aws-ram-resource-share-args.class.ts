import { AwsRamResourceShareArgsIntterface } from '../interfaces';


export class AwsRamResourceShareArgs implements AwsRamResourceShareArgsIntterface {
  	name: string;
	allow_external_principals?: string;
	tags?: string;

}
