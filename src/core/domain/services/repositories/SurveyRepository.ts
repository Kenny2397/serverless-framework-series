import { Survey } from '../../models/Survey'

export interface SurveyRepository {
  getSurvey(id: string): Promise<Survey | void>
}