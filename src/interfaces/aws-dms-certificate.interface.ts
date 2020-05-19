import { AwsDmsCertificateArgsIntterface, AwsDmsCertificateAttrsIntterface } from '.';

export interface AwsDmsCertificateIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsDmsCertificateArgsIntterface;
	attrs: AwsDmsCertificateAttrsIntterface;

}
