import { AwsLicensemanagerLicenseConfigurationArgsIntterface } from '../interfaces';


export class AwsLicensemanagerLicenseConfigurationArgs implements AwsLicensemanagerLicenseConfigurationArgsIntterface {
  name: string;
  description?: string;
  license_count?: number;
  license_count_hard_limit?: string;
  license_counting_type: string;
  license_rules?: string;
  tags?: string;

}
