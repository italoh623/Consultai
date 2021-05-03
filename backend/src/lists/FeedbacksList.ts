import Feedback from "../models/Feedback"
import nodemailer, { Transport } from 'nodemailer'

interface ICreateFeedbackDTO {
    rating: string
    descricao: string
}

class FeedbacksList {
    private feedbacks: Feedback[]

    constructor() {
        this.feedbacks = [
            {
                id: '1',
                consultaId: '12',
                rating: 'bom',
                descricao: 'kkkkkkkkkkkkkkkk F.'
            },
        ]
    }

    create({ rating, descricao }: ICreateFeedbackDTO): Feedback {
        const feedback = new Feedback()

        Object.assign(feedback, {
            rating,
            descricao
        })

        this.feedbacks.push(feedback)

        return feedback
    }

    async sendEmail(feedbackId: string, email: string): Promise<void> {
        nodemailer.createTestAccount().then(async testAccount => {
            const transporter = nodemailer.createTransport({
              host: testAccount.smtp.host,
              port: testAccount.smtp.port,
              secure: testAccount.smtp.secure,
              auth: {
                user: testAccount.user,
                pass: testAccount.pass,
              },
            })

        const feedbackToSend = this.feedbacks.find(feedback => feedback.id === feedbackId)
        const { rating, descricao } = feedbackToSend
    
        const message = await transporter.sendMail({
                from: 'Consultai <no-replay@consultai.com.br>', 
                to: email,
                subject: "Feedback ✔", // Subject line
                text: `Você acabou de receber uma avaliação com métrica ${rating} que diz: ${descricao}`,
                html: "Você acabou de receber uma avaliação com métrica <b>${rating}</b> que diz: <b>${comment}</b>"
              })
    
            console.log("Message sent: %s", message.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message))
        })
    }
}

export default FeedbacksList