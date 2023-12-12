export default function Layout({ children }) {
  return (
    <div className=" flex flex-col items-center justify-between min-h-screen">
      <h1 className="text-2xl">Header</h1>
      <main className="">{children}</main>
      <h1 className="text-2xl">Footer</h1>
    </div>
  );
}
