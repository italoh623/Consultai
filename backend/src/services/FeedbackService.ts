import FeedbacksList from "../lists/FeedbacksList"

class FeedbackService {
    private feedbackList: FeedbacksList

    constructor(feedbackList: FeedbacksList) {
        this.feedbackList = feedbackList
    }

    async execute({ email, rating, descricao }) {
        const createFeedback = this.feedbackList.create({
            rating,
            descricao
        })

        await this.feedbackList.sendEmail(createFeedback.id, email)

        return createFeedback
    }
}

export default FeedbackService