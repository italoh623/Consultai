import Feedback from "../models/Feedback"
import nodemailer from 'nodemailer'
import IFeedbacksList from "./IFeedbacksList"

import { ICreateFeedbackDTO } from '../lists/IFeedbacksList'

class FeedbacksList implements IFeedbacksList {
    private feedbacks: Feedback[]
    private static INSTANCE: FeedbacksList

    private constructor() {
        this.feedbacks = [
            {
                id: '15',
                consultaId: '12',
                rating: 'bom',
                descricao: 'Gostei bastente dessa médica, me parece ser competente.'
            },
        ]
    }

    public static getInstance() {
        if(!FeedbacksList.INSTANCE) {
            FeedbacksList.INSTANCE = new FeedbacksList()
        }
        return FeedbacksList.INSTANCE
    }

    findById(id: string): Feedback {
        const feedback = this.feedbacks.find(feedback => feedback.id === id)

        return feedback
    }

    create({ consultaId, rating, descricao }: ICreateFeedbackDTO): Feedback {
        const feedback = new Feedback()

        Object.assign(feedback, {
            consultaId,
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
                subject: "Feedback ✔", 
                text: `Você acabou de receber uma avaliação com métrica ${rating} que diz: ${descricao}`,
                html: `<p>Para que você acabou de receber uma avaliação da sua última consulta.</p>
                <p>Sua avaliação recebeu a seguinte métrica, avaliado em nível: <b>${rating}</b>.</p>
                <p>Seu paciente deixou um breve comentário sobre o feedback da consulta:</p>
                <p>
                  <b>${descricao}</b>
                </p>
                <p>Este e-mail é de carater apenas informativo, não será exibido no site.</p>
                <p>
                  Obrigado, <br />
                  <strong>Equipe Consultai</strong>
                </p>`
              })
    
            console.log("Message sent: %s", message.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message))
        })
    }
}

export default FeedbacksList