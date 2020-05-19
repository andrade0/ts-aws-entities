import { AwsWafGeoMatchSetArgsIntterface } from '../interfaces';


export class AwsWafGeoMatchSetArgs implements AwsWafGeoMatchSetArgsIntterface {
  	name: string;
	geo_match_constraint?: string;
	type: string;
	value: string;

}
