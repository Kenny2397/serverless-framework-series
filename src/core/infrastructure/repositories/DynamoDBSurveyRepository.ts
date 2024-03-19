import { Survey } from 'src/core/domain/models/Survey'
import { SurveyRepository } from 'src/core/domain/services/repositories/SurveyRepository'

export class DynamoDBSurveyRepository implements SurveyRepository {

  async getSurvey (id: string): Promise<Survey | void> {
    const surveys: Survey[] = [
      {
        id: '1',
        name: 'Survey 1',
        questions: [
          { id: '1', title: 'Question 1', type: 'radio', createdAt: '2024-01-01', updatedAt: '2024-01-01', description: '' },
          { id: '2', title: 'Question 2', type: 'text', createdAt: '2024-01-01', updatedAt: '2024-01-01', description: '' }
        ]
      },
      {
        id: '2',
        name: 'Survey 2',
        questions: [
          { id: '3', title: 'Question 1', type: 'radio', createdAt: '2024-01-01', updatedAt: '2024-01-01', description: '' },
          { id: '4', title: 'Question 2', type: 'text', createdAt: '2024-01-01', updatedAt: '2024-01-01', description: '' }
        ]
      }
    ]

    const survey = surveys.find(survey => survey.id === id)
    if (!survey) {
      throw new Error('Survey not found')
    }
    return survey
  }
}