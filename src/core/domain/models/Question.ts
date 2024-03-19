export interface Question {
  id: string
  type: string
  title: string
  description: string
  options?: string[]
  format?: string
  createdAt: string
  updatedAt: string
}