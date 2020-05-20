import { AwsAcmCertificateArgsDomainNameIntterface } from '../interfaces';


export class AwsAcmCertificateArgsDomainName implements AwsAcmCertificateArgsDomainNameIntterface {
  domain_name: string;
  subject_alternative_names?: string;
  validation_method: string;

}
