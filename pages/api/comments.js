import { gql, GraphQLClient } from 'graphql-request'

const graphApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const token = process.env.GRAPHCMS_TOKEN
export default async function handler(req, res) {
    const graphQLClient = new GraphQLClient(graphApi, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    })

    const query = gql`
    mutation createComment(
      $name: String!, $email: String!, $comment: String!, $slug: String!
    ) {
      createComment(
        data: {
          name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `
    try {
        const result = await graphQLClient.request(query, req.body)
        return res.status(200).send(result)
    } catch (error) {
        console.log(error)
    }
}
