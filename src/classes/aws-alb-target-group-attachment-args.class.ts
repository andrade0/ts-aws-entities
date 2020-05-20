import { AwsAlbTargetGroupAttachmentArgsIntterface } from '../interfaces';


export class AwsAlbTargetGroupAttachmentArgs implements AwsAlbTargetGroupAttachmentArgsIntterface {
  target_group_arn: string;
  target_id: string;
  port?: string;
  availability_zone?: string;

}
