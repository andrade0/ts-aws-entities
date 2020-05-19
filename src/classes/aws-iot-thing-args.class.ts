import { AwsIotThingArgsIntterface } from '../interfaces';


export class AwsIotThingArgs implements AwsIotThingArgsIntterface {
  	name: string;
	attributes?: string;
	thing_type_name?: string;

}
