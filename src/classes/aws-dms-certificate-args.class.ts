import { AwsDmsCertificateArgsIntterface } from '../interfaces';


export class AwsDmsCertificateArgs implements AwsDmsCertificateArgsIntterface {
  certificate_id: string;
  certificate_pem?: string;
  certificate_wallet?: string;

}
