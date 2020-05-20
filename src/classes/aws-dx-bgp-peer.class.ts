import { AwsDxBgpPeerIntterface } from '../interfaces';
import { AwsDxBgpPeerArgs, AwsDxBgpPeerAttrs } from '.';

export class AwsDxBgpPeer implements AwsDxBgpPeerIntterface {
  name: string = 'aws_dx_bgp_peer';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html';
  groupName: string = 'Direct Connect Resources';
  args: AwsDxBgpPeerArgs;
  attrs: AwsDxBgpPeerAttrs;

}
