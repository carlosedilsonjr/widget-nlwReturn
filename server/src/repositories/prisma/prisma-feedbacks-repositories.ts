import { prisma } from "../../prisma";
import { FeedbacksCreateData, FeedbacksRepository } from "../feedbacks-repositories";

export class PrismaFeedbacksRepositories implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbacksCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}