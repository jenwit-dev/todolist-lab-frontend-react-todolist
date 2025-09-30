export default function RegisterPage() {
  return (
    <section className="flex flex-col gap-4 bg-white p-4 rounded-md">
      <div>
        <label className="block mb-1 font-semibold">Username</label>
        <input
          type="text"
          className="w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Password</label>
        <input
          type="text"
          className="w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Confirm Password</label>
        <input
          type="text"
          className="w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button className="bg-blue-500 px-3 py-1.5 text-white rounded-md hover:cursor-pointer hover:bg-blue-900 transition">
        Sign Up
      </button>
    </section>
  );
}
