module.exports.handler = async (event) => {
    console.log('Event: ', event);
    let responseMessage = 'Bye, World!';
  
    if (event.queryStringParameters && event.queryStringParameters['Name']) {
      responseMessage = 'Bye, ' + event.queryStringParameters['Name'] + '!';
    }
  
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: responseMessage,
      }),
    }
  }