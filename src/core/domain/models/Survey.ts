import { Question } from './Question'

export interface Survey {
  id: string
  name: string
  questions: Question[]
}