exports.config = {
    /* 
     *Configuration for using this application. For the api endpoints just update the protocol and host name and port(if required)
     */
    reciter: {
        /*
         * Admin api key to access all the reciter endpoint. If you did not setup security in your reciter APIs then leave it empty.
         */ 
        adminApiKey: 'Adm1n!',
        /**
         * This is where you specify all the Identity endpoints in reciter. Please refer to the Identity controller in swagger-ui for all the related
         * Identity endpoints.
         */
        reciterIdentityEndpoints: {
            /**
             * This endpoint get Identity based on supplied unique id.
             */
            identityByUid: 'http://iu-reciter.us-east-2.elasticbeanstalk.com/reciter/find/identity/by/uid',
            /**
             * This endpoint get all identity listed in your database. This API consumes significant resources when making a call.
             * So when in /search page refrain from refreshing the page since that entails a fresh api call.
             */
            getAllIdentity: 'http://iu-reciter.us-east-2.elasticbeanstalk.com/reciter/find/all/identity',
            /**
             * This is the image that is shown in the search page and the Individual page. If you have an api that serves image for each of your identity
             * then specify it here. Otherwise if its blank it uses a stock image specified.
             */
            identityImageEndpoint: 'https://directory.medicine.iu.edu/api/v1/person/profile/${uid}.png?returnGenericOn404=true'
        },
        /**
         * This is the api to fetch all the publication related to an individual with all the eivdence.
         */
        featureGenerator: {
            featureGeneratorEndpoint: 'http://iu-reciter.us-east-2.elasticbeanstalk.com/reciter/feature-generator/by/uid',
            featutreGeneratorApiParams: {
                /**
                 * This is the minimum score that the publication will be filtered on.
                 * Type: Number
                 */
                totalStandardizedArticleScore: 4,
                /**
                 * ReCiter runs on Training mode and As evidence mode. Select appropriately since AS_EVIDENCE mode stores the data the rerteival will be faster.
                 * Run on training mode to test some users.
                 * Type: Srting
                 */
                useGoldStandard: 'AS_EVIDENCE',
                /**
                 * This flag specifies if reciter will re-compute suggestions. Use if you want to re-compute. This will take more time and resources.
                 * Type: Boolean
                 */
                analysisRefreshFlag: false,
                /**
                 * This flag specifies if reciter will re-retrieve all publication from upstream sources. Specify to refresh all retrieval.
                 * Type: String
                 */
                retrievalRefreshFlag: 'FALSE',
                /**
                 * This flag filters on feedback.
                 * Type: String
                 */
                filterByFeedback: 'ALL'
            }
        },
        /**
         * This is the endpoint in ReCiter-Publication-Manager controller for authentication.
         */
        reciterPubManagerAuthenticationEndpoint: 'http://iu-reciter.us-east-2.elasticbeanstalk.com/reciter/publication/manager/authenticate',
        /**
         * This endpoint is to update the feedback for users.
         */
        reciterUpdateGoldStandardEndpoint: 'http://iu-reciter.us-east-2.elasticbeanstalk.com/reciter/goldstandard',
        /**
         * This endpoints serves to do CRUD on user feedback. This is used to track the publication feedback in the application. When refreshed
         * the feedback is erased from the database.
         */
        reciterUserFeedbackEndpoints: {
            saveUserFeedback: 'http://iu-reciter.us-east-2.elasticbeanstalk.com/reciter/publication/manager/userfeedback/save',
            deleteUserFeedback: 'http://iu-reciter.us-east-2.elasticbeanstalk.com/reciter/publication/manager/userfeedback/delete',
            findUserFeedback: 'http://iu-reciter.us-east-2.elasticbeanstalk.com/reciter/publication/manager/userfeedback/find'
        }
    },
    /**
     * This endpoint is used to search pubmed. You need to have ReCiter-Pubmed-Retrieval tool conifgured. See https://github.com/wcmc-its/ReCiter-PubMed-Retrieval-Tool.git
     * for details.
     */
    reciterPubmed: {
        searchPubmedEndpoint: 'http://iu-reciter-pubmed.us-east-2.elasticbeanstalk.com/pubmed/query-complex/',
        searchPubmedCountEndpoint: 'http://iu-reciter-pubmed.us-east-2.elasticbeanstalk.com/pubmed/query-number-pubmed-articles/'
    },
    /**
     * ReCiter-Publication-Manager uses Json web token for session management and validating a valid sesssion. This secret will be used to sign the web token.
     * Make sure its a good secret with good mix of alpha numeric characters.
     */
    tokenSecret: 'rlmlNumber5isalive!'
}
