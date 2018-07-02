import { workpad } from './workpad';
import { socketApi } from './socket';
import { translate } from './translate';
import { esFields } from './es_fields';
import { esIndices } from './es_indices';
import { getAuth } from './get_auth';

export function routes(server) {
  workpad(server);
  socketApi(server);
  translate(server);
  esFields(server);
  esIndices(server);
  getAuth(server);
}
