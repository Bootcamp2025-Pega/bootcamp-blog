import prisma from '../../../lib/prisma';

// PUT /api/publish/:id
export default async function handle(req, res) {
  const { url } = req.query;
  try {
    // Make a GET request to the provided URL
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Something went wrong...");
    }
  } catch (error) {
    console.error(error);
  }
  const postId = req.query.id;
  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true },
  });
  res.json(post);

  
}