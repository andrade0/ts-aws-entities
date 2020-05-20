import { AwsApiGatewayDomainNameAttrsIntterface } from '../interfaces';


export class AwsApiGatewayDomainNameAttrs implements AwsApiGatewayDomainNameAttrsIntterface {
  id?: string;
  certificate_upload_date?: string;
  cloudfront_domain_name?: string;
  cloudfront_zone_id?: string;
  regional_domain_name?: string;
  regional_zone_id?: string;

}
