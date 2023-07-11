import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "ap-northeast-1_SPAlaZtPe",
  ClientId: "3tm421o14t7hdvfgqc62q76vr4",
};

export default new CognitoUserPool(poolData);
