import { AwsSsmParameterArgsIntterface } from '../interfaces';


export class AwsSsmParameterArgs implements AwsSsmParameterArgsIntterface {
  	name: string;
	type: string;
	value: string;
	description?: string;
	key_id?: string;
	overwrite?: string;
	allowed_pattern?: string;
	tags?: string;

}
