import { Survey } from 'src/core/domain/models/Survey'
import { SurveyRepository } from 'src/core/domain/services/repositories/SurveyRepository'

export class SurveyUsecase {
  constructor (
    private readonly surveyRepository: SurveyRepository
  ) {}

  async getSurvey (id: string): Promise<Survey | void> {
    return this.surveyRepository.getSurvey(id)
  }
}