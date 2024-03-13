import { Handler, APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'

export const handler: Handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  return {
    body: JSON.stringify({
      data: "Hola mundo desde serverless framework",
    }),
    statusCode: 200,
  };
}
