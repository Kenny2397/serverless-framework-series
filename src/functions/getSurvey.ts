import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2, Context } from 'aws-lambda'
import { SurveyUsecase } from 'src/core/app/usecases/surveyUsecase'
import { SurveyController } from 'src/core/infrastructure/adapters/in/http/surveyController'
import { DynamoDBSurveyRepository } from 'src/core/infrastructure/repositories/DynamoDBSurveyRepository'

const surveyController = new SurveyController(
  new SurveyUsecase(
    new DynamoDBSurveyRepository()
  )
)
export const handler = async (event: APIGatewayProxyEventV2, context: Partial<Context>): Promise<APIGatewayProxyStructuredResultV2> => {

  const response = await surveyController.exec(event)

  return {
    statusCode: 200,
    body: JSON.stringify(response),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'content-type': 'application/json'
    },
  }

}