import { AwsWafGeoMatchSetIntterface } from '../interfaces';
import { AwsWafGeoMatchSetArgs,  AwsWafGeoMatchSetAttrs } from '.';

export class AwsWafGeoMatchSet implements AwsWafGeoMatchSetIntterface {
  	name: string = 'aws_waf_geo_match_set';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html';
	groupName: string = 'WAF Resources';
	args: AwsWafGeoMatchSetArgs;
	attrs: AwsWafGeoMatchSetAttrs;

}
