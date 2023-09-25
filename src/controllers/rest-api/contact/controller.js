/*
  Controller for the /contact REST API endpoints.
*/

/* eslint-disable no-useless-escape */
import ContactLib from '../../../adapters/contact.js'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const contactLib = new ContactLib()

let _this

class ContactController {
  constructor () {
    _this = this
    _this.contactLib = contactLib
  }

  /**
   * @api {post} /contact/email Send Email
   * @apiName SendMail
   * @apiGroup Contact
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -X POST -d '{ "obj": { "email": "email@format.com", "formMessage": "a message" } }' localhost:5001/contact/email
   *
   * @apiParam {Object} obj           object (required)
   * @apiParam {String} obj.email Sender Email.
   * @apiParam {String} obj.formMessage Message.
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *
   *        success:true
   *
   *     }
   *
   * @apiError UnprocessableEntity Missing required parameters
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 422 Unprocessable Entity
   *     {
   *       "status": 422,
   *       "error": "Unprocessable Entity"
   *     }
   */
  async email (ctx) {
    try {
      const data = ctx.request.body
      const emailObj = data.obj
      await _this.contactLib.sendEmail(emailObj)

      ctx.body = {
        success: true
      }
    } catch (err) {
      _this.handleError(ctx, err)
    }
  }

  // DRY error handler
  handleError (ctx, err) {
    // If an HTTP status is specified by the buisiness logic, use that.
    if (err.status) {
      if (err.message) {
        ctx.throw(err.status, err.message)
      } else {
        ctx.throw(err.status)
      }
    } else {
      // By default use a 422 error if the HTTP status is not specified.
      ctx.throw(422, err.message)
    }
  }
}
export default ContactController
