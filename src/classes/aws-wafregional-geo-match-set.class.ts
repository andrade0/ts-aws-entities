import { AwsWafregionalGeoMatchSetIntterface } from '../interfaces';
import { AwsWafregionalGeoMatchSetArgs,  AwsWafregionalGeoMatchSetAttrs } from '.';

export class AwsWafregionalGeoMatchSet implements AwsWafregionalGeoMatchSetIntterface {
  	name: string = 'aws_wafregional_geo_match_set';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set.html';
	groupName: string = 'WAF Regional Resources';
	args: AwsWafregionalGeoMatchSetArgs;
	attrs: AwsWafregionalGeoMatchSetAttrs;

}
