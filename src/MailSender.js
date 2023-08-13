const nodemailer = require('nodemailer')

class MailSender {
  constructor () {
    this._transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD
      }
    })
  }

  sendMail (targetEmail, playlistId, playlistName, content) {
    const message = {
      from: 'Open Music Apps',
      to: targetEmail,
      subject: `Ekspor Playlist ${playlistName}`,
      text: `Terlampir hasil dari ekspor playlist ${playlistName}`,
      attachments: [
        {
          filename: `${playlistId}.json`,
          content
        }
      ]
    }

    return this._transporter.sendMail(message)
  }
}

module.exports = MailSender
