import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl md:text-4xl mb-4">Contact Me</h1>
        <form action="https://formspree.io/f/xpwqvwbv" method="POST" className="max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea id="message" name="message" className="w-full p-2 border rounded" rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
}