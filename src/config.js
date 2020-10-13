const REGION = "us-east-2";

const dev = {
  STRIPE_KEY:
    "pk_test_51H9ITaEXmd8jZJxvRmybR1YbUo18q9Tq2MvZcgV61ZGt42HSanSO0a6WnV823irZ1vcFSFgRMS0jaCcyoUVRspqI00t8WVnNnI",
  s3: {
    REGION,
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-p5yu8a0rrr9o",
  },
  apiGateway: {
    REGION,
    URL: "https://eb9nrvbu8f.execute-api.us-east-2.amazonaws.com/dev",
  },
  cognito: {
    REGION,
    USER_POOL_ID: "us-east-2_JPF8IuIxL",
    APP_CLIENT_ID: "7rlq8efme6tclgo8phe24q1kef",
    IDENTITY_POOL_ID: "us-east-2:da249059-c0ed-4e51-9238-8cb523e7223c",
  },
};

const prod = {
  STRIPE_KEY:
    "pk_test_51H9ITaEXmd8jZJxvRmybR1YbUo18q9Tq2MvZcgV61ZGt42HSanSO0a6WnV823irZ1vcFSFgRMS0jaCcyoUVRspqI00t8WVnNnI",
  s3: {
    REGION,
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-1i96zhqrl1wvu",
  },
  apiGateway: {
    REGION,
    URL: "https://av8p4ixuwj.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION,
    USER_POOL_ID: "us-east-2_TZhAtsVnS",
    APP_CLIENT_ID: "hs771nbbsq347clr0q2b8rj2j",
    IDENTITY_POOL_ID: "us-east-2:05d208fa-0c4e-4f16-a26c-0475f2945c43",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
