import { AwsPricingProductArgsIntterface } from '../interfaces';
import { AwsPricingProductArgsFilters } from '.';

export class AwsPricingProductArgs implements AwsPricingProductArgsIntterface {
  	service_code: string;
	filters: AwsPricingProductArgsFilters;

}
