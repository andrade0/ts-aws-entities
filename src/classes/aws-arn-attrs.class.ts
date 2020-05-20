import { AwsArnAttrsIntterface } from '../interfaces';


export class AwsArnAttrs implements AwsArnAttrsIntterface {
  partition?: string;
  service?: string;
  region?: string;
  account?: string;
  resource?: string;

}
