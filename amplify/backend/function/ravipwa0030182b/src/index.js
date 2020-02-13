
/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiRavipwaGraphQLAPIIdOutput = process.env.API_RAVIPWA_GRAPHQLAPIIDOUTPUT
var apiRavipwaGraphQLAPIEndpointOutput = process.env.API_RAVIPWA_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */
const webpush= require('web-push')
const appsync = require("aws-appsync");
const gql = require("graphql-tag");
require("cross-fetch/polyfill");

const graphqlClient = new appsync.AWSAppSyncClient({
  url: "https://fwku7c23fneqzmlbt4ewjvolgi.appsync-api.us-east-1.amazonaws.com/graphql",
  region: "us-east-1",
  auth: {
    type: "API_KEY",
    apiKey: "da2-jkg5z6y4rneofjqpaf7eyski7m"
  },
  disableOffline: true
});

const listBrowserSubs = gql`query ListBrowserSubs(
  $filter: ModelBrowserSubFilterInput
  $limit: Int
  $nextToken: String
) {
  listBrowserSubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      endpoint
      expirationTime
      keys {
        auth
        p256dh
      }
    }
    nextToken
  }
}`;


exports.handler = async (event, context) => {
  

    const subList = await graphqlClient.query({query:listBrowserSubs, 
      variables: {
        limit: 100
      }
    })

    for(let i=0;i<= subList.data.listBrowserSubs.items.length;i++ ){

      webpush.setVapidDetails('mailto:ravimaddi18@gmail.com', 'BGg3eXwdO3uWdEEwmkVA5zG4hNcfKMWr1YblaEQDsamYG27m-GB3OUkNhqC_PzXKA1U4v-3518i9URJVmr64Llg', 'zDuI6UauoN9vJhfrsx8e40m7XgOw8GZCIJD92L7rfiw');
      var pushConfig = {
       endpoint: subList.data.listBrowserSubs.items[i].endpoint,
          keys: {
            auth:subList.data.listBrowserSubs.items[i].keys.auth,
            p256dh: subList.data.listBrowserSubs.items[i].keys.p256dh
          }
      
        }
        try{
        const res=await webpush.sendNotification(pushConfig, JSON.stringify({
         message:'hello world'
        }))
        console.log(res)
      }catch(err){
        console.log('err',res)
      }
       
       
     
    }

    return 'working'
   
  }
    

