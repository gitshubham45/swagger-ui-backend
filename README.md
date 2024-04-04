
# Running the Project Locally

```bash
# 1. Clone the Repository
git clone https://github.com/gitshubham45/swagger-ui-backend.git

# 2. Install Dependencies
cd swagger-ui-backend
npm install

# 3. Set Up Environment Variables
# Ensure that you have the necessary environment variables set up.
# Create a `.env` file in the project root directory and add your secret keys or configuration values.


#  PORT - <port number of your choice>

#  MONGO_URI= mongodb+srv://<username>:<passsword>@<clusterName>.zdtax2o.mongodb.net/<collectionName>?authSource=admin&replicaSet=atlas-aorc75-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true

# JWT_SECRET= <any string of your choice>

# 4. Start the Development Server
npm start

# 5. Go to Local https://localhost:3000/api-docs 

i.) Create user by sign-up.
 i.) After sign-up ,login user with same email and password , you will get a token in response.
 ii) Put that token by using Authorize button provided by swagger-ui and click on authorize , after this you can use protected endpoint /api/secret/ . 
 iii) Now try testing other endpoints by providing the required data.


