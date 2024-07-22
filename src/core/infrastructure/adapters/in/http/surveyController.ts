import { APIGatewayProxyEventV2, Context } from 'aws-lambda'
import { Handler } from 'src/core/app/ports/in/http/handler'
import { SurveyUsecase } from 'src/core/app/usecases/surveyUsecase'

export class SurveyController implements Handler<APIGatewayProxyEventV2, Partial<Context>> {

  constructor (
    private readonly surveyUsecase: SurveyUsecase 
  ) {}

  async exec (event: APIGatewayProxyEventV2) {
    try {
      const { id } = event.pathParameters!
      console.log(id)

      const survey = await this.surveyUsecase.getSurvey(id ?? '')
      
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