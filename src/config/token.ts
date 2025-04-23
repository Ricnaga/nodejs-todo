import { REFRESH_TOKEN_SECRET, TOKEN_SECRET } from "./constants";

export default {
  secret_token: TOKEN_SECRET,
  expires_in_token: 60 * 15,
  secret_refresh_token: REFRESH_TOKEN_SECRET,
  expires_in_refresh_token: 60 * 60 * 24 * 30,
  expires_refresh_token_days: 30,
};
