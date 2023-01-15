export const lambdaResponse = (body: any, status = 200) => ({
    statusCode: status,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
});
