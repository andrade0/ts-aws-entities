import { AwsVpcsArgsIntterface } from '../interfaces';
import { AwsVpcsArgsFilter } from '.';

export class AwsVpcsArgs implements AwsVpcsArgsIntterface {
  	tags?: string;
	filter?: AwsVpcsArgsFilter;

}
