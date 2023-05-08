import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover the Power of
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> AI Prompts</span>
    </h1>
    <p className="desc text-center">
      Promptly is the ultimate destination for AI enthusiasts to discover,
      create and share prompts. With a vast collection of prompts and a vibrant
      community of users, Promptly is the perfect place to unleash your
      creativity and explore the world of AI prompts.
    </p>

    <Feed />
  </section>
);

export default Home;
