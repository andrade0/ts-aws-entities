import { AwsPricingProductIntterface } from '../interfaces';
import { AwsPricingProductArgs,  AwsPricingProductAttrs } from '.';

export class AwsPricingProduct implements AwsPricingProductIntterface {
  	name: string = 'aws_pricing_product';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/pricing_product.html';
	groupName: string = 'Data Sources';
	args: AwsPricingProductArgs;
	attrs: AwsPricingProductAttrs;

}
