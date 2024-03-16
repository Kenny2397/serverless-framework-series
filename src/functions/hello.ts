import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2, Context } from 'aws-lambda'

export const handler = async (event: APIGatewayProxyEventV2, context: Partial<Context>): Promise<APIGatewayProxyStructuredResultV2> => {
  console.log(JSON.stringify({ event }), JSON.stringify(context))
  return {
    body: JSON.stringify({
      data: 'Hola mundo desde serverless framework ',
    }),
    statusCode: 200,
  }
}
