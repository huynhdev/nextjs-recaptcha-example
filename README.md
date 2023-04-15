## Getting Started

Install packages
```bash
yarn install
```

Config .env for next-auth
```
NEXTAUTH_URL="leave it as your nextjs url or custom server"
```

Config .env for authentication: the information get from our exported API project
```
NEXT_APP_CLIENT_ID=''
NEXT_APP_CLIENT_SECRET=''
```

Run on your local
```bash
npm run dev
# or
yarn dev
```

Buil production
```bash
// Please turn off ignoreBuildErrors and ignoreDuringBuilds when build project at next.config.js
typescript: {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: false,
}
eslint: {
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  ignoreDuringBuilds: false,
},

yarn build
```

## Structure

```
src
   → assets (not sure but the bridge to get assets ⇒ import { assets } from ‘@asses/index’ ⇒ assets(’name of asset’)
   → pages
   → components
       → atoms
       → molecules
           → AppButton
               → AppButton
               → AppButton.style
       → organisms
       → pages
           → Home
               → Home
               → Home.style (generate style code here)
   → constants
   → models
   → states
   → services
   → utils
```

## Guildline

### 1. Navigation

For client side, supported navigation function over services/navigate
```javascript
import { useNavigateService } from '@services/navigate'

const navigation = useNavigateService()
navigation.push()
navigation.replace()
navigation.goBack()
navigation.reload()
```

For server side
```javascript
// nextjs navigation in server side
import { NextPageContext } from 'next'

export async function getServerSideProps(context: NextPageContext) {
  const { locale = "en", query } = context;
  const options: {
    props?: Record<string, unknown>;
    redirect?: {
      destination: string;
      permanent: boolean;
    };
  } = {
    props: {
      locale,
      query,
    },
  };

  // Redirect to login page if user is not authenticated
  if (!context.req.headers.cookie) {
    options.redirect = {
      destination: "/login",
      permanent: false,
    };
  }

  return options;
}
```
### 2. Service 
Service support function based on business model

How to use service for fetch data from client side
```javascript
// Define state for query params
const [filterPostParams, setFilterPostParams] = useState<Partial<FilterPostRequestBody>>({ 
  pagination_page: props.query?.page_number, 
  pagination_limit: props.query?.page_limit
})

// Define query service and pass params to it. 
const filterPostQuery = useFilterPostQuery(filterPostParams)
// State of Query can be get over "filterPostQuery"
// filterPostQuery.loading
// filterPostQuery.error
// filterPostQuery.data


// Define action for queries change to trigger refetch data if needed
const handleQueryChange = (newQuery: Partial<FilterPostRequestBody>) => {
  setFilterPostParams(newQuery)
}

```

How to use service for fetch data from server side
```javascript
// pages/post/index.tsx

// Import server side service
import { fetchFilterPost } from '@services/post'

// Define getServerSideProps  to get data from server side
export async function getServerSideProps(context: NextPageContext) {
  const { locale = "en", query } = context;
  const options: {
    props?: Record<string, unknown>;
    redirect?: Record<string, unknown>;
  } = {};
  const { session, queryClient } = await initServerInfo(context);  

  try {
    await fetchFilterPost(queryClient, { pagination_page: query?.page_number, pagination_limit: query?.page_limit});
  } catch (err) { 
  return {
    redirect: { destination: `/500`, permanent: false }
  }  
}        
```


How to use service for mutation data
```javascript
// Define mutation service
const createPostMutation = useCreatePostMutation();

// Call mutation 
const handleCreatePost = async (data: PostData) => {
  try {
    const response = await createPostMutation.mutateAsync(data);
  } catch (e: unknown) {}
};
// State of mutation can be get over "createPostMutation"
// createPostMutation.loading
// createPostMutation.error
// createPostMutation.data
```

### 3. Form
Define a hook with yup schema and react-hook-form outside component

```javascript
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const useLoginForm = () => {
  const validationScheme = useMemo(
    () =>
      yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
      }),
    []
  )
  return useForm<Form1FormData>({
    resolver: yupResolver(validationScheme),
    shouldFocusError: true,
    mode: 'onChange',
    reValidateMode: 'onChange'
  })
}
```

Use hook inside component

```javascript
const { register, handleSubmit, errors, control } = useLoginForm()
```


### 5. Error Handling
For server side error handling
```javascript
export async function getServerSideProps(context: NextPageContext) {
  const { locale = "en", query } = context;
  const options: {
    props?: Record<string, unknown>;
    redirect?: Record<string, unknown>;
  } = {};
  const { session, queryClient } = await initServerInfo(context);  

  try {
    await fetchFilterPost(queryClient, { pagination_page: query?.page_number, pagination_limit: query?.page_limit});
  } catch (err) { 
  return {
    redirect: { destination: `/500`, permanent: false }
  }  
}        
```

For client side error handling
```javascript
const { data, error } = useFilterPostQuery(filterPostParams)

if (error) {
  return <ErrorPage statusCode={500} />
}

```


### 4. Authentication
[Authentication with NextAuth](./docs/authentication.md)

## Deployment

### Vercel

[Vercel Deployment](./docs/vercel-deployment.md)

## Environment Variable

| Key                                | Data Type | Example Value                                 | Description                                                                 |
|------------------------------------|-----------|-----------------------------------------------|-----------------------------------------------------------------------------|
| NEXT_PUBLIC_ACCESS_TOKEN_THRESHOLD | number    | 120000                                        | How long access token will be expired in milliseconds.                      |
| NEXT_APP_CLIENT_ID                      | string    | randomstring                                  | Obtained from backend configuration.                                        |
| NEXT_APP_CLIENT_SECRET                  | string    | randomstring                                  | Obtained from backend configuration.                                        |
| NEXT_PUBLIC_API_URL                | string    | https://api-68.review.staging.jitera.app      | API URL                                                                     |
| NEXTAUTH_URL                       | string    | https://frontend-68.review.staging.jitera.app | Canonical URL of the site.                                                  |
| NEXTAUTH_SECRET                    | string    | secret                                        | Used to encrypt the NextAuth.js JWT, and to hash email verification tokens. |
