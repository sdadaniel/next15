export default async function Page() {
  const posts = await getData;
  return (
    <ul>
      {posts.map((post: { id: number; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

const getData: Promise<Post[]> = new Promise((resolve) => {
  setTimeout(() => {
    // reject("ㅁㅁ")
    resolve([
      { id: 1, title: "p1" },
      { id: 2, title: "p2" },
    ]);
  }, 1000);
});

interface Post {
  id: number;
  title: string;
}
