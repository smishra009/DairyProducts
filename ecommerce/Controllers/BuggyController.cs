using Microsoft.AspNetCore.Mvc;
using MySqlX.XDevAPI.Common;

namespace ecommerce.Controllers
{
    public class BuggyController: BasicApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }
        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest();
        }
        [HttpGet("unathorized")]
        public ActionResult GetUnauthorized()
        {
            return Unauthorized();
        }
        [HttpGet("validation")]
        public ActionResult GetValidation()
        {
            ModelState.AddModelError("Problem 1","This is a Problem1 error");
            ModelState.AddModelError("Problem 2","This is a Problem2 error");
            return ValidationProblem();
        }
        [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
            throw new Exception("This is a server error");
        }
    }
}