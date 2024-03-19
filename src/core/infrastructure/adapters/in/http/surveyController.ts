import { APIGatewayProxyEventV2, Context } from 'aws-lambda'
import { SurveyUsecase } from 'src/core/app/usecases/surveyUsecase'
import { Handler } from 'src/core/infrastructure/ports/in/http/handler'

export class SurveyController implements Handler<APIGatewayProxyEventV2, Partial<Context>> {

  constructor (
    private readonly surveyUsecase: SurveyUsecase 
  ) {}

  async exec (event: APIGatewayProxyEventV2) {
    try {
      const { id } = event.pathParameters ?? { }
      
      if (!id) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Missing id' }),
        }
      }
      
      const survey = await this.surveyUsecase.getSurvey(id)
      return survey
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500,
        body: JSON.stringify({ message: (error as Error).message }),
      }
    }
  }
}