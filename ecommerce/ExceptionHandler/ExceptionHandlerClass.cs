using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace ecommerce.ExceptionHandler
{
    public class ExceptionHandlerClass
    {
        private readonly RequestDelegate next;
        private readonly ILogger<ExceptionHandlerClass> logger;
        private readonly IHostEnvironment env;
        public ExceptionHandlerClass(RequestDelegate next, ILogger<ExceptionHandlerClass> logger, IHostEnvironment env)
        {
            this.env = env;
            this.logger = logger;
            this.next = next;   
        }
        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                logger.LogError(ex,ex.Message);
                context.Response.ContentType="application/json";
                context.Response.StatusCode=500;
                var response= new ProblemDetails
                {
                    Status=500,
                    Detail=env.IsDevelopment()? ex.StackTrace?.ToString():null,
                    Title= ex.Message
                };
                var options= new JsonSerializerOptions{PropertyNamingPolicy=JsonNamingPolicy.CamelCase};
                var json = JsonSerializer.Serialize(response,options);
                await context.Response.WriteAsync(json);
            }
        }
    }
}