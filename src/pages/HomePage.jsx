import Form from "../components/Form";
import List from "../components/List";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-4 bg-white p-4 rounded-md">
      <Form />
      <List />
    </section>
  );
}
