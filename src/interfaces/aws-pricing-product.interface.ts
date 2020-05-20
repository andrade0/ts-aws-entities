import { AwsPricingProductArgsIntterface, AwsPricingProductAttrsIntterface } from '.';

export interface AwsPricingProductIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsPricingProductArgsIntterface;
  attrs: AwsPricingProductAttrsIntterface;

}
